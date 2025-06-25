import { BrowserRouter, Routes, Route } from "react-router-dom";
import OverviewPage from "../features/admin/OverviewPage";
import MoviesPage from "../features/admin/MoviesPage";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MoviesPage />} />
                <Route path="/home" element={<OverviewPage />} />
                <Route path="/admin" element={<div>Admin Dashboard</div>} />
                <Route path="/clerk" element={<div>Ticket Clerk Panel</div>} />
            </Routes>
        </BrowserRouter>
    );
}
