// src/components/General/ProtectedRoute.tsx
import { Outlet, Navigate } from "react-router-dom";

const getAuth = () => {
    return (
        JSON.parse(localStorage.getItem("auth") || "null") ||
        JSON.parse(sessionStorage.getItem("auth") || "null")
    );
};

const ProtectedRoute = () => {
    const auth = getAuth();

    if (!auth?.token) {
        return <Navigate to="/authentication" replace />;
    }


    return <Outlet />;
};

export default ProtectedRoute;