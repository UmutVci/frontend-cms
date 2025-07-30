import React, { useEffect, useState } from 'react';
import AdminMoviesTable from '../../../components/AdminMovies/AdminMoviesTable';
import Pagination       from '../../../components/Pagination';
import MoviesService    from '../../../services/MovieService';
import { Link }         from 'react-router-dom';
import {SearchIcon} from "@heroicons/react/solid";

export default function MoviesPage() {
    const [movies, setMovies]           = useState([]);
    const [searchTerm, setSearchTerm]   = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage                  = 6;

    useEffect(() => {
        MoviesService.getAll()
            .then(data => setMovies(data))
            .catch(err => console.error(err));
    }, []);

    const filtered = movies.filter(m => {
        const term = searchTerm.toLowerCase();
        return (
            String(m.id).includes(term) ||
            m.title.toLowerCase().includes(term) ||
            m.genre.toLowerCase().includes(term)
        );
    });

    const pageCount      = Math.ceil(filtered.length / itemsPerPage);
    const startIndex     = (currentPage - 1) * itemsPerPage;
    const currentMovies  = filtered.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div className="bg-white w-full mx-3 my-4 rounded-xl p-6 overflow-auto">
            <div className="flex flex-col md:flex-row items-center md:justify-between mb-6 gap-4">
                <div className="w-full md:w-auto flex justify-start">
                    <Link to="/admin/addMovie">
                        <button className="bg-[#202123] text-white h-10 px-6 rounded-full w-full md:w-auto">
                            + Add Movie
                        </button>
                    </Link>
                </div>
                <form
                    className="flex-1 flex justify-center"
                    onSubmit={e => e.preventDefault()}
                >
                    <div className="relative w-full max-w-md">
                        <input
                            type="text"
                            placeholder="Search by ID, Title or Genre..."
                            value={searchTerm}
                            onChange={e => {
                                setSearchTerm(e.target.value);
                                setCurrentPage(1);
                            }}
                            className="w-full pl-4 pr-10 py-2 border rounded-full focus:outline-none"
                        />
                        <button
                            type="submit"
                            className="absolute right-2 top-1/2 transform -translate-y-1/2"
                        >
                            <SearchIcon className="h-5 w-5" />
                        </button>
                    </div>
                </form>
            </div>

            <div className="overflow-x-auto">
                <AdminMoviesTable
                    movies={currentMovies}
                    onDelete={async id => {
                        await MoviesService.delete(id);
                        setMovies(prev => prev.filter(m => m.id !== id));
                    }}
                />
            </div>

            <div className="mt-6">
                <Pagination
                    currentPage={currentPage}
                    pageCount={pageCount}
                    onPageChange={setCurrentPage}
                />
            </div>
        </div>

    );
}
