"use client";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { getHeroBanners } from "@/backend/actions/hero.action";
import Image from "next/image";

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

	const getImageSrc = (banner: HeroBanner) =>
		`data:${banner.imageMimeType};base64,${banner.imageData}`;

	return (
		<section className='w-full'>
			{loading ? (
				<div className='w-full h-[70vh] flex items-center justify-center'>
					<Skeleton className='w-full h-full' />
				</div>
			) : hero.length === 0 ? (
				<div className='text-center py-20'>
					<p className='text-lg text-muted-foreground'>
						No hero banners available at the moment.
					</p>
				</div>
			) : (
				hero.map((banner) => (
					<div key={banner._id} className='w-full'>
						{/* Text content ABOVE image */}
						<div className='relative z-10 max-w-3xl text-center mx-auto py-2 px-6'>
							<h1 className='text-4xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6 leading-tight drop-shadow-[0_0_25px_rgba(59,130,246,0.5)]'>
								{banner.title}
							</h1>
							<p className='text-base md:text-lg text-foreground leading-relaxed'>
								{(banner.description || "").replace(/\*/g, "")}
							</p>
							<div className='h-1 md:h-1.5 bg-gradient-to-r from-transparent via-yellow-500 to-transparent w-48 sm:w-64 mx-auto rounded-full mb-4 md:mb-6' />
						</div>

						{/* Image below text */}
						<div className='relative w-full h-[70vh] md:h-[80vh] overflow-hidden'>
							{banner.imageData && banner.imageMimeType && (
								<Image
									src={getImageSrc(banner)}
									alt={banner.title}
									fill
									className='object-cover'
									priority
									unoptimized
								/>
							)}
							{/* Overlay gradient (optional for depth) */}
							<div className='absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent' />
						</div>
					</div>
				))
			)}
		</section>
	);
};

export default HeroDisplay;
