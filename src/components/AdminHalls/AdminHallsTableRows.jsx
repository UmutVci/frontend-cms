import React from "react";
import {PencilAltIcon, XCircleIcon} from "@heroicons/react/solid";

const HallsRow = ({ hall }) => {
    return (
        <tr className="border-b text-sm text-gray-800">
            <td className="px-4 py-3 text-center">{hall.id}</td>
            <td className="px-4 py-3 text-center">{hall.name}</td>
            <td className="px-4 py-3 text-center">{hall.capacitiy}</td>
            <td className="px-4 py-3 text-center">{hall.type}</td>
            <td className="px-4 py-3 text-center"><button><PencilAltIcon className="w-5 h-5"></PencilAltIcon></button>
                <button><XCircleIcon className="mr-5 w-5 h-5"></XCircleIcon></button></td>
        </tr>
    )
}

export default HallsRow