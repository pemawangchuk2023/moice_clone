import Image from "next/image";

const OrganisationalStructure = () => {
	return (
		<section className='flex flex-col items-center justify-center py-10 px-4'>
			<div className='text-center mb-8'>
				<h2 className='text-2xl md:text-3xl font-bold text-yellow-500 mb-2'>
					Organisational Structure of MoICE
				</h2>
				<p className='text-foreground max-w-xl mx-auto text-sm md:text-base'>
					A visual overview of MoICE's organisation’s structure, showing how
					roles and teams are connected.
				</p>
			</div>

			{/* ✅ Image Container */}
			<div className='w-full max-w-4xl flex justify-center'>
				<div className='relative w-full h-auto'>
					<Image
						src='/assets/os.png'
						alt='Organizational Structure'
						width={1000}
						height={600}
						className='w-full h-auto rounded-2xl shadow-lg object-contain'
						priority
					/>
				</div>
			</div>
		</section>
	);
};

export default OrganisationalStructure;
