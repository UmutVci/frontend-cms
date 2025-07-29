import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import SessionService from '../../../services/SessionService';
import HallService from '../../../services/HallService';
import useAuth from "../../auth/useAuth";

export default function SeatsPage() {
    const { sessionId } = useParams();
    const navigate = useNavigate();
    const [session, setSession] = useState(null);
    const [hall, setHall] = useState(null);
    const [seats, setSeats] = useState([]);
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadData() {
            try {
                const sessionData = await SessionService.getById(sessionId);
                const hallData = await HallService.getById(sessionData.hall);
                const seatsData = await SessionService.getSeatsBySessionId(sessionId);

                console.log("✅ Session:", sessionData);
                console.log("✅ Hall:", hallData);
                console.log("✅ Seats:", seatsData);

                setSession(sessionData);
                setHall(hallData);
                setSeats(seatsData);
            } catch (err) {
            } finally {
                setLoading(false);
            }
        }
        loadData();
    }, [sessionId]);

    const handleSeatClick = (seatId) => {
        setSelectedSeats(prev =>
            prev.includes(seatId) ? prev.filter(id => id !== seatId) : [...prev, seatId]
        );
    };

    const handleReserve = async () => {
        try {
            const customerId = useAuth.getState().user?.id;
            console.log("🟢 Reserving seats:", selectedSeats, "CustomerID:", customerId);

            await SessionService.reserveSeats(sessionId, selectedSeats, customerId);

            navigate(`/clerk/reservation-success?sessionId=${session.id}&hallId=${hall.id}&seatIds=${selectedSeats.join(',')}`);

        } catch (err) {
            console.error("❌ Reservation Error: ", err);
            alert("Rezervasyon başarısız.");
        }
    };


    if (loading) return <div className="p-6 text-center">Loading...</div>;
    if (!session || !hall) return <div className="p-6 text-red-600">Error.</div>;

    const seatMap = {};
    seats.forEach(seat => {
        seatMap[`${seat.seatRow.toUpperCase()}-${seat.seatColumn}`] = seat;
    });

    const totalSeats = seats.length;
    const seatsPerRow = 8;
    const rowCount = Math.ceil(totalSeats / seatsPerRow);

    return (
        <main className="inner-container relative flex-1 p-10 bg-[#D9D9D9]">
            <div className="bg-white w-[75%] h-full mx-auto my-4 rounded-xl p-6 overflow-auto">
            <h2 className="text-2xl font-bold">Hall: {hall.name}</h2>
            <h3 className="mb-4">Session: {new Date(session.startTime).toLocaleString()}</h3>
            <div className="bg-black p-6 rounded-xl inline-block">
                {Array.from({ length: rowCount }).map((_, rowIdx) => {
                    const rowLabel = String.fromCharCode(65 + rowIdx);
                    return (
                        <div key={rowLabel} className="flex items-center mb-2">
                            <div className="text-white mr-2 w-6 font-bold">{rowLabel}</div>
                            <div className="flex gap-2">
                                {Array.from({ length: seatsPerRow }).map((_, colIdx) => {
                                    const seatKey = `${rowLabel}-${colIdx + 1}`;
                                    const seat = seatMap[seatKey];
                                    const booked = seat?.booked;
                                    const selected = seat && selectedSeats.includes(seat.id);

                                    return (
                                        <button
                                            key={seatKey}
                                            onClick={() => seat && handleSeatClick(seat.id)}
                                            disabled={!seat || booked}
                                            className={`
                                                w-10 h-10 rounded text-sm font-bold
                                                ${!seat
                                                ? 'bg-transparent'
                                                : booked
                                                    ? 'bg-gray-400 cursor-not-allowed'
                                                    : selected
                                                        ? 'bg-red-600 text-white'
                                                        : 'bg-green-500 text-white'}
                                            `}
                                        >
                                            {colIdx + 1}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
                <br />
            <button
                onClick={handleReserve}
                disabled={selectedSeats.length === 0}
                className="mt-6 bg-[#400505] text-white px-6 py-2 rounded"
            >
                {selectedSeats.length > 0
                    ? `Do Reservation  (${selectedSeats.length})`
                    : "Pick a Seat"}
            </button>
        </div>
        </main>
    );
}
