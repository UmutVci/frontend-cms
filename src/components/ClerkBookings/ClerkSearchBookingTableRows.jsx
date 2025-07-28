import React, {useEffect, useState} from 'react'
import MovieService from "../../services/MovieService";
import HallService from "../../services/HallService";
import SessionService from "../../services/SessionService";
import SeatService from "../../services/SeatService";

const BookingRow = ({ booking }) => {
    const [session, setSession] = useState();
    const [movie, setMovie] = useState();
    const [seat, setSeat] = useState();
    useEffect(() => {
        const fetchData = async () => {
            const sessionData = await SessionService.getById(booking.session_id);
            const movieData = await MovieService.getById(sessionData.movie_id)
            const seatData = await SeatService.getById(booking.seat_id);
            setSession(sessionData?.name || "Unknown Session");
            setMovie(movieData?.name || "Unknown Movie");
            setSession(seatData?.name || "Unkown")
        };

        fetchData();
    }, []);
    return (
        <tr className="border-b text-sm text-gray-800">
            <td className="px-4 py-3 text-center">{movie}</td>
            <td className="px-4 py-3 text-center">{movie.session}</td>
            <td className="px-4 py-3 text-center">{movie.seat}</td>
            <td className="px-4 py-3 text-center">{movie.customer}</td>
        </tr>
    )
}

export default BookingRow