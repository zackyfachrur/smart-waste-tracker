import { create } from "zustand";
import type { CenterLocationType } from "@/types/maps";

export const useCenterLocationStore = create<CenterLocationType>((set) => ({
    center: {
        lat: -7.516193162194461,
        lng: 110.19805308530935,
        content: "",
    },

    setCenter: (data) => set({ center: data }),
}));