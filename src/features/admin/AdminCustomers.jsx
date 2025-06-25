import React, {useState} from 'react'
import Sidebar from '../../components/Sidebar'
import Header  from '../../components/Header'
import AdminCustomersSearchBar  from '../../components/AdminCustomersSearchBar'
import AdminCustomerTable from "../../components/AdminCustomerTable";
import Pagination from "../../components/Pagination";

export default function AdminCustomers() {
    const itemsPerPage = 6
    const pageCount    = Math.ceil(12 / itemsPerPage)
    const [currentPage, setCurrentPage] = useState(1)

    // 3) O sayfanın öğeleri
    const startIdx     = (currentPage - 1) * itemsPerPage
    return (
        <div className="h-screen flex font-[Poppins]">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <Header title="Customers" />
                <main className="inner-container relative flex-1 p-10 bg-[#D9D9D9]">
                    <div className="bg-white w-full h-full mx-3 my-4 rounded-xl p-6 overflow-auto">
                        <AdminCustomersSearchBar />
                        <AdminCustomerTable />
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
