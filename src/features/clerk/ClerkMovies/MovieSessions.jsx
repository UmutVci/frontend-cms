import React, { useEffect, useState } from "react";
import {useNavigate, useParams} from "react-router-dom";
import api from "../../../lib/axios";

export default function MovieSessions() {
    const { id } = useParams();
    const [sessions, setSessions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();


    const handleSessionClick = (sessionId) => {
        console.log("Seçilen oturum ID:", sessionId);

        // Örneğin satın alma işlemi burada yapılmış varsayılıyor:
        // await SomeService.buyTicket(sessionId);
        navigate('/clerk/movies');

        alert("🎉 Purchase successful");
    };


    if (loading) return <div className="p-4">Yükleniyor...</div>;
    if (error) return <div className="p-4 text-red-600">{error}</div>;

    return (
        <div className="h-screen flex font-[Poppins]">
            <div className="flex-1 flex flex-col">
                <main className="inner-container relative flex-1 p-10 bg-[#D9D9D9]">
                    <div className="bg-white w-full h-full mx-3 my-4 rounded-xl p-6 overflow-auto">
                        <ul className="space-y-2">
                            {sessions.map((session) => (
                                <li
                                    key={session.id}
                                    className="bg-white p-4 rounded shadow border border-gray-200 flex justify-between items-center"
                                >
                                    <div>
                                        <p><strong>Start Time:</strong> {new Date(session.startTime).toLocaleString()}</p>
                                        <p><strong>Hall ID:</strong> {session.hall}</p>
                                        <p><strong>Price:</strong> {session.price} ₺</p>
                                    </div>
                                    <div>
                                        <button
                                            onClick={() => handleSessionClick(session.id)}
                                            className="bg-[#400505] text-white px-4 py-2 rounded hover:bg-[#5a0a0a]"
                                        >
                                            Buy Ticket
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>

                    </div>
                </main>
            </div>
        </div>
    );
}