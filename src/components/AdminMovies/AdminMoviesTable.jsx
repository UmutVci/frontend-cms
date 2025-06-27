import React from "react";
import MoviesRow from "./AdminMoviesTableRows";

export default function AdminMoviesTable(){
    const movies = [
        { id: 1, name: "Inception",    imageUrl: "/inception.jpg" },
        { id: 2, name: "Interstellar", imageUrl: "/interstellar.jpg" },
        { id: 3, name: "Memento",      imageUrl: "/memento.jpg" },
    ];
    return (
        <div className="overflow-x-auto mt-8">
            <table className="min-w-full border border-gray-200 rounded-md overflow-hidden">
                <thead className="bg-gray-50 text-gray-700 text-sm font-semibold">
                <tr>
                    <th className="px-4 py-2 text-center">Movie ID</th>
                    <th className="px-4 py-2 text-center">Movie Name</th>
                    <th className="px-4 py-2 text-center">Movie Image</th>
                    <th className="px-4 py-2 text-center"></th>
                </tr>
                </thead>
                <tbody className="bg-white">
                {movies.map((movie) => (
                    <MoviesRow key={movie.id} movie={movie} />
                ))}
                </tbody>
            </table>
        </div>
    )
}