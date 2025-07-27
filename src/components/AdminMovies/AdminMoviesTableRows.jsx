import { PencilAltIcon, XCircleIcon } from "@heroicons/react/solid";
import React from "react";
import { useNavigate } from "react-router-dom";
import movieService from "../../services/MovieService";

const MoviesRow = ({ movie, onDelete }) => {
    const navigate = useNavigate();

    const handleDelete = async () => {
        await movieService.delete(movie.id);
        onDelete(movie.id);
    };

    const handleUpdate = () => {
        navigate(`/admin/update-movie/${movie.id}`, { state: { movie } });
    };

    return (
        <tr className="border-b text-sm text-gray-800 text-center">
            <td className="px-4 py-3">{movie.id}</td>
            <td className="px-4 py-3">{movie.title}</td>
            <td className="px-4 py-3">{movie.genre}</td>
            <td className="px-4 py-3">{movie.duration}</td>
            <td className="px-4 py-3">{movie.price}</td>
            <td className="px-4 py-3 flex justify-center space-x-4">
                <button onClick={handleUpdate}>
                    <PencilAltIcon className="w-5 h-5  hover:text-blue-800" />
                </button>
                <button onClick={handleDelete}>
                    <XCircleIcon className="w-5 h-5  hover:text-red-800" />
                </button>
            </td>
        </tr>
    );
};

export default MoviesRow;
