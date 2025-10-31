"use client";

import React, { useState, useMemo } from "react";
import { Search, FileText, Calendar, Download } from "lucide-react";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import GlowCard from "@/components/shared/glow-card";
import PaginationComponent from "@/components/shared/pagination";
import {
	DoTPublication,
	DoTPublicationCategory,
} from "@/constants/publications/trade";

interface PublicationsProps {
	categories: DoTPublicationCategory[];
	viewMode?: "cards" | "compact";
	itemsPerPage?: number;
}

const DoT = ({
	categories,
	viewMode: initialViewMode = "cards",
	itemsPerPage = 3,
}: PublicationsProps) => {
	const [searchTerm, setSearchTerm] = useState("");
	const [selectedCategory, setSelectedCategory] = useState<string>("all");
	const [viewMode, setViewMode] = useState<"cards" | "compact">(
		initialViewMode
	);
	const [currentPages, setCurrentPages] = useState<Record<string, number>>({});

	// Filter publications based on search and category
	const filteredCategories = useMemo(() => {
		return categories
			.map((category) => ({
				...category,
				publications: category.publications.filter(
					(pub) =>
						pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
						pub.fileName.toLowerCase().includes(searchTerm.toLowerCase()) ||
						(pub.date &&
							pub.date.toLowerCase().includes(searchTerm.toLowerCase()))
				),
			}))
			.filter(
				(category) =>
					(selectedCategory === "all" || category.key === selectedCategory) &&
					category.publications.length > 0
			);
	}, [categories, searchTerm, selectedCategory]);

	const totalPublications = useMemo(() => {
		return filteredCategories.reduce(
			(sum, cat) => sum + cat.publications.length,
			0
		);
	}, [filteredCategories]);

	// Flatten all publications when "all" category is selected
	const allPublications = useMemo(() => {
		return filteredCategories.flatMap((cat) => cat.publications);
	}, [filteredCategories]);

	// Get paginated publications for a specific category
	const getPaginatedPublications = (category: DoTPublicationCategory) => {
		const currentPage = currentPages[category.key] || 1;
		const startIndex = (currentPage - 1) * itemsPerPage;
		const endIndex = startIndex + itemsPerPage;
		return category.publications.slice(startIndex, endIndex);
	};

	// Get paginated publications for "all" view (3 items per page)
	const getPaginatedAllPublications = () => {
		const currentPage = currentPages["all"] || 1;
		const itemsPerPageAll = 3;
		const startIndex = (currentPage - 1) * itemsPerPageAll;
		const endIndex = startIndex + itemsPerPageAll;
		return allPublications.slice(startIndex, endIndex);
	};

	const getTotalPages = (category: DoTPublicationCategory) => {
		return Math.ceil(category.publications.length / itemsPerPage);
	};

	// Get total pages for "all" view
	const getTotalPagesAll = () => {
		const itemsPerPageAll = 5;
		return Math.ceil(allPublications.length / itemsPerPageAll);
	};

	const handlePageChange = (categoryKey: string, page: number) => {
		setCurrentPages((prev) => ({
			...prev,
			[categoryKey]: page,
		}));
	};

	useMemo(() => {
		setCurrentPages({});
	}, [searchTerm, selectedCategory]);

	return (
		<div className='min-h-screen py-12 px-4 sm:px-6 lg:px-8'>
			<div className='max-w-7xl mx-auto'>
				{/* Header */}

				{/* Search and Filter Controls */}
				<div className='p-6 mb-8'>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
						{/* Search */}
						<div className='md:col-span-2'>
							<div className='relative'>
								<Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground w-5 h-5' />
								<Input
									type='text'
									placeholder='Search publications...'
									value={searchTerm}
									onChange={(e) => setSearchTerm(e.target.value)}
									className='w-full pl-10 rounded-none border-amber-500 pr-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none'
								/>
							</div>
						</div>

						{/* Category Filter - shadcn Select */}
						<div>
							<Select
								value={selectedCategory}
								onValueChange={setSelectedCategory}
							>
								<SelectTrigger className='w-full rounded-none border-amber-500'>
									<SelectValue placeholder='All Categories' />
								</SelectTrigger>
								<SelectContent>
									<SelectGroup>
										<SelectItem value='all'>All Categories</SelectItem>
										{categories.map((cat) => (
											<SelectItem key={cat.key} value={cat.key}>
												{cat.name}
											</SelectItem>
										))}
									</SelectGroup>
								</SelectContent>
							</Select>
						</div>
					</div>

					{/* View Mode Toggle and Count */}
					<div className='flex items-center justify-between mt-4 pt-4 border-t border-slate-200'>
						<p className='text-sm text-foreground'>
							Showing <span className='font-semibold'>{totalPublications}</span>{" "}
							publications
						</p>
						<div className='flex gap-2'>
							<button
								onClick={() => setViewMode("cards")}
								className={`px-4 py-2 rounded-none text-sm font-medium transition-colors ${
									viewMode === "cards"
										? "bg-blue-600 text-white"
										: "bg-slate-200 text-slate-700 hover:bg-slate-300"
								}`}
							>
								Card View
							</button>
							<button
								onClick={() => setViewMode("compact")}
								className={`px-4 py-2 rounded-none text-sm font-medium transition-colors ${
									viewMode === "compact"
										? "bg-blue-600 text-white"
										: "bg-slate-200 text-slate-700 hover:bg-slate-300"
								}`}
							>
								Compact View
							</button>
						</div>
					</div>
				</div>

				{/* Publications Display */}
				{filteredCategories.length === 0 ? (
					<div className='text-center py-12'>
						<FileText className='w-16 h-16 text-slate-300 mx-auto mb-4' />
						<h3 className='text-xl font-semibold text-slate-700 mb-2'>
							No publications found
						</h3>
						<p className='text-slate-500'>
							Try adjusting your search or filter criteria
						</p>
					</div>
				) : selectedCategory === "all" ? (
					// Unified view for "All Categories" with 5 items per page
					<div className='mb-12'>
						<div className='mb-6'>
							<h2 className='text-2xl font-bold text-foreground mb-2'>
								All Publications {}
							</h2>
							<div className='h-1 w-20 bg-blue-600 rounded'></div>
						</div>

						{/* Publications Grid/List */}
						{viewMode === "cards" ? (
							<div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6'>
								{getPaginatedAllPublications().map((pub, index) => (
									<GlowCard
										key={index}
										className='rounded-xl p-2 flex flex-col relative overflow-hidden bg-white dark:bg-zinc-900 border-2 border-border hover:border-primary/50 transition-colors'
									>
										<PublicationCard publication={pub} />
									</GlowCard>
								))}
							</div>
						) : (
							<div className='space-y-3'>
								{getPaginatedAllPublications().map((pub, index) => (
									<PublicationCompact key={index} publication={pub} />
								))}
							</div>
						)}

						{/* Unified Pagination for All Categories */}
						<div className='mt-8 flex justify-center'>
							<PaginationComponent
								currentPage={currentPages["all"] || 1}
								totalPages={getTotalPagesAll()}
								onPageChange={(page) => handlePageChange("all", page)}
							/>
						</div>
					</div>
				) : (
					// Individual category view with 3 items per page
					filteredCategories.map((category) => {
						const paginatedPublications = getPaginatedPublications(category);
						const totalPages = getTotalPages(category);
						const currentPage = currentPages[category.key] || 1;

						return (
							<div key={category.key} className='mb-12'>
								{/* Category Header */}
								<div className='mb-6'>
									<h2 className='text-2xl font-bold text-foreground mb-2'>
										{category.name}
									</h2>
									<div className='h-1 w-20 bg-blue-600 rounded'></div>
								</div>

								{/* Publications Grid/List */}
								{viewMode === "cards" ? (
									<div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6'>
										{paginatedPublications.map((pub, index) => (
											<GlowCard
												key={index}
												className='rounded-xl p-2 flex flex-col relative overflow-hidden bg-white dark:bg-zinc-900 border-2 border-border hover:border-primary/50 transition-colors'
											>
												<PublicationCard publication={pub} />
											</GlowCard>
										))}
									</div>
								) : (
									<div className='space-y-3'>
										{paginatedPublications.map((pub, index) => (
											<PublicationCompact key={index} publication={pub} />
										))}
									</div>
								)}

								{/* Pagination per Category */}
								<div className='mt-8 flex justify-center'>
									<PaginationComponent
										currentPage={currentPage}
										totalPages={totalPages}
										onPageChange={(page) =>
											handlePageChange(category.key, page)
										}
									/>
								</div>
							</div>
						);
					})
				)}
			</div>
		</div>
	);
};

