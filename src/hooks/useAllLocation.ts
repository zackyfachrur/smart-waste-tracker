import { getAllLocationApi } from "@/services/locations.api"
import type { LocationType } from "@/types/maps"
import { useState, useEffect } from "react"

const STORAGE_KEY = "marker";

export const useAllLocation = () => {
    const [location, setLocation] = useState<LocationType[]>([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchLocations = async () => {
        setLoading(true);
        try {
            const res = await getAllLocationApi();
            localStorage.setItem(STORAGE_KEY, JSON.stringify(res));
            setLocation(res);
        } catch (err: any) {
            const cached = localStorage.getItem(STORAGE_KEY);
            if (cached) setLocation(JSON.parse(cached));
            setError(err.message || "ERROR FETCHING DATA!")
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchLocations();
    }, [])



    return { location, loading, error, setLocation, refetch: fetchLocations }
}