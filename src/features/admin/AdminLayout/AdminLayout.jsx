import AdminHeader from './Header';
import AdminSidebar from './Sidebar';
import {Outlet} from "react-router-dom";

export default function AdminLayout() {
    return (
        <div className="flex h-screen overflow-hidden">
            <AdminSidebar />

            <div className="flex flex-col flex-1 w-full">
                <AdminHeader />
                <main className="flex-1 overflow-y-auto p-6 bg-[#D9D9D9]">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
