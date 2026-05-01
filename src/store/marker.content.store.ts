import { create } from "zustand";
import type { MarkContentType } from "@/types/maps";

export const useMarkContentStore = create<MarkContentType>((set) => ({
    content: {
        id: 0,
        marker: "",
        lat: "",
        lng: "",
        content: "",
        createdAt: "",
        updatedAt: "",
    },
    setContent: (data) => set({ content: data }),

}));