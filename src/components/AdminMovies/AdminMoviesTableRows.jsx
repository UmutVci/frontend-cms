import {PencilAltIcon, XCircleIcon} from "@heroicons/react/solid";
import React from "react";
import movieService from "../../services/MovieService";

const MoviesRow = ({ movie, onDelete }) => {
    const handleDelete = async () => {
        await movieService.delete(movie.id);  // istersen burada da await koy
        onDelete(movie.id);                   // parent state’ini güncelle
    };
    return (
        <tr className="border-b text-sm text-gray-800">
            <td className="px-4 py-3 text-center">{movie.id}</td>
            <td className="px-4 py-3 text-center">{movie.title}</td>
            <td className="px-4 py-3 text-center">{movie.genre}</td>
            <td className="px-4 py-3 text-center">{movie.duration}</td>
            <td className="px-4 py-3 text-center">{movie.price}</td>
            <td className="px-4 py-3 text-center"><button><PencilAltIcon className="w-5 h-5"></PencilAltIcon></button>
                <button onClick={handleDelete}><XCircleIcon className="mr-5 w-5 h-5"></XCircleIcon></button></td>
        </tr>
    )
}

export default MoviesRow