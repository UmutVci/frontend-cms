import { SearchIcon } from "@heroicons/react/solid";
import React from "react";

export default function SearchBar() {
    return (
        <div className="w-full flex justify-center items-center py-8">
            <div className="search-customers relative">
                <input
                    type="text"
                    placeholder="Search..."
                    className="w-full h-10 pl-4 pr-10 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D9D9D9]"
                />
                <button
                    type="submit"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2"
                >
                    <SearchIcon className="w-6 h-6 text-gray-500 hover:text-[#D8D9DB]" />
                </button>
            </div>
        </div>
    )
}