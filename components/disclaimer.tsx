import Image from "next/image";
import {
	AlertDialog,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

const Disclaimer = () => {
	const technologies = [
		{ name: "Next.js 16.0", category: "Framework" },
		{ name: "React", category: "Library" },
		{ name: "TypeScript", category: "Language" },
		{ name: "Tailwind CSS", category: "Styling" },
		{ name: "MongoDB", category: "Database" },
		{ name: "Mongoose", category: "ODM" },
		{ name: "Better Auth", category: "Authentication" },
		{ name: "bcrypt", category: "Security" },
		{ name: "React Hook Form", category: "Forms" },
		{ name: "Zod", category: "Validation" },
		{ name: "MDX Editor", category: "Editor" },
		{ name: "shadcn/ui", category: "UI Component Library" },
	];

	const groupedTech = technologies.reduce<Record<string, string[]>>(
		(acc, tech) => {
			if (!acc[tech.category]) {
				acc[tech.category] = [];
			}
			acc[tech.category].push(tech.name);
			return acc;
		},
		{}
	);

	return (
		<div className='w-full my-1 px-3'>
			<div className='bg-amber-50 border-l-4 border-amber-400 p-2 rounded-r-md shadow-sm'>
				<div className='flex flex-col md:flex-row items-start md:items-center gap-4'>
					{/* Text Section (Left side) */}
					<div className='flex-1'>
						<div className='flex items-start'>
							<div className='flex-shrink-0 pt-0.5'>
								<svg
									className='h-4 w-4 text-amber-400'
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 20 20'
									fill='currentColor'
								>
									<path
										fillRule='evenodd'
										d='M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z'
										clipRule='evenodd'
									/>
								</svg>
							</div>

							<div className='ml-2'>
								<h3 className='text-xs font-semibold text-amber-800'>
									Disclaimer
								</h3>
								<div className='mt-1 text-[18px] text-amber-700 text-justify leading-snug'>
									<p>
										This is a cloned website created for
										<span className='font-medium mx-1 bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded'>
											educational purposes
										</span>
										only. It is developing as part of a
										<span className='font-medium mx-1 bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded'>
											web development course.
										</span>
										It is
										<span className='font-medium mx-1 bg-amber-100 text-green-800 px-1.5 py-0.5 rounded'>
											not affiliated
										</span>
										with or endorsed by the Ministry of Industry, Commerce and
										Employment.
										<span className='ml-1'>
											The cloning of the website is
											<span className='text-green-800 font-bold ml-1 mr-1 italic'>
												JUST COMPLETED 20%
											</span>
											and development is still ongoing.
										</span>
									</p>
								</div>

								{/* View Tech Stack Button moved below text */}
								<div className='mt-3'>
									<AlertDialog>
										<AlertDialogTrigger asChild>
											<Button
												size='sm'
												className='text-xs text-green-500 border-2 border-amber-500 rounded-none cursor-pointer font-extrabold'
											>
												View Tech Stack
											</Button>
										</AlertDialogTrigger>
										<AlertDialogContent className='max-w-3xl max-h-[80vh] overflow-y-auto'>
											<AlertDialogHeader>
												<AlertDialogTitle className='text-xl font-bold'>
													Technology Stack
												</AlertDialogTitle>
												<AlertDialogDescription className='text-[18px]'>
													A comprehensive list of technologies powering this
													project
												</AlertDialogDescription>
											</AlertDialogHeader>

											<div className='grid grid-cols-1 md:grid-cols-2 gap-6 py-2'>
												{Object.entries(groupedTech).map(
													([category, techs]) => (
														<div key={category} className='space-y-2'>
															<h3 className='text-sm font-semibold text-foreground uppercase tracking-wide'>
																{category}
															</h3>
															<div className='space-y-1'>
																{techs.map((tech, index) => (
																	<div
																		key={index}
																		className='px-3 py-2 bg-secondary/50 rounded-none text-amber-500 text-sm font-medium hover:bg-secondary transition-colors'
																	>
																		{tech}
																	</div>
																))}
															</div>
														</div>
													)
												)}
											</div>

											<div className='flex justify-end pt-4 border-t'>
												<Button
													variant='destructive'
													asChild
													className='rounded-none cursor-pointer'
												>
													<AlertDialogTrigger>Close</AlertDialogTrigger>
												</Button>
											</div>
										</AlertDialogContent>
									</AlertDialog>
								</div>
							</div>
						</div>
					</div>

					{/* Image Section (Right side, 1/4 width) */}
					<div className='w-full md:w-1/4 flex flex-col items-center gap-2'>
						<Image
							src='/assets/author.png'
							alt='author'
							width={110}
							height={110}
							className='rounded-lg shadow-sm bg-green-500 object-cover'
						/>
						<p className='text-xs font-medium text-green-800'>Pema Wangchuk</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Disclaimer;
