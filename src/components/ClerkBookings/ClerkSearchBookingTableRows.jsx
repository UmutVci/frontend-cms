import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MovieService from "../../services/MovieService";
import SessionService from "../../services/SessionService";
import SeatService from "../../services/SeatService";

const BookingRow = ({ booking }) => {
    const [session, setSession] = useState(null);
    const [movie, setMovie] = useState(null);
    const [seat, setSeat] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const sessionData = await SessionService.getById(booking.session_id);
                const movieData = await MovieService.getById(sessionData.movie_id);
                const seatData = await SeatService.getById(booking.seat_id);

                setSession(sessionData);
                setMovie(movieData);
                setSeat(seatData);
            } catch (err) {
                console.error("Veriler alınamadı:", err);
            }
        };

        fetchData();
    }, [booking.session_id, booking.seat_id]);

    const handleViewSeats = () => {
        navigate(`/clerk/sessions/${booking.session_id}/seats`);
    };

    return (
        <tr className="border-b text-sm text-gray-800 text-center">
            <td className="px-4 py-3">{movie?.name || "Bilinmeyen Film"}</td>
            <td className="px-4 py-3">{session?.name || "Bilinmeyen Oturum"}</td>
            <td className="px-4 py-3">{seat?.seatRow}{seat?.seatColumn}</td>
            <td className="px-4 py-3">{booking.customerName}</td>
            <td className="px-4 py-3">
                <button
                    onClick={handleViewSeats}
                    className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                >
                    Koltukları Görüntüle
                </button>
            </td>
        </tr>
    );
};

export default BookingRow;
