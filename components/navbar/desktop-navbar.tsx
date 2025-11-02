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
import ThemeToggle from "@/themes/theme-toggle";

const DesktopNavbar = () => {
	const pathname = usePathname();

	const isActive = (href: string) => {
		return pathname === href || pathname.startsWith(`${href}/`);
	};

	return (
		<div className='hidden md:block sticky top-0 w-full z-50 bg-background shadow-md relative'>
			{/* Top Bar: Left emblem — Dzongkha title — Right logo */}
			<div className='w-full flex items-center justify-between py-4 px-6'>
				{/* Left Logo */}
				<Image
					src='/assets/logo.png'
					alt='Royal Emblem'
					width={120}
					height={120}
					className='rounded-md'
					priority
				/>

				{/* Center Dzongkha Title */}
				<div
					lang='dz'
					className='text-center leading-snug'
					style={{
						fontFamily: "'DDCUchenRegular','DDC Uchen', serif",
						fontWeight: 700,
						WebkitTextStroke: "0.3px",
						textShadow: "0.3px 0.3px",
					}}
				>
					<p className='text-[1.6rem] md:text-[1.8rem] lg:text-[2rem] text-amber-600'>
						༆བཟོ་གྲྭ་ཚོང་འབྲེལ་དང་ལཱ་གཡོག་ལྷན་ཁག །
					</p>
					<p className='text-[1.4rem] md:text-[1.6rem] lg:text-[1.8rem] mt-1'>
						དཔལ་ལྡན་འབྲུག་གཞུང་།
					</p>
				</div>

				{/* Right Logo + Theme Toggle */}
				<div className='flex items-center gap-2'>
					<Image
						src='/assets/believe.png'
						alt='Believe Logo'
						width={150}
						height={150}
						className='rounded-none'
						priority
					/>
					<ThemeToggle />
				</div>
			</div>

			{/* Ministry name - responsive text sizing */}
			<p className='text-2xl md:text-3xl lg:text-4xl font-bold text-center mt-0 px-4 tracking-wide leading-relaxed bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 bg-clip-text text-transparent'>
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
													"uppercase font-semibold text-sm md:text-base lg:text-lg h-9 md:h-10 px-3 md:px-4 lg:px-5 group rounded-none border-b-2 border-emerald-500 dark:border-emerald-400 cursor-pointer whitespace-nowrap transition-all duration-300",
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
