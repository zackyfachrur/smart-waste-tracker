export type AuthenticationProps = {
    name?: string;
    email?: string;
    password?: string;
    role_id?: string;
    confirmPassword?: string;
    checked?: boolean;
}

export type AuthState = {
    user_id: number | null,
    token: string | null;
    role_id: number | null;
    login: (data: any, remember: boolean) => void;
    logout: () => void;
    initAuth: () => void;
}

export type BarrierAuthState = {
    pages: "login" | "register";
    setPages: (page: "login" | "register") => void;
}

export type DisplayState = {
    display: boolean;
    open: () => void;
    close: () => void;
    toggle: () => void;
}

export type ErrorsProps = {
    name?: string;
    email?: string;
    password?: string;
    role_id?: string;
    confirmPassword?: string;
    checked?: boolean;
}
