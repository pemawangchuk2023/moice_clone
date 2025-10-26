import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "@/themes/theme-provider";
import LayoutLoader from "@/components/layout-loader";
import { Poppins } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	variable: "--font-sans",
	display: "swap",
});

export const metadata: Metadata = {
	title: "MoICE",
	description:
		"The web application developed to test NextJS 16 and its feature",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className={poppins.variable}>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
				>
					<LayoutLoader>
						<main>{children}</main>
						<Toaster />
					</LayoutLoader>
				</ThemeProvider>
			</body>
		</html>
	);
}
