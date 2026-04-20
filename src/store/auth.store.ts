import type { AuthState } from "@/types/schema-types";
import { create } from "zustand";

export const useAuthPagesStore = create<AuthState>((set) => ({
    pages: "login",
    setPages: (page) => set({ pages: page }),
}));