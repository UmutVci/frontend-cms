import React, {useEffect, useState} from "react";
import ClerkSearchBookingTable from "../../../components/ClerkBookings/ClerkSearchBookingTable";
import SearchBar from "../../../components/AdminCustomersSearchBar";
import CustomerService from "../../../services/CustomerService";
import ReservationService from "../../../services/ReservationService";

export default function ClerkSearchBookings(){
    const [bookings, setBookings] = useState([]);
    useEffect(() => {
        ReservationService.getAll()
            .then(setBookings)
            .catch(err => console.error(err));
    }, []);

    return (
                <main className="inner-container relative flex-1 p-10 bg-[#D9D9D9]">
                    <div className="bg-white w-full h-full mx-3 my-4 rounded-xl p-6 overflow-auto">
                        <SearchBar />
                        <ClerkSearchBookingTable bookings = {bookings} />
                    </div>
                </main>
    )
}