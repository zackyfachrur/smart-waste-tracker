import { addRequestMarkerApi } from "@/services/request.marker.api"
import { useAuthStore } from "@/store/auth.store"
import { useRequestMarkStore } from "@/store/request.mark.store"
import { useState } from "react"

const DEFAULT_STATUS_ID = "1";

export const useRequestMarkForm = () => {
    const { token, user_id, } = useAuthStore()
    const { cancelRequest } = useRequestMarkStore()

    const [reason, setReason] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!reason.trim()) {
            setError("Reason is required")
            return
        }

        setIsLoading(true)
        setError(null)

        try {
            await addRequestMarkerApi({
                user_id: String(user_id),
                reason,
                status_id: DEFAULT_STATUS_ID,
            }, String(token))
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