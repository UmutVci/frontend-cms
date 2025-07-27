
import { NavLink } from 'react-router-dom'
import {
    FilmIcon,
    CalendarIcon,
    UserGroupIcon,
    CogIcon,
    LogoutIcon,
} from '@heroicons/react/outline'
import { useNavigate } from 'react-router-dom'; // EKLE

export default function ClerkSidebar() {
    const navigate = useNavigate(); // EKLE

    const items = [
        { path: '/clerk/movies',    label: 'Movies',   Icon: FilmIcon },
        { path: '/clerk/feedback',  label: 'Feedback', Icon: CalendarIcon },
        { path: '/clerk/bookings',  label: 'Search Booking', Icon: UserGroupIcon },
    ];

    const handleLogout = () => {
        navigate('/');
    };

    return (
        <aside className="flex flex-col w-64 h-full bg-[#400505] text-[#8C8C8D]">
            {/* Logo */}
            <div className=" flex flex-col items-center justify-center border-b my-3 border-gray-700">
                <span className="text-lg font-semibold">Cinema Management</span>
                <span className="text-lg font-semibold">System</span>
            </div>

            {/* Menü */}
            <nav className="flex-1 overflow-y-auto py-4">
                <ul>
                    {items.map(({ path, label, Icon }) => (
                        <li key={path}>
                            <NavLink
                                to={path}
                                className={({ isActive }) =>
                                    `flex items-center px-6 py-3 space-x-3 hover:text-white rounded transition-colors ${
                                        isActive ? 'bg-gray-800 text-white' : 'text-gray-400'
                                    }`
                                }>
                                <Icon className="h-5 w-5" />
                                <span>{label}</span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Alt menü */}
            <div className="border-t border-gray-700 p-4">
                <NavLink
                    to="/settings"
                    className="flex items-center px-4 py-2 space-x-3 text-gray-400 hover:bg-gray-800 hover:text-white rounded transition-colors"
                >
                    <CogIcon className="h-5 w-5" />
                    <span>Settings</span>
                </NavLink>

                {/* Değiştirildi! */}
                <button
                    onClick={handleLogout}
                    className="mt-2 flex items-center px-4 py-2 space-x-3 text-gray-400 hover:bg-gray-800 hover:text-white rounded transition-colors w-full"
                >
                    <LogoutIcon className="h-5 w-5" />
                    <span>Log out</span>
                </button>
            </div>
        </aside>
    );
}
