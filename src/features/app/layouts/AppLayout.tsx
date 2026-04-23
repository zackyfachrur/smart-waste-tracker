import { Outlet } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/ui/app-sidebar"
import SearchLocation from "@/features/app/components/SearchLocation"
import { useDisplayStore } from "@/store/display.store"

const AppLayout = () => {
    const { open } = useDisplayStore();
    return (
        <SidebarProvider
            className="bg-muted"
            style={{ "--sidebar-width": "300px" } as React.CSSProperties}
        >
            {/* Sidebar */}
            <AppSidebar />

            <div className="flex flex-1 flex-col gap-4">
                <header className="fixed z-50 flex h-fit shrink-0 items-center gap-4 rounded-xl m-4">
                    <SidebarTrigger className="cursor-pointer bg-background p-4 h-14 w-14 shadow-sm" />
                    <SearchLocation onClick={open} />
                </header>
                {/* Content */}
                <main className="flex-1 rounded-xl bg-background">
                    <Outlet />
                </main>
            </div>
        </SidebarProvider>
    );
};

export default AppLayout;