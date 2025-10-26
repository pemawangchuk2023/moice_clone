"use client";

import {
	CircleCheckIcon,
	InfoIcon,
	Loader2Icon,
	OctagonXIcon,
	TriangleAlertIcon,
} from "lucide-react";
import { useTheme } from "next-themes";
import { Toaster as Sonner, type ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
	const { theme = "system" } = useTheme();

	return (
		<Sonner
			theme={theme as ToasterProps["theme"]}
			className='toaster group'
			icons={{
				success: <CircleCheckIcon className='size-5 text-green-500' />,
				info: <InfoIcon className='size-5 text-sky-500' />,
				warning: <TriangleAlertIcon className='size-5 text-yellow-500' />,
				error: <OctagonXIcon className='size-5 text-red-500' />,
				loading: (
					<Loader2Icon className='size-5 animate-spin text-muted-foreground' />
				),
			}}
			toastOptions={{
				classNames: {
					toast:
						"border bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-zinc-900 dark:to-zinc-950 border-yellow-400/40 dark:border-yellow-500/30 text-sm md:text-base px-5 py-4 rounded-xl shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1",
					title: "font-semibold text-base text-foreground",
					description: "text-sm text-muted-foreground mt-1",
					icon: "mr-2",
				},
			}}
			style={
				{
					"--normal-bg": "var(--background)",
					"--normal-text": "var(--foreground)",
					"--normal-border": "hsl(45, 90%, 60%)",
					"--border-radius": "0.75rem",
					"--toast-width": "380px",
				} as React.CSSProperties
			}
			{...props}
		/>
	);
};

export { Toaster };
