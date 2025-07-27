import React, { useEffect, useState } from 'react';
import { Link }                       from 'react-router-dom';
import { SearchIcon }                 from '@heroicons/react/outline';
import AdminTicketClerksTable         from '../../../components/AdminTicketClerks/AdminTicketClerksTable';
import Pagination                     from '../../../components/Pagination';
import TicketClerkService             from '../../../services/TicketClerkService';

export default function AdminTicketClerk() {
    const [clerks, setClerks] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [sortField, setSortField] = useState('id'); // 'id' or 'name'
    const [sortOrder, setSortOrder] = useState('asc'); // 'asc' or 'desc'
    const itemsPerPage = 6;

    useEffect(() => {
        TicketClerkService.getAll()
            .then(setClerks)
            .catch(console.error);
    }, []);

    const filtered = clerks.filter(clerk => {
        const term = searchTerm.toLowerCase();
        const name = clerk.email ? clerk.email.toLowerCase() : '';
        const idStr = String(clerk.id);

        return (
            name.includes(term) ||
            idStr.includes(term)
        );
    });


    const sorted = [...filtered].sort((a, b) => {
        let va = a[sortField];
        let vb = b[sortField];

        if (typeof va === 'string') {
            const cmp = va.localeCompare(vb);
            return sortOrder === 'asc' ? cmp : -cmp;
        } else {
            return sortOrder === 'asc' ? va - vb : vb - va;
        }
    });

    // Sayfalama
    const pageCount = Math.ceil(sorted.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = sorted.slice(startIndex, startIndex + itemsPerPage);

    return (
        <main className="inner-container flex-1 p-10 bg-[#D9D9D9]">
            <div className="bg-white w-full mx-3 my-4 rounded-xl p-6 overflow-auto flex flex-col">

                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <Link to="/admin/add-ticket-clerk">
                        <button className="bg-[#202123] text-white h-10 px-6 rounded-full">
                            + Add Ticket Clerk
                        </button>
                    </Link>

                    {/* Search */}
                    <div className="flex-1 flex justify-center px-4">
                        <form
                            onSubmit={e => e.preventDefault()}
                            className="relative w-full max-w-md"
                        >
                            <input
                                type="text"
                                placeholder="Search by ID or Name..."
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

                    {/* Sort Controls */}
                    <div className="flex items-center space-x-4">
                        <span className="font-medium text-gray-700">Sort by:</span>
                        <select
                            value={sortField}
                            onChange={e => {
                                setSortField(e.target.value);
                                setCurrentPage(1);
                            }}
                            className="border rounded-md p-1"
                        >
                            <option value="id">ID</option>
                            <option value="name">Name</option>
                        </select>
                        <select
                            value={sortOrder}
                            onChange={e => {
                                setSortOrder(e.target.value);
                                setCurrentPage(1);
                            }}
                            className="border rounded-md p-1"
                        >
                            <option value="asc">Ascending</option>
                            <option value="desc">Descending</option>
                        </select>
                    </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <AdminTicketClerksTable clerks={currentItems} />
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
        </main>
    );
}
