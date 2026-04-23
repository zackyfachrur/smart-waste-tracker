import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthenticationPages from "./features/authentication";
import ProtectedRoute from "./components/General/ProtectedRoute";
import PublicRoute from "./components/General/PublicRoute";

// DEFAULT ENTRY
// import RootRedirect from "./components/General/RouteRedirect"

// USER
import AppLayout from "./features/app/layouts/AppLayout"
import AppDashboard from "./features/app/pages/AppDashboard";
import NotFound from "./NotFound";


function App() {


  return (
    <BrowserRouter basename="/sampahcerdas">
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

        {/* 404 dalam layout */}
        <Route path="*" element={<NotFound />} />

      </Routes>

    </BrowserRouter>
  )
}

export default App