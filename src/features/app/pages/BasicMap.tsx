// src/features/app/pages/BasicMap.tsx
import { MapContainer, TileLayer, Marker } from "react-leaflet"
// import { Button } from "@/components/ui/button";
import { useState } from "react";
import type { LocationType } from "@/types/maps";
import { createIcon, AddMarkHandler } from "../components/MapHandler"
import { useAllLocation } from "@/hooks/useAllLocation"
import Loader from "@/components/General/Loader"
import { ChangeMapView } from "../components/ChangeMapView"
import { MarkContentPopUp } from "../components/MarkContentPopUp";
import CardSearchLocation from "../components/CardSearchLocation";
import { useCenterLocationStore } from "@/store/center.location.store"
import { useMarkContentStore } from "@/store/marker.content.store";
import { useAuthStore } from "@/store/auth.store";
import { usePopUpMark } from "@/store/popup.mark.store";
import { AddMarkerNotification } from "../components/AddMarkerNotification";
import { useAddMarkForm } from "@/hooks/useAddMarkForm";

const MapInput = () => {
    const { role_id } = useAuthStore();
    const { popUp, closePopUp } = usePopUpMark();
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const { center, setCenter } = useCenterLocationStore();
    const { content, setContent } = useMarkContentStore();
    const [newMark, setNewMark] = useState<{ lat: number; lng: number } | null>(null);
    const { error, loading, location, refetch } = useAllLocation();
    const { form, handleChange, handleSubmit, setCoords, loadingCoords, resetForm } = useAddMarkForm(refetch);

    // DEBUG
    // console.log("CONTENT MAPS: ", content);



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
                {role_id === 1 && (
                    <>
                        <AddMarkHandler setLocation={(loc) => {
                            setNewMark(loc);
                            setCoords(loc.lat, loc.lng);
                        }} />

                        {newMark && (
                            <Marker
                                position={[newMark.lat, newMark.lng]}
                                icon={createIcon({ color: "default" })}
                            />
                        )}

                        <Marker
                            position={[-7.516193162194461, 110.19805308530935]}
                            icon={createIcon({ color: "default" })}
                        />

                    </>
                )}

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
                                    id: Number(data.id ?? null),
                                    name: String(data.name ?? ""),
                                    marker: String(data.marker),
                                    lat: String(data.latitude),
                                    lng: String(data.longitude),
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


            {popUp === true && (
                <AddMarkerNotification form={form} handleChange={handleChange} loadingCoords={loadingCoords} handleSubmit={handleSubmit} onCancel={() => {
                    setNewMark(null);
                    closePopUp();
                    resetForm();
                }} />
            )}

            <MarkContentPopUp
                name={content.name}
                content={content.content}
                createdAt={content.createdAt}
                updatedAt={content.updatedAt}
                open={isPopupOpen}
                marker={content.marker}
                markerId={Number(content.id)}
                lat={String(content.lat)}
                lng={String(content.lng)}
                onClose={() => setIsPopupOpen(false)}
                onSuccess={refetch}
            />


        </div>
    );
};

export default MapInput;