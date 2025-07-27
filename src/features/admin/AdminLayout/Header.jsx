import {MenuIcon, SearchIcon} from '@heroicons/react/solid'
import useAuth from "../../auth/useAuth";
import { useLocation, matchPath } from "react-router-dom";

export default function Header({ title, onMenuClick }) {
    const user = useAuth((state) => state.user) || {};
    const location = useLocation();
    const path = location.pathname;

    let dynamicTitle = "Admin Panel";

    if (matchPath("/admin/update-movie/:id", path)) {
        dynamicTitle = "Update Movie";
    } else if (matchPath("/admin/sessions/update/:id", path)) {
        dynamicTitle = "Update Session";
    }

    const staticTitles = {
        "/admin": "Movies",
        "/admin/movies": "Movies",
        "/admin/addMovie": "Add Movie",
        "/admin/customers": "Customers",
        "/admin/halls": "Halls",
        "/admin/add-hall": "Add Hall",
        "/admin/update-hall": "Update Hall",
        "/admin/sessions": "Sessions",
        "/admin/addSession": "Add Session",
        "/admin/messages": "Feedback Messages",
        "/admin/ticket-clerks": "Ticket Clerks",

        "/clerk": "Bookings",
        "/clerk/bookings": "Bookings",
        "/clerk/movies": "Movies",
        "/clerk/feedback": "Feedback",
        "/clerk/sessions": "Sessions",
    };

    const finalTitle = title || staticTitles[path] || dynamicTitle;

    return (
        <div className="header-container flex items-center justify-between h-20 bg-white px-6 shadow-md font-bold font-[Poppins]">
            <button className="md:hidden p-2 mr-2" onClick={onMenuClick} aria-label="Toggle menu">
                <MenuIcon className="h-6 w-6 text-gray-700" />
            </button>

            <h1 className="title text-2xl font-normal text-black ml-4">{finalTitle}</h1>

            <div className="flex items-center space-x-6">
                <form className="relative w-48">
                    <SearchIcon className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500 pointer-events-none" />
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full pl-8 py-1.5 rounded-full bg-[#D9D9D9] text-sm focus:outline-none"
                    />
                </form>

                <img className="w-12 h-12 rounded-full object-cover" src="/pass.jpg" alt="Profile" />
                <span className="text-black font-medium text-md">{user?.name || "Loading..."}</span>

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-700 cursor-pointer"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.08 1.04l-4.25 4.25a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                    />
                </svg>
            </div>
        </div>
    );
}