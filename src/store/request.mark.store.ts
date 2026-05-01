import { create } from "zustand"

type useRequestMarkStoreType = {
    statusRequest: boolean;
    sendRequest: () => void;
    cancelRequest: () => void;
}

export const useRequestMarkStore = create<useRequestMarkStoreType>((set) => ({
    statusRequest: false,
    sendRequest: () => set(() => ({ statusRequest: true })),
    cancelRequest: () => set(() => ({ statusRequest: false })),
}))