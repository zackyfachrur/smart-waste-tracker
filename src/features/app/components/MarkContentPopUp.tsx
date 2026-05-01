// src/features/app/components/MarkContentPopUp.tsx
import { formatRelativeTime } from "@/helper/formatRelativeTime";
import { useAuthStore } from "@/store/auth.store";
import { ChangesTrashStatus } from "./ChangesTrashStatus";
import { useUpdateLocation } from "@/hooks/useUpdateLocation";
import { useTrashStatusStore } from "@/store/trash.status.store";
import type { MapContentPopUpType } from "@/types/maps";
import { DeleteMarkerButton } from "./DeleteMarkerButton";

export const MarkContentPopUp = ({
    name,
    content,
    createdAt,
    updatedAt,
    open,
    onClose,
    marker,
    lat,
    lng,
    markerId,
    onSuccess,
}: MapContentPopUpType) => {
    const { role_id } = useAuthStore();
    const { statuses } = useTrashStatusStore();

    const currentStatus = statuses[markerId] ?? marker;

    const { fetchUpdateLocation, loading, error } = useUpdateLocation({
        id: markerId,
        status: currentStatus,
        onSuccess,
    });


    if (!open) return null;

    const iconMap: Record<string, string> = {
        "red-marker": "bg-red-200 text-red-500",
        "green-marker": "bg-lime-200 text-lime-500",
        "yellow-marker": "bg-yellow-200 text-yellow-500",
    };

    const status: Record<string, string> = {
        "red-marker": "Damaged",
        "green-marker": "Empty",
        "yellow-marker": "Full",
    };

    const selectedIcon = iconMap[marker];
    const selectedStatus = status[marker];



    const handleSave = async (id: number, newStatus: string) => {
        const res = await fetchUpdateLocation();
        if (res) {
            console.log(`Marker ${id} updated to: ${newStatus}`);
        }
    };

    return (
        <div className="fixed sm:bottom-4 bottom-0 z-50 sm:right-4 flex flex-col justify-center items-start w-full sm:w-[450px] text-start bg-white p-8 sm:rounded-2xl rounded-t-2xl shadow-lg">
            <ul className="flex flex-row items-center justify-between w-full">
                <li className="text-xl">
                    <span className="font-bold">Sampahcerdas</span> Maps
                </li>
                <li className="rounded-full font-bold">
                    <button
                        onClick={onClose}
                        className="cursor-pointer hover:text-red-400 p-2 rounded-2xl"
                    >
                        <i className="ri-close-line" />
                    </button>
                </li>
            </ul>

            <ul className="flex flex-col w-full justify-between rounded-2xl">
                <li className="font-semibold">{name}</li>
                <li>{content}</li>
            </ul>
            {/* Role 1: full access */}
            {marker && role_id === 1 && (
                <>
                    {/* 👇 error feedback */}
                    {error && (
                        <p className="text-red-500 text-xs mt-2">{error}</p>
                    )}
                    <ChangesTrashStatus
                        markerId={markerId}
                        initialStatus={marker}
                        onSave={handleSave}
                    />
                    {loading && (
                        <p className="text-gray-400 text-xs mt-1">Saving...</p>
                    )}
                </>
            )}

            {/* Role 2: hanya lihat status */}
            {marker && role_id === 2 && (
                <span className={`${selectedIcon} p-4 rounded-2xl mt-4`}>
                    {selectedStatus}
                </span>
            )}

            {/* Role 3: bisa edit status via Zustand */}
            {marker && role_id === 3 && (
                <>
                    {/* 👇 error feedback */}
                    {error && (
                        <p className="text-red-500 text-xs mt-2">{error}</p>
                    )}
                    <ChangesTrashStatus
                        markerId={markerId}
                        initialStatus={marker}
                        onSave={handleSave}
                    />
                    {loading && (
                        <p className="text-gray-400 text-xs mt-1">Saving...</p>
                    )}
                </>
            )}

            <div className="flex flex-col gap-2 mt-4 w-full border-t">
                <ul className="flex flex-row w-full justify-between items-center rounded-2xl text-sm mt-4">
                    <li className="text-gray-400 font-medium text-start w-fit">Created</li>
                    <li className="text-end text-gray-400 font-medium w-full">
                        {createdAt ? formatRelativeTime(createdAt) : "-"}
                    </li>
                </ul>
                <ul className="flex flex-row w-full justify-between items-center rounded-2xl text-sm mb-4">
                    <li className="text-gray-400 font-medium text-start w-fit">Updated</li>
                    <li className="text-gray-400 font-medium w-full text-end">
                        {updatedAt ? formatRelativeTime(updatedAt) : "-"}
                    </li>
                </ul>
            </div>
            {
                marker && (
                    <div className="flex flex-row w-full gap-2">
                        <a
                            target="_blank"
                            href={`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`}
                            className="bg-primary w-full mt-2 rounded-2xl p-4 text-white hover:bg-lime-700 cursor-pointer text-center"
                        >
                            Go to Location
                        </a>
                        {role_id === 1 && (
                            <DeleteMarkerButton markerId={markerId} onSuccess={onSuccess} />
                        )}
                    </div>
                )

            }
            <button
                className="bg-red-700 w-full mt-2 rounded-2xl p-4 text-white hover:bg-red-600 cursor-pointer"
                onClick={onClose}
            >
                Close
            </button>
        </div >
    );
};