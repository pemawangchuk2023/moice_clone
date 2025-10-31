"use client";

import {
	DropdownMenu,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Menu } from "lucide-react";
import ThemeToggle from "@/components/theme/theme-toggle";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { getAdmin } from "@/lib/actions/admin.action";
import { getInitials } from "@/lib/utils";

interface AdminData {
	firstName: string;
	lastName: string;
}

const TopNav = () => {
	const [admin, setAdmin] = useState<AdminData | null>(null);

	useEffect(() => {
		const fetchAdmin = async () => {
			try {
				const result = await getAdmin();
				if (result.success && result.data) {
					setAdmin({
						firstName: result.data.firstName,
						lastName: result.data.lastName,
					});
				} else {
					console.error("Failed to fetch admin:", result.error);
				}
			} catch (error) {
				console.error("Error in fetchAdmin:", error);
			}
		};

		fetchAdmin();
	}, []);

	return (
		<nav className='px-3 sm:px-6 flex items-center justify-between bg-white dark:bg-[#0F0F12] border-b border-gray-200 dark:border-[#1F1F23] h-full'>
			<div className='flex items-center gap-4'>
				<SidebarTrigger>
					<Button
						variant='ghost'
						size='icon'
						className='p-2 rounded-lg bg-white dark:bg-[#0F0F12] shadow-md'
					>
						<Menu className='h-5 w-5 text-foreground' />
					</Button>
				</SidebarTrigger>
				{admin && (
					<div className='text-foreground font-medium text-sm sm:text-base'>
						Welcome,{" "}
						<span className='text-amber-500'>
							{admin.firstName} {admin.lastName}
						</span>
					</div>
				)}
			</div>

			<div className='flex items-center gap-2 sm:gap-4 ml-auto sm:ml-0'>
				<ThemeToggle />
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						{admin ? (
							<div className='w-8 h-8 border-2 rounded-xl flex items-center justify-center text-foreground font-medium text-sm'>
								{getInitials(admin.firstName, admin.lastName)}
							</div>
						) : (
							<div className='w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-600 animate-pulse' />
						)}
					</DropdownMenuTrigger>
				</DropdownMenu>
			</div>
		</nav>
	);
};

export default TopNav;
