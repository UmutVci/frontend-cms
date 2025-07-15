import { NavLink } from 'react-router-dom'
import {
    EyeIcon,
    InboxIcon,
    FilmIcon,
    CalendarIcon,
    UserGroupIcon,
    CogIcon,
    LogoutIcon,
} from '@heroicons/react/outline'
import {UsersIcon, ViewBoardsIcon} from "@heroicons/react/solid";

export default function Sidebar() {
    const items = [
        { path: '/admin/messages',    label: 'Feedbacks',   Icon: InboxIcon },
        { path: '/admin/movies',      label: 'Movies',     Icon: FilmIcon },
        { path: '/admin/sessions',    label: 'Sessions',   Icon: CalendarIcon },
        { path: '/admin/halls',     label: 'Halls',    Icon: ViewBoardsIcon },
        { path: '/admin/customers',   label: 'Customers',  Icon: UserGroupIcon },
        { path: '/admin/ticket-clerks',     label: 'Ticket Clerks',    Icon: UsersIcon },
    ]

    return (
        <aside className="flex flex-col w-64 h-screen bg-[#202123] text-[#8C8C8D]">
            {/* Logo / Başlık */}
            <div className=" flex flex-col items-center justify-center border-b my-3 border-gray-700">
                <span className="text-lg font-semibold">Cinema Management</span>
                <span className="text-lg font-semibold">System</span>

                <span className="text-lg font-semibold"></span>
            </div>

            {/* Menü öğeleri */}
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
                                }>
                                <Icon className="h-5 w-5" />
                                <span>{label}</span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Alt menü: Settings & Logout */}
            <div className="border-t border-gray-700 p-4">
                <NavLink
                    to="/settings"
                    className="flex items-center px-4 py-2 space-x-3 text-gray-400 hover:bg-gray-800 hover:text-white rounded transition-colors"
                >
                    <CogIcon className="h-5 w-5" />
                    <span>Settings</span>
                </NavLink>
                <NavLink
                    to="/logout"
                    className="mt-2 flex items-center px-4 py-2 space-x-3 text-gray-400 hover:bg-gray-800 hover:text-white rounded transition-colors"
                >
                    <LogoutIcon className="h-5 w-5" />
                    <span>Log out</span>
                </NavLink>
            </div>
        </aside>
    )
}
