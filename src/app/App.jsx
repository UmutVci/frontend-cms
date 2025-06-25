import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../features/auth/pages/LoginPage";
import Sidebar from "../components/Sidebar";
import MoviesPage from "../features/auth/pages/MoviesPage";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Sidebar />} />
                <Route path="/admin" element={<div>Admin Dashboard</div>} />
                <Route path="/clerk" element={<div>Ticket Clerk Panel</div>} />
            </Routes>
        </BrowserRouter>
    );
}
