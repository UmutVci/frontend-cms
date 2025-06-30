import CustomerRow from "../AdminCustomer/AdminCustomerTableRows";
import React from "react";
import MessagesRow from "./AdminMessagesTableRows";
export default function AdminMessagesTable({feedbacks}){
    return (
        <div className="overflow-x-auto mt-8">
            <table className="min-w-full border border-gray-200 rounded-md overflow-hidden">
                <thead className="bg-gray-50 text-gray-700 text-sm font-semibold">
                <tr>
                    <th className="px-4 py-2 text-center">Client Name</th>
                    <th className="px-4 py-2 text-center">Movie</th>
                    <th className="px-4 py-2 text-center">Hall</th>
                    <th className="px-4 py-2 text-center" aria-valuemax="20">Message</th>
                </tr>
                </thead>
                <tbody className="bg-white">
                {feedbacks.map((feedback) => (
                    <MessagesRow key={feedback.id} feedback={feedback} />
                ))}
                </tbody>
            </table>
        </div>
    )
}