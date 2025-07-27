import React from 'react';
import ClerkHeader from './ClerkHeader';
import ClerkSidebar from './ClerkSidebar';
import { Outlet } from 'react-router-dom';

export default function ClerkLayout() {
    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <ClerkSidebar />

            {/* Sağ tarafta header + içerik */}
            <div className="flex flex-col flex-1">
                <ClerkHeader />
                <main className="flex-1 overflow-y-auto bg-gray-100 p-4">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
