"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { labourData } from "@/constants/labour";

const Labour = () => {
	return (
		<div className='min-h-screen bg-gradient-to-br from-background via-background to-muted/20'>
			{/* Hero Header with Gradient Accent */}
			<div className='relative overflow-hidden'>
				<div className='absolute inset-0 bg-gradient-to-r from-chart-1/10 via-chart-2/10 to-chart-3/10 dark:from-chart-1/5 dark:via-chart-2/5 dark:to-chart-3/5' />
				<div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 text-center'>
					<div className='px-5 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full shadow-md inline-block'>
						<span className='font bold text-foreground text-xl'>
							Building Tomorrow&apos;s Workforce
						</span>
					</div>
					<h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-4 animate-fade-in-up text-balance'>
						{labourData.department.name}
					</h1>
					<p className='text-lg sm:text-xl text-foreground max-w-2xl mx-auto animate-fade-in-up text-balance'>
						Empowering workers, supporting employers, and driving economic
						growth
					</p>
				</div>
			</div>

			{/* Main Content */}
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 -mt-8'>
				<Tabs defaultValue='vision' className='w-full'>
					<TabsList className='grid w-full grid-cols-2 lg:grid-cols-4 h-auto p-1.5 bg-card/50 backdrop-blur-sm border shadow-lg mb-8'>
						<TabsTrigger
							value='vision'
							className='flex items-center gap-2 data-[state=active]:bg-chart-1/20 data-[state=active]:text-chart-1 transition-all duration-300'
						>
							<span>Vision</span>
						</TabsTrigger>
						<TabsTrigger
							value='mission'
							className='flex items-center gap-2 data-[state=active]:bg-chart-2/20 data-[state=active]:text-chart-2 transition-all duration-300'
						>
							<span>Mission</span>
						</TabsTrigger>
						<TabsTrigger
							value='coreValues'
							className='flex items-center gap-2 data-[state=active]:bg-chart-3/20 data-[state=active]:text-chart-3 transition-all duration-300'
						>
							<span>Core Values</span>
						</TabsTrigger>
						<TabsTrigger
							value='principles'
							className='flex items-center gap-2 data-[state=active]:bg-chart-4/20 data-[state=active]:text-chart-4 transition-all duration-300'
						>
							<span>Principles</span>
						</TabsTrigger>
					</TabsList>

					{/* Vision Tab */}
					<TabsContent value='vision' className='animate-fade-in'>
						<Card className='border-0 shadow-2xl'>
							<div className='absolute top-0 right-0 w-64 h-64 rounded-full' />
							<CardHeader className='relative space-y-4 pb-8'>
								<div className='flex items-start justify-between flex-wrap gap-4 justify-center'>
									<div className='space-y-2 '>
										<div className='flex items-center gap-3'>
											<CardTitle className='text-4xl sm:text-5xl font-bold text-foreground'>
												Our Vision
											</CardTitle>
										</div>
										<Badge
											variant='secondary'
											className='bg-chart-1/20 text-chart-1 border-chart-1/30 hover:bg-chart-1/30'
										>
											Strategic Direction
										</Badge>
									</div>
								</div>
							</CardHeader>
							<CardContent className='relative space-y-6'>
								<div className='p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm border-2 border-chart-1/20 shadow-inner space-y-6'>
									<p className='text-2xl sm:text-3xl font-semibold text-foreground leading-relaxed text-center'>
										{labourData.vision.statement}
									</p>
									<div className='h-px bg-gradient-to-r from-transparent via-chart-1/30 to-transparent' />
									{labourData.vision.details.map((detail, i) => (
										<p
											key={i}
											className='text-base sm:text-lg text-foreground leading-relaxed text-justify'
										>
											{detail}
										</p>
									))}
								</div>
							</CardContent>
						</Card>
					</TabsContent>

					{/* Mission Tab */}
					<TabsContent value='mission' className='animate-fade-in'>
						<Card className='border-0 shadow-2xl'>
							<div className='absolute top-0 left-0 w-64 h-64' />
							<CardHeader className='relative space-y-4 pb-8'>
								<div className='flex items-start justify-center text-center flex-wrap gap-4'>
									<div className='space-y-2'>
										<div className='flex items-center gap-3'>
											<CardTitle className='text-4xl sm:text-5xl font-bold text-foreground'>
												Our Mission
											</CardTitle>
										</div>
										<Badge
											variant='secondary'
											className='bg-chart-1/20 text-chart-1 border-chart-1/30 hover:bg-chart-1/30'
										>
											Core Objectives
										</Badge>
									</div>
								</div>
							</CardHeader>
							<CardContent className='relative space-y-6 text-justify'>
								<div className='p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm border-2 border-chart-2/20 shadow-inner space-y-8'>
									<p className='text-xl sm:text-2xl font-semibold text-foreground leading-relaxed text-balance'>
										{labourData.mission.statement}
									</p>
									<div className='h-px bg-gradient-to-r from-transparent via-chart-2/30 to-transparent' />
									<div className='grid gap-4'>
										{labourData.mission.details.map((detail, index) => (
											<Card
												key={index}
												className='group border-0 bg-gradient-to-r from-background/60 to-background/30 hover:from-chart-2/10 hover:to-chart-2/5 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]'
											>
												<CardContent className='p-6'>
													<div className='flex gap-4 items-start'>
														<div className='flex-shrink-0 w-10 h-10 bg-gradient-to-br from-chart-2 to-chart-2/70 rounded-xl flex items-center justify-center text-primary-foreground font-bold shadow-lg group-hover:scale-110 transition-transform duration-300'>
															{index + 1}
														</div>
														<p className='text-foreground text-base sm:text-lg leading-relaxed pt-1 text-pretty'>
															{detail}
														</p>
													</div>
												</CardContent>
											</Card>
										))}
									</div>
								</div>
							</CardContent>
						</Card>
					</TabsContent>

					{/* Core Values Tab */}
					<TabsContent value='coreValues' className='animate-fade-in'>
						<Card className='border-0 shadow-2xl'>
							<div className='absolute top-0 right-0 w-96 h-96' />
							<CardHeader className='relative space-y-4 pb-8 justify-center'>
								<div className='flex items-start justify-center text-center flex-wrap gap-4'>
									<div className='space-y-2'>
										<div className='flex items-center gap-3'>
											<CardTitle className='text-4xl sm:text-5xl font-bold text-foreground'>
												Our Core Values
											</CardTitle>
										</div>
										<Badge
											variant='secondary'
											className='bg-chart-1/20 text-chart-1 border-chart-1/30 hover:bg-chart-1/30'
										>
											{labourData.coreValues.acronym}
										</Badge>
									</div>
								</div>
								<p className='text-center sm:text-lg text-foreground leading-relaxed w-full text-justify'>
									{labourData.coreValues.definition}
								</p>
							</CardHeader>
							<CardContent className='relative'>
								<div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
									{labourData.coreValues.values.map((value, index) => (
										<Card
											key={index}
											className='group border-0 bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden'
										>
											<div className='absolute inset-0 bg-gradient-to-br from-chart-3/0 to-chart-3/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
											<div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-chart-3 to-chart-3/50' />
											<CardHeader className='relative'>
												<div className='flex items-center gap-3 mb-2'>
													<div className='w-8 h-8 rounded-lg bg-gradient-to-br from-chart-3 to-chart-3/70 flex items-center justify-center text-primary-foreground font-bold text-sm shadow-lg'>
														{value.title[0]}
													</div>
													<CardTitle className='text-xl sm:text-2xl font-bold text-foreground'>
														{value.title}
													</CardTitle>
												</div>
											</CardHeader>
											<CardContent className='relative'>
												<p className='text-foreground text-justify text-sm sm:text-base leading-relaxed'>
													{value.description}
												</p>
											</CardContent>
										</Card>
									))}
								</div>
							</CardContent>
						</Card>
					</TabsContent>

					{/* Guiding Principles Tab */}
					<TabsContent value='principles' className='animate-fade-in'>
						<Card className='border-0 shadow-2xl'>
							<div className='absolute bottom-0 left-0 w-96 h-96' />
							<CardHeader className='relative space-y-4 pb-8'>
								<div className='flex items-start justify-center text-center flex-wrap gap-4'>
									<div className='space-y-2'>
										<div className='flex items-center gap-3'>
											<CardTitle className='text-4xl sm:text-5xl font-bold text-foreground'>
												Guiding Principles
											</CardTitle>
										</div>
										<Badge
											variant='secondary'
											className='bg-chart-1/20 text-chart-1 border-chart-1/30 hover:bg-chart-1/30'
										>
											Labour Administration System
										</Badge>
									</div>
								</div>
							</CardHeader>
							<CardContent className='relative'>
								<div className='grid sm:grid-cols-2 gap-4'>
									{labourData.guidingPrinciples.principles.map(
										(principle, index) => (
											<Card
												key={index}
												className='group border-0 bg-gradient-to-r from-background/60 to-background/30 hover:from-chart-4/10 hover:to-chart-4/5 transition-all duration-300 hover:shadow-lg overflow-hidden'
											>
												<div className='absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-chart-4 to-chart-4/50 group-hover:w-2 transition-all duration-300' />
												<CardContent className='p-6 pl-8 text-justify'>
													<div className='flex gap-4 items-start'>
														<div className='flex-shrink-0 w-10 h-10 bg-gradient-to-br from-chart-4 to-chart-4/70 rounded-xl flex items-center justify-center text-primary-foreground font-bold shadow-lg group-hover:scale-110 transition-transform duration-300'>
															{index + 1}
														</div>
														<p className='text-foreground text-base sm:text-lg leading-relaxed pt-1 text-pretty'>
															{principle}
														</p>
													</div>
												</CardContent>
											</Card>
										)
									)}
								</div>
							</CardContent>
						</Card>
					</TabsContent>
				</Tabs>
			</div>
		</div>
	);
};

export default Labour;
