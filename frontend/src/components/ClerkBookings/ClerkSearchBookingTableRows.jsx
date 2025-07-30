import React, { useEffect, useState } from "react";
import MovieService   from "../../services/MovieService";
import SessionService from "../../services/SessionService";
import SeatService    from "../../services/SeatService";

export default function BookingRow({ booking }) {
    const [movie,   setMovie]   = useState(null);
    const [session, setSession] = useState(null);
    const [seat,    setSeat]    = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const s = await SessionService.getById(booking.session);
                console.log("↪️ session payload:", s);
                const m = await MovieService.getById(s.movie);
                console.log("↪️ movie payload:", m);
                const t = await SeatService.getById(booking.seat);
                console.log("↪️ seat payload:", t);

                setSession(s);
                setMovie(m);
                setSeat(t);
            } catch (err) {
                console.error("Error fetching booking details", err);
            }
        })();
    }, [booking.session, booking.seat]);

    return (
        <tr className="border-b text-sm text-gray-800 text-center">
            <td className="px-4 py-3">
                {movie?.title ?? "Unknown Movie"}
            </td>
            <td className="px-4 py-3">
                {session?.time ?? session?.startTime ?? "Unknown Session"}
            </td>
            <td className="px-4 py-3">
                {seat ? `${seat.seatRow}${seat.seatColumn}` : "—"}
            </td>
        </tr>
    );
}
