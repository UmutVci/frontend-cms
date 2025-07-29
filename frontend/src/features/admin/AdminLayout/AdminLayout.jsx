import React, { useState } from 'react';
import AdminHeader from './Header';
import AdminSidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

export default function AdminLayout() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="flex min-h-screen w-full min-w-0">
            <div className={`
                fixed inset-y-0 left-0 z-40 w-64 bg-[#400505] transition-transform duration-300
                ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
                md:relative md:translate-x-0 md:flex-shrink-0 min-w-0
            `}>
                <AdminSidebar onClose={() => setIsSidebarOpen(false)} />
            </div>

            {isSidebarOpen && (
                <div
                    className="fixed inset-0 z-30 bg-black bg-opacity-50 md:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            <div className="flex flex-col w-full min-w-0">
                <AdminHeader onMenuClick={() => setIsSidebarOpen(true)} />
                <main className="flex-1 overflow-y-auto overflow-x-hidden bg-gray-100 p-4 min-w-0">
                    <div className="w-full max-w-full min-w-0">
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    );
}
