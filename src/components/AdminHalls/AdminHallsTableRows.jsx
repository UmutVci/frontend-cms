import React from "react";
import {PencilAltIcon, XCircleIcon} from "@heroicons/react/solid";
import {useNavigate} from "react-router-dom";
import HallService from "../../services/HallService";

const HallsRow = ({ hall }) => {
    const navigate = useNavigate();
    const handleUpdate = () => {
        navigate("/admin/update-hall", {state:{hall}});
    }
    const handleDelete = () => {
        HallService.delete(hall.id)
    }

    return (
        <tr className="border-b text-sm text-gray-800">
            <td className="px-4 py-3 text-center">{hall.id}</td>
            <td className="px-4 py-3 text-center">{hall.name}</td>
            <td className="px-4 py-3 text-center">{hall.capacity}</td>
            <td className="px-4 py-3 text-center">{hall.type}</td>
            <td className="px-4 py-3 text-center"><button onClick={handleUpdate}><PencilAltIcon className="w-5 h-5"></PencilAltIcon></button>
                <button onClick={handleDelete}><XCircleIcon className="mr-5 w-5 h-5"></XCircleIcon></button></td>
        </tr>
    )
}

export default HallsRow