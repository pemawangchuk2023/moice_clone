import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { timelineEvents } from "@/constants/background";

const Background = () => {
	return (
		<div className='min-h-screen'>
			<div className='mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8'>
				{/* Hero Header */}
				<header className='mb-16 text-center'>
					<div className='mb-4 inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-primary'>
						<Badge variant='secondary'>Historical Journey</Badge>
					</div>
					<p className='mx-auto max-w-2xl text-lg text-foreground'>
						A comprehensive timeline chronicling the evolution of employment and
						labour administration in Bhutan
					</p>
				</header>

				{/* Timeline */}
				<main className='relative'>
					{/* Vertical Timeline Line */}
					<div className='absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent sm:left-1/2' />

					<div className='space-y-12'>
						{timelineEvents.map((event, index) => {
							const isLeft = index % 2 === 0;

							return (
								<div
									key={index}
									className={`relative flex items-start gap-8 ${
										isLeft ? "sm:flex-row" : "sm:flex-row-reverse"
									}`}
								>
									{/* Content Card */}
									<div
										className={`ml-24 flex-1 sm:ml-0 ${
											isLeft
												? "sm:pr-12 sm:text-right"
												: "sm:pl-12 sm:text-left"
										}`}
									>
										{/* Date Badge */}
										<div
											className={`mb-3 inline-flex items-center gap-2 text-sm font-semibold text-primary ${
												isLeft ? "" : "sm:flex-row-reverse"
											}`}
										>
											<Badge variant='secondary'>{event.date}</Badge>
										</div>

										{/* Card */}
										<Card
											className={`group relative overflow-hidden transition-all duration-300 hover:shadow-xl`}
										>
											{/* Highlight Badge */}
											{event.highlight && (
												<div
													className={`absolute top-4 ${
														isLeft
															? "right-4"
															: "left-4 sm:right-4 sm:left-auto"
													} rounded-none px-3 py-1 text-[20px] font-medium underline text-yellow-500`}
												>
													{event.highlight}
												</div>
											)}

											<div className='p-6 sm:p-8'>
												{/* Title */}
												<h3
													className={`mb-4 pr-24 text-xl text-blue-500 font-bold sm:text-2xl text-justify ${
														isLeft ? "" : "sm:pr-24"
													}`}
												>
													{event.title}
												</h3>

												{/* Description */}
												<p className='mb-4 text-justify text-foreground text-[18px]'>
													{event.description}
												</p>

												{/* Additional Details */}
												{event.details && (
													<div className='mt-6 space-y-3 border-t border-border pt-6 text-justify'>
														{typeof event.details === "string" ? (
															<p className='text-sm leading-relaxed text-foreground'>
																{event.details}
															</p>
														) : (
															<ul className='space-y-2'>
																{event.details.map((detail, idx) => (
																	<li
																		key={idx}
																		className='flex gap-3 text-sm leading-relaxed text-foreground'
																	>
																		<span className='mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary' />
																		<span>{detail}</span>
																	</li>
																))}
															</ul>
														)}
													</div>
												)}
											</div>

											{/* Hover Effect */}
											<div className='absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100' />
										</Card>
									</div>

									{/* Spacer for alternating layout */}
									<div className='hidden flex-1 sm:block' />
								</div>
							);
						})}
					</div>
				</main>

				{/* Footer Summary */}
				<footer className='mt-16 rounded-none border border-border bg-card/50 p-8 text-center backdrop-blur-sm'>
					<h3 className='mb-3 text-xl font-semibold text-foreground'>
						Present Day
					</h3>
					<p className='w-full text-foreground text-[20px] text-justify'>
						The Ministry of Industry, Commerce and Employment continues to
						evolve, serving as a comprehensive institution that integrates
						employment, industry, commerce, tourism, and intellectual property
						under one unified structure.
					</p>
				</footer>
			</div>
		</div>
	);
};

export default Background;
