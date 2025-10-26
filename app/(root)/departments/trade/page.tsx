import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { tradeData } from "@/constants/trade";

const Trade = () => {
	return (
		<div className='min-h-screen'>
			{/* Header */}
			<div>
				<h1 className='text-4xl font-bold text-foreground text-center'>
					{tradeData.department.name}
				</h1>
			</div>

			{/* Main Content */}
			<div className='max-w-7xl mx-auto px-6 py-12'>
				<Tabs defaultValue='vision' className='w-full'>
					<TabsList className='grid w-full grid-cols-3 h-auto p-1 border-2'>
						<TabsTrigger value='vision' className='cursor-pointer'>
							Vision
						</TabsTrigger>
						<TabsTrigger value='mission' className='cursor-pointer'>
							Mission
						</TabsTrigger>
						<TabsTrigger value='mandate' className='cursor-pointer'>
							Mandate
						</TabsTrigger>
					</TabsList>
					{/* Vision Tab */}
					<TabsContent value='vision' className='mt-8'>
						<Card className='border-t-4 border-t-blue-600'>
							<CardHeader>
								<CardTitle className='text-3xl flex items-center gap-3'>
									Our Vision
								</CardTitle>
								<Badge variant='secondary'>Strategic Direction</Badge>
							</CardHeader>
							<CardContent>
								<div className='p-8 rounded-lg border-2 border-blue-200'>
									<p className='text-2xl font-medium text-foreground'>
										{tradeData.vision}
									</p>
								</div>
							</CardContent>
						</Card>
					</TabsContent>

					{/* Mission Tab */}
					<TabsContent value='mission' className='mt-8'>
						<Card className='border-t-4 border-t-emerald-600'>
							<CardHeader>
								<CardTitle className='text-3xl flex items-center gap-3'>
									Our Mission
								</CardTitle>
								<Badge variant='secondary'>Core Objectives</Badge>
							</CardHeader>
							<CardContent>
								<div className='space-y-6'>
									{tradeData.mission.map((item, index) => (
										<Card
											key={index}
											className='border-l-4 border-l-emerald-500 hover:shadow-lg transition-shadow'
										>
											<CardContent className='pt-6'>
												<div className='flex gap-4 items-start'>
													<div className='flex-shrink-0 w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold'>
														{index + 1}
													</div>
													<p className='text-foreground text-xl'>{item}</p>
												</div>
											</CardContent>
										</Card>
									))}
								</div>
							</CardContent>
						</Card>
					</TabsContent>

					{/* Mandate Tab */}
					<TabsContent value='mandate' className='mt-8'>
						<Card className='border-t-4 border-t-purple-600'>
							<CardHeader>
								<CardTitle className='text-3xl flex items-center gap-3'>
									Our Mandate
								</CardTitle>
								<Badge variant='secondary'>Key Responsibilities</Badge>
							</CardHeader>
							<CardContent>
								<div className='grid md:grid-cols-2 gap-6'>
									{tradeData.mandate.map((item, index) => (
										<Card key={index}>
											<CardContent className='pt-6'>
												<div className='flex gap-4 items-start'>
													<p className='text-foreground text-xl'>{item}</p>
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
