import { MenuIcon } from '@heroicons/react/solid';
import useAuth from "../../auth/useAuth";
import { useLocation, matchPath } from "react-router-dom";

export default function ClerkHeader({ title, onMenuClick }) {
    const user = useAuth((state) => state.user) || {};
    const location = useLocation();
    const path = location.pathname;
    const username = user?.email?.split('@')[0] || 'Loading...';

    let dynamicTitle = "Clerk Panel";

    if (matchPath("/clerk/movies/:id/sessions", path)) {
        dynamicTitle = "Movie Sessions";
    } else if (matchPath("/clerk/bookings/:id", path)) {
        dynamicTitle = "Booking Details";
    }

    const staticTitles = {
        "/clerk": "Bookings",
        "/clerk/bookings": "Bookings",
        "/clerk/movies": "Movies",
        "/clerk/feedback": "Feedback",
        "/clerk/sessions": "Sessions",
        "clerk/settings": "Settings",
    };

    const finalTitle = title || staticTitles[path] || dynamicTitle;

    return (
        <div className="header-container flex items-center justify-between h-20 bg-white px-6 shadow-md font-bold font-[Poppins]">
            <button className="md:hidden p-2 mr-2" onClick={onMenuClick} aria-label="Toggle menu">
                <MenuIcon className="h-6 w-6 text-gray-700" />
            </button>

            <h1 className="title text-2xl font-normal text-black ml-4">{finalTitle}</h1>

            <div className="flex items-center space-x-6">
                <img className="w-12 h-12 rounded-full object-cover" src="/pass.jpg" alt="Profile" />
                <span className="text-black font-medium text-md">{username || "Loading..."}</span>
            </div>
        </div>
    );
}
