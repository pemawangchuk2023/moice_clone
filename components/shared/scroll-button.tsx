"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ScrollButtonProps {
	threshold?: number;
	position?: "bottom-right" | "bottom-left";
	size?: "sm" | "md" | "lg";
}

const ScrollButton = ({
	threshold = 300,
	position = "bottom-right",
	size = "lg",
}: ScrollButtonProps) => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const toggleVisibility = () => {
			setIsVisible(window.scrollY > threshold);
		};

		toggleVisibility();
		window.addEventListener("scroll", toggleVisibility);
		return () => window.removeEventListener("scroll", toggleVisibility);
	}, [threshold]);

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	const positionClasses = {
		"bottom-right": "bottom-6 right-6",
		"bottom-left": "bottom-6 left-6",
	};

	const sizeClasses = {
		sm: "px-3 py-2 text-sm",
		md: "px-4 py-2 text-base",
		lg: "px-5 py-3 text-lg",
	};

	const iconSize = {
		sm: "h-4 w-4",
		md: "h-5 w-5",
		lg: "h-9 w-9",
	};

	return (
		<Button
			onClick={scrollToTop}
			variant='secondary'
			className={cn(
				"fixed z-50 flex items-center gap-2 rounded-none cursor-pointer shadow-md transition-all duration-300 ease-in-out",
				positionClasses[position],
				sizeClasses[size],
				isVisible
					? "translate-y-0 opacity-90 hover:opacity-100"
					: "translate-y-4 opacity-0 pointer-events-none"
			)}
			aria-label='Scroll to top'
		>
			<ChevronUp className={cn("transition-transform", iconSize[size])} />
			<span>Scroll Up</span>
		</Button>
	);
};

export default ScrollButton;
