import React from "react";
import BookingRow from "./ClerkSearchBookingTableRows";

export default function ClerkSearchBookingTable(){
    const movies = [
        { id : 1, name: "Spiderman", session: '19:30', seat: '1A', customer : 'Umut AVCI' },
        { id : 2, name: "Spiderman", session: '19:30', seat: '1A', customer : 'Umut AVCI' },
        { id : 3, name: "Spiderman", session: '19:30', seat: '1A', customer : 'Umut AVCI' }
    ]
    return (
        <div className="overflow-x-auto mt-8">
            <table className="min-w-full border border-gray-200 rounded-md overflow-hidden">
                <thead className="bg-gray-50 text-gray-700 text-sm font-semibold">
                <tr>
                    <th className="px-4 py-2 text-center">Movie Name</th>
                    <th className="px-4 py-2 text-center">Session</th>
                    <th className="px-4 py-2 text-center">Seat</th>
                    <th className="px-4 py-2 text-center">Customer Name</th>
                </tr>
                </thead>
                <tbody className="bg-white">
                {movies.map((movie) => (
                    <BookingRow key={movie.id} movie={movie} />
                ))}
                </tbody>
            </table>
        </div>
    )
}