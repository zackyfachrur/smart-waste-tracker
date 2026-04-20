import { ZodError } from "zod";

export const getFieldErrors = (error: ZodError) => {
    const result: Record<string, string> = {};

    error.issues.forEach((err) => {
        const field = err.path[0];
        if (field) result[field as string] = err.message;
    })

    return result;
}