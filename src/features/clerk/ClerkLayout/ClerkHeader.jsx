import { MenuIcon, SearchIcon } from '@heroicons/react/solid';
import useAuth from "../../auth/useAuth";
import { useLocation } from "react-router-dom";

export default function ClerkHeader({ title, onMenuClick }) {
    const user = useAuth((state) => state.user) || {};
    const location = useLocation();
    const path = location.pathname;

    const staticTitles = {
        "/clerk": "Bookings",
        "/clerk/bookings": "Bookings",
        "/clerk/movies": "Movies",
        "/clerk/feedback": "Feedback",
        "/clerk/sessions": "Sessions",
    };

    const finalTitle = title || staticTitles[path] || "Clerk Panel";

    return (
        <div className="flex items-center justify-between h-20 bg-white px-6 shadow-md font-[Poppins] w-full overflow-hidden">
            {/* Hamburger icon - sadece md altı */}
            <button
                className="md:hidden p-2"
                onClick={onMenuClick}
                aria-label="Toggle menu"
            >
                <MenuIcon className="h-6 w-6 text-gray-700" />
            </button>

            <h1 className="text-2xl font-semibold text-black ml-4">{finalTitle}</h1>

            <div className="flex items-center space-x-6">
                <img className="w-12 h-12 rounded-full object-cover" src="/pass.jpg" alt="Profile" />
                <span className="text-black font-medium text-md hidden sm:inline">{user?.name || "Loading..."}</span>
            </div>
        </div>
    );
}
