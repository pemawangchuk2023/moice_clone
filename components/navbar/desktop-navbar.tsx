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

const DesktopNavbar = () => {
	const { resolvedTheme } = useTheme();
	const pathname = usePathname();

	const isActive = (href: string) => {
		return pathname === href || pathname.startsWith(`${href}/`);
	};
	const headingImage =
		resolvedTheme === "dark" ? "/assets/heading2.png" : "/assets/heading1.png";

	return (
		<div className='hidden lg:flex flex-col w-full'>
			{/* Logo and heading container with grid */}
			<div className='relative flex items-center justify-center pb-1 px-6 mt-[-35px]'>
				{/* Emblem - positioned absolutely to the left */}

				{/* Heading - stays centered */}
				<div className='flex justify-center rounded-none'>
					<Image
						src={headingImage}
						alt='heading'
						width={700}
						height={700}
						className='hidden md:block dark:invert-0'
						priority
					/>
				</div>
			</div>
			<p className='text-3xl text-foreground font-extrabold text-center mt-1'>
				Ministry of Industry, Commerce and Employment
			</p>

			<div className='flex items-center justify-center w-full mt-4'>
				<div className='flex items-center justify-center w-full'>
					{/* Navigation Menu */}
					<NavigationMenu>
						<NavigationMenuList className='flex justify-center gap-2 sm:gap-4 w-full flex-wrap'>
							{navigationLinks.map((item) => (
								<NavigationMenuItem key={item.label}>
									{item.subLinks ? (
										<>
											<NavigationMenuTrigger
												className={cn(
													"uppercase font-bold text-xl sm:text-sm h-12 px-4 sm:px-4 group rounded-none border-b-2 border-emerald-500 dark:border-emerald-400 cursor-pointer whitespace-nowrap transition-all duration-300",
													"text-foreground hover:text-emerald-600 dark:hover:text-emerald-400",
													item.subLinks.some((sub) => isActive(sub.href)) &&
														"text-emerald-600 dark:text-emerald-400 border-b-4"
												)}
											>
												{item.label}
											</NavigationMenuTrigger>

											<NavigationMenuContent>
												<div className='w-[280px] sm:w-[400px] md:w-[500px] lg:w-[600px] p-6 border dark:bg-[#030712] bg-card'>
													<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2'>
														{item.subLinks.map((sub) => (
															<Link
																key={sub.label}
																href={sub.href}
																className={cn(
																	"block text-sm py-3 px-4 transition-all duration-200 border-l-4",
																	isActive(sub.href)
																		? "text-emerald-700 dark:text-emerald-400 font-semibold border-emerald-500 dark:border-emerald-400 shadow-sm"
																		: "border-transparent text-foreground  hover:text-yellow-500 dark:hover:text-yellow-500 hover:border-green-500 dark:hover:border-green-500 hover:translate-x-1"
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
													"uppercase font-semibold text-xs sm:text-sm h-10 px-2 sm:px-4 relative group border-b-2 border-emerald-500 dark:border-emerald-400 cursor-pointer whitespace-nowrap transition-all duration-300 rounded-none",
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
