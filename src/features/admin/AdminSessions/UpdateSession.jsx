import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Sidebar from "../../../components/Sidebar";
import Header from "../../../components/Header";
import SessionService from "../../../services/SessionService";
import api from "../../../lib/axios";

export default function UpdateSession() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [startTime, setStartTime] = useState("");
    const [movieId,   setMovieId]   = useState("");
    const [hallId,    setHallId]    = useState("");
    const [price,     setPrice]     = useState("");

    const [moviesList, setMoviesList] = useState([]);
    const [hallsList,  setHallsList]  = useState([]);

    useEffect(() => {
        // 1) Güncellenecek session'ı al
        SessionService.getById(id)
            .then(session => {
                setStartTime(session.startTime.slice(0, 16));
                // backend'den gelen alanlara göre bu satırları ayarla:
                // eğer session.movie.id geliyorsa:
                setMovieId(session.movie?.id || session.movie);
                setHallId( session.hall?.id  || session.hall);
                setPrice(session.price);
            })
            .catch(console.error);

        // 2) Filmler listesini al
        api.get("/movies")
            .then(r => {
                const list = r.data._embedded?.domainMovieList || [];
                setMoviesList(list);
            })
            .catch(console.error);

        // 3) Salonlar listesini al
        api.get("/halls")
            .then(r => {
                const list = r.data._embedded?.domainHallList || [];
                setHallsList(list);
            })
            .catch(console.error);
    }, [id]);

    const handleUpdate = async (e) => {
        e.preventDefault();
        const payload = {
            id: id,
            startTime,
            movie: movieId,
            hall:  hallId,
            price: price,
        };
        const ok = await SessionService.update(id, payload);
        if (ok) navigate("/admin/sessions");
        else alert("Güncelleme sırasında hata oldu.");
    };

    return (
        <div className="flex h-screen overflow-hidden">
            <Sidebar />
            <div className="flex flex-col flex-1 overflow-y-auto">
                <Header title="Update Session" />
                <main className="inner-container flex-1 p-10 bg-[#D9D9D9]">
                    <div className="bg-white w-[75%] mx-auto my-4 rounded-xl p-6 overflow-auto">
                        <form className="space-y-6" onSubmit={handleUpdate}>
                            <div>
                                <label className="block font-semibold">Start Time</label>
                                <input
                                    type="datetime-local"
                                    value={startTime}
                                    onChange={(e) => setStartTime(e.target.value)}
                                    className="border-2 border-gray-300 rounded-md w-full p-2"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block font-semibold">Movie</label>
                                <select
                                    value={movieId}
                                    onChange={(e) => setMovieId(e.target.value)}
                                    className="border-2 border-gray-300 rounded-md w-full p-2"
                                    required
                                >
                                    <option value="">-- Select a Movie --</option>
                                    {moviesList.map((m) => (
                                        <option key={m.id} value={m.id}>
                                            {m.title}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="block font-semibold">Hall</label>
                                <select
                                    value={hallId}
                                    onChange={(e) => setHallId(e.target.value)}
                                    className="border-2 border-gray-300 rounded-md w-full p-2"
                                    required
                                >
                                    <option value="">-- Select a Hall --</option>
                                    {hallsList.map((h) => (
                                        <option key={h.id} value={h.id}>
                                            {h.name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="block font-semibold">Price</label>
                                <input
                                    type="number"
                                    step="0.01"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                    className="border-2 border-gray-300 rounded-md w-full p-2"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="bg-[#400505] text-white py-2 px-6 rounded-md"
                            >
                                Update Session
                            </button>
                        </form>
                    </div>
                </main>
            </div>
        </div>
    );
}
