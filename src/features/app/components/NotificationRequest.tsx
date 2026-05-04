// src\features\app\components\NotificationRequest.tsx
import LoaderChildren from "@/components/General/LoaderChildren";
import { useNotificationRequestStore } from "@/store/notification.request.store";
import { useNotificationRequest } from "@/hooks/useRequestNotification";

const getInitials = (name: string) =>
    name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);

const formatDate = (dateStr: string) =>
    new Date(dateStr).toLocaleDateString("id-ID", {
        day: "numeric", month: "short", year: "numeric"
    });

const STATUS_LABEL: Record<string, string> = {
    "1": "Pending",
    "2": "Accepted",
    "3": "Declined",
    "4": "Expired",
};

const STATUS_CLASS: Record<string, string> = {
    "1": "bg-yellow-100 text-yellow-700",
    "2": "bg-green-100 text-green-700",
    "3": "bg-red-100 text-red-700",
    "4": "bg-gray-100 text-gray-700",
};

export const NotificationRequest = ({ display }: { display: string }) => {
    const { data, loading } = useNotificationRequestStore();
    const { error } = useNotificationRequest();

    if (loading) return (
        <LoaderChildren className={`absolute top-16 left-2 right-2 sm:left-0 sm:right-auto sm:top-16 z-50 p-6 shadow-xl rounded-xl bg-white w-auto sm:w-fit flex justify-center items-center ${display}`} />
    );

    if (error) return (
        <div className="absolute z-50 bg-white shadow-xl ...">
            <p className="text-sm text-center text-red-400 py-8">
                Failed to load notifications
            </p>
        </div>
    );

    return (
        <div className={`
            absolute z-50 bg-white shadow-xl flex-col gap-2 left-2 right-2 top-16 rounded-xl p-3 sm:left-0 sm:top-16 sm:right-auto sm:w-[380px] sm:rounded-2xl sm:p-4 md:w-[420px] ${display} `}>
            {/* Header */}
            <div className="flex items-center justify-between mb-1">
                <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Request Notification
                </p>
                {data && data.length > 0 && (
                    <span className="text-xs bg-gray-100 text-gray-500 rounded-full px-2 py-0.5">
                        {data.length}
                    </span>
                )}
            </div>

            {/* Notification Content */}
            <div className="flex flex-col gap-2 overflow-y-auto max-h-[30vh] sm:max-h-[50vh] pr-0.5">
                {data && data.length > 0 ? data.map((item) => (
                    <div
                        key={item.id}
                        className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 hover:bg-gray-50 transition"
                    >
                        {/* Avatar */}
                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs sm:text-sm font-semibold flex-shrink-0">
                            {getInitials(item.req.name)}
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0 text-start">
                            <p className="text-sm capitalize font-medium text-gray-800 truncate">
                                {item.req.name}
                            </p>
                            <p className="text-xs text-gray-400 truncate">{item.reason}</p>
                            <p className="text-xs text-gray-300 mt-0.5">
                                {formatDate(item.created_at)}
                            </p>
                        </div>

                        {/* Badge */}
                        <span className={`text-xs font-medium px-2 py-1 sm:px-2.5 rounded-lg flex-shrink-0 ${STATUS_CLASS[item.status_id] ?? "bg-gray-100 text-gray-500"}`}>
                            {STATUS_LABEL[item.status_id] ?? "Unknown"}
                        </span>
                    </div>
                )) : (
                    <p className="text-sm text-center text-gray-400 py-8">
                        No notifications found
                    </p>
                )}
            </div>
        </div>
    );
};