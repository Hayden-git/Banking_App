"use client";

import React from "react";
import { FormField, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { Control, FieldPath } from "react-hook-form";
import { z } from "zod";

import { authFormSchema } from "@/lib/utils";

// Make authFormSchema into a function that checks "type" so that it allows the validation to submit on "sign-in" ... all "sign-up" inputs are optional if we are on "sign-in" page
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const formSchema = authFormSchema("sign-up");

interface CustomInput {
	control: Control<z.infer<typeof formSchema>>;
	name: FieldPath<z.infer<typeof formSchema>>;
	label: string;
	placeholder: string;
}

const CustomInput = ({ control, name, label, placeholder }: CustomInput) => {
	return (
		<FormField
			control={control}
			name={name}
			render={({ field }) => (
				<div className="form-item">
					<FormLabel className="form-label">{label}</FormLabel>

					<div className="flex w-full flex-col">
						<FormControl>
							<Input
								placeholder={placeholder}
								type={name === "password" ? "password" : "text"}
								className="input-class"
								{...field}
							/>
						</FormControl>

						<FormMessage className="form-message mt-2" />
					</div>
				</div>
			)}
		/>
	);
};

export default CustomInput;
