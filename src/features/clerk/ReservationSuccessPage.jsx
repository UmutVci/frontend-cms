// src/pages/customer/ReservationSuccessPage.jsx
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import SessionService from '../../services/SessionService';
import HallService from '../../services/HallService';


export default function ReservationSuccessPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const [searchParams] = useSearchParams();

    const [session, setSession] = useState(null);
    const [hall, setHall] = useState(null);
    const [seats, setSeats] = useState([]);

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

                console.log("✅ Session:", sessionData);
                console.log("✅ Hall:", hallData);
                console.log("✅ Reserved Seats:", reservedSeats);

                setSession(sessionData);
                setHall(hallData);
                setSeats(reservedSeats);
            } catch (err) {
                console.error("❌ Başarı sayfası yüklenemedi:", err);
            }
        }

        loadData();
    }, [searchParams]);

    if (!session || !hall || seats.length === 0) {
        return <div className="p-6 text-red-600">❌ Rezervasyon verisi eksik!</div>;
    }

    const seatLabels = seats.map(seat => `${seat.seatRow}${seat.seatColumn}`).join(', ');

    return (
        <div className="p-6 text-center">
            <h2 className="text-2xl font-bold mb-4 text-green-700">🎉 Rezervasyon Başarılı!</h2>
            <p className="mb-2">🎬 <strong>{session.movie?.title || 'Film'}</strong></p>
            <p className="mb-2">📅 Tarih: {new Date(session.startTime).toLocaleDateString()}</p>
            <p className="mb-2">🕒 Saat: {new Date(session.startTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
            <p className="mb-4">🪑 Koltuklar: {seatLabels}</p>
            <p className="font-semibold">🏛️ Salon: {hall.name}</p>

            <button
                onClick={() => navigate('/')}
                className="mt-6 bg-blue-700 text-white px-6 py-2 rounded"
            >
                Ana Sayfaya Dön
            </button>
        </div>
    );
}
