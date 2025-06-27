import { SearchIcon } from '@heroicons/react/solid'
import useAuth from "../features/auth/store/useAuth";

export default function Header({title}) {
    const user = useAuth((state) => state.user);

    return(
        <div className="header-container flex items-center justify-between h-20 bg-white px-6 shadow-md font-bold font-[Poppins]">
            {/* Sol başlık */}
            <h1 className="title text-2xl font-normal text-black ml-4">{title}</h1>

            {/* Sağ taraf (arama, profil vs.) */}
            <div className="flex items-center space-x-6">
                {/* Search bar with icon */}
                <form className="relative w-48">
                    {/* Icon */}
                    <SearchIcon
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500 pointer-events-none"/>
                    {/* Input */}
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full pl-8 py-1.5 rounded-full bg-[#D9D9D9] text-sm focus:outline-none"
                    />
                </form>
                {/* Profile image */}
                <img
                    className="w-12 h-12 rounded-full object-cover"
                    src="/pass.jpg"
                    alt="Profile"
                />

                {/* Username */}
                <span className="text-black font-medium text-md">{user.name}</span>

                {/* Dropdown icon */}
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