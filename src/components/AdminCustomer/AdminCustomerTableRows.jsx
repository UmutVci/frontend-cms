import React from 'react'

const CustomerRow = ({ customer }) => {
    return (
        <tr className="border-b text-sm text-gray-800">
            <td className="px-4 py-3 text-center">{customer.id}</td>
            <td className="px-4 py-3 text-center">{customer.name}</td>
            <td className="px-4 py-3 text-center">{customer.email}</td>
            <td className="px-4 py-3 text-center">•••</td>
        </tr>
    )
}

export default CustomerRow