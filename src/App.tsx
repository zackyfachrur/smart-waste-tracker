// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthenticationPages from "./features/authentication";
import ProtectedRoute from "./components/General/ProtectedRoute";
import PublicRoute from "./components/General/PublicRoute";
import { useEffect } from "react";
import { useAuthStore } from "./store/auth.store";

// DEFAULT ENTRY
// import RootRedirect from "./components/General/RouteRedirect"

// USER
import AppLayout from "./features/app/layouts/AppLayout"
import AppDashboard from "./features/app/pages/AppDashboard";
import DashboardWaste from "./features/app/pages/DashboardWaste";
import NotFound from "./NotFound";


function App() {
  const { initAuth } = useAuthStore();

  useEffect(() => {
    initAuth();
  }, [])

  return (
    <BrowserRouter basename="/mobile">
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/authentication" element={<AuthenticationPages />} />
        </Route>

        {/* USER */}
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<AppDashboard />} />
          </Route>
        </Route>

        {/* WASTE DASHBOARD */}
        <Route element={<ProtectedRoute />}>
          <Route path="/education" element={<AppLayout />}>
            <Route index element={<DashboardWaste />} />
          </Route>
        </Route>

        {/* 404 dalam layout */}
        <Route path="*" element={<NotFound />} />

      </Routes>

    </BrowserRouter>
  )
}

export default App