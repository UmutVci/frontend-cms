import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import {
    FilmIcon,
    CalendarIcon,
    UserGroupIcon,
    CogIcon,
    LogoutIcon,
    InboxIcon
} from '@heroicons/react/outline'
import { UsersIcon, ViewBoardsIcon, XIcon } from "@heroicons/react/solid";

export default function AdminSidebar({ onClose }) {
    const items = [
        { path: '/admin/messages',    label: 'Feedbacks',   Icon: InboxIcon },
        { path: '/admin/movies',      label: 'Movies',      Icon: FilmIcon },
        { path: '/admin/sessions',    label: 'Sessions',    Icon: CalendarIcon },
        { path: '/admin/halls',       label: 'Halls',       Icon: ViewBoardsIcon },
        { path: '/admin/customers',   label: 'Customers',   Icon: UserGroupIcon },
        { path: '/admin/ticket-clerks', label: 'Ticket Clerks', Icon: UsersIcon },
    ]
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/');
    };

    return (
        <aside className="h-full w-64 bg-[#202123] text-[#8C8C8D] flex flex-col relative">
            <button
                className="absolute top-4 right-4 text-white md:hidden"
                onClick={onClose}
            >
                <XIcon className="h-6 w-6" />
            </button>
            <div className=" flex flex-col items-center justify-center border-b my-3 border-gray-700">
                <span className="text-lg font-semibold">Cinema Management</span>
                <span className="text-lg font-semibold">System</span>
            </div>
            <nav className="flex-1 overflow-y-auto py-4 ">
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
                                onClick={onClose}
                            >
                                <Icon className="h-5 w-5" />
                                <span>{label}</span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
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
    )
}
