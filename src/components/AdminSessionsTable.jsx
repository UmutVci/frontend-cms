import React from "react";
import SessionsRow from "./AdminSessionsTableRows";

export default function AdminSessionsTable(){
    const sessions = [
        { id: 1, time: "11.45",    movie: "Spiderman", hall: "2" },
        { id: 2, time: "13.45",    movie: "Spiderman", hall: "3" },
        { id: 3, time: "15.45",    movie: "Spiderman", hall: "4" },
    ]
    return (
        <div className="overflow-x-auto mt-8">
            <table className="min-w-full border border-gray-200 rounded-md overflow-hidden">
                <thead className="bg-gray-50 text-gray-700 text-sm font-semibold">
                <tr>
                    <th className="px-4 py-2 text-center">Session ID</th>
                    <th className="px-4 py-2 text-center">Session Time</th>
                    <th className="px-4 py-2 text-center">Movie</th>
                    <th className="px-4 py-2 text-center" aria-valuemax="20">Hall</th>
                    <th className="px-4 py-2 text-center"></th>
                </tr>
                </thead>
                <tbody className="bg-white">
                {sessions.map((session) => (
                    <SessionsRow key={session.id} session={session} />
                ))}
                </tbody>
            </table>
        </div>
    )
}