// src/components/General/RouteRedirect.tsx
import { Navigate } from "react-router-dom";

const RootRedirect = () => {
    const auth =
        JSON.parse(localStorage.getItem("auth") || "null") ||
        JSON.parse(sessionStorage.getItem("auth") || "null");

    if (!auth?.token) return <Navigate to="/authentication" />;

    return <Navigate to="/" />;
};

export default RootRedirect;