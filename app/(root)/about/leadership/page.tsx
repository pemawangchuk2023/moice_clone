"use client";
import Image from "next/image";
import {
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { headOfDepartments, secretaryOffice } from "@/constants/executives";
import Link from "next/link";
import { Copy } from "lucide-react";
import { toast } from "sonner";

const Leadership = () => {
	const handleCopyEmail = (text: string) => {
		navigator.clipboard.writeText(text);
		toast("You have copied the email successfully");
	};
	return (
		<div className='relative min-h-screen'>
			{/* Decorative Background Elements */}
			<div className='absolute top-20 left-0 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl' />
			<div className='absolute bottom-20 right-0 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl' />

			{/* Added proper top padding and responsive padding for mobile */}
			<div className='container mx-auto pt-12 md:pt-12 pb-12 md:pb-20 px-4 sm:px-6 lg:px-8 relative'>
				{/* Page Header */}
				<header className='text-center mb-12 md:mb-20'>
					<div className='inline-block mb-4'>
						<span className='px-4 sm:px-6 py-2 sm:py-2.5 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs sm:text-sm font-semibold rounded-full shadow-lg'>
							Executive Leadership
						</span>
					</div>

					<h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 text-foreground px-4'>
						Our Leadership
					</h2>

					<div className='h-1 md:h-1.5 bg-gradient-to-r from-transparent via-yellow-500 to-transparent w-48 sm:w-64 mx-auto rounded-full mb-4 md:mb-6' />

					<p className='text-foreground text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed px-4'>
						Meet the visionary leaders driving innovation and excellence at the
						Ministry of Industry, Commerce & Employment
					</p>
				</header>

				{/* Secretary Section */}
				<section className='mb-16 md:mb-28'>
					<div className='text-center mb-8 md:mb-14'>
						<h3 className='text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2 inline-flex items-center gap-2 md:gap-3 flex-wrap justify-center px-4'>
							<span className='w-8 sm:w-12 md:w-16 h-0.5 bg-gradient-to-r from-transparent to-yellow-500' />
							Office of the Secretary
							<span className='w-8 sm:w-12 md:w-16 h-0.5 bg-gradient-to-l from-transparent to-yellow-500' />
						</h3>
					</div>

					{secretaryOffice.map((person) => (
						<div
							key={person.name}
							className='group relative max-w-6xl mx-auto mb-6 md:mb-10'
						>
							{/* Premium Glassmorphism Card - More responsive padding */}
							<div className='relative rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl hover:shadow-yellow-500/20 transition-all duration-500 p-4 sm:p-6 md:p-8 lg:p-12 border border-white/50 hover:-translate-y-1'>
								{/* Gradient Overlay */}
								<div className='absolute inset-0 bg-gradient-to-br from-yellow-500/0 via-orange-500/0 to-amber-500/0 group-hover:from-yellow-500/5 group-hover:via-orange-500/5 group-hover:to-amber-500/5 transition-all duration-500 rounded-2xl md:rounded-3xl pointer-events-none' />

								<CardHeader className='flex flex-col lg:flex-row items-center gap-4 sm:gap-6 md:gap-8 relative z-10 p-0'>
									{/* Image with Premium Effects - Responsive sizing */}
									<div className='relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 flex-shrink-0 group-hover:scale-105 transition-transform duration-300'>
										<div className='absolute inset-0 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full opacity-20 blur-xl' />
										<div className='relative w-full h-full rounded-full overflow-hidden border-2 sm:border-3 md:border-4 border-white shadow-xl md:shadow-2xl'>
											<Image
												src={person.image}
												alt={person.name}
												fill
												className='object-cover'
												sizes='(max-width: 640px) 128px, (max-width: 768px) 160px, (max-width: 1024px) 192px, 224px'
											/>
										</div>
									</div>

									{/* Content - Responsive text sizes */}
									<div className='text-center lg:text-left flex-1 w-full'>
										<CardTitle className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-3 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-foreground'>
											{person.name}
										</CardTitle>
										<CardDescription className='text-base sm:text-lg md:text-xl font-semibold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent mb-1 md:mb-2'>
											{person.title}
										</CardDescription>
										<p className='text-sm md:text-base text-foreground mb-1'>
											{person.office}
										</p>
										<p className='text-sm md:text-base text-foreground mb-4 md:mb-6'>
											{person.organization}
										</p>

										{/* Contact Cards - Fully responsive */}
										<div className='flex flex-col sm:flex-row gap-2 md:gap-3 justify-center lg:justify-start flex-wrap'>
											<div className='flex items-center gap-2 px-3 sm:px-4 md:px-5 py-2 md:py-3 border-2 rounded-md'>
												<Link
													href={`mailto:${person.email}`}
													className='text-xs sm:text-sm text-foreground hover:text-yellow-600 underline break-all'
												>
													{person.email}
												</Link>

												<button
													onClick={() => handleCopyEmail(person.email)}
													className='p-1 hover:text-yellow-600 transition-colors cursor-pointer flex-shrink-0'
													title='Copy email'
												>
													<Copy className='w-3 h-3 sm:w-4 sm:h-4' />
												</button>
											</div>

											<div className='flex items-center gap-2 px-3 sm:px-4 md:px-5 py-2 md:py-3 rounded-md border-2'>
												<span className='text-xs sm:text-sm text-foreground font-medium'>
													{person.telephone}
												</span>
											</div>
										</div>
									</div>
								</CardHeader>

								<CardFooter className='pt-4 sm:pt-6 md:pt-8 p-0 relative z-10'>
									<div className='w-full'>
										<div className='h-px bg-gradient-to-r from-transparent via-yellow-300 to-transparent mb-4 md:mb-6' />
										<p className='text-foreground text-sm sm:text-base md:text-[20px] leading-relaxed whitespace-pre-line text-justify'>
											{person.bio}
										</p>
									</div>
								</CardFooter>
							</div>
						</div>
					))}
				</section>

				{/* Heads of Departments Section */}
				<section>
					<div className='text-center mb-8 md:mb-16'>
						<h3 className='text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2 md:mb-3 inline-flex items-center gap-2 md:gap-3 flex-wrap justify-center px-4'>
							<span className='w-8 sm:w-12 md:w-16 h-0.5 bg-gradient-to-r from-transparent to-orange-500' />
							Heads of Departments & Agencies
							<span className='w-8 sm:w-12 md:w-16 h-0.5 bg-gradient-to-l from-transparent to-orange-500' />
						</h3>
						<p className='text-foreground text-sm sm:text-base md:text-lg mt-3 md:mt-4 px-4'>
							Exceptional leaders driving departmental excellence
						</p>
					</div>

					{/* Responsive grid - 1 column on mobile, 2 on tablet, 3 on desktop */}
					<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8'>
						{headOfDepartments.map((person) => (
							<div
								key={person.name}
								className='group relative hover:-translate-y-2 transition-all duration-300'
							>
								{/* Premium Card - Responsive padding */}
								<div className='relative h-full rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 text-center shadow-lg md:shadow-xl hover:shadow-2xl hover:shadow-yellow-500/20 transition-all duration-500 border border-white/60 overflow-hidden'>
									{/* Gradient Background Effect */}
									<div className='absolute inset-0 bg-gradient-to-br from-yellow-500/0 to-orange-500/0 group-hover:from-yellow-500/10 group-hover:to-orange-500/10 transition-all duration-500' />

									{/* Corner Accent */}
									<div className='absolute top-0 right-0 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-yellow-400/30 to-orange-400/30 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500' />

									<div className='relative z-10'>
										{/* Image - Responsive sizing */}
										<div className='relative w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300'>
											<div className='absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-20 blur-lg' />
											<div className='relative w-full h-full rounded-full overflow-hidden border-2 sm:border-3 md:border-4 border-white shadow-lg md:shadow-xl group-hover:border-yellow-400 transition-all duration-300'>
												<Image
													src={person.image}
													alt={`${person.name} - ${person.title}`}
													fill
													className='object-cover'
													sizes='(max-width: 640px) 112px, (max-width: 768px) 128px, 160px'
												/>
											</div>
										</div>

										{/* Name & Title - Responsive text */}
										<CardTitle className='text-lg sm:text-xl md:text-2xl font-bold mb-1 md:mb-2 text-foreground group-hover:text-yellow-700 transition-colors duration-300 px-2'>
											{person.name}
										</CardTitle>
										<CardDescription className='text-sm md:text-base font-semibold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent mb-1 md:mb-2 px-2'>
											{person.title}
										</CardDescription>
										<p className='text-xs sm:text-sm text-foreground mb-4 md:mb-6 min-h-[32px] sm:min-h-[40px] px-2'>
											{person.office}
										</p>

										{/* Divider */}
										<div className='h-px bg-gradient-to-r from-transparent via-yellow-300 to-transparent mb-4 md:mb-6' />

										{/* Contact Info - Responsive text and padding */}
										<div className='space-y-2 md:space-y-3 text-xs sm:text-sm'>
											<div className='flex flex-col items-center gap-1 md:gap-2 p-2 md:p-3 bg-card border-2'>
												<div className='flex items-center gap-1 md:gap-2 w-full justify-center'>
													<Link
														href={`mailto:${person.email}`}
														className='text-yellow-600 hover:text-orange-600 transition-colors font-medium break-all'
													>
														{person.email}
													</Link>
													<button
														onClick={() => handleCopyEmail(person.email)}
														className='p-1 hover:text-yellow-600 transition-colors cursor-pointer flex-shrink-0'
														title='Copy email'
													>
														<Copy className='w-3 h-3 sm:w-4 sm:h-4' />
													</button>
												</div>
											</div>
											<div className='flex items-center justify-center gap-2 p-2 md:p-3 rounded-xl border'>
												<span className='text-foreground'>
													<strong>Tel:</strong> {person.telephone}
												</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</section>
			</div>
		</div>
	);
};

export default Leadership;
