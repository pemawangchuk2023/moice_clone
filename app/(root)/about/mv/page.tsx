import { objectives } from "@/constants/objectives";

const MissionVision = () => {
	return (
		<main className='w-full mt-5 py-8'>
			{/* About Us Section */}
			<section className='w-full pt-0 pb-2 md:pt-0 md:pb-8 lg:pt-0 lg:pb-10'>
				<div className='w-full px-4 md:px-6 mx-auto'>
					<div className='space-y-4'>
						<h1 className='text-4xl text-center font-bold sm:text-5xl xl:text-6xl/none bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent'>
							MoICE
						</h1>
						<p className='w-full text-foreground md:text-[20px] text-justify'>
							The MoICE aim to promote quality and sustained economic growth
							with decent and productive employment through creative and
							innovative interventions to strengthen Bhutan’s private sector.
						</p>
					</div>
				</div>
			</section>

			{/* Vision & Mission (swapped order + enlarged) */}
			<section className='w-full py-2 md:py-2'>
				<div className='container px-4 md:px-6 mx-auto'>
					<div className='grid gap-8 lg:gap-12 items-start'>
						{/* Vision first */}
						<div className='space-y-6'>
							<h2 className='text-5xl font-extrabold sm:text-6xl bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent text-center'>
								Our Vision
							</h2>
							<div className='p-8 rounded-xl border-l-4 border-blue-600'>
								<p className='text-foreground text-[22px] md:text-[24px] text-justify leading-relaxed'>
									“To promote quality and sustained economic growth with decent
									and productive employment through creative and innovative
									interventions to promote the private sectors.”
								</p>
							</div>
						</div>

						{/* Mission next */}
						<div className='space-y-6'>
							<h2 className='text-5xl font-extrabold sm:text-6xl bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent text-center'>
								Our Mission
							</h2>
							<div className='p-8 rounded-xl border-l-4 border-blue-600 space-y-6 text-foreground text-[22px] md:text-[24px] text-justify leading-relaxed'>
								<p>
									“Improving the ease of doing business by establishing a
									responsive and coordinated regulatory framework, and
									integrating all business licensing systems and sectoral
									clearances.”
								</p>
								<p>
									“Promotion of FDI and integration of local industries with
									global value chain.”
								</p>
								<p>
									“Diversification of exports in the regional and international
									markets through promotion of Brand Bhutan, Intellectual
									Property, Trade Agreements, and Mutual Recognition
									Instruments.”
								</p>
								<p>
									“Diversification of economy through promotion of digital jobs,
									creativity and innovation.”
								</p>
								<p>
									“Create backward and forward linkages between CSIs and
									medium/large industries.”
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Objectives */}
			<section className='w-full py-8 md:py-10 lg:py-16'>
				<div className='container px-4 md:px-6 mx-auto'>
					<h2 className='text-3xl font-bold text-center mb-12 sm:text-4xl md:text-5xl bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent'>
						Our Objectives
					</h2>
					<div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
						{objectives.map((objective, index) => (
							<div
								key={index}
								className='p-6 rounded-xl border-t-4 border-blue-500'
							>
								<h3 className='text-xl font-bold mb-3 text-blue-800 dark:text-blue-300'>
									{objective.title}
								</h3>
								<p className='text-foreground text-justify'>
									{objective.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>
		</main>
	);
};

export default MissionVision;
