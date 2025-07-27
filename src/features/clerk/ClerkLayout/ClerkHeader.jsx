import { MenuIcon, XIcon, SearchIcon } from '@heroicons/react/solid';
import useAuth from "../../auth/useAuth";
import { useLocation, matchPath } from "react-router-dom";

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
            <button
                className="md:hidden p-2"
                onClick={onMenuClick}
                aria-label="Toggle menu"
            >
                <MenuIcon className="h-6 w-6 text-gray-700" />
            </button>

            <h1 className="text-2xl font-semibold text-black ml-4">{finalTitle}</h1>

            <div className="flex items-center space-x-6">
                <form className="relative w-28 sm:w-36 md:w-48">
                    <SearchIcon className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500 pointer-events-none" />
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full pl-8 py-1.5 rounded-full bg-[#D9D9D9] text-sm focus:outline-none"
                    />
                </form>

                <img className="w-12 h-12 rounded-full object-cover" src="/pass.jpg" alt="Profile" />
                <span className="text-black font-medium text-md hidden sm:inline">{user?.name || "Loading..."}</span>
            </div>
        </div>
    );
}
