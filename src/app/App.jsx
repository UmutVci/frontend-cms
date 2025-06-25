import { BrowserRouter, Routes, Route } from "react-router-dom";
import OverviewPage from "../features/admin/OverviewPage";
import MoviesPage from "../features/admin/MoviesPage";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import AdminCustomers from "../features/admin/AdminCustomers";
import LoginPage from "../features/auth/pages/LoginPage";
import AdminMovies from "../features/admin/AdminMovies";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/home" element={<OverviewPage />} />
                <Route path="/admin/customers" element={<AdminCustomers />}/>
                <Route path="/admin/movies" element={<MoviesPage />}/>
                <Route path="/admin" element={<div>Admin Dashboard</div>} />
                <Route path="/clerk" element={<div>Ticket Clerk Panel</div>} />
            </Routes>
        </BrowserRouter>
    );
}
