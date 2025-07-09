import React from "react";
import SessionsRow from "./AdminSessionsTableRows";

export default function AdminSessionsTable({ sessions, hallsMap, moviesMap}) {
    return (
        <div className="overflow-x-auto mt-8">
            <table className="min-w-full border border-gray-200 rounded-md overflow-hidden">
                <thead className="bg-gray-50 text-gray-700 text-sm font-semibold">
                <tr>
                    <th className="px-4 py-2 text-center">Session ID</th>
                    <th className="px-4 py-2 text-center">Session Time</th>
                    <th className="px-4 py-2 text-center">Movie</th>
                    <th className="px-4 py-2 text-center">Hall</th>
                    <th className="px-4 py-2 text-center">Price</th>
                    <th className="px-4 py-2 text-center"></th>
                </tr>
                </thead>
                <tbody>
                {sessions.map((s) => (
                    <SessionsRow
                        key={s.id}
                        session={s}
                        hallsMap={hallsMap}// buraya geç
                        moviesMap={moviesMap}
                    />
                ))}
                </tbody>
            </table>
        </div>
    );
}
