import { Button } from "@/components/ui/button";
import BrandLogo from "@/assets/images/brandlogo.png"

type MarkFormProps = {
    form: { name: string; marker: string };
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (e: React.FormEvent) => void;
    onCancel: () => void;
    loading?: boolean;
    loadingCoords?: boolean;
    error?: string | null;
};

export const AddMarkerNotification = ({ form, handleChange, handleSubmit, error, onCancel }: MarkFormProps) => {

    return (
        <div className="fixed inset-0 w-full flex items-center justify-center bg-black/40 z-99 text-start">
            <div className="bg-white p-6 rounded-lg">
                <img src={BrandLogo} className="w-12 h-12 mb-2" alt="Brand Logo" />
                <h3 className="font-bold mb-1">Info</h3>
                <p>Apakah Anda yakin ingin menambahkan marker?</p>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Location name..."
                        className="border-b p-2 text-sm outline-none mt-4"
                    />

                    {/* Radio marker */}
                    <div className="flex gap-2">
                        <div>
                            <input
                                className="peer sr-only"
                                value="red-marker"
                                name="marker"
                                id="damaged"
                                type="radio"
                                checked={form.marker === "red-marker"}
                                onChange={handleChange}
                            />
                            <div className="flex h-10 px-2 cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-red-300 bg-red-200 p-1 transition-transform duration-150 hover:border-red-600 active:scale-95 peer-checked:border-red-600 peer-checked:shadow-md peer-checked:shadow-red-400">
                                <label className="flex cursor-pointer items-center gap-2 justify-center text-sm uppercase text-red-500 py-8 select-none" htmlFor="damaged">
                                    <i className="ri-map-pin-add-fill" /> Damaged
                                </label>
                            </div>
                        </div>

                        <div>
                            <input
                                className="peer sr-only"
                                value="yellow-marker"
                                name="marker"
                                id="full"
                                type="radio"
                                checked={form.marker === "yellow-marker"}
                                onChange={handleChange}
                            />
                            <div className="flex h-10 px-2 w-24 cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-yellow-300 bg-yellow-100 p-1 transition-transform duration-150 hover:border-yellow-400 active:scale-95 peer-checked:border-yellow-500 peer-checked:shadow-md peer-checked:shadow-yellow-400">
                                <label className="flex cursor-pointer items-center justify-center text-sm gap-2 uppercase text-yellow-500 py-8 select-none" htmlFor="full">
                                    <i className="ri-map-pin-add-fill" /> Full
                                </label>
                            </div>
                        </div>

                        <div>
                            <input
                                className="peer sr-only"
                                value="green-marker"
                                name="marker"
                                id="empty"
                                type="radio"
                                checked={form.marker === "green-marker"}
                                onChange={handleChange}
                            />
                            <div className="flex h-10 px-2 cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-lime-300 bg-green-100 p-1 transition-transform duration-150 hover:border-lime-400 active:scale-95 peer-checked:border-lime-500 peer-checked:shadow-md peer-checked:shadow-lime-400">
                                <label className="flex cursor-pointer items-center gap-2 justify-center text-sm uppercase text-lime-500 py-8 select-none" htmlFor="empty">
                                    <i className="ri-map-pin-add-fill" /> Empty
                                </label>
                            </div>
                        </div>
                    </div>

                    {error && <p className="text-red-500 text-xs">{error}</p>}

                    <div className="flex gap-2 mt-4">
                        <Button type="submit" variant="default" className="p-4 font-semibold cursor-pointer flex-1" >Save</Button>
                        <Button type="button" variant="destructive" className="p-4 font-semibold cursor-pointer flex-1" onClick={onCancel}>Cancel</Button>
                    </div>
                </form>
            </div>
        </div >
    );
};