import {PencilAltIcon, XCircleIcon} from "@heroicons/react/solid";
import React from "react";

const ClerksRow = ({ clerk }) => {
    return (
        <tr className="border-b text-sm text-gray-800">
            <td className="px-4 py-3 text-center">{clerk.id}</td>
            <td className="px-4 py-3 text-center">{clerk.email}</td>
            <td className="px-4 py-3 text-center">{clerk.password}</td>
            <td className="px-4 py-3 text-center"><button><PencilAltIcon className="w-5 h-5"></PencilAltIcon></button>
                <button><XCircleIcon className="mr-5 w-5 h-5"></XCircleIcon></button></td>
        </tr>
    )
}

export default ClerksRow