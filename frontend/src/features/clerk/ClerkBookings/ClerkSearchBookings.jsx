import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SearchIcon } from "@heroicons/react/solid";
import ClerkSearchBookingTable from "../../../components/ClerkBookings/ClerkSearchBookingTable";
import Pagination       from "../../../components/Pagination";
import ReservationService    from "../../../services/ReservationService";

export default function ClerkSearchBookings() {
    const [bookings, setBookings]         = useState([]);
    const [searchTerm, setSearchTerm]     = useState("");
    const [currentPage, setCurrentPage]   = useState(1);
    const itemsPerPage                    = 6;

    useEffect(() => {
        ReservationService.getAll()
            .then(data => setBookings(data))
            .catch(err => console.error("Failed to fetch bookings:", err));
    }, []);

    const filtered = bookings.filter(b => {
        const term = searchTerm.toLowerCase();
        return (
            String(b.id).includes(term) ||
            String(b.session).includes(term) ||
            String(b.seat).includes(term)
        );
    });

    const pageCount      = Math.ceil(filtered.length / itemsPerPage);
    const startIndex     = (currentPage - 1) * itemsPerPage;
    const currentBookings = filtered.slice(startIndex, startIndex + itemsPerPage);

    return (
        <main className="inner-container relative flex-1 p-10 bg-[#D9D9D9]">
            <div className="bg-white w-full mx-3 my-4 rounded-xl p-6 overflow-auto">

                <div className="flex flex-col md:flex-row items-center md:justify-between mb-6 gap-4">
                    <form
                        className="flex-1 flex justify-center"
                        onSubmit={e => e.preventDefault()}
                    >
                        <div className="relative w-full max-w-md">
                            <input
                                type="text"
                                placeholder="Search by reservation, session or seat..."
                                value={searchTerm}
                                onChange={e => {
                                    setSearchTerm(e.target.value);
                                    setCurrentPage(1);
                                }}
                                className="w-full pl-4 pr-10 py-2 border rounded-full focus:outline-none"
                            />
                            <button
                                type="submit"
                                className="absolute right-2 top-1/2 transform -translate-y-1/2"
                            >
                                <SearchIcon className="h-5 w-5 text-gray-500" />
                            </button>
                        </div>
                    </form>
                </div>

                <div className="overflow-x-auto">
                    <ClerkSearchBookingTable bookings={currentBookings} />
                </div>

                <div className="mt-6">
                    <Pagination
                        currentPage={currentPage}
                        pageCount={pageCount}
                        onPageChange={setCurrentPage}
                    />
                </div>
            </div>
        </main>
    );
}
