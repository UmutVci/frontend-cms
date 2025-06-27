import React from "react";
import ClerksRow from "./AdminTicketClerksRows";

export default function AdminTicketClerksTable({clerks}){
    return (
        <div className="overflow-x-auto mt-8">
            <table className="min-w-full border border-gray-200 rounded-md overflow-hidden">
                <thead className="bg-gray-50 text-gray-700 text-sm font-semibold">
                <tr>
                    <th className="px-4 py-2 text-center">Ticker Clerk ID</th>
                    <th className="px-4 py-2 text-center">Ticket Clerk Email</th>
                    <th className="px-4 py-2 text-center">Ticket Clerk Password</th>
                    <th className="px-4 py-2 text-center" aria-valuemax="20">Hall</th>
                    <th className="px-4 py-2 text-center"></th>
                </tr>
                </thead>
                <tbody className="bg-white">
                {clerks.map((clerk) => (
                    <ClerksRow key={clerk.id} clerk={clerk} />
                ))}
                </tbody>
            </table>
        </div>
    )
}