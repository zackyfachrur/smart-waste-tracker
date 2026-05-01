type ButtonRequestMarkerProps = {
    onClick?: () => void
}

export const ButtonRequestMarker = ({ onClick }: ButtonRequestMarkerProps) => {
    return (
        <button
            className="bg-primary px-4 cursor-pointer fixed w-fit z-30 bottom-6 right-6 hover:bg-lime-700 drop-shadow-2xl py-4 rounded-xl flex flex-row gap-2 text-white font-semibold"
            onClick={onClick}
        >
            <i className="ri-map-pin-add-fill"></i>Add Marker
        </button>
    )
}
