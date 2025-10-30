"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { DOEE_DATA } from "@/constants/doee";

const DOEEDivisions = () => {
	const [expandedDivisions, setExpandedDivisions] = useState<Set<number>>(
		new Set()
	);
	const [expandedUnits, setExpandedUnits] = useState<Set<string>>(new Set());
	const [showDirectorsOffice, setShowDirectorsOffice] = useState(false);

	const toggleDivision = (index: number) => {
		const newExpanded = new Set(expandedDivisions);
		if (newExpanded.has(index)) {
			newExpanded.delete(index);
		} else {
			newExpanded.add(index);
		}
		setExpandedDivisions(newExpanded);
	};

	const toggleUnit = (unitKey: string) => {
		const newExpanded = new Set(expandedUnits);
		if (newExpanded.has(unitKey)) {
			newExpanded.delete(unitKey);
		} else {
			newExpanded.add(unitKey);
		}
		setExpandedUnits(newExpanded);
	};

	return (
		<div className='min-h-screen py-4 px-4 sm:px-6 lg:px-8'>
			<div className='max-w-7xl mx-auto'>
				{/* Header */}
				<div className='text-center mb-12'>
					<h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground b-4'>
						Department of Employment and Entrepreneurship
					</h1>
					<div className='h-1 md:h-1.5 bg-gradient-to-r from-transparent via-yellow-500 to-transparent w-48 sm:w-64 mx-auto rounded-full mb-4 md:mb-6' />
				</div>

				{/* Director's Office */}
				<div className='mb-8'>
					<button
						onClick={() => setShowDirectorsOffice(!showDirectorsOffice)}
						className='w-full rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 p-6 border-2 border-amber-200'
					>
						<div className='flex items-center justify-between'>
							<div className='flex items-center space-x-4'>
								<div className='text-left'>
									<h2 className='text-2xl font-bold text-foreground'>
										{DOEE_DATA.directorsOffice.title}
									</h2>
									{!showDirectorsOffice && (
										<p className='text-sm text-yellow-500 mt-1'>
											Click to view details
										</p>
									)}
								</div>
							</div>
							{showDirectorsOffice ? (
								<ChevronUp className='w-6 h-6 text-gray-400' />
							) : (
								<ChevronDown className='w-6 h-6 text-gray-400' />
							)}
						</div>
					</button>

					{showDirectorsOffice && (
						<div className='mt-4 rounded-lg shadow-md p-6 border-l-4 border-amber-500'>
							<p className='text-foreground mb-6'>
								{DOEE_DATA.directorsOffice.description}
							</p>
							<h3 className='text-xl font-semibold text-yellow-500 mb-4'>
								Mandate
							</h3>
							<div className='space-y-3'>
								{DOEE_DATA.directorsOffice.mandate.map((item, index) => (
									<div key={index} className='flex items-start space-x-3'>
										<span className='flex-shrink-0 w-6 h-6 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center text-sm font-semibold mt-0.5'>
											{index + 1}
										</span>
										<p className='text-foreground text-left flex-1'>{item}</p>
									</div>
								))}
							</div>
						</div>
					)}
				</div>

				{/* Divisions */}
				<div className='space-y-6'>
					{DOEE_DATA.divisions.map((division, divIndex) => {
						const isExpanded = expandedDivisions.has(divIndex);

						return (
							<div key={divIndex} className='mb-8'>
								<button
									onClick={() => toggleDivision(divIndex)}
									className='w-full rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 p-6 border-2 border-amber-200'
								>
									<div className='flex items-center justify-between'>
										<div className='flex items-center space-x-4'>
											<div className='text-left'>
												<h2 className='text-xl font-bold text-foreground'>
													{division.name}
												</h2>
												<p className='text-sm text-yellow-500 mt-1'>
													{division.units.length} units
													{!isExpanded && " • Click to view details"}
												</p>
											</div>
										</div>
										{isExpanded ? (
											<ChevronUp className='w-6 h-6 text-gray-400' />
										) : (
											<ChevronDown className='w-6 h-6 text-gray-400' />
										)}
									</div>
								</button>

								{isExpanded && (
									<div className='mt-4 rounded-lg shadow-md p-6 border-l-4 border-amber-500'>
										{/* Overview */}
										<div className='mb-6'>
											<h3 className='text-xl font-semibold text-yellow-500 mb-4'>
												Overview
											</h3>
											<p className='text-foreground'>{division.overview}</p>
										</div>

										{/* Responsibilities */}
										<div className='mb-6'>
											<h3 className='text-xl font-semibold text-yellow-500 mb-4'>
												Key Responsibilities
											</h3>
											<div className='space-y-3'>
												{division.responsibilities.map((resp, respIndex) => (
													<div
														key={respIndex}
														className='flex items-start space-x-3'
													>
														<span className='flex-shrink-0 w-6 h-6 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center text-sm font-semibold mt-0.5'>
															{respIndex + 1}
														</span>
														<p className='text-foreground text-left flex-1'>
															{resp}
														</p>
													</div>
												))}
											</div>
										</div>

										{/* Units */}
										<div>
											<h3 className='text-xl font-semibold text-yellow-500 mb-4'>
												Units
											</h3>
											<div className='space-y-4'>
												{division.units.map((unit, unitIndex) => {
													const unitKey = `${divIndex}-${unitIndex}`;
													const isUnitExpanded = expandedUnits.has(unitKey);

													return (
														<div
															key={unitIndex}
															className='border-2 border-amber-200 rounded-lg overflow-hidden'
														>
															<button
																onClick={() => toggleUnit(unitKey)}
																className='w-full p-4 flex items-center justify-between'
															>
																<h4 className='font-semibold text-yellow-500 text-left'>
																	{unit.name}
																</h4>
																{isUnitExpanded ? (
																	<ChevronUp className='w-5 h-5 text-foreground flex-shrink-0' />
																) : (
																	<ChevronDown className='w-5 h-5 text-foreground flex-shrink-0' />
																)}
															</button>

															{isUnitExpanded && (
																<div className='p-4'>
																	<h5 className='text-sm font-semibold text-yellow-500 mb-3'>
																		Responsibilities
																	</h5>
																	<div className='space-y-3'>
																		{unit.responsibilities.map(
																			(resp, respIndex) => (
																				<div
																					key={respIndex}
																					className='flex items-start space-x-3'
																				>
																					<span className='flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-semibold mt-0.5'>
																						{respIndex + 1}
																					</span>
																					<p className='text-foreground text-left flex-1'>
																						{resp}
																					</p>
																				</div>
																			)
																		)}
																	</div>
																</div>
															)}
														</div>
													);
												})}
											</div>
										</div>
									</div>
								)}
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default DOEEDivisions;
