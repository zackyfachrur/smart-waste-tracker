import { useState } from "react"
import { editLocationApi } from "@/services/locations.api";

type Params = {
    id: number;
    status: string;
    onSuccess?: (id: number, status: string) => void;
};

export const useUpdateLocation = ({ id, status, onSuccess }: Params) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchUpdateLocation = async () => {
        setLoading(true);
        setError(null);
        try {
            const res = await editLocationApi({ id, status });
            onSuccess?.(id, status);
            return res;
        } catch (err) {
            const message = err instanceof Error ? err.message : "Something went wrong";
            setError(message);
        } finally {
            setLoading(false);
        }
    }

    return { fetchUpdateLocation, loading, error };
}