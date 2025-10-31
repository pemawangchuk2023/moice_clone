"use client";

import React from "react";
import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination";

interface PaginationComponentProps {
	currentPage: number;
	totalPages: number;
	onPageChange: (page: number) => void;
	maxVisiblePages?: number;
}

const PaginationComponent = ({
	currentPage,
	totalPages,
	onPageChange,
	maxVisiblePages = 4,
}: PaginationComponentProps) => {
	const getPageNumbers = () => {
		const pages: (number | "ellipsis")[] = [];

		if (totalPages <= maxVisiblePages) {
			// Show all pages if total is less than max visible
			for (let i = 1; i <= totalPages; i++) {
				pages.push(i);
			}
		} else {
			// Always show first page
			pages.push(1);

			// Calculate start and end of middle section
			let startPage = Math.max(2, currentPage - 1);
			let endPage = Math.min(totalPages - 1, currentPage + 1);

			// Adjust if we're near the start
			if (currentPage <= 3) {
				endPage = Math.min(4, totalPages - 1);
			}

			// Adjust if we're near the end
			if (currentPage >= totalPages - 2) {
				startPage = Math.max(2, totalPages - 3);
			}

			// Add ellipsis after first page if needed
			if (startPage > 2) {
				pages.push("ellipsis");
			}

			// Add middle pages
			for (let i = startPage; i <= endPage; i++) {
				pages.push(i);
			}

			// Add ellipsis before last page if needed
			if (endPage < totalPages - 1) {
				pages.push("ellipsis");
			}

			// Always show last page
			if (totalPages > 1) {
				pages.push(totalPages);
			}
		}

		return pages;
	};

	const pageNumbers = getPageNumbers();

	const handlePrevious = () => {
		if (currentPage > 1) {
			onPageChange(currentPage - 1);
		}
	};

	const handleNext = () => {
		if (currentPage < totalPages) {
			onPageChange(currentPage + 1);
		}
	};

	if (totalPages <= 1) {
		return null; // Don't render pagination if there's only one page or no pages
	}

	return (
		<Pagination>
			<PaginationContent>
				<PaginationItem>
					<PaginationPrevious
						onClick={handlePrevious}
						className={
							currentPage === 1
								? "pointer-events-none opacity-50"
								: "cursor-pointer"
						}
					/>
				</PaginationItem>

				{pageNumbers.map((pageNum, index) => (
					<PaginationItem key={`${pageNum}-${index}`}>
						{pageNum === "ellipsis" ? (
							<PaginationEllipsis />
						) : (
							<PaginationLink
								onClick={() => onPageChange(pageNum)}
								isActive={currentPage === pageNum}
								className='cursor-pointer'
							>
								{pageNum}
							</PaginationLink>
						)}
					</PaginationItem>
				))}

				<PaginationItem>
					<PaginationNext
						onClick={handleNext}
						className={
							currentPage === totalPages
								? "pointer-events-none opacity-50"
								: "cursor-pointer"
						}
					/>
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	);
};

export default PaginationComponent;
