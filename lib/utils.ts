import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
export const formatDateTime = (dateString: string | Date): string => {
	const date =
		typeof dateString === "string" ? new Date(dateString) : dateString;

	let hours = date.getHours();
	let minutes: string | number = date.getMinutes();
	const ampm = hours >= 12 ? "p.m." : "a.m.";
	hours = hours % 12 || 12;

	minutes = minutes.toString().padStart(2, "0");

	const options: Intl.DateTimeFormatOptions = {
		weekday: "long",
		month: "long",
		day: "numeric",
		year: "numeric",
	};

	const formattedDate = date.toLocaleDateString("en-US", options);
	return `${hours}:${minutes} ${ampm} ${formattedDate}`;
};
