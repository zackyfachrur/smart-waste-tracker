import { useRequestMarkForm } from "@/hooks/useRequestMarkForm"

export const RequestForm = () => {
    const { reason, setReason, isLoading, error, handleSubmit, cancelRequest } = useRequestMarkForm()

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-20 flex items-center justify-center">

            {/* Modal card */}
            <div className="flex flex-col bg-white shadow-xl z-30 w-fit p-8 rounded-2xl">
                <div className="flex justify-between w-full">
                    <h3 className="font-bold">Information</h3>
                    <button onClick={cancelRequest} className="cursor-pointer hover:text-red-600">
                        <i className="ri-close-line"></i>
                    </button>
                </div>

                <p className="mt-2">Please contact the administrator</p>

                <form className="flex flex-col w-full" onSubmit={handleSubmit}>
                    <div className="flex flex-row items-center text-start gap-2 w-full mt-4 border rounded-xl">
                        <label htmlFor="reason" className="font-medium p-2">
                            <i className="ri-message-2-line"></i>
                        </label>
                        <input
                            type="text"
                            id="reason"
                            className="w-full outline-none py-2"
                            placeholder="Reason..."
                            value={reason}
                            onChange={(e) => setReason(e.target.value)}
                            disabled={isLoading}
                        />
                    </div>

                    {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

                    <div className="flex flex-row gap-2 w-full mt-4">
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="bg-primary text-white p-4 rounded-xl w-full disabled:opacity-50"
                        >
                            {isLoading ? "Submitting..." : "Request"}
                        </button>
                        <button
                            type="button"
                            onClick={cancelRequest}
                            disabled={isLoading}
                            className="bg-red-700 w-full text-white p-4 rounded-xl cursor-pointer hover:bg-red-600 disabled:opacity-50"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}