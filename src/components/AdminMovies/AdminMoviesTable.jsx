import React from "react";
import MoviesRow from "./AdminMoviesTableRows";

export default function AdminMoviesTable({movies}){

    return (
        <div className="overflow-x-auto mt-8">
            <table className="min-w-full border border-gray-200 rounded-md overflow-hidden">
                <thead className="bg-gray-50 text-gray-700 text-sm font-semibold">
                <tr>
                    <th className="px-4 py-2 text-center">Movie ID</th>
                    <th className="px-4 py-2 text-center">Movie Name</th>
                    <th className="px-4 py-2 text-center">Genre</th>
                    <th className="px-4 py-2 text-center">Duration(mn)</th>
                    <th className="px-4 py-2 text-center">Price</th>
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