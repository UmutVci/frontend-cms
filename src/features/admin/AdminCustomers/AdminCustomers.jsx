import React, {useEffect, useState} from 'react'
import Sidebar from '../../../components/Sidebar'
import Header  from '../../../components/Header'
import AdminCustomersSearchBar  from '../../../components/AdminCustomersSearchBar'
import AdminCustomerTable from "../../../components/AdminCustomer/AdminCustomerTable";
import Pagination from "../../../components/Pagination";
import CustomerService from "../../../services/CustomerService";

export default function AdminCustomers() {
    const [customers, setCustomers] = useState([])
    const itemsPerPage = 6
    const pageCount    = Math.ceil(12 / itemsPerPage)
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        CustomerService.getAll()
            .then(data => setCustomers(data))
            .catch(error => "Customers couldnt fetch : " + error)
    });

    return (
        <div className="h-screen flex font-[Poppins]">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <Header title="Customers" />
                <main className="inner-container relative flex-1 p-10 bg-[#D9D9D9]">
                    <div className="bg-white w-full h-full mx-3 my-4 rounded-xl p-6 overflow-auto">
                        <AdminCustomersSearchBar />
                        <AdminCustomerTable customers = {customers}/>
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
