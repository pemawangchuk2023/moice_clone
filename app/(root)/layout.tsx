import MainNavbar from "@/components/navbar/main-navbar";
import React from "react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className='flex min-h-screen flex-col'>
			<MainNavbar />
			<main className='flex-1 md:pt-5'>{children}</main>
		</div>
	);
};
export default RootLayout;
