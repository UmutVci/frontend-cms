import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import React, {useState} from "react";
import SearchBar from "../../components/AdminCustomersSearchBar";
import AdminMessagesTable from "../../components/AdminMessagesTable";
import Pagination from "../../components/Pagination";

export default function AdminMessages(){
    const itemsPerPage = 6
    const pageCount    = Math.ceil(12 / itemsPerPage)
    const [currentPage, setCurrentPage] = useState(1)
    return(
        <div className="flex h-screen overflow-hidden">
            <Sidebar />
            <div className="flex flex-col flex-1 overflow-y-auto">
                <Header title="Feedbacks"/>
                <main className="inner-container relative flex-1 p-10 bg-[#D9D9D9]">
                    <div className="bg-white w-full h-full mx-3 my-4 rounded-xl p-6 overflow-auto">
                        <SearchBar />
                        <AdminMessagesTable />
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