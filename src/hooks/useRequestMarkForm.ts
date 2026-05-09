import { addRequestMarkerApi } from "@/services/request.marker.api"
import { useAuthStore } from "@/store/auth.store"
import { useRequestMarkStore } from "@/store/request.mark.store"
import { useNotificationRequest } from "./useRequestNotification"
import { useState } from "react"

const DEFAULT_STATUS_ID = "1";

export const useRequestMarkForm = (onSuccess?: () => void) => {
    const { user_id, } = useAuthStore()
    const { cancelRequest } = useRequestMarkStore()

    const [reason, setReason] = useState("")
    const [content, setContent] = useState("");
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const { refetch } = useNotificationRequest();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!reason.trim()) {
            setError("Reason is required")
            return
        }

        setIsLoading(true)
        setError(null)

        try {
            setContent(reason);
            await addRequestMarkerApi({
                requester: String(user_id),
                reason,
                content,
                status_id: DEFAULT_STATUS_ID,
                created_by: String(user_id),
            });
            await refetch();
            onSuccess?.();
            cancelRequest()
        } catch (err) {
            setError("Failed to submit request. Please try again.")
            console.error("Request Marker Error:", err)
        } finally {
            setIsLoading(false)
        }
    }

    return {
        reason,
        setReason,
        isLoading,
        error,
        handleSubmit,
        cancelRequest,
    }
}