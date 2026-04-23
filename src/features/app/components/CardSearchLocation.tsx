import { useState, useRef } from "react";
// import type { LocationType } from "@/types/maps";
import { useAllLocation } from "@/hooks/useAllLocation";
import DefaultMark from "@/assets/images/default-marker.png";
import { useDisplayStore } from "@/store/display.store";
import { useCenterLocationStore } from "@/store/center.location.store";
import { useMarkContentStore } from "@/store/marker.content.store"

const CardSearchLocation = ({ onClick }: { onClick: () => void }) => {
    const [search, setSearch] = useState("");
    const { location } = useAllLocation();


    const cardRef = useRef<HTMLDivElement>(null);

    const { display, close } = useDisplayStore();
    const { setCenter } = useCenterLocationStore();
    const { setContent } = useMarkContentStore();

    const filteredLocations = location.filter((item) =>
        String(item.content).toLowerCase().includes(search.toLowerCase())
    );

    if (!display) return null;

    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (cardRef.current && !cardRef.current.contains(e.target as Node)) {
            close();
        }
    };

    return (
        /* Fullscreen overlay dengan blur + dark background */
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
            onClick={handleOverlayClick}
        >
            {/* Card */}
            <div
                ref={cardRef}
                className="relative w-[400px] bg-white rounded-2xl shadow-2xl p-4 flex flex-col gap-2"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-semibold text-gray-700">Cari Lokasi</span>
                    <button
                        onClick={close}
                        className="text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
                    >
                        <i className="ri-close-line text-xl" />
                    </button>
                </div>

                {/* Search Bar */}
                <div className="flex flex-row items-center gap-2 bg-gray-50 border border-gray-200 px-4 h-12 rounded-xl w-full">
                    <label htmlFor="search-trashcan" className="text-gray-400 flex-shrink-0">
                        <i className="ri-search-line text-lg" />
                    </label>
                    <input
                        type="text"
                        id="search-trashcan"
                        className="h-full outline-none w-full bg-transparent text-sm text-gray-700 placeholder:text-gray-400"
                        placeholder="Search trashcan..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        autoFocus
                    />
                    {search && (
                        <button
                            onClick={() => setSearch("")}
                            className="text-gray-400 hover:text-gray-600 flex-shrink-0 cursor-pointer transition-colors"
                        >
                            <i className="ri-close-line text-lg" />
                        </button>
                    )}
                </div>

                {/* Results — di dalam card, di bawah search bar */}
                {search && (
                    <div className="w-full bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm mt-1">
                        {filteredLocations.length > 0 ? (
                            filteredLocations.slice(0, 3).map((item) => (
                                <div
                                    key={item.id}
                                    className="flex flex-row items-center gap-3 px-4 py-3 text-gray-600 hover:bg-lime-50 cursor-pointer transition-colors"
                                    onClick={() => {
                                        setCenter({
                                            lat: Number(item.latitude),
                                            lng: Number(item.longitude),
                                            content: String(item.content),
                                        })
                                        setContent({
                                            marker: String(item.marker),
                                            content: String(item.content),
                                            createdAt: String(item.created_at),
                                            updatedAt: String(item.updated_at)
                                        })
                                        close();
                                        onClick();
                                    }}
                                >
                                    <img
                                        src={DefaultMark}
                                        className="h-[36px] w-[36px] object-contain flex-shrink-0"
                                        alt="Marker"
                                    />
                                    <span className="text-sm font-medium truncate">
                                        {item.content}
                                    </span>
                                </div>
                            ))
                        ) : (
                            <div className="px-4 py-4 text-sm text-gray-400 text-center">
                                Lokasi tidak ditemukan...
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div >
    );
};

export default CardSearchLocation;