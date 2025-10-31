"use client";

import { Input } from "@/components/ui/input";
import { Field, FieldLabel, FieldError } from "@/components/ui/field";
import { Control, FieldPath, useController } from "react-hook-form";
import { z } from "zod";
import { AdminLoginSchema, AdminRegistrationSchema } from "@/lib/validations";

type AdminRegistrationInput = z.infer<typeof AdminRegistrationSchema>;
type AdminLoginInput = z.infer<typeof AdminLoginSchema>;
type FormSchemaType = AdminRegistrationInput | AdminLoginInput;

interface CustomInputProps {
	control: Control<FormSchemaType>;
	name: FieldPath<FormSchemaType>;
	label: string;
	placeholder: string;
}

const CustomInput = ({
	control,
	name,
	label,
	placeholder,
}: CustomInputProps) => {
	const {
		field,
		fieldState: { error },
	} = useController({ name, control });

	return (
		<Field data-invalid={!!error}>
			<FieldLabel htmlFor={name}>{label}</FieldLabel>
			<Input
				id={name}
				type={name === "password" ? "password" : "text"}
				placeholder={placeholder}
				{...field}
				className='rounded-none border-2 border-black text-foreground'
				autoComplete='off'
				aria-invalid={!!error}
			/>
			{error && <FieldError>{error.message}</FieldError>}
		</Field>
	);
};

export default CustomInput;
