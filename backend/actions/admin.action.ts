"use server";

import { authClient } from "@/lib/auth-client";
import { AdminLoginSchema, AdminRegistrationSchema } from "@/lib/validations";
import { z } from "zod";

type AdminRegistrationInput = z.infer<typeof AdminRegistrationSchema>;
type AdminLoginInput = z.infer<typeof AdminLoginSchema>;

export async function registerAdmin(data: AdminRegistrationInput) {
	const parsed = AdminRegistrationSchema.parse(data);
	const { email, password, firstName, lastName } = parsed;

	try {
		const { data: result, error } = await authClient.signUp.email({
			email,
			password,
			name: `${firstName} ${lastName}`,
		});

		if (error) {
			console.error("Registration error:", error);
			return {
				success: false,
				error: error.message || "Registration failed",
			};
		}

		return { success: true, data: result };
	} catch (error) {
		console.error("Registration error:", error);
		return {
			success: false,
			error: error instanceof Error ? error.message : "Registration failed",
		};
	}
}

export async function loginAdmin(data: AdminLoginInput) {
	const parsed = AdminLoginSchema.parse(data);
	const { email, password } = parsed;

	try {
		const { data: result, error } = await authClient.signIn.email({
			email,
			password,
		});

		if (error) {
			console.error("Login error:", error);
			return {
				success: false,
				error: error.message || "Invalid credentials",
			};
		}

		return { success: true, data: result };
	} catch (error) {
		console.error("Login error:", error);
		return {
			success: false,
			error: error instanceof Error ? error.message : "Invalid credentials",
		};
	}
}
