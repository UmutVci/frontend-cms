import React from "react";
import CustomerRow from "./AdminCustomerTableRows";
export default function AdminCustomerTable({customers}){
    return (
        <div className="overflow-x-auto mt-8">
            <table className="min-w-full border border-gray-200 rounded-md overflow-hidden">
                <thead className="bg-gray-50 text-gray-700 text-sm font-semibold">
                <tr>
                    <th className="px-4 py-2 text-center">Customer ID</th>
                    <th className="px-4 py-2 text-center">Customer Name</th>
                    <th className="px-4 py-2 text-center">Customer Email</th>
                    <th className="px-4 py-2 text-center"></th>
                </tr>
                </thead>
                <tbody className="bg-white">
                {customers.map((customer) => (
                    <CustomerRow key={customer.id} customer={customer} />
                ))}
                </tbody>
            </table>
        </div>
    )
}