"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { navigationLinks } from "@/constants/navigationLinks";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { useTheme } from "next-themes";
import ThemeToggle from "@/themes/theme-toggle";

const DesktopNavbar = () => {
	const { resolvedTheme } = useTheme();
	const pathname = usePathname();

	const isActive = (href: string) => {
		return pathname === href || pathname.startsWith(`${href}/`);
	};
	const headingImage =
		resolvedTheme === "dark" ? "/assets/heading2.png" : "/assets/heading1.png";

	return (
		<div className='hidden md:block sticky top-0 w-full z-50 bg-background shadow-md'>
			<div className='absolute top-4 right-6 z-50'>
				<ThemeToggle />
			</div>
			{/* Logo and heading container */}
			<div className='relative flex items-center justify-center pb-2 px-6 mt-4'>
				{/* Heading - stays centered */}

				<div className='flex justify-center rounded-none'>
					<Image
						src={headingImage}
						alt='heading'
						width={600}
						height={600}
						className='hidden md:block dark:invert-0 w-auto h-auto max-w-[450px] lg:max-w-[450px]'
						priority
					/>
				</div>
			</div>

			{/* Ministry name - responsive text sizing */}
			<p className='text-2xl md:text-3xl lg:text-4xl font-bold text-center mt-4 px-4 tracking-wide leading-relaxed bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 bg-clip-text text-transparent'>
				Ministry of Industry, Commerce and Employment
			</p>

			{/* Navigation container with overflow handling */}
			<div className='flex items-center justify-center w-full mt-4 overflow-visible'>
				<div className='flex items-center justify-center min-w-max px-4 relative'>
					{/* Navigation Menu */}
					<NavigationMenu className='relative z-50'>
						<NavigationMenuList className='flex justify-center gap-1 lg:gap-2 w-full flex-nowrap'>
							{navigationLinks.map((item) => (
								<NavigationMenuItem key={item.label}>
									{item.subLinks ? (
										<>
											<NavigationMenuTrigger
												className={cn(
													"uppercase font-semibold text-[10px] md:text-xs lg:text-sm h-9 md:h-10 px-2 md:px-3 lg:px-4 group rounded-none border-b-2 border-emerald-500 dark:border-emerald-400 cursor-pointer whitespace-nowrap transition-all duration-300",
													"text-foreground hover:text-emerald-600 dark:hover:text-emerald-400",
													item.subLinks.some((sub) => isActive(sub.href)) &&
														"text-emerald-600 dark:text-emerald-400 border-b-4"
												)}
											>
												{item.label}
											</NavigationMenuTrigger>

											<NavigationMenuContent>
												<div className='w-[280px] sm:w-[400px] md:w-[500px] lg:w-[600px] p-4 md:p-6 border dark:bg-[#030712] bg-card'>
													<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2'>
														{item.subLinks.map((sub) => (
															<Link
																key={sub.label}
																href={sub.href}
																className={cn(
																	"block text-xs md:text-sm py-2.5 md:py-3 px-3 md:px-4 transition-all duration-200 border-l-4",
																	isActive(sub.href)
																		? "text-emerald-700 dark:text-emerald-400 font-semibold border-emerald-500 dark:border-emerald-400 shadow-sm"
																		: "border-transparent text-foreground hover:text-yellow-500 dark:hover:text-yellow-500 hover:border-green-500 dark:hover:border-green-500 hover:translate-x-1"
																)}
															>
																{sub.label}
															</Link>
														))}
													</div>
												</div>
											</NavigationMenuContent>
										</>
									) : (
										<Link href={item.href}>
											<div
												className={cn(
													navigationMenuTriggerStyle(),
													"uppercase font-semibold text-[10px] md:text-xs lg:text-sm h-9 md:h-10 px-2 md:px-3 lg:px-4 relative group border-b-2 border-emerald-500 dark:border-emerald-400 cursor-pointer whitespace-nowrap transition-all duration-300 rounded-none",
													"text-foreground hover:text-emerald-600 dark:hover:text-emerald-400",
													isActive(item.href) &&
														"text-emerald-600 dark:text-emerald-400 border-b-4"
												)}
											>
												{item.label}
											</div>
										</Link>
									)}
								</NavigationMenuItem>
							))}
						</NavigationMenuList>
					</NavigationMenu>
				</div>
			</div>
		</div>
	);
};

export default DesktopNavbar;
