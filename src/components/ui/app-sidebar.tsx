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

export const AppSidebar = () => {
    const location = useLocation();
    const { logout } = useAuthStore();

    return (
        <Sidebar className="z-90">
            <SidebarHeader className="bg-white flex justify-center">
                <h1 className="text-lg font-bold px-4 text-start"><img src={BrandLogo} className="2xl:w-full sm:w-[50%] w-[50%]" alt="Brand Logo" /> Aplikasi Sampah Cerdas</h1>
            </SidebarHeader>

            <SidebarContent className="bg-white h-full">
                <SidebarGroup>
                    <nav className="flex flex-col gap-2 px-4">
                        <Link
                            to="/user"
                            className={location.pathname === "/" ? "bg-lime-800 text-white p-4 rounded-xl text-start" : "text-start p-4"}
                        >
                            <i className="ri-dashboard-2-line"></i> Analytics
                        </Link>

                        {/* <Link
                            to="/history"
                            className={location.pathname === "/history" ? "bg-lime-800 text-white p-4 rounded-xl text-start" : "text-start p-4"}
                        >
                            <i className="ri-delete-bin-line"></i> History
                        </Link> */}
                    </nav>
                </SidebarGroup>
            </SidebarContent>

            <SidebarFooter className="bg-white px-4 border-t-2 border-gray-200">
                <button onClick={logout} className="cursor-pointer p-4 flex flex-row items-center gap-4 font-semibold text-base text-start hover:bg-gray-200 rounded-2xl"><i className="ri-logout-circle-line font-semibold"></i> Logout</button>
            </SidebarFooter>
        </Sidebar>
    );
};