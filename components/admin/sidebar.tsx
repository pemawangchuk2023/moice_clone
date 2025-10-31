"use client";

import { Home, Settings, Newspaper, FileText } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuItem,
	SidebarMenuButton,
	SidebarGroup,
	SidebarGroupContent,
} from "@/components/ui/sidebar";

const projects = [
	{ name: "Home", url: "/dashboard", icon: Home },
	{ name: "Blogs", url: "/dashboard/blog", icon: Newspaper },
	{ name: "Press Release", url: "/dashboard/pr", icon: FileText },
];

const settings = [{ name: "Settings", url: "#", icon: Settings }];

const SidebarPage = () => {
	return (
		<Sidebar className='w-fit border-r '>
			<SidebarHeader className='p-4'>
				<Link href='/'>
					<Image
						src='/assets/logo.png'
						alt='Logo'
						width={150}
						height={150}
						className='rounded-xl'
					/>
				</Link>
			</SidebarHeader>
			<SidebarContent className='px-4'>
				<SidebarGroup>
					<SidebarGroupContent>
						<SidebarMenu>
							{projects.map((project) => (
								<SidebarMenuItem key={project.name}>
									<SidebarMenuButton asChild>
										<Link href={project.url} className='flex items-center'>
											<project.icon className='h-4 w-4 mr-3' />
											<span>{project.name}</span>
										</Link>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
			<SidebarFooter className='px-4 py-4 border-t border-gray-200 dark:border-[#1F1F23]'>
				<SidebarMenu>
					{settings.map((item) => (
						<SidebarMenuItem key={item.name}>
							<SidebarMenuButton asChild>
								<Link href={item.url} className='flex items-center'>
									<item.icon className='h-4 w-4 mr-3' />
									<span>{item.name}</span>
								</Link>
							</SidebarMenuButton>
						</SidebarMenuItem>
					))}
				</SidebarMenu>
			</SidebarFooter>
		</Sidebar>
	);
};

export default SidebarPage;
