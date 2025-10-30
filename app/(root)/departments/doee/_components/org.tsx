import React from "react";

const OrganizationalChart = () => {
	return (
		<div className='relative w-full border-t-2 border-yellow-700'>
			{/* Chart container with horizontal scroll */}
			<div className=' flex flex-col items-center justify-center'>
				<p className='mt-2 w-fit justify-end px-9 py-2.5 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-sm font-semibold rounded-full shadow-lg'>
					Organisational Structure
				</p>
			</div>
			<div className='w-full overflow-x-auto overflow-y-auto'>
				<div className='min-w-fit p-4 flex flex-col items-center'>
					{/* Top Level - Ministry */}
					<div className='bg-blue-600 text-white rounded-md shadow-md p-2 w-80 text-center font-medium mb-0 text-sm'>
						Ministry of Industry, Commerce and Employment
					</div>

					{/* Connector Line with arrow */}
					<div className='relative w-px h-4 bg-gray-400 dark:bg-gray-600'>
						<div className='absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-400 dark:border-t-gray-600'></div>
					</div>

					{/* Director's Office Level */}
					<div className='bg-indigo-600 text-white rounded-md shadow-md p-2 w-72 text-center font-medium mb-0 text-sm'>
						<div>Department of Employment and Entrepreneurship</div>
						<div className='text-xs mt-1 opacity-90'>
							Director General/Director
						</div>
						<div className='mt-1 bg-white text-indigo-600 rounded px-2 py-0.5 text-xs inline-block font-semibold'>
							Director &apos;s Office
						</div>
					</div>

					{/* Connector Line with horizontal extension and arrow */}
					<div className='relative w-4/5 h-6'>
						<div className='absolute left-0 right-0 top-3 h-px bg-gray-400 dark:bg-gray-600'></div>
						<div className='relative w-px h-6 bg-gray-400 dark:bg-gray-600 mx-auto'>
							<div className='absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-400 dark:border-t-gray-600'></div>
						</div>
					</div>

					{/* Three Main Divisions */}
					<div className='flex justify-center gap-2 mb-0'>
						<div className='bg-emerald-600 text-white rounded-md shadow-md p-1.5 w-48 text-center text-xs'>
							<div className='font-medium'>Employment Service Division</div>
							<div className='mt-1 bg-white text-emerald-600 rounded px-2 py-0.5 text-xs inline-block font-semibold'>
								ESD
							</div>
						</div>

						<div className='bg-purple-600 text-white rounded-md shadow-md p-1.5 w-48 text-center text-xs'>
							<div className='font-medium'>
								Labour Market Information and Career Guidance Division
							</div>
							<div className='mt-1 bg-white text-purple-600 rounded px-2 py-0.5 text-xs inline-block font-semibold'>
								LMICGD
							</div>
						</div>

						<div className='bg-orange-600 text-white rounded-md shadow-md p-1.5 w-48 text-center text-xs'>
							<div className='font-medium'>
								Entrepreneurship Promotion Division
							</div>
							<div className='mt-1 bg-white text-orange-600 rounded px-2 py-0.5 text-xs inline-block font-semibold'>
								EPD
							</div>
						</div>
					</div>

					{/* Connector Line for Units */}
					<div className='relative w-11/12 h-8'>
						<div className='absolute left-0 right-0 top-4 h-px bg-gray-400 dark:bg-gray-600'></div>

						{/* Vertical connectors */}
						<div className='absolute left-[16.5%] top-0 w-px h-4 bg-gray-400 dark:bg-gray-600'>
							<div className='absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-400 dark:border-t-gray-600'></div>
						</div>
						<div className='absolute left-[50%] top-0 w-px h-4 bg-gray-400 dark:bg-gray-600'>
							<div className='absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-400 dark:border-t-gray-600'></div>
						</div>
						<div className='absolute left-[83.5%] top-0 w-px h-4 bg-gray-400 dark:bg-gray-600'>
							<div className='absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-400 dark:border-t-gray-600'></div>
						</div>
					</div>

					{/* Units under each division */}
					<div className='grid grid-cols-3 gap-2 w-11/12'>
						{/* ESD Units */}
						<div className='flex flex-col items-center'>
							{[
								["Engagement Program Unit", "EPU"],
								["Overseas Employment Unit", "OEU"],
								["Employment Service Centre", "ESC"],
							].map(([title, code]) => (
								<div key={code} className='flex flex-col items-center mb-2'>
									<div className='relative w-px h-3 bg-gray-400 dark:bg-gray-600'>
										<div className='absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-400 dark:border-t-gray-600'></div>
									</div>
									<div className='bg-emerald-500 text-white rounded-md shadow-md p-1.5 w-40 text-center text-xs'>
										<div className='font-medium'>{title}</div>
										<div className='mt-1 bg-white text-emerald-600 rounded px-2 py-0.5 text-xs inline-block font-semibold'>
											{code}
										</div>
									</div>
								</div>
							))}
						</div>

						{/* LMICGD Units */}
						<div className='flex flex-col items-center'>
							{[
								["Labour Market Information and Research Unit", "LMIRU"],
								["Program and Career Guidance Unit", "PCGU"],
							].map(([title, code]) => (
								<div key={code} className='flex flex-col items-center mb-2'>
									<div className='relative w-px h-3 bg-gray-400 dark:bg-gray-600'>
										<div className='absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-400 dark:border-t-gray-600'></div>
									</div>
									<div className='bg-purple-500 text-white rounded-md shadow-md p-1.5 w-40 text-center text-xs'>
										<div className='font-medium'>{title}</div>
										<div className='mt-1 bg-white text-purple-600 rounded px-2 py-0.5 text-xs inline-block font-semibold'>
											{code}
										</div>
									</div>
								</div>
							))}
						</div>

						{/* EPD Units */}
						<div className='flex flex-col items-center'>
							{[
								["Entrepreneurship Development and Acceleration Unit", "EDAU"],
								["Startup and Incubation Unit", "SIU"],
							].map(([title, code]) => (
								<div key={code} className='flex flex-col items-center mb-2'>
									<div className='relative w-px h-3 bg-gray-400 dark:bg-gray-600'>
										<div className='absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-400 dark:border-t-gray-600'></div>
									</div>
									<div className='bg-orange-500 text-white rounded-md shadow-md p-1.5 w-40 text-center text-xs'>
										<div className='font-medium'>{title}</div>
										<div className='mt-1 bg-white text-orange-600 rounded px-2 py-0.5 text-xs inline-block font-semibold'>
											{code}
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OrganizationalChart;
