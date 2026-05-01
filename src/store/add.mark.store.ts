import type { DisplayState } from "@/types/schema-types"
import { create } from "zustand";

export const useDisplayStore = create<DisplayState>((set) => ({
    display: false,
    open: () => set({ display: true }),
    close: () => set({ display: false }),
    toggle: () => set((state) => ({ display: !state.display }))
}));