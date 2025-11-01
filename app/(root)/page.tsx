"use client";

import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import GlowCard from "@/components/shared/glow-card";
import Stats from "@/components/jobs/stats";
import CCAA from "@/app/(root)/publications/_components/ccaa/ccaa";
import { publicationCategories } from "@/constants/publications/ccaa";
import SisterSites from "@/components/shared/sister-sites";
import Footer from "@/components/footer";
import DoE from "@/app/(root)/publications/_components/doe/doe";
import DoL from "@/app/(root)/publications/_components/dol/dol";
import { doeeCategories } from "@/constants/publications/doee";
import { dolCategories } from "@/constants/publications/dol";
import DoT from "@/app/(root)/publications/_components/dot/dot";
import { dotCategories } from "@/constants/publications/trade";
import AnnouncementDisplay from "@/app/(moice)/_components/announcement-display";
import HeroDisplay from "@/app/(moice)/_components/hero-display";

const Publications = () => {
	const tabs = [
		{ id: "ccaa", label: "Competition and Consumer Affairs Authority" },
		{ id: "dol", label: "Department of Labour" },
		{ id: "doee", label: "Department of Employment and Entrepreneurship" },
		{ id: "dot", label: "Department of Trade" },
	];

	return (
		<div>
			<HeroDisplay />
			<div className='mt-2'>
				<AnnouncementDisplay />
			</div>
			<Stats />
			<div className='text-center mb-12'>
				<h1 className='text-4xl font-bold text-foreground mb-4'>
					Ministry's Publication
				</h1>
				<p className='text-sm text-amber-500 uppercase'>
					Browse and download our collection of reports and documents
				</p>
			</div>
			<div className='min-h-screen p-4 md:p-3'>
				<Tabs defaultValue='dol' className='w-full'>
					<TabsList className='w-full h-auto flex-wrap justify-start gap-2 bg-transparent p-0 mb-8'>
						{tabs.map((tab) => (
							<GlowCard className='p-2 flex flex-col relative overflow-hidden hover:border-primary/50 transition-colors'>
								<TabsTrigger
									key={tab.id}
									value={tab.id}
									className='px-3 py-2 md:px-4 md:py-2.5 text-sm md:text-base font-medium'
								>
									<span className='hidden sm:inline text-amber-500 font-extrabold uppercase'>
										{tab.label}
									</span>
									<span className='sm:hidden'>
										{tab.id === "ccaa" && "CCAA"}
										{tab.id === "dol" && "Labour"}
										{tab.id === "doee" && "Employment"}
										{tab.id === "doi" && "Industry"}
										{tab.id === "dot" && "Trade"}
									</span>
								</TabsTrigger>
							</GlowCard>
						))}
					</TabsList>
					<div className='h-1 md:h-1.5 bg-gradient-to-r from-transparent via-yellow-500 to-transparent w-48 sm:w-64 mx-auto rounded-full mb-1 md:mb-2' />

					{tabs.map((tab) => (
						<TabsContent
							key={tab.id}
							value={tab.id}
							className='animate-in fade-in duration-300'
						>
							<div className='text-center mb-4'>
								<h2 className='text-3xl font-bold text-foreground mb-1'>
									{tab.label}
								</h2>
								<div className='h-1 w-24 bg-amber-500 rounded mx-auto'></div>
							</div>

							<Card className='p-4 md:p-6 shadow-sm'>
								{tab.id === "ccaa" && (
									<CCAA categories={publicationCategories} />
								)}
								{tab.id === "doee" && <DoE categories={doeeCategories} />}
								{tab.id === "dol" && <DoL categories={dolCategories} />}
								{tab.id === "dot" && <DoT categories={dotCategories} />}
							</Card>
						</TabsContent>
					))}
				</Tabs>
			</div>
			<SisterSites />
			<Footer />
		</div>
	);
};

export default Publications;
