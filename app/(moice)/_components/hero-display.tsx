"use client";

import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { getHeroBanners } from "@/backend/actions/hero.action";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselApi,
} from "@/components/ui/carousel";
import PaginationComponent from "@/components/shared/pagination";
import HeroBannerCard from "@/app/(moice)/_components/hero-banner-card";

interface HeroBanner {
	_id: string;
	title: string;
	description: string;
	imageData?: string;
	imageMimeType?: string;
}

const HeroDisplay = () => {
	const [hero, setHero] = useState<HeroBanner[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [api, setApi] = useState<CarouselApi>();
	const [currentPage, setCurrentPage] = useState(1);

	useEffect(() => {
		const fetchHeroBanners = async () => {
			try {
				const result = await getHeroBanners();
				if (result.success && result.data) {
					setHero(result.data);
				}
			} catch (error) {
				console.error("Error fetching hero banners:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchHeroBanners();
	}, []);

	useEffect(() => {
		if (!api) return;
		api.on("select", () => {
			setCurrentPage(api.selectedScrollSnap() + 1);
		});
	}, [api]);

	const handlePageChange = (page: number) => {
		setCurrentPage(page);
		api?.scrollTo(page - 1);
	};

	const totalPages = hero.length;

	return (
		<section className='w-full'>
			{loading ? (
				<div className='w-full h-[70vh] flex items-center justify-center'>
					<Skeleton className='w-full h-full' />
				</div>
			) : hero.length === 0 ? (
				<div className='text-center py-10'>
					<p className='text-lg text-foreground'>
						No hero banners available at the moment.
					</p>
				</div>
			) : (
				<div className='w-full'>
					{/* Carousel — one hero banner per slide */}
					<Carousel
						setApi={setApi}
						opts={{
							align: "center",
							loop: true,
						}}
						className='w-full overflow-hidden'
					>
						<CarouselContent>
							{hero.map((banner) => (
								<CarouselItem key={banner._id} className='basis-full'>
									<HeroBannerCard banner={banner} />
								</CarouselItem>
							))}
						</CarouselContent>
					</Carousel>

					{/* Pagination below images */}
					<div className='mt-2 flex justify-center'>
						<PaginationComponent
							currentPage={currentPage}
							totalPages={totalPages}
							onPageChange={handlePageChange}
						/>
					</div>
				</div>
			)}
		</section>
	);
};

export default HeroDisplay;
