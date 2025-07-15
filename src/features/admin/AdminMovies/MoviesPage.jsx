// src/features/admin/AdminMovies/MoviesPage.jsx

import React, { useEffect, useState } from 'react';
import AdminMoviesTable from '../../../components/AdminMovies/AdminMoviesTable';
import Pagination       from '../../../components/Pagination';
import MoviesService    from '../../../services/MovieService';
import { Link }         from 'react-router-dom';
import SearchBar from "../../../components/AdminCustomersSearchBar";
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

    // 1) Arama: id, başlık (title) veya tür (genre) alanlarında
    const filtered = movies.filter(m => {
        const term = searchTerm.toLowerCase();
        return (
            String(m.id).includes(term) ||
            m.title.toLowerCase().includes(term) ||
            m.genre.toLowerCase().includes(term)
        );
    });

    // 2) Sayfalamayı filtrelenmiş listeye uygula
    const pageCount      = Math.ceil(filtered.length / itemsPerPage);
    const startIndex     = (currentPage - 1) * itemsPerPage;
    const currentMovies  = filtered.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div className="bg-white w-full mx-3 my-4 rounded-xl p-6 overflow-auto">
            {/* Search + Add Movie */}
            <div className="flex flex-col md:flex-row items-center justify-between mb-6 space-y-4 md:space-y-0">
                <form
                    className="relative w-full md:w-1/2"
                    onSubmit={e => e.preventDefault()}
                >
                    <input
                        type="text"
                        placeholder="Search by ID, Title or Genre..."
                        value={searchTerm}
                        onChange={e => {
                            setSearchTerm(e.target.value);
                            setCurrentPage(1);   // arama değişince 1. sayfaya dön
                        }}
                        className="w-full pl-4 pr-10 py-2 border rounded-full focus:outline-none"
                    />
                    <button
                        type="submit"
                        className="absolute right-2 top-1/2 transform -translate-y-1/2"
                    >
                        <SearchIcon className="h-5 w-5" />
                    </button>
                </form>

                <Link to="/admin/addMovie">
                    <button className="bg-[#202123] text-white h-10 px-6 rounded-full">
                        + Add Movie
                    </button>
                </Link>
            </div>

            {/* Tablo */}
            <div className="overflow-x-auto">
                <AdminMoviesTable
                    movies={currentMovies}
                    onDelete={async id => {
                        await MoviesService.delete(id);
                        setMovies(prev => prev.filter(m => m.id !== id));
                    }}
                />
            </div>

            {/* Pagination */}
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
