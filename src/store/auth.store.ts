import { create } from "zustand";
import type { AuthState } from "@/types/schema-types";

export const useAuthStore = create<AuthState>((set) => ({
    token: null,
    role_id: null,

    login: (data, remember) => {
        const normalized = {
            token: data.token,
            role_id: Number(data.userinfo.role_id),
        };

        const storage = remember ? localStorage : sessionStorage;

        storage.setItem("auth", JSON.stringify(normalized));

        set(normalized);
    },

    logout: () => {
        localStorage.removeItem("auth");
        sessionStorage.removeItem("auth");

        set({ token: null, role_id: null });

        window.location.href = "/sampahcerdas/authentication";
    },

    initAuth: () => {
        const local = localStorage.getItem("auth");
        const session = sessionStorage.getItem("auth");

        const stored = local || session;

        if (stored) {
            try {
                const parsed = JSON.parse(stored);
                set({
                    token: parsed.token,
                    role_id: parsed.role_id,
                });
            } catch {
                set({ token: null, role_id: null });
            }
        }
    },
}));