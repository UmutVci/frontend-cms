// src/features/admin/AdminSessions/AdminSessions.jsx

import React, { useEffect, useState } from 'react';
import { Link }                       from 'react-router-dom';
import { SearchIcon }                 from '@heroicons/react/outline';
import AdminSessionsTable             from '../../../components/AdminSessions/AdminSessionsTable';
import Pagination                     from '../../../components/Pagination';
import SessionService                 from '../../../services/SessionService';
import api                            from '../../../lib/axios';

export default function AdminSessions() {
    const [sessions, setSessions]         = useState([]);
    const [moviesMap, setMoviesMap]       = useState({});
    const [hallsMap, setHallsMap]         = useState({});
    const [searchTerm, setSearchTerm]     = useState('');
    const [currentPage, setCurrentPage]   = useState(1);
    const [sortField, setSortField]       = useState('id');   // id, movie, hall, time
    const [sortOrder, setSortOrder]       = useState('asc');  // asc, desc
    const itemsPerPage                    = 6;

    useEffect(() => {
        SessionService.getAll()
            .then(setSessions)
            .catch(console.error);

        api.get('/movies')
            .then(r => r.data._embedded?.domainMovieList || [])
            .then(list => {
                const m = {};
                list.forEach(mv => { m[mv.id] = mv.title; });
                setMoviesMap(m);
            })
            .catch(console.error);

        api.get('/halls')
            .then(r => r.data._embedded?.domainHallList || [])
            .then(list => {
                const h = {};
                list.forEach(hl => { h[hl.id] = hl.name; });
                setHallsMap(h);
            })
            .catch(console.error);
    }, []);

    // 1) İlk olarak filtering: searchTerm’a göre sessions’ı süz
    const filtered = sessions.filter(s => {
        const term = searchTerm.toLowerCase();
        const movie  = (moviesMap[s.movie] || '').toLowerCase();
        const hall   = (hallsMap[s.hall]   || '').toLowerCase();
        const time   = s.startTime.toLowerCase();
        const idStr  = String(s.id);

        return (
            idStr.includes(term) ||
            movie.includes(term) ||
            hall.includes(term) ||
            time.includes(term)
        );
    });

    // 2) Sorting
    const sorted = [...filtered].sort((a, b) => {
        let va, vb;
        switch (sortField) {
            case 'movie':
                va = (moviesMap[a.movie] || '').toLowerCase();
                vb = (moviesMap[b.movie] || '').toLowerCase();
                break;
            case 'hall':
                va = (hallsMap[a.hall] || '').toLowerCase();
                vb = (hallsMap[b.hall] || '').toLowerCase();
                break;
            case 'time':
                va = a.startTime;
                vb = b.startTime;
                break;
            case 'id':
            default:
                va = a.id;
                vb = b.id;
        }
        if (typeof va === 'string') {
            const cmp = va.localeCompare(vb);
            return sortOrder === 'asc' ? cmp : -cmp;
        } else {
            return sortOrder === 'asc' ? va - vb : vb - va;
        }
    });

    // 3) Pagination
    const pageCount    = Math.ceil(sorted.length / itemsPerPage);
    const startIndex   = (currentPage - 1) * itemsPerPage;
    const currentItems = sorted.slice(startIndex, startIndex + itemsPerPage);

    return (
        <main className="inner-container flex-1 p-10 bg-[#D9D9D9]">
            {/* Beyaz Kart */}
            <div className="bg-white w-full mx-3 my-4 rounded-xl p-6 overflow-auto flex flex-col">

                {/* 1) Kontroller */}
                <div className="flex items-center justify-between mb-6">
                    {/* Sol — Add Session */}
                    <Link to="/admin/addSession">
                        <button className="bg-[#202123] text-white h-10 px-6 rounded-full">
                            + Add Session
                        </button>
                    </Link>

                    {/* Orta — Search Bar */}
                    <div className="flex-1 flex justify-center px-4">
                        <form
                            onSubmit={e => e.preventDefault()}
                            className="relative w-full max-w-md"
                        >
                            <input
                                type="text"
                                placeholder="Search by ID, Movie, Hall or Time..."
                                value={searchTerm}
                                onChange={e => {
                                    setSearchTerm(e.target.value);
                                    setCurrentPage(1);
                                }}
                                className="w-full pl-4 pr-10 py-2 border rounded-full focus:outline-none"
                            />
                            <button
                                type="submit"
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                            >
                                <SearchIcon className="h-5 w-5" />
                            </button>
                        </form>
                    </div>

                    {/* Sağ — Sort */}
                    <div className="flex items-center space-x-4">
                        <span className="font-medium text-gray-700">Sort by:</span>
                        <select
                            value={sortField}
                            onChange={e => { setSortField(e.target.value); setCurrentPage(1); }}
                            className="border rounded-md p-1"
                        >
                            <option value="id">ID</option>
                            <option value="movie">Movie Title</option>
                            <option value="hall">Hall Name</option>
                            <option value="time">Start Time</option>
                        </select>
                        <select
                            value={sortOrder}
                            onChange={e => { setSortOrder(e.target.value); setCurrentPage(1); }}
                            className="border rounded-md p-1"
                        >
                            <option value="asc">Ascending</option>
                            <option value="desc">Descending</option>
                        </select>
                    </div>
                </div>

                {/* 2) Tablo */}
                <div className="overflow-x-auto">
                    <AdminSessionsTable
                        sessions={currentItems}
                        moviesMap={moviesMap}
                        hallsMap={hallsMap}
                    />
                </div>

                {/* 3) Pagination */}
                <div className="mt-6">
                    <Pagination
                        currentPage={currentPage}
                        pageCount={pageCount}
                        onPageChange={setCurrentPage}
                    />
                </div>
            </div>
        </main>

    );
}
