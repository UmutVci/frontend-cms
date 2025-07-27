import { NavLink } from 'react-router-dom';
import {
    FilmIcon,
    CalendarIcon,
    UserGroupIcon,
    CogIcon,
    LogoutIcon,
    XIcon
} from '@heroicons/react/outline';
import { useNavigate } from 'react-router-dom';

export default function ClerkSidebar({ onClose }) {
    const navigate = useNavigate();

    const items = [
        { path: '/clerk/movies', label: 'Movies', Icon: FilmIcon },
        { path: '/clerk/feedback', label: 'Feedback', Icon: CalendarIcon },
        { path: '/clerk/bookings', label: 'Search Booking', Icon: UserGroupIcon },
    ];

    const handleLogout = () => {
        navigate('/');
    };

    return (
        <aside className="h-full w-64 bg-[#400505] text-white flex flex-col relative">
            {/* Close Button - Only Mobile */}
            <button
                className="absolute top-4 right-4 text-white md:hidden"
                onClick={onClose}
            >
                <XIcon className="h-6 w-6" />
            </button>

            {/* Logo */}
            <div className="flex flex-col items-center justify-center mt-10 mb-3 border-b border-gray-700 px-4">
                <span className="text-lg font-semibold">Cinema Management</span>
                <span className="text-lg font-semibold">System</span>
            </div>

            {/* Menü */}
            <nav className="flex-1 overflow-y-auto py-2">
                <ul>
                    {items.map(({ path, label, Icon }) => (
                        <li key={path}>
                            <NavLink
                                to={path}
                                className={({ isActive }) =>
                                    `flex items-center px-6 py-3 space-x-3 hover:text-white rounded transition-colors ${
                                        isActive ? 'bg-gray-800 text-white' : 'text-gray-400'
                                    }`
                                }
                                onClick={onClose} // Mobilde tıklanınca otomatik kapanması için
                            >
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
                    onClick={onClose}
                >
                    <CogIcon className="h-5 w-5" />
                    <span>Settings</span>
                </NavLink>

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
