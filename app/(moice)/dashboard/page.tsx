"use client";

import { useState } from "react";
import { ChevronRight, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnnouncementUpload from "@/app/(moice)/_components/announcement-upload";
import ThemeToggle from "@/themes/theme-toggle";
import HeroUpload from "@/app/(moice)/dashboard/hero/_components/hero-upload";

// Section Header Component
const SectionHeader = ({ title }: { title: string }) => (
	<>
		<div className='h-16 border-neutral-700 flex items-center justify-center px-6'>
			<div className='text-xl text-amber-500 font-extrabold'>{title}</div>
		</div>
		<div className='h-1 md:h-1.5 bg-gradient-to-r from-transparent via-yellow-500 to-transparent w-48 sm:w-64 mx-auto rounded-full mb-4 md:mb-6' />
	</>
);

// Section Content Component
const SectionContent = ({ children }: { children: React.ReactNode }) => (
	<div className='flex-1 overflow-auto'>{children}</div>
);

const Dashboard = () => {
	const [activeSection, setActiveSection] = useState("announcement");
	const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

	// Navigation items
	const navItems = [
		{
			id: "announcement",
			icon: Monitor,
			label: "Announcements",
			component: <AnnouncementUpload />,
		},
		{ id: "hero", icon: Monitor, label: "Hero", component: <HeroUpload /> },
	];

	// Get active section data
	const activeItem = navItems.find((item) => item.id === activeSection);

	return (
		<div className='flex h-screen'>
			{/* Sidebar */}
			<div
				className={`${
					sidebarCollapsed ? "w-16" : "w-70"
				} border-r border-neutral-700 transition-all duration-300 fixed md:relative z-50 md:z-auto h-full md:h-auto ${
					!sidebarCollapsed ? "md:block" : ""
				}`}
			>
				<div className='p-4'>
					<div className='flex items-center justify-between mb-8'>
						<div className={`${sidebarCollapsed ? "hidden" : "block"}`}>
							<ThemeToggle />
						</div>
						<Button
							variant='ghost'
							size='icon'
							onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
							className='text-neutral-400 hover:text-orange-500'
						>
							<ChevronRight
								className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform ${
									sidebarCollapsed ? "" : "rotate-180"
								}`}
							/>
						</Button>
					</div>

					<nav className='space-y-2'>
						{navItems.map((item) => (
							<button
								key={item.id}
								onClick={() => setActiveSection(item.id)}
								className={`w-full flex items-center gap-3 p-5 cursor-pointer rounded-none transition-colors ${
									activeSection === item.id
										? "bg-orange-500 text-white"
										: "text-neutral-400 hover:text-white hover:bg-neutral-800"
								}`}
							>
								<item.icon className='w-5 h-5 md:w-5 md:h-5 sm:w-6 sm:h-6' />
								{!sidebarCollapsed && (
									<span className='text-[18px]'>{item.label}</span>
								)}
							</button>
						))}
					</nav>
				</div>
			</div>

			{/* Mobile Overlay */}
			{!sidebarCollapsed && (
				<div
					className='fixed inset-0 bg-black/50 z-40 md:hidden'
					onClick={() => setSidebarCollapsed(true)}
				/>
			)}

			{/* Main Content */}
			<div className='flex-1 flex flex-col'>
				{/* Section Header */}
				<SectionHeader title={activeItem?.label || ""} />

				{/* Section Content */}
				<SectionContent>{activeItem?.component}</SectionContent>
			</div>
		</div>
	);
};

export default Dashboard;
