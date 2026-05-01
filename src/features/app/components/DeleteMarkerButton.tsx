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
            setShowDelete(false); // ← tutup modal setelah sukses
            onSuccess?.();
        }
    });

    return (
        <div className="w-full">

            {/* Overlay + Modal */}
            {showDelete && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-20 flex items-center justify-center">
                    <div className="flex flex-col text-start bg-white w-fit items-start p-4 rounded-2xl shadow-xl z-30">
                        <div className="flex justify-between w-full">
                            <h3 className="font-bold">Information</h3>
                            <button
                                className="hover:text-red-600 cursor-pointer disabled:opacity-50"
                                onClick={() => setShowDelete(false)}
                                disabled={loading}
                            >
                                <i className="ri-close-line"></i>
                            </button>
                        </div>

                        <p className="text-sm mt-2">Are you sure want to delete this marker?</p>

                        <div className="flex flex-row gap-1 text-sm mt-2 w-full">
                            <button
                                type="button"
                                className="bg-primary cursor-pointer hover:bg-lime-700 w-full p-2 rounded-xl text-white font-bold disabled:opacity-50"
                                onClick={fetchDeleteLocation}
                                disabled={loading}
                            >
                                {loading ? "Deleting..." : "Yes"}
                            </button>
                            <button
                                type="button"
                                className="bg-red-700 hover:bg-red-600 cursor-pointer w-full p-2 rounded-xl text-white font-bold disabled:opacity-50"
                                onClick={() => setShowDelete(false)}
                                disabled={loading}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <button
                className="bg-red-700 w-full mt-2 rounded-2xl p-4 text-white hover:bg-red-600 cursor-pointer disabled:opacity-50"
                disabled={loading}
                type="button"
                onClick={() => setShowDelete(true)}
            >
                {loading ? "Deleting..." : "Delete"}
            </button>
        </div>
    );
};