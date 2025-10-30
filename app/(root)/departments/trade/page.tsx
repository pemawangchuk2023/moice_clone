import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { tradeData } from "@/constants/trade";

const Trade = () => {
	return (
		<div className='min-h-screen pt-4 pb-8'>
			{/* Header - ONLY ONE, INSIDE THE COMPONENT */}
			<div className='px-4 sm:px-6 py-6 sm:py-8'>
				<h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white'>
					{tradeData.department.name}
				</h1>
			</div>

			{/* Main Content */}
			<div className='max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-8'>
				<Tabs defaultValue='vision' className='w-full'>
					<TabsList className='grid w-full grid-cols-3 h-auto p-1 border-2'>
						<TabsTrigger
							value='vision'
							className='flex items-center gap-1 sm:gap-2 text-xs sm:text-sm data-[state=active]:bg-chart-1/20 data-[state=active]:text-chart-1 transition-all duration-300 px-2 py-2 sm:py-2.5'
						>
							Vision
						</TabsTrigger>
						<TabsTrigger
							value='mission'
							className='flex items-center gap-1 sm:gap-2 text-xs sm:text-sm data-[state=active]:bg-chart-1/20 data-[state=active]:text-chart-1 transition-all duration-300 px-2 py-2 sm:py-2.5'
						>
							Mission
						</TabsTrigger>
						<TabsTrigger
							value='mandate'
							className='flex items-center gap-1 sm:gap-2 text-xs sm:text-sm data-[state=active]:bg-chart-1/20 data-[state=active]:text-chart-1 transition-all duration-300 px-2 py-2 sm:py-2.5'
						>
							Mandate
						</TabsTrigger>
					</TabsList>

					{/* Vision Tab */}
					<TabsContent value='vision' className='mt-4 sm:mt-6 md:mt-8'>
						<Card className='border-t-4 border-t-blue-600'>
							<CardHeader className='text-center justify-center px-4 sm:px-6'>
								<CardTitle className='text-xl sm:text-2xl md:text-3xl flex items-center text-center justify-center gap-2 sm:gap-3'>
									Our Vision
								</CardTitle>
								<Badge variant='secondary' className='text-xs sm:text-sm'>
									Strategic Direction
								</Badge>
							</CardHeader>
							<CardContent className='px-4 sm:px-6'>
								<div className='p-4 sm:p-6 md:p-8 rounded-lg border-2 border-blue-200'>
									<p className='text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-foreground'>
										{tradeData.vision}
									</p>
								</div>
							</CardContent>
						</Card>
					</TabsContent>

					{/* Mission Tab */}
					<TabsContent value='mission' className='mt-4 sm:mt-6 md:mt-8'>
						<Card className='border-t-4 border-t-emerald-600'>
							<CardHeader className='text-center justify-center px-4 sm:px-6'>
								<CardTitle className='text-xl sm:text-2xl md:text-3xl flex items-center text-center justify-center gap-2 sm:gap-3'>
									Our Mission
								</CardTitle>
								<Badge variant='secondary' className='text-xs sm:text-sm'>
									Core Objectives
								</Badge>
							</CardHeader>
							<CardContent className='px-4 sm:px-6'>
								<div className='space-y-4 sm:space-y-6'>
									{tradeData.mission.map((item, index) => (
										<Card
											key={index}
											className='border-l-4 border-l-emerald-500 hover:shadow-lg transition-shadow'
										>
											<CardContent className='pt-4 sm:pt-6 px-4 sm:px-6'>
												<div className='flex gap-3 sm:gap-4 items-start'>
													<div className='flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base'>
														{index + 1}
													</div>
													<p className='text-foreground text-sm sm:text-base md:text-lg lg:text-xl'>
														{item}
													</p>
												</div>
											</CardContent>
										</Card>
									))}
								</div>
							</CardContent>
						</Card>
					</TabsContent>

					{/* Mandate Tab */}
					<TabsContent value='mandate' className='mt-4 sm:mt-6 md:mt-8'>
						<Card className='border-t-4 border-t-purple-600'>
							<CardHeader className='text-center justify-center px-4 sm:px-6'>
								<CardTitle className='text-xl sm:text-2xl md:text-3xl flex items-center text-center justify-center gap-2 sm:gap-3'>
									Our Mandate
								</CardTitle>
								<Badge variant='secondary' className='text-xs sm:text-sm'>
									Key Responsibilities
								</Badge>
							</CardHeader>
							<CardContent className='px-4 sm:px-6'>
								<div className='grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6'>
									{tradeData.mandate.map((item, index) => (
										<Card key={index}>
											<CardContent className='pt-4 sm:pt-6 px-4 sm:px-6'>
												<div className='flex gap-3 sm:gap-4 items-start'>
													<p className='text-foreground text-sm sm:text-base md:text-lg lg:text-xl'>
														{item}
													</p>
												</div>
											</CardContent>
										</Card>
									))}
								</div>
							</CardContent>
						</Card>
					</TabsContent>
				</Tabs>
			</div>
		</div>
	);
};

export default Trade;
