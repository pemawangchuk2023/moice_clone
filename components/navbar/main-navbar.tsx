import DesktopNavbar from "@/components/navbar/desktop-navbar";
import MobileNavbar from "@/components/navbar/mobile-navbar";
import ThemeToggle from "@/themes/theme-toggle";

const MainNavbar = () => {
	return (
		<header className='sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
			{/* Top row: Theme toggle on the right */}
			<div className='flex justify-end items-center w-full px-6 py-3'>
				<ThemeToggle />
			</div>

			{/* Main navigation below */}
			<div className='w-full flex justify-center'>
				{/* Desktop Navbar */}
				<DesktopNavbar />

				<MobileNavbar />
			</div>
		</header>
	);
};

export default MainNavbar;
