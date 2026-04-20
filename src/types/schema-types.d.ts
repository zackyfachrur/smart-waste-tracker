export type AuthenticationProps = {
    name?: string;
    email?: string;
    password?: string;
    role?: string;
}

export type AuthState = {
    pages: "login" | "register";
    setPages: (page: "login" | "register") => void;
}

export type ErrorsProps = {
    name?: string;
    email?: string;
    password?: string;
    role?: string;
}
