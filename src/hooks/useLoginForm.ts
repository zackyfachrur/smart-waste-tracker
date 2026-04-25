import { useBarrierAuthStore } from "@/store/barrier.auth.store";
import type { AuthenticationProps, ErrorsProps } from "@/types/schema-types";
import { useState } from "react";
import { loginSchema } from "@/utils/authShema";
import { getFieldErrors } from "@/helper/zodError";
import { loginApi } from "@/services/auth.api"
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "@/store/auth.store";

export const useLoginForm = () => {
    const navigate = useNavigate();
    const { setPages } = useBarrierAuthStore();
    const { login } = useAuthStore();
    const [form, setForm] = useState<AuthenticationProps>({
        email: "",
        password: "",
        checked: false,
    });

    const [errors, setErrors] = useState<ErrorsProps>({});
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const result = loginSchema.safeParse(form);

        if (!result.success) {
            setErrors(getFieldErrors(result.error));
            return;
        }

        setErrors({});
        setLoading(true);

        try {
            const res = await loginApi(result.data);
            console.log("LOGIN RESULT: ", result.data);
            login(res, result.data.checked);

            navigate("/");

        } catch (err: any) {
            console.error("Login error", err);

            setErrors(err?.response?.data?.message || "Login gagal",)
        } finally {
            setLoading(false);
        }


    }

    return {
        form,
        setForm,
        setPages,
        errors,
        loading,
        handleSubmit,
    }
}