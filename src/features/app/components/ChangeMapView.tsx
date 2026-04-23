import { useEffect } from "react";
import { useMap } from "react-leaflet";



export const ChangeMapView = ({ center }: { center: { lat: number, lng: number } }) => {
    const map = useMap();

    useEffect(() => {
        map.flyTo([center.lat, center.lng], 16);
    }, [center, map])

    return null;
}