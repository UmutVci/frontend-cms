import React from "react";
import { PencilAltIcon, XCircleIcon } from "@heroicons/react/solid";
import SessionService from "../../services/SessionService";
import { useNavigate } from "react-router-dom";

export default function SessionsRow({ session, hallsMap, moviesMap }) {
    const navigate = useNavigate();

    const handleDelete = () => {
        SessionService.delete(session.id)
    }

    const formattedTime = session.startTime
        ? new Date(session.startTime).toLocaleString()
        : "—";
    const hallName = hallsMap[session.hall] || "—";
    const movieName = moviesMap[session.movie] || "—";

    const handleUpdate = () => {
        navigate(`/admin/sessions/update/${session.id}`, {state:{session}});
    }

    return (
        <tr className="border-b text-sm text-gray-800">
            <td className="px-4 py-3 text-center">{session.id}</td>
            <td className="px-4 py-3 text-center">{formattedTime}</td>
            <td className="px-4 py-3 text-center">{movieName}</td>
            <td className="px-4 py-3 text-center">{hallName}</td>
            <td className="px-4 py-3 text-center">{session.price}</td>
            <td className="px-4 py-3 text-center"><button onClick={handleUpdate}><PencilAltIcon className="w-5 h-5"></PencilAltIcon></button>
                <button onClick={handleDelete}><XCircleIcon className="mr-5 w-5 h-5"></XCircleIcon></button></td>
        </tr>
    );
}
