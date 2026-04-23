import { create } from "zustand";
import type { MarkContentType } from "@/types/maps";

export const useMarkContentStore = create<MarkContentType>((set) => ({
    content: {
        marker: "",
        content: "",
        createdAt: "",
        updatedAt: "",
    },
    setContent: (data) => set({ content: data }),

}));