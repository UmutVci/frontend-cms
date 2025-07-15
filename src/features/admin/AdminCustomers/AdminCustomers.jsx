// src/features/admin/AdminCustomers/AdminCustomers.jsx
import React, { useEffect, useState } from 'react';
import AdminCustomersSearchBar from '../../../components/AdminCustomersSearchBar';
import AdminCustomerTable    from '../../../components/AdminCustomer/AdminCustomerTable';
import Pagination            from '../../../components/Pagination';
import CustomerService       from '../../../services/CustomerService';

export default function AdminCustomers() {
    const [customers, setCustomers] = useState([]);
    const itemsPerPage = 6;
    const pageCount    = Math.ceil(customers.length / itemsPerPage);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        CustomerService.getAll()
            .then(setCustomers)
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="bg-white w-full rounded-xl p-6 overflow-auto">
            {/* Sayfa içi başlık (opsiyonel) */}
            <h1 className="text-2xl font-normal mb-6">Customers</h1>

            <AdminCustomersSearchBar />

            <div className="overflow-x-auto mt-4">
                <AdminCustomerTable customers={customers} />
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
