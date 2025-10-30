"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { ministryServices } from "@/constants/jobs";
import Link from "next/link";
import GlowCard from "@/components/shared/glow-card";

export const jobStatistics = {
	totalJobSeekers: "10,0000+",
	registeredEmployers: "50,100+",
	activeJobSeekers: "3,900+",
};

const Stats = () => {
	const stats = [
		{
			label: "Total Job Seekers",
			value: jobStatistics.totalJobSeekers,
			color: "from-blue-500 to-cyan-500",
		},
		{
			label: "Registered Employers",
			value: jobStatistics.registeredEmployers,
			color: "from-purple-500 to-pink-500",
		},
		{
			label: "Active Job Seekers",
			value: jobStatistics.activeJobSeekers,
			color: "from-green-500 to-emerald-500",
		},
	];

	return (
		<div className='min-h-screen py-12 px-4 sm:px-6 lg:px-8'>
			<div className='max-w-7xl mx-auto space-y-12'>
				{/* Header */}
				<div className='text-center space-y-4'>
					<h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent'>
						Ministry Statistics
					</h1>
					<div className='h-1 md:h-1.5 bg-gradient-to-r from-transparent via-yellow-500 to-transparent w-48 sm:w-64 mx-auto rounded-full mb-4 md:mb-6' />
					<p className='text-lg text-foreground max-w-2xl mx-auto capitalize'>
						Explore our comprehensive employment statistics and discover the
						online services available for job seekers, employers, and
						businesses.
					</p>
				</div>

				{/* Statistics Cards */}
				<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
					{stats.map((stat, index) => (
						<GlowCard
							key={index}
							className='rounded-lg p-12 flex flex-col items-center text-center relative overflow-hidden bg-amber-100 dark:bg-zinc-900'
						>
							<div
								className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
							/>
							<div>
								<div className='space-y-1'>
									<p className='text-3xl sm:text-4xl font-bold text-foreground'>
										{stat.value}
									</p>
									<p className='text-sm font-medium text-orange-500'>
										{stat.label}
									</p>
								</div>
							</div>
						</GlowCard>
					))}
				</div>

				{/* Ministry Services */}
				<div className='space-y-6'>
					<div className='text-center space-y-2'>
						<p className='text-foreground capitalize'>
							Access various government services and portals for employment,
							business, and trade
						</p>
					</div>

					<div className='grid grid-cols-2 md:grid-cols-4 gap-3'>
						{ministryServices.map((service, index) => (
							<GlowCard
								key={index}
								className='rounded-md border p-4 flex flex-col items-center text-center relative overflow-hidden bg-white dark:bg-zinc-900'
							>
								<div className='space-y-2'>
									<div className='flex items-center gap-2'>
										<div className='p-1.5 rounded bg-primary/10 text-amber-500 group-hover:bg-primary group-hover:text-white transition-colors'>
											{service.title}
										</div>
									</div>
									<p className='text-xs text-foreground line-clamp-2'>
										{service.description}
									</p>
									{service.urlLink && (
										<Button
											asChild
											size='sm'
											className='w-full h-7 text-xs rounded-none'
										>
											<Link
												href={service.urlLink}
												target='_blank'
												rel='noopener noreferrer'
											>
												Visit <ExternalLink className='h-3 w-3 ml-1' />
											</Link>
										</Button>
									)}
								</div>
							</GlowCard>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Stats;
