// HallsRow.jsx
import React from "react";
import { XCircleIcon, PencilAltIcon } from "@heroicons/react/solid";
import { useNavigate } from "react-router-dom";
import HallService from "../../services/HallService";

export default function HallsRow({ hall, onDelete }) {
    const navigate = useNavigate();

    const handleUpdate = () =>
        navigate("/admin/update-hall", { state: { hall } });

    const handleDelete = async () => {
        if (!window.confirm("Are you sure you want to delete this hall?")) return;
        const success = await HallService.delete(hall.id);
        if (success) {
            onDelete(hall.id);
        } else {
            alert("Failed to delete hall. See console for details.");
        }
    };

    return (
        <tr className="border-b text-sm text-gray-800">
            <td className="px-4 py-3 text-center">{hall.id}</td>
            <td className="px-4 py-3 text-center">{hall.name}</td>
            <td className="px-4 py-3 text-center">{hall.capacity}</td>
            <td className="px-4 py-3 text-center">{hall.type}</td>
            <td className="px-4 py-3 text-center space-x-4">
                <button onClick={handleUpdate}>
                    <PencilAltIcon className="w-5 h-5 hover:text-blue-800" />
                </button>
                <button onClick={handleDelete}>
                    <XCircleIcon className="w-5 h-5 hover:text-red-800" />
                </button>
            </td>
        </tr>
    );
}
