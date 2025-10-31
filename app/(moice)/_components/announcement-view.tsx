"use client";

import {
	AlertDialog,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { EyeIcon, FileText, ImageIcon } from "lucide-react";
import {
	getViewsByAnnouncementId,
	incrementAndGetViews,
} from "@/backend/actions/announcement.action";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Preview = dynamic(() => import("@/components/editor/preview"), {
	ssr: false,
	loading: () => <p>Loading preview...</p>,
});

interface AnnouncementViewProps {
	announcementId: string;
	fileUrl?: string;
	fileType: string;
	title: string;
	description: string;
}

const AnnouncementView = ({
	announcementId,
	fileUrl,
	fileType,
	title,
	description,
}: AnnouncementViewProps) => {
	const [totalViews, setTotalViews] = useState<number>(0);

	//1.  Fetch total views on component mount
	useEffect(() => {
		const fetchDocumentViews = async () => {
			try {
				const views = await getViewsByAnnouncementId(announcementId);
				setTotalViews(views);
			} catch (error) {
				console.error("Error fetching announcement views:", error);
			}
		};

		fetchDocumentViews();
	}, [announcementId]);

	// 2. Increment the counts
	const handleReadMoreClick = async () => {
		try {
			const total = await incrementAndGetViews(announcementId);
			setTotalViews(total);

			// If it's a PDF, open in new tab
			if (fileType === "pdf" && fileUrl) {
				window.open(fileUrl, "_blank");
			}
		} catch (error) {
			console.error("Error incrementing views:", error);
		}
	};

	const renderAnnouncementContent = () => (
		<div className='space-y-4'>
			<h3 className='text-[18px] font-semibold border py-3 px-5 bg-amber-200 dark:text-black'>
				{title}
			</h3>

			{/* Show image if fileType is image */}
			{fileType === "image" && fileUrl && (
				<div className='relative w-full aspect-video overflow-hidden rounded-lg border-2'>
					<Image
						src={fileUrl}
						alt={title}
						fill
						className='object-contain'
						sizes='90vw'
					/>
				</div>
			)}

			<div className='text-justify text-[14px]'>
				<Preview content={description} />
			</div>
		</div>
	);

	// Determine button text and icon based on file type
	const getButtonContent = () => {
		if (fileType === "pdf") {
			return (
				<>
					<FileText className='w-4 h-4 mr-2' />
					<span>Read More</span>
				</>
			);
		}
		return (
			<>
				<ImageIcon className='w-4 h-4 mr-2' />
				<span>View Image</span>
			</>
		);
	};

	// Check if there's any actual file content (image or pdf)
	const hasFileContent =
		fileUrl &&
		fileUrl.trim() !== "" &&
		(fileType === "image" || fileType === "pdf");

	// If no file content and description is short, don't show read more button
	const descriptionLength = description?.length || 0;
	const isShortDescription = descriptionLength < 200;

	// If no file and short description, only show views
	if (!hasFileContent && isShortDescription) {
		return (
			<div className='flex items-center justify-end gap-3 max-sm:w-full'>
				<div className='flex items-center px-4 py-4  border rounded-none'>
					<div className='flex items-center gap-2 text-sm font-medium'>
						<EyeIcon size={25} className='text-foreground' />
						<p className='text-foreground'>
							Total Views:{" "}
							<strong className='text-foreground'>{totalViews}</strong>
						</p>
					</div>
				</div>
			</div>
		);
	}

	// For PDF files, just use a button
	if (fileType === "pdf") {
		return (
			<div className='flex items-center justify-end gap-3 max-sm:w-full'>
				<Button
					onClick={handleReadMoreClick}
					className='rounded-none'
					variant='destructive'
					size='lg'
				>
					<span className='cursor-pointer flex items-center'>
						{getButtonContent()}
					</span>
				</Button>
				<div className='flex items-center px-4 py-4 shadow-sm border rounded-none'>
					<div className='flex items-center gap-2 text-sm font-medium'>
						<EyeIcon size={25} className='text-foreground' />
						<p className='text-foreground'>
							Total Views:{" "}
							<strong className='text-foreground'>{totalViews}</strong>
						</p>
					</div>
				</div>
			</div>
		);
	}

	// For images or long text without files, use AlertDialog
	return (
		<div className='flex items-center justify-end gap-3 max-sm:w-full'>
			<AlertDialog>
				<AlertDialogTrigger asChild>
					<Button
						onClick={handleReadMoreClick}
						className='rounded-none'
						variant='destructive'
						size='lg'
					>
						<span className='cursor-pointer flex items-center'>
							{hasFileContent ? (
								getButtonContent()
							) : (
								<>
									<FileText className='w-4 h-4 mr-2' />
									<span>Read More</span>
								</>
							)}
						</span>
					</Button>
				</AlertDialogTrigger>
				<AlertDialogContent className='w-full max-w-[90vw] sm:max-w-[95vw] max-h-[90vh] p-4 sm:p-6 flex flex-col'>
					<AlertDialogHeader>
						<AlertDialogTitle className='text-[18px] w-fit inline-block border-b-8 border-red-500'>
							Announcement
						</AlertDialogTitle>
					</AlertDialogHeader>
					<div className='flex-1 overflow-auto text-foreground'>
						{renderAnnouncementContent()}
					</div>
					<AlertDialogFooter className='flex items-center justify-between'>
						<AlertDialogCancel className='cursor-pointer rounded-none px-6 py-4 border border-border text-sm'>
							Close
						</AlertDialogCancel>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>
			<div className='flex items-center px-4 py-3.5 shadow-sm border rounded-none'>
				<div className='flex items-center gap-2 text-sm font-medium'>
					<EyeIcon size={25} className='text-foreground' />
					<p className='text-foreground text-[14px]'>
						Total Views:{" "}
						<strong className='text-foreground'>{totalViews}</strong>
					</p>
				</div>
			</div>
		</div>
	);
};

export default AnnouncementView;
