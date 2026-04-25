import { formatRelativeTime } from "@/helper/formatRelativeTime";
import { useAuthStore } from "@/store/auth.store";

type Props = {
    content?: string;
    createdAt?: string;
    updatedAt?: string | null;
    open: boolean;
    onClose: () => void;
    marker: string;
};

export const MarkContentPopUp = ({
    content,
    createdAt,
    updatedAt,
    open,
    onClose,
    marker
}: Props) => {
    const { role_id } = useAuthStore();

    if (!open) return null;

    const iconMap: Record<string, string> = {
        "red-marker": "bg-red-200 text-red-500",
        "green-marker": "bg-lime-200 text-lime-500",
        "yellow-marker": "bg-yellow-200 text-yellow-500",
    };

    const status: Record<string, string> = {
        "red-marker": "100% Full",
        "green-marker": "0% Rendah",
        "yellow-marker": "50% Hampir penuh",
    }

    const selectedIcon = iconMap[marker];
    const selectedStatus = status[marker];

    return (
        <div className="fixed sm:bottom-4 bottom-0 sm:right-4 flex flex-col justify-center items-start w-full sm:w-[450px] text-start bg-white p-8 sm:rounded-2xl rounded-t-2xl shadow-lg">
            <ul className="flex flex-row items-center justify-between w-full">
                <li className="text-xl"><span className="font-bold">Sampahcerdas</span> Maps</li>
                <li className="rounded-full font-bold">
                    <button onClick={onClose} className="cursor-pointer hover:text-red-400 p-2 rounded-2xl"><i className="ri-close-line"></i></button></li>
            </ul>
            <ul className="flex flex-col w-full justify-between  rounded-2xl">
                <li>{content}</li>
            </ul>
            {marker && role_id === 2 && <span className={`${selectedIcon} p-4 rounded-2xl mt-4`}>{selectedStatus}</span>}
            {marker && role_id === 3 && <span className={`${selectedIcon} p-4 rounded-2xl mt-4`}>Driver</span>}

            <div className="flex flex-col gap-2 mt-4 w-full border-t">
                <ul className="flex flex-row w-full justify-between items-center rounded-2xl text-sm mt-4">
                    <li className="text-gray-400 font-medium text-start w-fit">Dibuat</li>
                    <li className="text-end text-gray-400 font-medium w-full">{createdAt ? formatRelativeTime(createdAt) : "-"} </li>
                </ul>
                <ul className="flex flex-row w-full justify-between items-center rounded-2xl text-sm mb-4">
                    <li className="text-gray-400 font-medium text-start w-fit">Diperbarui</li>
                    <li className="text-gray-400 font-medium w-full text-end"> {updatedAt ? formatRelativeTime(updatedAt) : "-"}</li>
                </ul>

            </div>
            <button className="bg-primary w-full mt-2 rounded-2xl p-4 text-white hover:bg-lime-700 cursor-pointer" onClick={onClose}>Kembali</button>
        </div >
    );
};