import React, {useEffect, useState} from "react";
import Sidebar from "../AdminLayout/Sidebar";
import Header from "../AdminLayout/Header";
import SearchBar from "../../../components/AdminCustomersSearchBar";
import Pagination from "../../../components/Pagination";
import HallService from "../../../services/HallService";
import AdminHallsTable from "../../../components/AdminHalls/AdminHallsTable";

export default function AdminHalls() {
    const [halls, setHalls] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            HallService.getAll()
                .then(data => setHalls(data))
                .catch(error => console.log("Data couldnt fetch :" + error))
        }
        fetchData()
    });


    const itemsPerPage = 6
    const pageCount    = Math.ceil(12 / itemsPerPage)
    const [currentPage, setCurrentPage] = useState(1)

    return (

                <main className="inner-container flex-1 p-10 bg-[#D9D9D9]">
                    <div className="bg-white w-full h-full mx-3 my-4 rounded-xl p-6 overflow-auto">
                        <SearchBar />
                        <div className="flex items-center justify-between mb-6">
                            <a href = "/admin/add-hall">
                                <button className="bg-[#202123] text-white h-8 w-36 rounded-xl flex items-center justify-center">
                                    <span className="text-l">+ Add Hall</span>
                                </button>
                            </a>
                            <button className="ml-auto flex items-center h-8 w-36 rounded-3xl border-2 border-gray-400 justify-center">
                                <span className="text-l text-gray-400 mr-2">Sort By:</span>
                                <span className="text-l">ID</span>
                            </button>
                        </div>
                        <AdminHallsTable halls = {halls} />

                        <div className="mt-auto">
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
