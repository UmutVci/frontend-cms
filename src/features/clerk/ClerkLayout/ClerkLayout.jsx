// ClerkLayout.jsx
import React, { useState } from 'react';
import ClerkHeader from './ClerkHeader';
import ClerkSidebar from './ClerkSidebar';
import { Outlet } from 'react-router-dom';

export default function ClerkLayout() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="flex min-h-screen w-full min-w-0">
            {/* Sidebar - solda sabit */}
            <div className="w-64 bg-[#400505] flex-shrink-0 min-w-0">
                <ClerkSidebar onClose={() => setIsSidebarOpen(false)} />
            </div>
            {/* Main content - sağda */}
            <div className="flex flex-col w-full min-w-0">
                <ClerkHeader onMenuClick={() => setIsSidebarOpen(true)} />
                <main className="flex-1 overflow-y-auto overflow-x-hidden bg-gray-100 p-4 min-w-0">
                    <div className="w-full max-w-full min-w-0">
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    );
}
