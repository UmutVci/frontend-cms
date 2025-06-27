import CustomerRow from "../AdminCustomer/AdminCustomerTableRows";
import React from "react";
import HallsRow from "./AdminHallsTableRows";

export default function AdminHallsTable({halls}){
    return (
        <div className="overflow-x-auto mt-8">
            <table className="min-w-full border border-gray-200 rounded-md overflow-hidden">
                <thead className="bg-gray-50 text-gray-700 text-sm font-semibold">
                <tr>
                    <th className="px-4 py-2 text-center">Hall ID</th>
                    <th className="px-4 py-2 text-center">Hall Name</th>
                    <th className="px-4 py-2 text-center">Hall Capacity</th>
                    <th className="px-4 py-2 text-center">Hall Type</th>
                    <th className="px-4 py-2 text-center"></th>
                </tr>
                </thead>
                <tbody className="bg-white">
                {halls.map((hall) => (
                    <HallsRow key={hall.id} hall={hall} />
                ))}
                </tbody>
            </table>
        </div>
    )
}