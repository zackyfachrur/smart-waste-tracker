import { useBarrierAuthStore } from "@/store/barrier.auth.store";
import { useState } from "react";
import type { AuthenticationProps, ErrorsProps } from "@/types/schema-types";
import { registerSchema } from "@/utils/authShema";
import { getFieldErrors } from "@/helper/zodError";
import { registerApi } from "@/services/auth.api"

export const useRegisterForm = () => {
    const { setPages } = useBarrierAuthStore();
    const [form, setForm] = useState<AuthenticationProps>({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        role_id: "",
    })


    const [errors, setErrors] = useState<ErrorsProps>({});
    const handleSubmit = async (e: React.FormEvent) => {
        console.log("HALO FROM SUBMIT!")
        e.preventDefault();

        const result = registerSchema.safeParse(form);

        if (!result.success) {
            setErrors(getFieldErrors(result.error));
            console.log(result.error);
            return;
        }

        setErrors({});
        // console.log("VALID REGISTER: ", result.data)

        // SYNC API
        try {
            const data = await registerApi(result.data);
            console.log("SUCCESS: ", data);
            localStorage.setItem("token", data.token)

            setPages("login");

        } catch (err) {
            console.error("Error: ", err);
        }


    }

    return {
        form,
        setPages,
        setForm,
        errors,
        handleSubmit,
    }
}
