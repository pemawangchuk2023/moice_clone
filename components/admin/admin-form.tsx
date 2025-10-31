"use client";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { AdminLoginSchema, AdminRegistrationSchema } from "@/lib/validations";
import CustomInput from "@/components/admin/custom-input";
import { z } from "zod";
import Link from "next/link";
import { loginAdmin, registerAdmin } from "@/backend/actions/admin.action";
import { toast } from "sonner";

type AdminRegistrationInput = z.infer<typeof AdminRegistrationSchema>;
type AdminLoginInput = z.infer<typeof AdminLoginSchema>;

const AdminForm = ({ type }: { type: "sign-in" | "sign-up" }) => {
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(false);

	const formSchema =
		type === "sign-in" ? AdminLoginSchema : AdminRegistrationSchema;

	const form = useForm<AdminRegistrationInput | AdminLoginInput>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
			password: "",
			...(type === "sign-up" && { firstName: "", lastName: "" }),
		},
	});

	const onSubmit = async (data: AdminRegistrationInput | AdminLoginInput) => {
		setIsLoading(true);
		try {
			if (type === "sign-up") {
				const response = await registerAdmin(data as AdminRegistrationInput);
				if (response.success) {
					toast.success("You have signed up successfully");
					router.push("/admin/sign-in");
				} else {
					toast.error("Registration failed");
				}
			} else {
				const response = await loginAdmin(data as AdminLoginInput);
				if (response.success) {
					toast.success("Logged in successfully");
					router.push("/");
				} else {
					toast.error("Invalid credentials");
				}
			}
		} catch (err) {
			console.error(err);
			toast.error("An unexpected error occurred");
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className='border-none'>
			<div className='text-center space-y-1 pb-6 text-foreground'>
				<h1 className='text-2xl font-semibold'>
					{type === "sign-in" ? "Sign In" : "Sign Up"}
				</h1>
				<p className='text-foreground inline-block border-b-8 border-yellow-500'>
					{type === "sign-in"
						? "Enter your credentials to access your account"
						: "Create an account by filling out the details below"}
				</p>
			</div>

			<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
				{type === "sign-up" && (
					<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
						<CustomInput
							control={form.control}
							name='firstName'
							label='First Name'
							placeholder='Enter your first name'
						/>
						<CustomInput
							control={form.control}
							name='lastName'
							label='Last Name'
							placeholder='Enter your last name'
						/>
						<CustomInput
							control={form.control}
							name='email'
							label='Email'
							placeholder='Enter your email'
						/>
						<CustomInput
							control={form.control}
							name='password'
							label='Password'
							placeholder='Enter your password'
						/>
					</div>
				)}

				{type === "sign-in" && (
					<div className='space-y-4'>
						<CustomInput
							control={form.control}
							name='email'
							label='Email'
							placeholder='Enter your email'
						/>
						<CustomInput
							control={form.control}
							name='password'
							label='Password'
							placeholder='Enter your password'
						/>
					</div>
				)}

				<Button
					type='submit'
					className='w-full rounded-none cursor-pointer text-foreground uppercase'
					disabled={isLoading}
					variant='destructive'
				>
					{isLoading ? (
						<>
							<Loader2 size={20} className='animate-spin mr-2' />
							Loading...
						</>
					) : type === "sign-in" ? (
						"Sign In"
					) : (
						"Sign Up"
					)}
				</Button>
			</form>

			<div className='mt-6 text-center'>
				<p className='text-foreground'>
					{type === "sign-in"
						? "Don't have an account?"
						: "Already have an account?"}
				</p>
				<Link
					href={type === "sign-in" ? "/admin/sign-up" : "/admin/sign-in"}
					className='text-amber-500'
				>
					{type === "sign-in" ? "Sign Up" : "Sign In"}
				</Link>
			</div>
		</div>
	);
};

export default AdminForm;
