import React from "react";
import {PencilAltIcon, XCircleIcon} from "@heroicons/react/solid";
import SessionService from "../../services/SessionService";

const SessionsRow = ({ session }) => {
    const handleDelete = () => {
        SessionService.delete(session.id)

    }
    return (
        <tr className="border-b text-sm text-gray-800">
            <td className="px-4 py-3 text-center">{session.id}</td>
            <td className="px-4 py-3 text-center">{session.time}</td>
            <td className="px-4 py-3 text-center">{session.movie}</td>
            <td className="px-4 py-3 text-center">{session.hall}</td>
            <td className="px-4 py-3 text-center"><button><PencilAltIcon className="w-5 h-5"></PencilAltIcon></button>
                <button onClick={handleDelete}><XCircleIcon className="mr-5 w-5 h-5"></XCircleIcon></button></td>
        </tr>
    )
}

export default SessionsRow