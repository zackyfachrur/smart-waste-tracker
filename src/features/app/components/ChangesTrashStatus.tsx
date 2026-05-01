// components/ChangesTrashStatus.tsx
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useTrashStatusStore } from "@/store/trash.status.store";
import { useEffect } from "react";

const statusMap: Record<string, string> = {
    "green-marker": "Empty",
    "yellow-marker": "Full",
    "red-marker": "Damaged",
};

type ChangesTrashStatusType = {
    markerId: number;
    initialStatus: string;
    onSave?: (markerId: number, status: string) => void;
};

export const ChangesTrashStatus = ({
    markerId,
    initialStatus,
    onSave,
}: ChangesTrashStatusType) => {
    const { statuses, isEdited, setStatus, setIsEdited, cancelEdit } =
        useTrashStatusStore();

    const currentStatus = statuses[markerId] ?? initialStatus;
    const editing = isEdited[markerId] ?? false;

    useEffect(() => {
        setStatus(markerId, initialStatus);
        setIsEdited(markerId, true);
    }, [markerId, initialStatus]);

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        onSave?.(markerId, currentStatus);
        setIsEdited(markerId, true);
    };

    return (
        <form
            onSubmit={handleSave}
            className="flex flex-row justify-start items-center gap-2 w-full h-fit mt-8"
        >
            <Select
                value={currentStatus}
                onValueChange={(val) => val && setStatus(markerId, val)}
                disabled={editing}
            >
                <SelectTrigger className="w-full max-w-48">
                    <SelectValue>
                        {currentStatus ? statusMap[currentStatus] : "Select a status"}
                    </SelectValue>
                </SelectTrigger>
                <SelectContent side="top" align="start" sideOffset={8}>
                    <SelectGroup className="flex flex-col gap-2">
                        <SelectLabel>Status</SelectLabel>
                        <SelectItem
                            value="green-marker"
                            className="bg-lime-200 text-lime-800 hover:bg-lime-300 cursor-pointer"
                        >
                            Empty
                        </SelectItem>
                        <SelectItem
                            value="yellow-marker"
                            className="bg-yellow-200 hover:bg-yellow-300 cursor-pointer text-yellow-500"
                        >
                            Full
                        </SelectItem>
                        <SelectItem
                            value="red-marker"
                            className="bg-red-200 hover:bg-red-300 cursor-pointer text-red-600"
                        >
                            Damaged
                        </SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>

            {editing ? (
                <button
                    onClick={() => setIsEdited(markerId, false)}
                    type="button"
                    className="flex flex-row text-xs gap-2 font-bold self-center bg-lime-200 text-lime-800 px-2 py-2 cursor-pointer shadow-sm rounded-sm hover:bg-lime-800 hover:text-white"
                >
                    <i className="ri-pencil-fill" /> Edit Status
                </button>
            ) : (
                <>
                    <button
                        type="submit"
                        className="flex flex-row text-xs gap-2 font-bold self-center bg-lime-200 text-lime-800 px-2 py-2 cursor-pointer shadow-sm rounded-sm hover:bg-lime-800 hover:text-white"
                    >
                        <i className="ri-save-fill" /> Save
                    </button>
                    <button
                        onClick={() => cancelEdit(markerId)}
                        type="button"
                        className="flex flex-row text-xs gap-2 font-bold self-center bg-red-200 text-red-800 px-2 py-2 cursor-pointer shadow-sm rounded-sm hover:bg-red-800 hover:text-white"
                    >
                        <i className="ri-close-fill" /> Cancel
                    </button>
                </>
            )}
        </form>
    );
};