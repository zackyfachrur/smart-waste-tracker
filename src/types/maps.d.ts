export type LocationType = {
    id?: number;
    name?: string;
    latitude: string;
    longitude: string;
    content?: string;
    marker?: string;
    created_by?: number | null;
    updated_by?: number;
    created_at?: string;
    updated_at?: string;
}


export type MarkContentType = {
    content: {
        id?: number,
        name?: string;
        marker: string;
        lat: string;
        lng: string,
        content: string;
        createdAt: string;
        updatedAt: string;
    };
    setContent: (data: MarkContentType["content"]) => void;
}

export type CenterLocationType = {
    center: {
        lat: number;
        lng: number;
        content: string;
    };
    setCenter: (data: CenterLocationType["center"]) => void;
};

export type TrashStatusType = {
    marker: string,
    isEdited: boolean,
    onEdit: () => void,
    onCancel: () => void,
    setStatus: () => void,
}

export type MapContentPopUpType = {
    name?: string;
    content?: string;
    createdAt?: string;
    updatedAt?: string | null;
    lat: string,
    lng: string,
    open: boolean;
    onClose: () => void;
    marker: string;
    markerId: number;
    onSuccess: () => void;
}

export type addMarkHandlerType = {
    setLocation: (loc: { lat: number; lng: number }) => void;
}

export type popUpMarkType = {
    popUp: boolean;
    openPopUp: () => void;
    closePopUp: () => void;
}