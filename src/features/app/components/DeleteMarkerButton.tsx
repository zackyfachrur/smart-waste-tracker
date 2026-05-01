import { useDeleteLocation } from "@/hooks/useDeleteLocation";
import { useState } from "react";

type Props = {
    markerId: number;
    onSuccess?: () => void;
};

export const DeleteMarkerButton = ({ markerId, onSuccess }: Props) => {
    const [showDelete, setShowDelete] = useState(false);


    const { fetchDeleteLocation, loading } = useDeleteLocation({
        id: markerId,
        onSuccess: (id) => {
            console.log(`Marker ${id} deleted`);
            onSuccess?.();
        }
    });

    return (
        <div className="w-full">
            {showDelete && (
                <div className="flex flex-col text-start top-92 right-4 fixed bg-white w-fit items-start p-4 rounded-2xl">
                    <div className="flex justify-between w-full">
                        <h3 className="font-bold">Information</h3>
                        <button className="hover:text-red-600 cursor-pointer" onClick={() => setShowDelete(false)}>
                            <i className="ri-close-line"></i>
                        </button>
                    </div>
                    <p className="text-sm">Are you sure want to delete marker ?</p>
                    <div className="flex flex-row gap-1 text-sm mt-2">
                        <button type="button" className="bg-primary cursor-pointer hover:bg-lime-700 p-2 rounded-xl text-white font-bold" onClick={fetchDeleteLocation}>Yes</button>
                        <button type="button" className="bg-red-700 hover:bg-red-600 cursor-pointer p-2 rounded-xl text-white font-bold" onClick={() => setShowDelete(false)}>Cancel</button>
                    </div>
                </div>
            )}

            <button className="bg-red-700 w-full mt-2 rounded-2xl p-4 text-white hover:bg-red-600 cursor-pointer"
                disabled={loading}
                type="button"
                onClick={() => setShowDelete(true)}
            >
                {loading ? "Deleting..." : "Delete"}
            </button>
        </div>
    );
};