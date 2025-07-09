import React, { useEffect, useState } from "react";
import Sidebar from "../../../components/Sidebar";
import Header from "../../../components/Header";
import SearchBar from "../../../components/AdminCustomersSearchBar";
import AdminSessionsTable from "../../../components/AdminSessions/AdminSessionsTable";
import Pagination from "../../../components/Pagination";
import SessionService from "../../../services/SessionService";
import api from "../../../lib/axios"; // for movies & halls

export default function AdminSessions() {
    const [sessions, setSessions] = useState([]);
    const [moviesMap, setMoviesMap] = useState({});
    const [hallsMap, setHallsMap] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
    const pageCount    = Math.ceil(sessions.length / itemsPerPage);

    useEffect(() => {
        SessionService.getAll()
            .then((data) => setSessions(data))
            .catch(console.error);

        api.get("/movies")
            .then((r) => r.data._embedded.domainMovieList || [])
            .then((list) => {
                const m = {};
                list.forEach((mv) => { m[mv.id] = mv.title; });
                setMoviesMap(m);
            })
            .catch(console.error);

        api.get("/halls")
            .then((r) => r.data._embedded.domainHallList || [])
            .then((list) => {
                const h = {};
                list.forEach((hl) => { h[hl.id] = hl.name; });
                setHallsMap(h);
            })
            .catch(console.error);
    },);

    return (
        <div className="h-screen flex font-[Poppins]">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <Header title="Sessions" />
                <main className="inner-container flex-1 p-10 bg-[#D9D9D9]">
                    <div className="bg-white w-full h-full mx-3 my-4 rounded-xl p-6 overflow-auto">
                        <SearchBar />
                        <div className="flex items-center justify-between mb-6">
                            <a href="/admin/addSession">
                                <button className="bg-[#202123] text-white h-8 w-36 rounded-xl">
                                    + Add Session
                                </button>
                            </a>
                            <button className="ml-auto flex items-center h-8 w-36 rounded-3xl border-2 border-gray-400">
                                <span className="text-gray-400 mr-2">Sort By:</span>ID
                            </button>
                        </div>

                        <AdminSessionsTable
                            sessions={sessions}
                            moviesMap={moviesMap}
                            hallsMap={hallsMap}
                        />

                        <div className="mt-auto">
                            <Pagination
                                currentPage={currentPage}
                                pageCount={pageCount}
                                onPageChange={setCurrentPage}
                            />
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
