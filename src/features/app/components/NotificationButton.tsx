import { useNotificationRequestStore } from "@/store/notification.request.store";

export const NotificationButton = ({ onClick }: { onClick: () => void }) => {
    const { data } = useNotificationRequestStore();

    return (
        <>
            <button className="bg-white flex justify-center items-center p-4 rounded-lg shadow-xl cursor-pointer hover:bg-gray-100" onClick={onClick} type="button">
                <i className="ri-notification-3-line"></i>
                {data && data.length > 0 && (
                    <span className="absolute right-0 top-1 text-xs bg-lime-200 text-lime-500 rounded-full px-2 py-0.5">
                        {data.length}
                    </span>
                )}
            </button>
        </>
    )
}