import { create } from "zustand";
import type { AuthState } from "@/types/schema-types";

export const useAuthStore = create<AuthState>((set) => ({
    user_id: null,
    token: null,
    role_id: null,
    name: null,

    login: (data, remember) => {
        const normalized = {
            user_id: Number(data.userinfo.id),
            token: data.token,
            name: data.userinfo.name,
            role_id: Number(data.userinfo.role_id),
        };

        const storage = remember ? localStorage : sessionStorage;

        storage.setItem("auth", JSON.stringify(normalized));

        set(normalized);
    },

    logout: () => {
        localStorage.removeItem("auth");
        sessionStorage.removeItem("auth");

        set({ user_id: null, token: null, role_id: null, name: null });

    },

    initAuth: () => {
        const local = localStorage.getItem("auth");
        const session = sessionStorage.getItem("auth");

        const stored = local || session;

        if (stored) {
            try {
                const parsed = JSON.parse(stored);
                set({
                    user_id: parsed.user_id,
                    token: parsed.token,
                    role_id: parsed.role_id,
                    name: parsed.name,
                });
            } catch {
                set({ user_id: null, token: null, role_id: null, name: null });
            }
        }
    },
}));