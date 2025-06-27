import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import React from "react";

export default function AdminCustomers() {
    return (
        <div className="flex h-screen overflow-hidden">
            {/* Sol: Sidebar */}
            <Sidebar />

            {/* Sağ: Header + Page Content */}
            <div className="flex flex-col flex-1 overflow-y-auto">
                <Header title="Customers" />

                {/* SAYFA İÇERİĞİ */}
                <div className="bg-[#D9D9D9] h-screen flex items-center justify-center">
                    <div className="form bg-white pt-10 pb-16 pl-20 pr-20 rounded-md w-full h-full px-64 mx-64">

                    </div>
                </div>

            </div>
        </div>
    );
}
