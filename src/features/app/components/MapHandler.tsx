import { useMapEvents } from "react-leaflet"
import L from "leaflet";
import "leaflet.awesome-markers/dist/leaflet.awesome-markers.css";
import "leaflet.awesome-markers";


// Marker Icon
import DefaultMarkerIcon from "@/assets/images/default-marker.png"
import RedMarkerIcon from "@/assets/images/red-marker.png"
import GreenMarkerIcon from "@/assets/images/green-marker.png"
import YellowMarkerIcon from "@/assets/images/yellow-marker.png"

export const createIcon = ({ color }: { color?: string }) => {


    const iconMap: Record<string, string> = {
        "default": DefaultMarkerIcon,
        "red-marker": RedMarkerIcon,
        "green-marker": GreenMarkerIcon,
        "yellow-marker": YellowMarkerIcon,
    };

    const selectedIcon = iconMap[color || "default"] || DefaultMarkerIcon;

    return L.icon({
        iconUrl: selectedIcon,
        iconSize: [30, 55],
        iconAnchor: [15, 55],
        popupAnchor: [0, -55]
    });
}


export const AddMarkHandler = ({ setLocation, setShowPopup }: any) => {
    useMapEvents({
        click(e) {
            setLocation({
                lat: e.latlng.lat,
                lng: e.latlng.lng,
            });

            setShowPopup(true);
        },
    });

    return null;
};

