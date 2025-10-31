import { z } from "zod";

export const AdminRegistrationSchema = z.object({
	firstName: z
		.string()
		.min(2, "First name must be at least 2 characters")
		.max(30),
	lastName: z
		.string()
		.min(2, "Last name must be at least 2 characters")
		.max(30),
	email: z.email("Invalid email address").max(100),
	password: z
		.string()
		.min(8, "Password must be at least 8 characters")
		.max(128),
});
export const AdminLoginSchema = z.object({
	email: z.email("Invalid email address").max(100),
	password: z
		.string()
		.min(8, "Password must be at least 8 characters")
		.max(128),
});
