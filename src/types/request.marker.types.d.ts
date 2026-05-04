// types/notification.types.ts

export interface UserDetail {
    id: number;
    name: string;
    email: string;
    email_verified_at: string | null;
    role_id: string;
    created_at: string;
    updated_at: string;
}

export interface NotificationItem {
    id: number;
    requester: string;
    reason: string;
    content: string;
    status_id: string;
    created_by: string;
    updated_by: string | null;
    created_at: string;
    updated_at: string;
    creator: UserDetail;
    editor: UserDetail | null;
    req: UserDetail;
}