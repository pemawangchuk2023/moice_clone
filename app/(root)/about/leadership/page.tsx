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

			<div className='container mx-auto py-20 px-4 relative'>
				{/* Page Header */}
				<header className='text-center mb-20'>
					<div className='inline-block mb-4'>
						<span className='px-6 py-2.5 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-sm font-semibold rounded-full shadow-lg'>
							Executive Leadership
						</span>
					</div>

					<h2 className='text-4xl md:text-7xl font-bold mb-6 text-foreground'>
						Our Leadership
					</h2>

					<div className='h-1.5 bg-gradient-to-r from-transparent via-yellow-500 to-transparent w-64 mx-auto rounded-full mb-6' />

					<p className='text-foreground text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed'>
						Meet the visionary leaders driving innovation and excellence at the
						Ministry of Industry, Commerce & Employment
					</p>
				</header>

				{/* Secretary Section */}
				<section className='mb-28'>
					<div className='text-center mb-14'>
						<h3 className='text-4xl font-bold text-foreground mb-2 inline-flex items-center gap-3 flex-wrap justify-center'>
							<span className='w-16 h-0.5 bg-gradient-to-r from-transparent to-yellow-500' />
							Office of the Secretary
							<span className='w-16 h-0.5 bg-gradient-to-l from-transparent to-yellow-500' />
						</h3>
					</div>

					{secretaryOffice.map((person) => (
						<div
							key={person.name}
							className='group relative max-w-6xl mx-auto mb-10'
						>
							{/* Premium Glassmorphism Card */}
							<div className='relative rounded-3xl shadow-2xl hover:shadow-yellow-500/20 transition-all duration-500 p-8 md:p-12 border border-white/50 hover:-translate-y-1'>
								{/* Gradient Overlay */}
								<div className='absolute inset-0 bg-gradient-to-br from-yellow-500/0 via-orange-500/0 to-amber-500/0 group-hover:from-yellow-500/5 group-hover:via-orange-500/5 group-hover:to-amber-500/5 transition-all duration-500 rounded-3xl pointer-events-none' />

								<CardHeader className='flex flex-col lg:flex-row items-center gap-8 relative z-10 p-0'>
									{/* Image with Premium Effects */}
									<div className='relative w-48 h-48 md:w-56 md:h-56 flex-shrink-0 group-hover:scale-105 transition-transform duration-300'>
										<div className='absolute inset-0 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full opacity-20 blur-xl' />
										<div className='relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl'>
											<Image
												src={person.image}
												alt={person.name}
												fill
												className='object-cover'
												sizes='(max-width: 768px) 192px, 224px'
											/>
										</div>
										{/* Badge Overlay */}
									</div>

									{/* Content */}
									<div className='text-center lg:text-left flex-1'>
										<CardTitle className='text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-foreground'>
											{person.name}
										</CardTitle>
										<CardDescription className='text-xl font-semibold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent mb-2'>
											{person.title}
										</CardDescription>
										<p className='text-base text-foreground mb-1'>
											{person.office}
										</p>
										<p className='text-base text-foreground mb-6'>
											{person.organization}
										</p>

										{/* Contact Cards */}
										<div className='flex flex-col sm:flex-row gap-3 justify-center lg:justify-start flex-wrap'>
											<div className='flex items-center gap-2 px-5 py-3 border-2 rounded-md'>
												<Link
													href={`mailto:${person.email}`}
													className='text-sm text-foreground hover:text-yellow-600 underline'
												>
													{person.email}
												</Link>

												<button
													onClick={() => handleCopyEmail(person.email)}
													className='p-1 hover:text-yellow-600 transition-colors cursor-pointer'
													title='Copy email'
												>
													<Copy className='w-4 h-4' />
												</button>
											</div>

											<div className='flex items-center gap-2 px-5 py-3 rounded-none border-2'>
												<span className='text-sm text-foreground font-medium'>
													{person.telephone}
												</span>
											</div>
										</div>
									</div>
								</CardHeader>

								<CardFooter className='pt-8 p-0 relative z-10'>
									<div className='w-full'>
										<div className='h-px bg-gradient-to-r from-transparent via-yellow-300 to-transparent mb-6' />
										<p className='text-foreground text-lg leading-relaxed whitespace-pre-line text-justify'>
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
					<div className='text-center mb-16'>
						<h3 className='text-4xl font-bold text-foreground mb-3 inline-flex items-center gap-3 flex-wrap justify-center'>
							<span className='w-16 h-0.5 bg-gradient-to-r from-transparent to-orange-500' />
							Heads of Departments & Agencies
							<span className='w-16 h-0.5 bg-gradient-to-l from-transparent to-orange-500' />
						</h3>
						<p className='text-foreground text-lg mt-4'>
							Exceptional leaders driving departmental excellence
						</p>
					</div>

					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
						{headOfDepartments.map((person) => (
							<div
								key={person.name}
								className='group relative hover:-translate-y-2 transition-all duration-300'
							>
								{/* Premium Card */}
								<div className='relative h-full rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl hover:shadow-yellow-500/20 transition-all duration-500 border border-white/60 overflow-hidden'>
									{/* Gradient Background Effect */}
									<div className='absolute inset-0 bg-gradient-to-br from-yellow-500/0 to-orange-500/0 group-hover:from-yellow-500/10 group-hover:to-orange-500/10 transition-all duration-500' />

									{/* Corner Accent */}
									<div className='absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-yellow-400/30 to-orange-400/30 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500' />

									<div className='relative z-10'>
										{/* Image */}
										<div className='relative w-40 h-40 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300'>
											<div className='absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-20 blur-lg' />
											<div className='relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-xl group-hover:border-yellow-400 transition-all duration-300'>
												<Image
													src={person.image}
													alt={`${person.name} - ${person.title}`}
													fill
													className='object-cover'
													sizes='160px'
												/>
											</div>
										</div>

										{/* Name & Title */}
										<CardTitle className='text-2xl font-bold mb-2 text-foreground group-hover:text-yellow-700 transition-colors duration-300'>
											{person.name}
										</CardTitle>
										<CardDescription className='text-base font-semibold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent mb-2'>
											{person.title}
										</CardDescription>
										<p className='text-sm text-foreground mb-6 min-h-[40px]'>
											{person.office}
										</p>

										{/* Divider */}
										<div className='h-px bg-gradient-to-r from-transparent via-yellow-300 to-transparent mb-6' />

										{/* Contact Info */}
										<div className='space-y-3 text-sm'>
											<div className='flex flex-col items-center gap-2 p-3 bg-card border-2'>
												<Link
													href={`mailto:${person.email}`}
													className='text-yellow-600 hover:text-orange-600 transition-colors font-medium break-all'
												>
													{person.email}
													<button
														onClick={() => handleCopyEmail(person.email)}
														className='p-1 hover:text-yellow-600 transition-colors cursor-pointer'
														title='Copy email'
													>
														<Copy className='w-4 h-4' />
													</button>
												</Link>
											</div>
											<div className='flex items-center justify-center gap-2 p-3 rounded-xl border'>
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
