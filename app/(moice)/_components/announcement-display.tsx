"use client";
import { useEffect, useState, Suspense, lazy } from "react";
import Image from "next/image";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	CardFooter,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { CalendarIcon } from "lucide-react";
import { formatDateTime } from "@/lib/utils";
import { UploadAnnouncement } from "@/types/ministry";
import { getAnnouncements } from "@/backend/actions/announcement.action";
import AnnouncementView from "@/app/(moice)/_components/announcement-view";
const PaginationComponent = lazy(
	() => import("@/components/shared/pagination")
);

const AnnouncementDisplay = () => {
	const [announcements, setAnnouncements] = useState<UploadAnnouncement[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [currentPage, setCurrentPage] = useState(1);

	useEffect(() => {
		const fetchAnnouncements = async () => {
			try {
				const fetchedAnnouncements = await getAnnouncements();
				setAnnouncements(fetchedAnnouncements);
			} catch (error) {
				console.error("Error fetching documents:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchAnnouncements();
	}, []);

	const itemsPerPage = 2;
	const totalPages = Math.ceil(announcements.length / itemsPerPage);

	const paginatedAnnouncements = announcements.slice(
		(currentPage - 1) * itemsPerPage,
		currentPage * itemsPerPage
	);

	if (loading) {
		return (
			<section className='w-full py-8'>
				<div className='container mx-auto px-4 max-w-7xl'>
					<div className='text-center mb-12 space-y-3'>
						<h2 className='text-2xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent'>
							Latest Posts & Announcements
						</h2>
						<p className='text-foreground text-lg max-w-2xl mx-auto'>
							Stay updated with our recent news and important updates
						</p>
					</div>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
						{Array.from({ length: itemsPerPage }).map((_, index) => (
							<Card
								key={index}
								className='group shadow-lg hover:shadow-2xl transition-all duration-300 border-2 overflow-hidden'
							>
								<CardHeader className='pb-3 space-y-4 bg-gradient-to-br from-purple-50 to-orange-50 dark:from-purple-950/20 dark:to-orange-950/20'>
									<div className='flex items-center gap-2'>
										<Skeleton className='h-5 w-5 rounded-full' />
										<Skeleton className='h-4 w-36' />
									</div>
									<Skeleton className='h-9 w-3/4' />
								</CardHeader>
								<CardContent className='space-y-3 pt-6'>
									<Skeleton className='h-4 w-full' />
									<Skeleton className='h-4 w-5/6' />
								</CardContent>
								<CardFooter className='pt-4 pb-6'>
									<Skeleton className='aspect-video w-full rounded-lg' />
								</CardFooter>
							</Card>
						))}
					</div>
				</div>
			</section>
		);
	}

	return (
		<section className='w-full py-10'>
			<div className='container mx-auto px-4 max-w-7xl'>
				<div className='text-center mb-12 space-y-3'>
					<h2 className='text-5xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent'>
						Latest Posts & Announcements
					</h2>
					<p className='text-foreground font-bold text-xl max-w-2xl mx-auto capitalize'>
						Stay updated with our recent news and important updates
					</p>
					<div className='h-1 md:h-1.5 bg-gradient-to-r from-transparent via-yellow-500 to-transparent w-48 sm:w-64 mx-auto rounded-full mb-4 md:mb-6' />
				</div>
				{announcements.length === 0 ? (
					<Card className='border-2 shadow-lg'>
						<CardContent className='flex flex-col items-center justify-center p-8 text-center'>
							<div className='w-24 h-24 rounded-full bg-muted flex items-center justify-center mb-3'>
								<CalendarIcon className='w-12 h-12 text-muted-foreground' />
							</div>
							<p className='text-xl font-semibold text-foreground mb-2'>
								No announcements yet
							</p>
							<p className='text-foreground capitalize'>
								Check back soon for new updates and announcements
							</p>
						</CardContent>
					</Card>
				) : (
					<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
						{paginatedAnnouncements.map((announcement) => (
							<Card
								key={announcement.id}
								className='group shadow-lg hover:shadow-2xl transition-all duration-300 border-2 hover:border-purple-300 dark:hover:border-purple-700 overflow-hidden flex flex-col'
							>
								<div className='flex-1'>
									<CardHeader className='pb-0'>
										<div className='flex items-center text-sm font-medium text-foreground mb-1'>
											<div className='flex items-center gap-2 bg-background/80 backdrop-blur-sm px-3 py-3 rounded-none border'>
												<CalendarIcon className='h-4 w-4 text-purple-600' />
												<span className='text-foreground font-bold'>
													Posted:
												</span>
												<span className='text-green-500 font-extrabold text-[18px]'>
													{formatDateTime(announcement.created_at)}
												</span>
											</div>
										</div>
										<CardTitle className='text-[20px] font-bold'>
											<span className='inline-block border-b-2 border-amber-500'>
												{announcement.title}
											</span>
										</CardTitle>
									</CardHeader>
									<CardContent className='pt-1 space-y-1'>
										<p className='text-foreground leading-relaxed line-clamp-3 text-justify text-[18px]'>
											{(announcement.description || "").replace(/\*/g, "")}
										</p>

										{announcement.image_path && (
											<div className='relative aspect-video w-full overflow-hidden rounded-lg border-2 border-muted border-purple-300 transition-all duration-300'>
												<Image
													src={announcement.image_path}
													alt={announcement.title}
													width={900}
													height={600}
													className='object-cover group-hover:scale-105 transition-transform duration-300'
													loading='lazy'
													sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px'
												/>
											</div>
										)}
									</CardContent>
								</div>

								<CardFooter className='mt-auto pt-1 pb-1'>
									<Suspense
										fallback={<Skeleton className='h-12 w-full rounded-lg' />}
									>
										<AnnouncementView
											announcementId={announcement.id.toString()}
											fileUrl={
												announcement.image_path ??
												announcement.announcement_path ??
												undefined
											}
											fileType={announcement.fileType}
											title={announcement.title}
											description={announcement.description || ""}
										/>
									</Suspense>
								</CardFooter>
							</Card>
						))}
					</div>
				)}
				{announcements.length > 0 && (
					<div className='mt-12'>
						<Suspense
							fallback={<Skeleton className='h-14 w-full rounded-lg' />}
						>
							<PaginationComponent
								currentPage={currentPage}
								totalPages={totalPages}
								onPageChange={setCurrentPage}
							/>
						</Suspense>
					</div>
				)}
			</div>
		</section>
	);
};

export default AnnouncementDisplay;
