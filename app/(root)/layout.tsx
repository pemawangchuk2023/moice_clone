import Disclaimer from "@/components/disclaimer";
import DesktopNavbar from "@/components/navbar/desktop-navbar";
import MobileNavbar from "@/components/navbar/mobile-navbar";
import React from "react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className='flex min-h-screen flex-col'>
			{/* Navigation Section */}
			<header className='w-full'>
				{/* Desktop Navigation */}
				<DesktopNavbar />

				{/* Mobile Navigation */}
				<MobileNavbar />
			</header>

			{/* Main Content */}
			<main className='flex-1 w-full px-4 md:px-6 lg:px-8 py-4 md:py-6'>
				{children}
			</main>
			<Disclaimer />
		</div>
	);
};

export default RootLayout;
