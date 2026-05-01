import { create } from "zustand";
import type { popUpMarkType } from "@/types/maps";

export const usePopUpMark = create<popUpMarkType>()((set) => ({
    popUp: false,
    openPopUp: () => set({ popUp: true }),
    closePopUp: () => set({ popUp: false }),
}))