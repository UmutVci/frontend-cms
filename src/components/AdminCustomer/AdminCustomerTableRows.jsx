import React from 'react'
import {PencilAltIcon, XCircleIcon} from "@heroicons/react/solid";

const CustomerRow = ({ customer }) => {
    return (
        <tr className="border-b text-sm text-gray-800">
            <td className="px-4 py-3 text-center">{customer.id}</td>
            <td className="px-4 py-3 text-center">{customer.name}</td>
            <td className="px-4 py-3 text-center">{customer.email}</td>
            <td className="px-4 py-3 text-center"><button><PencilAltIcon className="w-5 h-5"></PencilAltIcon></button>
                <button><XCircleIcon className="mr-5 w-5 h-5"></XCircleIcon></button></td>
        </tr>
    )
}

export default CustomerRow