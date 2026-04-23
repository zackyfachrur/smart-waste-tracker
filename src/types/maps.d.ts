export type LocationType = {
    id?: number;
    latitude: string;
    longitude: string;
    content?: string;
    marker?: string;
    created_by?: number;
    updated_by?: number;
    created_at?: string;
    updated_at?: string;
}


export type MarkContentType = {
    content: {
        marker: string;
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