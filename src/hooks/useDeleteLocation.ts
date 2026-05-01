import { useState } from "react"
import { deleteLocationApi } from "@/services/locations.api";

type Params = {
    id: number;
    onSuccess?: (id: number) => void;
};

export const useDeleteLocation = ({ id, onSuccess }: Params) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchDeleteLocation = async () => {
        setLoading(true);
        setError(null);
        try {
            const res = await deleteLocationApi({ id });
            onSuccess?.(id);
            return res;
        } catch (err) {
            const message = err instanceof Error ? err.message : "Something went wrong";
            setError(message);
        } finally {
            setLoading(false);
        }
    }

    return { fetchDeleteLocation, loading, error };
}