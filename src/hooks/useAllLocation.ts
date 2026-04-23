import { getAllLocationApi } from "@/services/locations.api"
import type { LocationType } from "@/types/maps"
import { useState, useEffect } from "react"

export const useAllLocation = () => {
    const [location, setLocation] = useState<LocationType[]>([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);



    useEffect(() => {
        const fetchLocations = async () => {
            setLoading(true);
            try {
                const res = await getAllLocationApi();
                localStorage.setItem("marker", JSON.stringify(res));
                const marker = localStorage.getItem("marker")

                if (marker) {
                    setLocation(JSON.parse(marker));
                }


            } catch (err: any) {
                setError(err.message || "ERROR FETCHING DATA!")
            } finally {
                setLoading(false)
            }
        }

        fetchLocations();
    }, [])

    return {
        location, loading, error
    }

}