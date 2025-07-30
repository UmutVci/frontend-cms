import React, { useEffect, useState } from "react";
import { XCircleIcon } from "@heroicons/react/solid";
import MovieService from "../../services/MovieService";
import HallService from "../../services/HallService";

export default function AdminMessagesTableRows({ feedback, onDelete }) {
    const [movie, setMovie] = useState("Loading…");
    const [hall, setHall] = useState("Loading…");

    useEffect(() => {
        (async () => {
            const mv = await MovieService.getById(feedback.movie);
            const hl = await HallService.getById(feedback.hall);
            setMovie(mv?.title || "Unknown Movie");
            setHall(hl?.name || "Unknown Hall");
        })();
    }, [feedback.movie, feedback.hall]);

    return (
        <tr className="border-b text-sm text-gray-800">
            <td className="px-4 py-3 text-center">{feedback.clientName}</td>
            <td className="px-4 py-3 text-center">{movie}</td>
            <td className="px-4 py-3 text-center">{hall}</td>
            <td className="px-4 py-3 text-center">{feedback.description}</td>
            <td className="px-4 py-3 text-center">
                <button onClick={() => onDelete(feedback.id)}>
                    <XCircleIcon className="mr-2 w-5 h-5" />
                </button>
            </td>
        </tr>
    );
}
