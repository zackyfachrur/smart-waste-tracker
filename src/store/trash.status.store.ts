// stores/useTrashStatusStore.ts
import { create } from "zustand";

type TrashStatusState = {
    statuses: Record<string, string>;
    isEdited: Record<string, boolean>;
    setStatus: (markerId: number, status: string) => void;
    setIsEdited: (markerId: number, isEdited: boolean) => void;
    cancelEdit: (markerId: number) => void;
};

export const useTrashStatusStore = create<TrashStatusState>((set, get) => ({
    statuses: {},
    isEdited: {},

    setStatus: (markerId, status) =>
        set((state) => ({
            statuses: { ...state.statuses, [markerId]: status },
        })),

    setIsEdited: (markerId, isEdited) =>
        set((state) => ({
            isEdited: { ...state.isEdited, [markerId]: isEdited },
        })),

    cancelEdit: (markerId) => {
        const original = get().statuses[markerId];
        set((state) => ({
            statuses: { ...state.statuses, [markerId]: original },
            isEdited: { ...state.isEdited, [markerId]: true },
        }));
    },
}));