// Card View Component
const PublicationCard: React.FC<{ publication: DoTPublication }> = ({
	publication,
}) => {
	return (
		<a href={publication.url} target='_blank' rel='noopener noreferrer'>
			<div className='p-4'>
				{/* Icon - Smaller */}
				<div className='w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-3 group-hover:bg-blue-600 transition-colors'>
					<FileText className='w-5 h-5 text-blue-600 group-hover:text-white transition-colors' />
				</div>

				{/* Title - Smaller with line clamp */}
				<h3 className='text-base font-semibold text-foreground mb-2 line-clamp-2'>
					{publication.title}
				</h3>

				{/* Date - Smaller */}
				{publication.date && (
					<div className='flex items-center text-xs text-foreground mb-2'>
						<Calendar className='w-3 h-3 mr-1' />
						<span>{publication.date}</span>
					</div>
				)}

				{/* File Name - Smaller */}
				<p className='text-xs text-amber-500 border w-fit rounded-md px-2 py-1 mb-3 break-words whitespace-normal'>
					{publication.fileName}
				</p>

				{/* Download Button - Smaller */}
				<div className='flex items-center text-blue-600 font-medium text-xs group-hover:text-blue-700'>
					<Download className='w-3 h-3 mr-1' />
					<span>View Document</span>
				</div>
			</div>
		</a>
	);
};

// Compact View Component
const PublicationCompact: React.FC<{ publication: DoTPublication }> = ({
	publication,
}) => {
	return (
		<a
			href={publication.url}
			target='_blank'
			rel='noopener noreferrer'
			className='group flex items-center justify-between shadow-sm hover:shadow-md transition-all duration-200 p-4 hover:border-blue-500'
		>
			<GlowCard className='rounded-xl w-full p-2 flex flex-col relative overflow-hidden bg-white dark:bg-zinc-900 border-2 border-border hover:border-primary/50 transition-colors'>
				<div className='flex items-center flex-1 min-w-0'>
					<div className='w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-blue-600 transition-colors'>
						<FileText className='w-5 h-5 text-blue-600 group-hover:text-white transition-colors' />
					</div>

					<div className='flex-1 min-w-0'>
						<h3 className='text-base font-semibold text-foreground truncate group-hover:text-blue-600 transition-colors'>
							{publication.title}
						</h3>
						<div className='flex items-center gap-3 mt-1'>
							{publication.date && (
								<span className='text-sm text-foreground flex items-center'>
									<Calendar className='w-3 h-3 mr-1' />
									{publication.date}
								</span>
							)}
							<span className='text-sm text-slate-400 truncate'>
								{publication.fileName}
							</span>
						</div>
					</div>
				</div>
			</GlowCard>

			<Download className='w-5 h-5 text-blue-600 ml-4 flex-shrink-0 group-hover:text-blue-700' />
		</a>
	);
};

export default DoT;
