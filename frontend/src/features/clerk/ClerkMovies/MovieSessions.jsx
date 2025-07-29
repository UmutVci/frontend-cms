
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ClerkMoviesService from "../../../services/MovieService";
import ClerkSessionsService from "../../../services/SessionService";
import HallService from "../../../services/HallService";

export default function MovieSessions() {
    const { id } = useParams(); // movieId
    const navigate = useNavigate();

    const [movie, setMovie] = useState(null);
    const [sessions, setSessions] = useState([]);
    const [hallsMap, setHallsMap] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        Promise.all([
            ClerkMoviesService.getById(id),
            ClerkSessionsService.getAllSessionsFromMovie(id),
            HallService.getAll()
        ])
            .then(([movieData, sessionsData, hallsData]) => {
                setMovie(movieData);
                setSessions(sessionsData);

                // salonları id'ye göre eşleştir
                const map = {};
                hallsData.forEach(h => {
                    map[h.id] = h.type; // istersen h.name de olabilir
                });
                setHallsMap(map);
            })
            .catch(err => {
                console.error("Veriler yüklenemedi:", err);
            })
            .finally(() => setLoading(false));
    }, [id]);

    if (loading) return <div className="p-6 text-center">Loading...</div>;
    if (!movie) return <div className="p-6 text-center text-red-600">Movie not found.</div>;

    return (
        <div className="min-h-[80vh] flex items-center justify-center px-6 py-12 gap-10 bg-[#f5f6f8]">
            <div className="bg-white rounded-2xl shadow-xl flex gap-12 p-12 min-w-[1000px] max-w-5xl w-full justify-center">
                {/* Sol taraf: Seanslar */}
                <div className="bg-[#400505] rounded-2xl py-8 px-8 min-w-[500px] flex flex-col items-center justify-center shadow-lg">
                    <h2 className="text-2xl font-bold text-white mb-8 text-center">
                        {movie.title} Sessions
                    </h2>
                    <div className="grid grid-cols-2 gap-8 min-w-[350px]">
                        {sessions.length === 0 && (
                            <div className="col-span-2 text-center text-gray-300 text-lg py-8">
                                No sessions found.
                            </div>
                        )}
                        {sessions.map((s) => (
                            <div className="flex flex-col items-start" key={s.id}>
                                <div className="bg-black text-white px-4 py-1 rounded-t-lg mb-0 -mb-2 text-xs font-bold">
                                    {hallsMap[s.hall] || "Unknown Hall"}
                                </div>
                                <button
                                    onClick={() => navigate(`/clerk/sessions/${s.id}/seats`)}
                                    className="bg-gray-200 rounded-lg text-black text-xl font-semibold px-8 py-4 min-w-[120px] text-center shadow border border-gray-100 hover:bg-gray-300 transition"
                                >
                                    {new Date(s.startTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Sağ taraf: Film bilgisi */}
                <div className="flex flex-col items-center bg-gray-100 rounded-2xl py-8 px-8 min-w-[330px] max-w-xs shadow">
                    <img
                        src={movie.imgUrl}
                        alt={movie.title}
                        className="rounded-lg mb-6 max-h-80 object-contain"
                    />
                    <div className="font-semibold text-center mb-2 text-lg">
                        {movie.duration} min / {movie.genre}
                    </div>
                    <div className="font-extrabold text-2xl text-black text-center">
                        {movie.format || "2D"}
                    </div>
                </div>
            </div>
        </div>
    );
}
