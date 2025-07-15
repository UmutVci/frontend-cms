import React from "react";
import MoviesRow from "./AdminMoviesTableRows";

export default function AdminMoviesTable({movies, onDelete}){

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full border-collapse divide-y divide-gray-200 text-sm text-gray-800">
                <thead className="bg-gray-100">
                <tr>
                    <th className="px-4 py-2 text-center">ID</th>
                    <th className="px-4 py-2 text-center">Title</th>
                    <th className="px-4 py-2 text-center">Genre</th>
                    <th className="px-4 py-2 text-center">Duration</th>
                    <th className="px-4 py-2 text-center">Price</th>
                    <th className="px-4 py-2 text-center">Actions</th>
                </tr>
                </thead>
                <tbody>
                {movies.map(movie => (
                    <MoviesRow
                        key={movie.id}
                        movie={movie}
                        onDelete={onDelete}
                    />
                ))}
                </tbody>
            </table>
        </div>
    )
}