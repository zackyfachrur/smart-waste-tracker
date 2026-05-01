// src/components/general/PublicRoute.tsx
import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = () => {
    const auth =
        JSON.parse(localStorage.getItem("auth") || "null") ||
        JSON.parse(sessionStorage.getItem("auth") || "null");

    if (auth?.token) {
        return <Navigate to="/" />;
    }

    return <Outlet />;
};

export default PublicRoute;