import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "@/themes/theme-provider";
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
	icons: {
		icon: "/assets/emblem.png",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			{/* Dzongkha Uchen Font */}
			<head>
				<link
					rel='stylesheet'
					media='screen'
					href='https://fontlibrary.org//face/ddc-uchen'
					type='text/css'
				/>
			</head>

			<body className={poppins.variable}>
				<ThemeProvider
					attribute='class'
					defaultTheme='dark'
					enableSystem={false}
					disableTransitionOnChange
				>
					<main>{children}</main>
					<Toaster />
				</ThemeProvider>
			</body>
		</html>
	);
}
