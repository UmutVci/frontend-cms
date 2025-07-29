import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import SessionService from '../../services/SessionService';
import HallService from '../../services/HallService';
import MovieService from '../../services/MovieService'; // ✅ Movie servisini ekledik

export default function ReservationSuccessPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const [searchParams] = useSearchParams();

    const [session, setSession] = useState(null);
    const [hall, setHall] = useState(null);
    const [seats, setSeats] = useState([]);
    const [movie, setMovie] = useState(null); // ✅ Film bilgisi için state

    useEffect(() => {
        const sessionId = searchParams.get('sessionId');
        const hallId = searchParams.get('hallId');
        const seatIds = searchParams.get('seatIds')?.split(',')?.map(id => Number(id)) || [];

        async function loadData() {
            try {
                const sessionData = await SessionService.getById(sessionId);
                const hallData = await HallService.getById(hallId);
                const allSeats = await SessionService.getSeatsBySessionId(sessionId);
                const reservedSeats = allSeats.filter(seat => seatIds.includes(seat.id));

                // 🎬 Film bilgisini çek
                if (sessionData.movie) {
                    const movieData = await MovieService.getById(sessionData.movie);
                    setMovie(movieData);
                }

                setSession(sessionData);
                setHall(hallData);
                setSeats(reservedSeats);
            } catch (err) {
                console.error("❌ Error loading reservation data", err);
            }
        }

        loadData();
    }, [searchParams]);

    if (!session || !hall || seats.length === 0) {
        return <div className="p-6 text-red-600">❌ Error!</div>;
    }

    const seatLabels = seats.map(seat => `${seat.seatRow}${seat.seatColumn}`).join(', ');

    return (
        <div className="p-6 text-center">
            <h2 className="text-2xl font-bold mb-4 text-green-700">🎉 Reservation Successfully!</h2>
            <p className="mb-2">🎬 <strong>{movie?.title || 'Film'}</strong></p>
            <p className="mb-2">📅 Date: {new Date(session.startTime).toLocaleDateString()}</p>
            <p className="mb-2">🕒 Time: {new Date(session.startTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
            <p className="mb-4">🪑 Seats: {seatLabels}</p>
            <p className="font-semibold">🏛️ Hall: {hall.name}</p>

            <button
                onClick={() => navigate('/')}
                className="mt-6 bg-blue-700 text-white px-6 py-2 rounded"
            >
                Back to the Homepage
            </button>
        </div>
    );
}
