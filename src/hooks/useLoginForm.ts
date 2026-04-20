import { useAuthPagesStore } from "@/store/auth.store";
import type { AuthenticationProps, ErrorsProps } from "@/types/schema-types";
import { useState } from "react";
import { loginSchema } from "@/utils/authShema";
import { getFieldErrors } from "@/helper/zodError";

export const useLoginForm = () => {
    const { setPages } = useAuthPagesStore();
    const [form, setForm] = useState<AuthenticationProps>({
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState<ErrorsProps>({});

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const result = loginSchema.safeParse(form);

        if (!result.success) {
            setErrors(getFieldErrors(result.error));
            return;
        }

        setErrors({});
        console.log("VALID LOGIN", result.data);
    }

    return {
        form,
        setForm,
        setPages,
        errors,
        handleSubmit
    }
}