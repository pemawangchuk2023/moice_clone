"use client";
import GlowCard from "@/components/shared/glow-card";
import { labourData } from "@/constants/labour";
import { easeOut, motion } from "framer-motion";

const DoL = () => {
	const sectionVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6, ease: easeOut },
		},
	};

	return (
		<div className='min-h-screen py-12 px-6 max-w-6xl mx-auto'>
			{/* Header */}
			<header className='mb-16 text-center'>
				<motion.h1
					initial={{ opacity: 0, scale: 0.95 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.8 }}
					className='text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400'
				>
					{labourData.department.name}
				</motion.h1>
				<div className='h-1.5 bg-gradient-to-r from-transparent via-yellow-500 to-transparent w-64 sm:w-96 mx-auto rounded-full mt-4 mb-8 shadow-md' />
			</header>

			<div className='space-y-16'>
				{/* Vision */}
				<motion.section
					variants={sectionVariants}
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true }}
				>
					<h2 className='text-4xl font-extrabold mb-6 text-yellow-500 flex justify-center gap-3'>
						Vision
					</h2>
					<div className='p-8 rounded-xl shadow-lg border'>
						<p className='text-xl font-semibold text-yellow-500 mb-4'>
							{labourData.vision.statement}
						</p>
						{labourData.vision.details.length > 0 && (
							<ul className='space-y-3 text-foreground list-disc pl-6 text-justify'>
								{labourData.vision.details.map((detail, i) => (
									<li key={i}>{detail}</li>
								))}
							</ul>
						)}
					</div>
				</motion.section>

				{/* Mission */}
				<motion.section
					variants={sectionVariants}
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true }}
				>
					<h2 className='text-4xl font-extrabold mb-6 text-yellow-500 flex justify-center gap-3'>
						Mission
					</h2>
					<div className='space-y-4'>
						{labourData.mission.details.map((item, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, x: -20 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								viewport={{ once: true }}
								className='p-6 rounded-xl shadow-md border flex gap-4 items-start'
							>
								<span className='flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-full flex items-center justify-center text-base font-bold'>
									{index + 1}
								</span>
								<p className='text-foreground text-justify'>{item}</p>
							</motion.div>
						))}
					</div>
				</motion.section>

				{/* Core Values */}
				<motion.section
					variants={sectionVariants}
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true }}
				>
					<div className='flex items-baseline gap-3 mb-6'>
						<h2 className='text-4xl font-extrabold mb-6 text-yellow-500 flex justify-center gap-3'>
							Core Values
						</h2>
						<span className='text-xl px-3 py-1 rounded-full'>
							({labourData.coreValues.acronym})
						</span>
					</div>
					<div className='grid md:grid-cols-2 gap-6'>
						{labourData.coreValues.values.map((value, index) => (
							<GlowCard
								key={index}
								className='rounded-md border-2 p-4 flex flex-col items-center text-center relative overflow-hidden bg-amber-100 dark:bg-zinc-900'
							>
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: index * 0.1 }}
									viewport={{ once: true }}
								>
									<h3 className='font-bold text-xl text-yellow-500 font-bold mb-3'>
										{value.title}
									</h3>
									<p className='text-foreground text-justify'>
										{value.description}
									</p>
								</motion.div>
							</GlowCard>
						))}
					</div>
					{labourData.coreValues.definition && (
						<p className='mt-6 text-green-500 text-center text-xl'>
							{labourData.coreValues.definition}
						</p>
					)}
				</motion.section>

				{/* Guiding Principles */}
				<motion.section
					variants={sectionVariants}
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true }}
				>
					<h2 className='text-4xl font-extrabold mb-6 text-yellow-500 flex justify-center gap-3'>
						Guiding Principles
					</h2>
					<div className='grid md:grid-cols-2 gap-6'>
						{labourData.guidingPrinciples.principles.map((principle, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, x: 20 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								viewport={{ once: true }}
								className='p-6 rounded-xl shadow-md border flex gap-4 items-start'
							>
								<span className='flex-shrink-0 w-8 h-8 bg-gradient-to-br from-gray-600 to-gray-800 dark:from-gray-400 dark:to-gray-600 text-white dark:text-gray-900 rounded-full flex items-center justify-center text-base font-bold'>
									{index + 1}
								</span>
								<p className='text-foreground'>{principle}</p>
							</motion.div>
						))}
					</div>
				</motion.section>
			</div>
		</div>
	);
};

export default DoL;
