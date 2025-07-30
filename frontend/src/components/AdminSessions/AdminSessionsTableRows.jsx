import React from "react"
import { PencilAltIcon, XCircleIcon } from "@heroicons/react/solid"
import { useNavigate } from "react-router-dom"
import SessionService from "../../services/SessionService"

export default function SessionsRow({ session, hallsMap, moviesMap, onDelete }) {
    const navigate = useNavigate()
    const formattedTime = session.startTime
        ? new Date(session.startTime).toLocaleString()
        : "—"
    const hallName = hallsMap[session.hall] || "—"
    const movieName = moviesMap[session.movie] || "—"

    const handleUpdate = () => {
        navigate(`/admin/sessions/update/${session.id}`, { state: { session } })
    }

    const handleDelete = async () => {
        const ok = await SessionService.delete(session.id);
        if (ok) {
            onDelete(session.id);
        } else {
            alert("Failed to delete session. See console for details.");
        }
    };


    return (
        <tr className="border-b text-sm text-gray-800">
            <td className="px-4 py-3 text-center">{session.id}</td>
            <td className="px-4 py-3 text-center">{formattedTime}</td>
            <td className="px-4 py-3 text-center">{movieName}</td>
            <td className="px-4 py-3 text-center">{hallName}</td>
            <td className="px-4 py-3 text-center">{session.price}</td>
            <td className="px-4 py-3 text-center space-x-4">
                <button onClick={handleUpdate}>
                    <PencilAltIcon className="w-5 h-5 hover:text-blue-800" />
                </button>
                <button onClick={handleDelete}>
                    <XCircleIcon className="w-5 h-5 hover:text-red-800" />
                </button>
            </td>
        </tr>
    )
}
