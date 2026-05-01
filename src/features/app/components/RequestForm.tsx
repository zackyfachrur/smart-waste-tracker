import { useRequestMarkStore } from "@/store/request.mark.store"

export const RequestForm = () => {
    const { cancelRequest } = useRequestMarkStore();

    return (
        <div className="flex items-center justify-center fixed bg-white p-4 z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px]">
            <h3>Request Form</h3>
            <button onClick={cancelRequest}>Cancel</button>
        </div>
    )
}