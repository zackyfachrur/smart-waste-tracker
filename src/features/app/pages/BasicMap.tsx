import { MapContainer, TileLayer, Marker } from "react-leaflet"
// import { Button } from "@/components/ui/button";
import { useState } from "react";
import type { LocationType } from "@/types/maps";
import { createIcon } from "../components/MapHandler"
// import { MarkerNotification } from "./MarkerNotification";
import { useAllLocation } from "@/hooks/useAllLocation"
import Loader from "@/components/General/Loader"
import { ChangeMapView } from "../components/ChangeMapView"
import { MarkContentPopUp } from "../components/MarkContentPopUp";
import CardSearchLocation from "../components/CardSearchLocation";
import { useCenterLocationStore } from "@/store/center.location.store"
import { useMarkContentStore } from "@/store/marker.content.store";

const MapInput = () => {
    // const [selectedMarker, setSelectedMarker] = useState<string>("default");
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const { center, setCenter } = useCenterLocationStore();
    const { content, setContent } = useMarkContentStore();
    console.log("CONTENT MAPS: ", content);



    const { error, loading, location } = useAllLocation();


    if (loading) return <Loader />
    if (error) return <span>{error}</span>

    return (
        <div className="-z-50">
            {/* MAP */}
            <MapContainer
                center={[center.lat, center.lng]}
                zoom={13}
                zoomAnimation={true}
                zoomControl={false}
                style={{
                    height: "100vh", zIndex: 0, borderRadius: "10px", border: "8px", outline: "none", width: "100vw",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"
                }}
            >
                <TileLayer
                    attribution="&copy; OpenStreetMap"
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <ChangeMapView center={center} />

                {/* <AddMarkHandler setLocation={setLocation} setShowPopup={setShowPopup} canceled={false} /> */}

                {/* <Marker
                    position={[location.lat, location.lng]}
                    icon={createIcon()}
                /> */}

                <Marker
                    position={[-7.516193162194461, 110.19805308530935]}
                    icon={createIcon({ color: "default" })}
                />


                {location.map((data: LocationType) => (
                    <Marker
                        key={data.id}
                        position={[Number(data.latitude), Number(data.longitude)]}
                        icon={createIcon({ color: String(data.marker) })}
                        eventHandlers={{
                            click: () => {
                                setCenter({
                                    lat: Number(data.latitude),
                                    lng: Number(data.longitude),
                                    content: String(data.content),
                                });
                                setContent({
                                    marker: String(data.marker),
                                    content: String(data.content),
                                    createdAt: String(data.created_at),
                                    updatedAt: String(data.updated_at),
                                });
                                setIsPopupOpen(true);
                            }
                        }}
                    />
                ))}

            </MapContainer>


            <CardSearchLocation onClick={() => setIsPopupOpen(true)} />


            <MarkContentPopUp
                content={content.content}
                createdAt={content.createdAt}
                updatedAt={content.updatedAt}
                open={isPopupOpen}
                marker={content.marker}
                onClose={() => setIsPopupOpen(false)}
            />

            {/* POP UP AGREEMENTS */}
            {/* {showPopup && (
                <MarkerNotification onConfirm={() => handlerAgreement(true)} onCancel={() => handlerAgreement(false)} />
            )} */}

        </div>
    );
};

export default MapInput;