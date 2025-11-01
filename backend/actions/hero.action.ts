"use server";

import { revalidatePath } from "next/cache";
import { connectToDatabase } from "@/database/mongoose";
import { heroBannerSchema } from "@/lib/validations";
import { HeroBanner } from "@/backend/model/hero.model";

// Create
export async function createHeroBanner(formData: FormData) {
	try {
		await connectToDatabase();

		const title = formData.get("title") as string;
		const description = formData.get("description") as string;
		const image = formData.get("image") as File;

		// Validate
		heroBannerSchema.parse({ title, description });

		if (!image || image.size === 0) {
			return { success: false, error: "Image is required" };
		}
		const maxSize = 16 * 1024 * 1024;
		if (image.size > maxSize) {
			return { success: false, error: "Image must be less than 16MB" };
		}

		// Convert image to Base64
		const bytes = await image.arrayBuffer();
		const buffer = Buffer.from(bytes);
		const base64Image = buffer.toString("base64");

		// Create banner with Base64 image
		const banner = await HeroBanner.create({
			title,
			description,
			imageData: base64Image,
			imageMimeType: image.type,
		});

		revalidatePath("/");
		return { success: true, data: JSON.parse(JSON.stringify(banner)) };
	} catch (error: any) {
		return { success: false, error: error.message };
	}
}

// Update
export async function updateHeroBanner(id: string, formData: FormData) {
	try {
		await connectToDatabase();

		const title = formData.get("title") as string;
		const description = formData.get("description") as string;
		const image = formData.get("image") as File;

		heroBannerSchema.parse({ title, description });

		const updateData: any = { title, description };

		// If new image uploaded
		if (image && image.size > 0) {
			// Validate image size
			const maxSize = 16 * 1024 * 1024;
			if (image.size > maxSize) {
				return { success: false, error: "Image must be less than 16MB" };
			}

			// Convert to Base64
			const bytes = await image.arrayBuffer();
			const buffer = Buffer.from(bytes);
			const base64Image = buffer.toString("base64");

			updateData.imageData = base64Image;
			updateData.imageMimeType = image.type;
		}

		const banner = await HeroBanner.findByIdAndUpdate(id, updateData, {
			new: true,
		});

		if (!banner) {
			return { success: false, error: "Banner not found" };
		}

		revalidatePath("/");
		return { success: true, data: JSON.parse(JSON.stringify(banner)) };
	} catch (error: any) {
		return { success: false, error: error.message };
	}
}

// Delete
export async function deleteHeroBanner(id: string) {
	try {
		await connectToDatabase();

		const banner = await HeroBanner.findByIdAndDelete(id);

		if (!banner) {
			return { success: false, error: "Banner not found" };
		}

		revalidatePath("/");
		return { success: true };
	} catch (error: any) {
		return { success: false, error: error.message };
	}
}

// Get all banners
export async function getHeroBanners() {
	try {
		await connectToDatabase();
		const banners = await HeroBanner.find().sort({ createdAt: -1 }).lean();
		return { success: true, data: JSON.parse(JSON.stringify(banners)) };
	} catch (error: any) {
		return { success: false, error: error.message };
	}
}
