"use server";

import { writeFile, mkdir, unlink } from "fs/promises";
import { join } from "path";
import { existsSync } from "fs";
import { connectToDatabase } from "@/database/mongoose";
import { cache } from "react";
import { revalidatePath } from "next/cache";
import { UploadAnnouncement } from "@/types/ministry";
import { AnnouncementModel } from "@/backend/model/announcement.model";

// Helper to get file extension
function getFileExtension(filename: string): string {
	const lastDot = filename.lastIndexOf(".");
	return lastDot === -1 ? "" : filename.slice(lastDot + 1).toLowerCase();
}

export async function uploadAnnouncement(formData: FormData) {
	try {
		// Connect to database first
		await connectToDatabase();

		const title = formData.get("title") as string;
		const description = (formData.get("description") as string) || "";
		const announcement = formData.get("announcement") as File | null;
		const image = formData.get("announcementImage") as File | null;

		let announcementPath: string | null = null;
		let imagePath: string | null = null;

		const uploadsDir = join(process.cwd(), "public", "uploads");
		await mkdir(uploadsDir, { recursive: true });

		if (announcement && announcement.size > 0) {
			const buffer = Buffer.from(await announcement.arrayBuffer());
			const timestamp = Date.now();
			const safeName = announcement.name.replace(/\s+/g, "-");
			const fileName = `docs-${timestamp}-${safeName}`;
			const fullPath = join(uploadsDir, fileName);
			await writeFile(fullPath, buffer);
			announcementPath = `/uploads/${fileName}`;
		}

		if (image && image.size > 0) {
			const buffer = Buffer.from(await image.arrayBuffer());
			const timestamp = Date.now();
			const safeName = image.name.replace(/\s+/g, "-");
			const fileName = `img-${timestamp}-${safeName}`;
			const fullPath = join(uploadsDir, fileName);
			await writeFile(fullPath, buffer);
			imagePath = `/uploads/${fileName}`;
		}

		await AnnouncementModel.create({
			title,
			description,
			document_path: announcementPath,
			image_path: imagePath,
		});

		revalidatePath("/");

		return { success: true };
	} catch (error) {
		console.error("Error uploading announcement:", error);
		throw error;
	}
}

export const getAnnouncements = cache(
	async (): Promise<UploadAnnouncement[]> => {
		const start = performance.now();
		await connectToDatabase();
		const announcements = await AnnouncementModel.find().sort({
			created_at: -1,
		});
		const end = performance.now();
		console.log(`[getAnnouncements] Took ${(end - start).toFixed(2)} ms`);

		return announcements.map((ann) => {
			let fileType = "none";
			let fileUrl = "";

			// Check image first, then announcement/document
			if (ann.image_path) {
				fileType = "image";
				fileUrl = ann.image_path;
			} else if (ann.announcement_path) {
				const ext = getFileExtension(ann.announcement_path);
				fileType = ext === "pdf" ? "pdf" : "none";
				fileUrl = ann.announcement_path;
			}
			return {
				id: ann._id.toString(),
				title: ann.title,
				description: ann.description,
				announcement_path: ann.announcement_path,
				image_path: ann.image_path,
				created_at: ann.created_at,
				fileUrl: fileUrl,
				fileType: fileType,
				views: ann.views,
			};
		});
	}
);

export async function incrementAndGetViews(documentId: string) {
	await connectToDatabase();
	const updatedDoc = await AnnouncementModel.findByIdAndUpdate(
		documentId,
		{ $inc: { views: 1 } },
		{ new: true }
	);

	if (!updatedDoc) {
		throw new Error("Document not found");
	}

	return updatedDoc.views;
}

export async function getViewsByAnnouncementId(documentId: string) {
	await connectToDatabase();
	const doc = await AnnouncementModel.findById(documentId);

	if (!doc) {
		throw new Error("Document not found");
	}

	return doc.views;
}

export async function updateAnnouncement(
	id: string,
	formData: FormData
): Promise<{ success: boolean; error?: string }> {
	try {
		await connectToDatabase();
		const title = formData.get("title") as string;
		const description = (formData.get("description") as string) || "";
		const announcement = formData.get("announcement") as File | null;
		const image = formData.get("announcementImage") as File | null;

		const currentDoc = await AnnouncementModel.findById(id);

		if (!currentDoc) {
			return { success: false, error: "Announcement not found" };
		}

		let announcementPath = currentDoc.announcement_path;
		let imagePath = currentDoc.image_path;

		const uploadsDir = join(process.cwd(), "public", "uploads");
		await mkdir(uploadsDir, { recursive: true });

		if (announcement && announcement.size > 0) {
			await deleteOldFile(currentDoc.announcement_path);
			const buffer = Buffer.from(await announcement.arrayBuffer());
			const timestamp = Date.now();
			const safeName = announcement.name.replace(/\s+/g, "-");
			const fileName = `docs-${timestamp}-${safeName}`;
			const fullPath = join(uploadsDir, fileName);
			await writeFile(fullPath, buffer);
			announcementPath = `/uploads/${fileName}`;
		}

		if (image && image.size > 0) {
			await deleteOldFile(currentDoc.image_path);
			const buffer = Buffer.from(await image.arrayBuffer());
			const timestamp = Date.now();
			const safeName = image.name.replace(/\s+/g, "-");
			const fileName = `img-${timestamp}-${safeName}`;
			const fullPath = join(uploadsDir, fileName);
			await writeFile(fullPath, buffer);
			imagePath = `/uploads/${fileName}`;
		}

		await AnnouncementModel.findByIdAndUpdate(id, {
			title,
			description,
			announcement_path: announcementPath,
			image_path: imagePath,
		});

		revalidatePath("/");

		return { success: true };
	} catch (error) {
		console.error("Error updating announcement doc:", error);
		return { success: false, error: "Failed to update announcement document" };
	}
}

export async function deleteAnnouncement(id: string): Promise<{
	success: boolean;
	error?: string;
}> {
	try {
		await connectToDatabase();
		const doc = await AnnouncementModel.findById(id);

		if (!doc) {
			return { success: false, error: "Document not found" };
		}

		await Promise.all([
			deleteOldFile(doc.document_path),
			deleteOldFile(doc.image_path),
		]);

		await AnnouncementModel.findByIdAndDelete(id);

		revalidatePath("/");

		return { success: true };
	} catch (error) {
		console.error("Error deleting document:", error);
		return { success: false, error: "Failed to delete document" };
	}
}

export async function getAnnouncementById(id: string): Promise<{
	success: boolean;
	data?: UploadAnnouncement;
	error?: string;
}> {
	try {
		await connectToDatabase();
		const doc = await AnnouncementModel.findById(id);

		if (!doc) {
			return { success: false, error: "Document not found" };
		}

		return {
			success: true,
			data: {
				id: doc._id.toString(),
				title: doc.title,
				description: doc.description,
				announcement_path: doc.announcement_path,
				image_path: doc.image_path,
				created_at: doc.created_at,
				fileUrl: doc.announcement_path || "",
				fileType: getFileExtension(doc.announcement_path || "pdf"),
				views: doc.views,
			},
		};
	} catch (error) {
		console.error("Error fetching document:", error);
		return { success: false, error: "Failed to fetch document" };
	}
}

async function deleteOldFile(filePath: string | null) {
	if (filePath) {
		try {
			const fullPath = join(process.cwd(), "public", filePath);
			if (existsSync(fullPath)) {
				await unlink(fullPath);
			}
		} catch (error) {
			console.error("Error deleting old file:", error);
		}
	}
}
