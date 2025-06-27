import React, {useEffect, useState} from "react";
import Sidebar from "../../../components/Sidebar";
import Header from "../../../components/Header";
import AdminCustomersSearchBar from "../../../components/AdminCustomersSearchBar";
import Pagination from "../../../components/Pagination";
import AdminTicketClerksTable from "../../../components/AdminTicketClerks/AdminTicketClerksTable";
import TicketClerkService from "../../../services/TicketClerkService";

export default function AdminTicketClerk() {
    const [clerks, setClerks] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            TicketClerkService.getAll()
                .then(data => setClerks(data))
                .catch(error => console.error(error));
        };

        fetchData();
    });
    console.log(clerks);

    const itemsPerPage = 6
    const pageCount    = Math.ceil(12 / itemsPerPage)
    const [currentPage, setCurrentPage] = useState(1)
    return (
        <div className="h-screen flex font-[Poppins]">
            <Sidebar />
            <div className="flex-1  flex-col">
                <Header title="Ticket Clerks" />
                <main className="inner-container relative flex-1 p-10 bg-[#D9D9D9]">
                    <div className="bg-white w-full h-full mx-3 my-4 rounded-xl p-6 overflow-auto">
                        <AdminCustomersSearchBar />
                        <div className="flex items-center justify-between mb-6">
                            <button className="bg-[#202123] text-white h-8 w-36 rounded-xl flex items-center justify-center">
                                <span className="text-l">+ Add Ticket Clerk</span>
                            </button>
                            <button className="ml-auto flex items-center h-8 w-36 rounded-3xl border-2 border-gray-400 justify-center">
                                <span className="text-l text-gray-400 mr-2">Sort By:</span>
                                <span className="text-l">ID</span>
                            </button>
                        </div>
                        <AdminTicketClerksTable clerks = {clerks} />
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
    )
}
