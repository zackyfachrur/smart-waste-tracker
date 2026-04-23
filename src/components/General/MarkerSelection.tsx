
export const MarkerSelection = () => {
    return (
        <div className="flex gap-2 mt-4">
            <div>
                <input
                    className="peer sr-only"
                    value="1"
                    name="role_id"
                    id="admin"
                    type="radio"
                // onChange={(e) => setForm({ ...form, role_id: e.target.value })}
                />
                <div
                    className="flex h-10 px-2 cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-red-300 bg-red-200 p-1 transition-transform duration-150 hover:border-red-600 active:scale-95 peer-checked:border-red-600 peer-checked:shadow-md peer-checked:shadow-red-400"
                >
                    <label
                        className="flex cursor-pointer items-center gap-2 justify-center text-sm uppercase text-red-500 peer-checked:text-red-600 py-8 select-none"
                        htmlFor="admin"
                    >
                        <i className="ri-map-pin-add-fill"></i>
                        Penuh
                    </label>
                </div>
            </div>
            <div>
                <input
                    className="peer sr-only bg-gray-400"
                    value="2"
                    name="role_id"
                    id="user"
                    type="radio"
                // onChange={(e) => setForm({ ...form, role_id: e.target.value })}
                />
                <div
                    className="flex h-10 px-2 w-24 cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-yellow-300 bg-yellow-100 p-1 transition-transform duration-150 hover:border-yellow-400 active:scale-95 peer-checked:border-yellow-500 peer-checked:shadow-md peer-checked:shadow-yellow-400"
                >
                    <label
                        className="flex cursor-pointer items-center justify-center text-sm gap-2 uppercase text-yellow-500 peer-checked:text-yellow-500 py-8 select-none"
                        htmlFor="user"
                    >
                        <i className="ri-map-pin-add-fill"></i>
                        Sedang
                    </label>
                </div>
            </div>
            <div>
                <input
                    className="peer sr-only"
                    value="3"
                    name="role_id"
                    id="driver"
                    type="radio"
                // onChange={(e) => setForm({ ...form, role_id: e.target.value })}
                />
                <div
                    className="flex h-10 px-2 cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-lime-300 bg-green-100 p-1 transition-transform duration-150 hover:border-lime-400 active:scale-95 peer-checked:border-lime-500 peer-checked:shadow-md peer-checked:shadow-lime-400"
                >
                    <label
                        className="flex cursor-pointer items-center gap-2 justify-center text-sm uppercase text-lime-500 peer-checked:text-lime-500 py-8 select-none"
                        htmlFor="driver"
                    >
                        <i className="ri-map-pin-add-fill"></i>
                        Rendah
                    </label>
                </div>
            </div>
        </div>
    )
}