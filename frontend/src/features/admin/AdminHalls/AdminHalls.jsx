import React, { useEffect, useState } from "react";
import { SearchIcon } from "@heroicons/react/solid";
import Pagination from "../../../components/Pagination";
import HallService from "../../../services/HallService";
import AdminHallsTable from "../../../components/AdminHalls/AdminHallsTable";
import {Link} from "react-router-dom";

export default function AdminHalls() {
    const [halls, setHalls] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [sortField, setSortField] = useState("id");
    const [sortOrder, setSortOrder] = useState("asc"); // "asc" veya "desc"
    const itemsPerPage = 6;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await HallService.getAll();
                setHalls(data);
            } catch (error) {
                console.log("Data couldn't fetch", error);
            }
        };
        fetchData();
    }, []);

    const filtered = halls.filter(hall => {
        const term = searchTerm.toLowerCase();

        const idStr      = String(hall.id).toLowerCase();
        const nameStr    = (hall.name || '').toLowerCase();
        const capStr     = String(hall.capacity ?? '').toLowerCase();
        const hallTypeStr= (hall.type && typeof hall.type === "string")
            ? hall.type.toLowerCase()
            : (hall.type?.name?.toLowerCase() || '');

        return (
            idStr.includes(term) ||
            nameStr.includes(term) ||
            capStr.includes(term) ||
            hallTypeStr.includes(term)
        );
    });

    const sorted = [...filtered].sort((a, b) => {
        let va, vb;
        switch (sortField) {
            case "name":
                va = (a.name || '').toLowerCase();
                vb = (b.name || '').toLowerCase();
                break;
            case "capacity":
                va = a.capacity ?? 0; // sayı, null ise 0
                vb = b.capacity ?? 0;
                break;
            case "hallType":
                va = (a.type || '').toLowerCase();
                vb = (b.type || '').toLowerCase();
                break;
            case "id":
            default:
                va = a.id;
                vb = b.id;
        }

        if (typeof va === "number" && typeof vb === "number") {
            return sortOrder === "asc" ? va - vb : vb - va;
        } else {
            const cmp = String(va).localeCompare(String(vb));
            return sortOrder === "asc" ? cmp : -cmp;
        }
    });
    const handleDelete = async (id) => {
        const ok = await HallService.delete(id);
        if (ok) {
            setHalls(halls => halls.filter(h => h.id !== id));
        } else {
            alert("Could not delete hall. Check console for errors.");
        }
    };

    const pageCount = Math.ceil(sorted.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentHalls = sorted.slice(startIndex, startIndex + itemsPerPage);

    return (
            <div className="bg-white w-full h-full mx-3 my-4 rounded-xl p-6 overflow-auto flex flex-col">
                <div className="flex items-center justify-between mb-6">
                    <Link to="/admin/add-hall">
                        <button className="bg-[#202123] text-white h-10 px-6 rounded-full">
                            + Add Hall
                        </button>
                    </Link>


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
                            <option value="hallType">Hall</option>
                            <option value="capacity">Capacity</option>

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

                <div className="overflow-x-auto">
                    <AdminHallsTable halls={currentHalls} onDelete={handleDelete}
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
