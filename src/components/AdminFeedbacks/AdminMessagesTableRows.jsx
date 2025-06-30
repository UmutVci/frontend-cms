import React from "react";
import {PencilAltIcon, XCircleIcon} from "@heroicons/react/solid";
import FeedbackService from "../../services/FeedbackService";

const MessagesRow = ({ feedback }) => {
    const handleDelete = () => {
        FeedbackService.delete(feedback.id)
    }
    return (
        <tr className="border-b text-sm text-gray-800">
            <td className="px-4 py-3 text-center">{feedback.clientName}</td>
            <td className="px-4 py-3 text-center">{feedback.movie}</td>
            <td className="px-4 py-3 text-center">{feedback.hall}</td>
            <td className="px-4 py-3 text-center">{feedback.description}</td>
            <td className="px-4 py-3 text-center">
                <td className="px-4 py-3 text-center"><button><PencilAltIcon className="w-5 h-5"></PencilAltIcon></button>
                <button onClick={handleDelete}><XCircleIcon className="mr-5 w-5 h-5"></XCircleIcon></button></td>
            </td>
        </tr>

    )
}

export default MessagesRow