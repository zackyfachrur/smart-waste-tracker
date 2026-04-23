import type { BarrierAuthState } from "@/types/schema-types";
import { create } from "zustand";

export const useBarrierAuthStore = create<BarrierAuthState>((set) => ({
    pages: "login",
    setPages: (page) => set({ pages: page }),
}));