import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
} from "@/components/ui/sidebar";

import BrandLogo from "@/assets/images/brandlogo.png"
import { Link, useLocation } from "react-router-dom";
import { useAuthStore } from "@/store/auth.store"
import { useNavigate } from "react-router-dom"

export const AppSidebar = () => {
    const location = useLocation();
    const { logout } = useAuthStore();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/mobile/authentication", { replace: true });
    }

    return (
        <Sidebar className="z-90">
            <SidebarHeader className="bg-white flex justify-center">
                <h1 className="text-lg font-bold px-4 text-start"><img src={BrandLogo} className="2xl:w-full sm:w-[50%] w-[50%]" alt="Brand Logo" /> Aplikasi Sampah Cerdas</h1>
            </SidebarHeader>

            <SidebarContent className="bg-white h-full">
                <SidebarGroup>
                    <nav className="flex flex-col gap-2 px-4">
                        <Link
                            to="/"
                            className={location.pathname === "/" ? "bg-lime-800 text-white p-4 rounded-xl text-start" : "text-start p-4"}
                        >
                            <i className="ri-road-map-fill"></i> Maps
                        </Link>

                        <Link
                            to="/education"
                            className={location.pathname === "/education" ? "bg-lime-800 text-white p-4 rounded-xl text-start" : "text-start p-4"}
                        >
                            <i className="ri-book-shelf-fill"></i> Education
                        </Link>
                    </nav>
                </SidebarGroup>
            </SidebarContent>

            <SidebarFooter className="bg-white px-4 border-t-2 border-gray-200">
                <button onClick={handleLogout} className="cursor-pointer p-4 flex flex-row items-center gap-4 font-semibold text-base text-start hover:bg-gray-200 rounded-2xl"><i className="ri-logout-circle-line font-semibold"></i> Logout</button>
            </SidebarFooter>
        </Sidebar>
    );
};