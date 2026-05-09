import { z } from "zod";

export const loginSchema = z.object({
    email: z.string().min(1, { message: "Email is required" }).email({ message: "Email is not valid" }),
    password: z.string().min(6, { message: "Password is required" }).max(50, { message: "Password is too long" }),
    checked: z.boolean()
})

export const registerSchema = z.object({
    name: z.string().min(3, { message: "Name is required" }).max(50, { message: "Name is too long" }),
    email: z.string().min(1, { message: "Email is required" }).email({ message: "Email is not valid" }),
    password: z.string().min(6, { message: "Password is required" }),
    confirmPassword: z.string().min(6, { message: "Password is required" }),
    role_id: z.string().min(0, { message: "Role is required" }).max(2, { message: "Role is not valid" }),
})
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"]
    })