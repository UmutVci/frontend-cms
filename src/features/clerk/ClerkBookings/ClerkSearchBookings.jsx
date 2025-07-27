import React from "react";
import ClerkSearchBookingTable from "../../../components/ClerkBookings/ClerkSearchBookingTable";
import SearchBar from "../../../components/AdminCustomersSearchBar";

export default function ClerkSearchBookings(){
    return (
                <main className="inner-container relative flex-1 p-10 bg-[#D9D9D9]">
                    <div className="bg-white w-full h-full mx-3 my-4 rounded-xl p-6 overflow-auto">
                        <SearchBar />
                        <ClerkSearchBookingTable />
                    </div>
                </main>
    )
}