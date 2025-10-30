import { DOEE } from "@/constants/doee";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import GlowCard from "@/components/shared/glow-card";
import OrganizationalChart from "@/app/(root)/departments/doee/_components/org";
import Image from "next/image";

const Overview = () => {
	return (
		<div className='w-full mt-4'>
			{/* Hero Section */}
			<div className='relative w-full'>
				<div className='text-center'>
					<span className='hidden md:inline-block px-9 py-2.5 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-sm font-semibold rounded-full shadow-lg'>
						{DOEE.name}
					</span>
					<div className='mt-8 md:mt-12 lg:mt-16 flex justify-center items-center px-4'>
						<div className='relative w-full max-w-2xl mx-auto'>
							{/* Optional: Add subtle shadow/glow effect */}
							<div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl blur-3xl -z-10'></div>

							<Image
								src='/assets/doee.png'
								alt='Doee - Hero Image'
								width={800}
								height={800}
								className='w-full h-auto max-w-full object-contain rounded-2xl shadow-2xl transition-transform duration-300 hover:scale-[1.02]'
								priority
								quality={95}
							/>
						</div>
					</div>
					<p className='mt-6 text-foreground text-justify text-[18px]'>
						{DOEE.description}
					</p>
				</div>
			</div>

			{/* Vision & Mission Section */}
			<section className='w-full py-6 md:py-12'>
				<div className='container px-4 md:px-6 mx-auto'>
					<div className='grid gap-1 lg:grid-cols-2 lg:gap-2 items-start'>
						<div className='space-y-4'>
							<h2 className='text-2xl font-bold sm:text-4xl md:text-3xl text-blue-900 dark:text-white'>
								Our Vision
							</h2>
							<div className='p-6 rounded-xl border-l-4 border-blue-600'>
								<p className='text-foreground md:text-[18px] text-justify'>
									{DOEE.vision}
								</p>
							</div>
						</div>
						<div className='space-y-4'>
							<h2 className='text-2xl font-bold tracking-tighter sm:text-4xl md:text-4xl text-blue-900 dark:text-white'>
								Our Mission
							</h2>
							<div className='p-6 rounded-xl border-l-4 border-blue-600 space-y-4 text-foreground md:text-[18px] text-justify'>
								{DOEE.mission}
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className='border-y-4 py-8 md:py-8'>
				<div className='w-full container px-4 md:px-6 mx-auto'>
					<div className='mb-12 text-center max-w-3xl mx-auto'>
						<h2 className='text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-4'>
							Our Values: {DOEE.values.acronym}
						</h2>
						<p className='text-lg italic text-yellow-500 mb-6'>
							{DOEE.values.tagline}
						</p>
						<p className='text-pretty text-[18px] leading-relaxed text-foreground'>
							{DOEE.values.description}
						</p>
					</div>

					<div className='grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-6 mt-12'>
						{DOEE.values.list.map((value, index) => (
							<GlowCard
								key={index}
								className='rounded-xl p-2 flex flex-col relative overflow-hidden bg-white dark:bg-zinc-900 border-2 border-border hover:border-primary/50 transition-colors'
							>
								<div className='mb-6 text-center'>
									<h3 className='text-2xl font-bold text-primary mb-2'>
										{value.key}
									</h3>
									<div className='h-1 w-24 bg-gradient-to-r from-primary to-primary/30 rounded-full' />
								</div>
								<p className='text-yellow-500 text-[18px] font-semibold text-center'>
									{value.value}
								</p>
							</GlowCard>
						))}
					</div>
				</div>
			</section>

			<section className='w-full py-12 md:py-16'>
				<div className='container px-4 md:px-6 mx-auto'>
					<div className='mx-auto max-w-3xl text-center mb-12'>
						<h2 className='text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-4'>
							Our Divisions
						</h2>
						<p className='text-pretty text-lg leading-relaxed text-foreground'>
							Specialized teams working together to achieve our mission
						</p>
					</div>

					<div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
						{DOEE.divisions.map((division) => (
							<Card
								key={division}
								className='group relative rounded-xl overflow-hidden border-2 transition-all hover:border-primary hover:shadow-xl hover:-translate-y-1 duration-300'
							>
								<div className='absolute right-0 top-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-primary/5 blur-3xl transition-all group-hover:scale-150 group-hover:bg-primary/10' />
								<CardHeader className='relative p-6'>
									<div className='mb-4'>
										<div className='h-1 w-16 bg-gradient-to-r from-primary to-primary/30 rounded-full mb-4' />
									</div>
									<CardTitle className='text-balance text-xl leading-relaxed font-semibold'>
										{division}
									</CardTitle>
								</CardHeader>
							</Card>
						))}
					</div>
				</div>
			</section>
			<OrganizationalChart />
		</div>
	);
};

export default Overview;
