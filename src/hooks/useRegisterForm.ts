import { useAuthPagesStore } from "@/store/auth.store";
import { useState } from "react";
import type { AuthenticationProps, ErrorsProps } from "@/types/schema-types";
import { registerSchema } from "@/utils/authShema";
import { getFieldErrors } from "@/helper/zodError";

export const useRegisterForm = () => {
    const { setPages } = useAuthPagesStore();
    const [form, setForm] = useState<AuthenticationProps>({
        name: "",
        email: "",
        password: "",
        role: "user",
    })

    const [errors, setErrors] = useState<ErrorsProps>({});

    const handleSubmit = ((e: React.FormEvent) => {
        e.preventDefault();

        const result = registerSchema.safeParse(form);

        if (!result.success) {
            setErrors(getFieldErrors(result.error));
            return;
        }

        setErrors({});
        console.log("VALID REGISTER: ", result.data)
    })

    return {
        form,
        setPages,
        setForm,
        errors,
        handleSubmit,
    }
}
