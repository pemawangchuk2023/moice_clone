"use client";
import Image from "next/image";
import {
	AlertDialog,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
	AlertDialogFooter,
	AlertDialogCancel,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

interface HeroBanner {
	_id: string;
	title: string;
	description: string;
	imageData?: string;
	imageMimeType?: string;
}

interface HeroBannerCardProps {
	banner: HeroBanner;
}

const HeroBannerCard = ({ banner }: HeroBannerCardProps) => {
	const getImageSrc = () =>
		`data:${banner.imageMimeType};base64,${banner.imageData}`;

	const truncateDescription = (text: string, wordLimit: number = 20) => {
		const words = text.split(" ");
		if (words.length <= wordLimit) {
			return { truncated: text, needsReadMore: false };
		}
		return {
			truncated: words.slice(0, wordLimit).join(" ") + "...",
			needsReadMore: true,
		};
	};

	const cleanDescription = (banner.description || "").replace(/\*/g, "");
	const { truncated, needsReadMore } = truncateDescription(cleanDescription);

	return (
		<div className='relative'>
			<div className='relative z-10 text-center mx-auto py-2 px-6'>
				<h1 className='text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-3 leading-tight drop-shadow-[0_0_20px_rgba(59,130,246,0.4)]'>
					{banner.title}
				</h1>

				{/* Image shown in card */}
				<div className='relative w-full h-[55vh] md:h-[60vh] lg:h-[70vh]'>
					{banner.imageData && banner.imageMimeType && (
						<Image
							src={getImageSrc()}
							alt={banner.title}
							fill
							className='object-cover rounded-lg'
							priority
							unoptimized
						/>
					)}
				</div>

				{/* Short description */}
				<div className='text-sm md:text-base mt-3 text-foreground leading-relaxed'>
					<p>{truncated}</p>

					{needsReadMore && (
						<AlertDialog>
							<AlertDialogTrigger asChild>
								<Button
									variant='link'
									className='mt-2 text-xl p-0 h-auto font-semibold text-blue-500 hover:text-blue-600'
								>
									Read more
								</Button>
							</AlertDialogTrigger>

							{/* Dialog with image + description */}
							<AlertDialogContent className='w-full max-h-[85vh] overflow-y-auto'>
								{/* IMAGE inside dialog */}
								{banner.imageData && banner.imageMimeType && (
									<div className='relative w-full h-64 md:h-80 mb-4'>
										<Image
											src={getImageSrc()}
											alt={banner.title}
											fill
											className='object-cover rounded-md'
											unoptimized
										/>
									</div>
								)}

								<AlertDialogHeader>
									<AlertDialogTitle className='text-xl text-amber-500 underline mb-2'>
										{banner.title}
									</AlertDialogTitle>

									<AlertDialogDescription className='text-[17px] text-foreground text-justify'>
										{cleanDescription
											.split(/\n+/)
											.filter((p) => p.trim() !== "")
											.map((para, i) => (
												<p key={i} className='mb-2 last:mb-0'>
													{para}
												</p>
											))}
									</AlertDialogDescription>
								</AlertDialogHeader>

								<AlertDialogFooter>
									<AlertDialogCancel className='text-amber-500 cursor-pointer rounded-none'>
										Close
									</AlertDialogCancel>
								</AlertDialogFooter>
							</AlertDialogContent>
						</AlertDialog>
					)}
				</div>

				{/* Divider line */}
				<div className='h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent w-48 sm:w-64 mx-auto rounded-full my-4' />
			</div>
		</div>
	);
};

export default HeroBannerCard;
