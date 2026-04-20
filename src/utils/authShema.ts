import { z } from "zod";

export const loginSchema = z.object({
    email: z.string().min(1, { message: "Email harus diisi" }).email({ message: "Email tidak valid" }),
    password: z.string().min(6, { message: "Password harus lebih dari 6 karakter" }).max(50, { message: "Password terlalu panjang" }),
})

export const registerSchema = z.object({
    name: z.string().min(3, { message: "Nama minimal harus 3 karakter" }).max(50, { message: "Nama terlalu panjang" }),
    email: z.string().min(1, { message: "Email harus diisi" }).email({ message: "Email tidak valid" }),
    password: z.string().min(6, { message: "Password minimal 6 karakter" }),
    role_id: z.string().min(0, { message: "Role tidak kosong!" }).max(2, { message: "Role tidak valid!" }),
})