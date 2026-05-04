// src\store\notification.request.store.ts
import { create } from "zustand";
import type { NotificationItem } from "@/types/request.marker.types"

type NotificationRequestState = {
    totalData: number | null;
    data: NotificationItem[] | null;
    loading: boolean;
    setTotalData: (total: number) => void;
    setData: (data: NotificationItem[] | null) => void;
    setLoading: (loading: boolean) => void;
}

export const useNotificationRequestStore = create<NotificationRequestState>()((set) => ({
    totalData: 0,
    data: null,
    loading: false,
    setTotalData: (total) => set({ totalData: total }),
    setData: (data) => set({ data }),
    setLoading: (loading) => set({ loading }),
}));