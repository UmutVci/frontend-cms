import CustomerRow from "../AdminCustomer/AdminCustomerTableRows";
import React from "react";

export default function AdminHallsTable({halls}){
    const customers = [
        { id: 1, name: 'Umut AVCI', email: 'umut.avci@study.thws.de' },
        { id: 2, name: 'Samet AVCI', email: 'samet.avci@study.thws.de' },
        { id: 3, name: 'Cihan Can', email: 'cihan.can@study.thws.de' },
    ]
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
                    <CustomerRow key={hall.id} hall={hall} />
                ))}
                </tbody>
            </table>
        </div>
    )
}