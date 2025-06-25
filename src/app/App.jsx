import { BrowserRouter, Routes, Route } from "react-router-dom";
import OverviewPage from "../features/admin/OverviewPage";
import MoviesPage from "../features/admin/MoviesPage";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import ClerkSidebar from "../components/ClerkSidebar";
import ClerkMoviesPage from "../features/clerk/ClerkMoviesPage";
import MovieRow from "../components/Movie";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ClerkSidebar />} />
                <Route path="/home" element={<OverviewPage />} />
                <Route path="/admin" element={<div>Admin Dashboard</div>} />
                <Route path="/clerk" element={<ClerkMoviesPage/>} />
                <Route path="/adminmovies" element={<MoviesPage/>} />

            </Routes>
        </BrowserRouter>
    );
}
