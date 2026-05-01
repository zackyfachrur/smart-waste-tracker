import { useState } from "react";
import { addLocationApi } from "@/services/locations.api";
import { useAuthStore } from "@/store/auth.store";

type FormState = {
    name: string;
    marker: string;
    latitude: string;
    longitude: string;
};

export const useAddMarkForm = (onSuccess?: () => void) => {
    const { user_id } = useAuthStore();
    const [loadingMark, setLoadingMark] = useState(false);
    const [errorMark, setErrorMark] = useState<string | null>(null);
    const [loadingCoords, setLoadingCoords] = useState(false);
    const [content, setContent] = useState("");

    const [form, setForm] = useState<FormState>({
        name: "",
        marker: "",
        latitude: "",
        longitude: "",
    });

    const resetForm = () => {
        setForm({ name: "", marker: "", latitude: "", longitude: "" });
        setContent("");
    };


    const setCoords = async (lat: number, lng: number) => {
        setLoadingCoords(true);

        setForm(prev => ({
            ...prev,
            latitude: String(lat),
            longitude: String(lng),
        }));

        try {
            const res = await fetch(
                `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`,
                { headers: { "Accept-Language": "id" } }
            );
            const data = await res.json();

            setContent(data.display_name ?? `${lat}, ${lng}`);
        } catch {
            setContent(`${lat}, ${lng}`);
        } finally {
            setLoadingCoords(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (loadingCoords) {
            setErrorMark("Please wait, coordinates is loading...");
            return;
        }

        if (!form.marker) {
            setErrorMark("Select marker status first");
            return;
        }

        if (!content) {
            setErrorMark("Coordinates not loaded!");
            return;
        }

        setLoadingMark(true);
        setErrorMark(null);
        // DEBUG
        // console.log("SUBMIT form.name:", form.name);
        // console.log("SUBMIT content:", content);
        // console.log("SUBMIT user_id:", user_id);
        try {
            await addLocationApi({
                name: form.name,
                marker: form.marker,
                latitude: form.latitude,
                longitude: form.longitude,
                content: content || `${form.latitude}, ${form.longitude}`,
                created_by: user_id,
            });
            setForm({ name: "", marker: "", latitude: "", longitude: "" });
            setContent("");
            onSuccess?.();
        } catch (err) {
            const message = err instanceof Error ? err.message : "Something went wrong";
            setErrorMark(message);
        } finally {
            setLoadingMark(false);
        }
    };

    return { form, handleChange, handleSubmit, setCoords, loadingMark, errorMark, loadingCoords, resetForm };
};