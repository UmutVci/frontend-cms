import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../features/auth/pages/LoginPage";
import Sidebar from "../components/Sidebar";
import MoviesPage from "../features/admin/MoviesPage";
import OverviewPage from "../features/admin/OverviewPage";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/home" element={<OverviewPage />} />
                <Route path="/admin" element={<div>Admin Dashboard</div>} />
                <Route path="/clerk" element={<div>Ticket Clerk Panel</div>} />
            </Routes>
        </BrowserRouter>
    );
}
