import React, {useEffect, useState} from "react";
import {PencilAltIcon, XCircleIcon} from "@heroicons/react/solid";
import FeedbackService from "../../services/FeedbackService";
import MovieService from "../../services/MovieService";
import HallService from "../../services/HallService";

const MessagesRow = ({ feedback }) => {
    const [movie, setMovie] = useState();
    const [hall, setHall] = useState();
    useEffect(() => {
        const fetchData = async () => {
            const movieData = await MovieService.getById(feedback.movie);
            const hallData = await HallService.getById(feedback.hall);
            setMovie(movieData?.title || "Unknown Movie");
            setHall(hallData?.name || "Unknown Hall");
        };

        fetchData();
    }, [feedback.movie, feedback.hall]);

    const handleDelete = () => {
        FeedbackService.delete(feedback.id)
    }
    return (
        <tr className="border-b text-sm text-gray-800">
            <td className="px-4 py-3 text-center">{feedback.clientName}</td>
            <td className="px-4 py-3 text-center">{movie}</td>
            <td className="px-4 py-3 text-center">{hall}</td>
            <td className="px-4 py-3 text-center">{feedback.description}</td>
            <td className="px-4 py-3 text-center">
                <td className="px-4 py-3 text-center">
                <button onClick={handleDelete}><XCircleIcon className="mr-5 w-5 h-5"></XCircleIcon></button></td>
            </td>
        </tr>

    )
}

export default MessagesRow