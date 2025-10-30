"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, ChevronDown, ChevronRight } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import { navigationLinks } from "@/constants/navigationLinks";
import { useTheme } from "next-themes";

const MobileNavbar = () => {
	const [open, setOpen] = useState(false);
	const [expandedItems, setExpandedItems] = useState<string[]>([]);
	const pathname = usePathname();
	const { resolvedTheme } = useTheme();

	const toggleExpanded = (href: string) => {
		setExpandedItems((prev) =>
			prev.includes(href)
				? prev.filter((item) => item !== href)
				: [...prev, href]
		);
	};

	const isActive = (href: string) =>
		pathname === href || pathname.startsWith(`${href}/`);

	const headingImage =
		resolvedTheme === "dark" ? "/assets/heading2.png" : "/assets/heading1.png";

	return (
		<div className='flex md:hidden w-full'>
			<Sheet open={open} onOpenChange={setOpen}>
				<div className='flex items-center justify-between px-4 py-3'>
					<div className='flex flex-col items-center justify-center w-full'>
						<Image
							src={headingImage}
							alt='heading'
							width={600}
							height={600}
							className='mb-2'
							priority
						/>
						<p className='text-xl font-bold text-center text-accent-foreground'>
							Ministry of Industry, Commerce and Employment
						</p>
					</div>

					<SheetTrigger asChild>
						<button className='h-10 w-10 ml-auto cursor-pointer'>
							<Menu className='h-8 w-8' />
							<span className='sr-only'>Toggle menu</span>
						</button>
					</SheetTrigger>
				</div>

				<SheetContent
					side='left'
					className='w-[300px] sm:w-[400px] overflow-y-auto p-0'
				>
					<nav className='flex flex-col gap-1 mt-2'>
						{navigationLinks.map((link) => (
							<div key={link.href}>
								{link.subLinks ? (
									<Collapsible
										open={expandedItems.includes(link.href)}
										onOpenChange={() => toggleExpanded(link.href)}
									>
										<CollapsibleTrigger
											className={cn(
												"flex w-full cursor-pointer items-center justify-between px-4 py-3 text-base font-semibold uppercase border-b transition-all duration-200",
												"text-foreground hover:text-emerald-600 dark:hover:text-emerald-400",
												isActive(link.href) &&
													"text-emerald-600 dark:text-emerald-400 border-b-2 border-emerald-500 dark:border-emerald-400"
											)}
										>
											{link.label}
											{expandedItems.includes(link.href) ? (
												<ChevronDown className='h-4 w-4' />
											) : (
												<ChevronRight className='h-4 w-4' />
											)}
										</CollapsibleTrigger>

										<CollapsibleContent className='ml-4 mt-1 flex flex-col border-l border-emerald-500/50'>
											{link.subLinks.map((subLink) => (
												<Link
													key={subLink.href}
													href={subLink.href}
													onClick={() => setOpen(false)}
													className={cn(
														"block px-4 py-2.5 text-sm transition-all duration-200 border-l-4",
														isActive(subLink.href)
															? "text-emerald-700 dark:text-emerald-400 font-semibold border-emerald-500 dark:border-emerald-400 bg-accent/20"
															: "border-transparent text-foreground hover:text-yellow-500 hover:border-green-500 dark:hover:text-yellow-500 dark:hover:border-green-500 hover:translate-x-1"
													)}
												>
													{subLink.label}
												</Link>
											))}
										</CollapsibleContent>
									</Collapsible>
								) : (
									<Link
										href={link.href}
										onClick={() => setOpen(false)}
										className={cn(
											"block px-4 py-3 text-base font-semibold uppercase transition-all duration-200 border-b",
											"text-foreground hover:text-emerald-600 dark:hover:text-emerald-400",
											isActive(link.href) &&
												"text-emerald-600 dark:text-emerald-400 border-b-2 border-emerald-500 dark:border-emerald-400"
										)}
									>
										{link.label}
									</Link>
								)}
							</div>
						))}
					</nav>
				</SheetContent>
			</Sheet>
		</div>
	);
};

export default MobileNavbar;
