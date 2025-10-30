import React from "react";

const Disclaimer = () => {
	return (
		<div className='max-w-4xl mx-auto my-2 px-4'>
			<div className='bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r shadow-sm'>
				<div className='flex items-start'>
					<div className='flex-shrink-0 pt-0.5'>
						<svg
							className='h-5 w-5 text-amber-400'
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
					<div className='ml-3'>
						<h3 className='text-sm font-medium text-amber-800'>Disclaimer</h3>
						<div className='mt-2 text-sm text-amber-700 text-justify'>
							<p>
								This is a cloned website created for
								<span className='font-medium mx-1 bg-amber-100 text-amber-800 px-2 py-0.5 rounded'>
									educational purposes
								</span>
								only. It is developing as part of a
								<span className='font-medium mx-1 bg-amber-100 text-amber-800 px-2 py-0.5 rounded'>
									web development course.
								</span>
								It is
								<span className='font-medium mx-1 bg-amber-100 text-green-800 px-2 py-0.5 rounded'>
									not affiliated
								</span>
								with or endorsed by the Ministry of Industry, Commerce and
								Employment.
								<span className='ml-2'>
									The cloning of website is
									<span className='text-green-800 font-bold ml-2 mr-2 italic'>
										JUST COMPLETED 20%
									</span>
									and development is still going on.
								</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Disclaimer;
