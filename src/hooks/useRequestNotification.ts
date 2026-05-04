// src\hooks\useRequestNotification.ts
import { useState, useEffect, useCallback } from "react"
import { getRequestMarkerApi, updateRequestMarkerApi } from "@/services/request.marker.api"
import { handleToken } from "@/helper/token";
import { useNotificationRequestStore } from "@/store/notification.request.store";

export const useNotificationRequest = () => {
    const { setData, setLoading } = useNotificationRequestStore();
    const [error, setError] = useState<Error | null>(null);
    const { token } = handleToken();

    const fetchNotification = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const result = await getRequestMarkerApi();
            setData(result.data ?? result);
        } catch (err) {
            setError(err as Error);
        } finally {
            setLoading(false);
        }
    }, []);

    const updateNotification = useCallback(async (id: number, status_id: string) => {
        try {
            await updateRequestMarkerApi(id, parseInt(status_id));
            await fetchNotification();
        } catch (err) {
            console.error("Failed to update notification:", err);
        }
    }, [fetchNotification]);

    useEffect(() => {
        if (!token) return;
        fetchNotification();
    }, [token])

    return {
        error,
        refetch: fetchNotification,
        updateNotification
    }

}