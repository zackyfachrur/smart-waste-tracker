import { Outlet } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/ui/app-sidebar"
import SearchLocation from "@/features/app/components/SearchLocation"
import { useDisplayStore } from "@/store/add.mark.store"
import { ButtonRequestMarker } from "@/features/app/components/ButttonRequestMarker"
import { useRequestMarkStore } from "@/store/request.mark.store"
import { RequestForm } from "@/features/app/components/RequestForm";

const AppLayout = () => {
    const { open } = useDisplayStore();
    const { sendRequest, statusRequest } = useRequestMarkStore();

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

                <ButtonRequestMarker onClick={sendRequest} />
                {
                    statusRequest && (
                        <RequestForm />
                    )
                }

                {/* Content */}
                <main className="flex-1 rounded-xl bg-background">
                    <Outlet />
                </main>
            </div>
        </SidebarProvider>
    );
};

export default AppLayout;