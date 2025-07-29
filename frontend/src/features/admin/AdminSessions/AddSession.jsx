import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../AdminLayout/Sidebar";
import Header from "../AdminLayout/Header";
import api from "../../../lib/axios";            // axios.create({ baseURL:"http://localhost:8080/api" })
import SessionService from "../../../services/SessionService";

export default function AddSession() {
    const [startTime, setStartTime] = useState("");
    const [movieId, setMovieId]     = useState("");
    const [hallId, setHallId]       = useState("");
    const [price, setPrice]         = useState("");
    const [moviesList, setMoviesList] = useState([]);
    const [hallsList, setHallsList]   = useState([]);

    const navigate = useNavigate();

    // 1. Mevcut filmleri ve salonları çek
    useEffect(() => {
        api.get("/movies")
            .then(r => setMoviesList(r.data._embedded.domainMovieList || []))
            .catch(() => setMoviesList([]));

        api.get("/halls")
            .then(r => setHallsList(r.data._embedded.domainHallList || []))
            .catch(() => setHallsList([]));
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            startTime,
            movie: movieId,
            hall: hallId,
            price: price,
        };
        try {
            await SessionService.create(payload);
            navigate("/admin/sessions");
        } catch (error) {
            alert("Error while adding a new Session!");
        }
    };

    return (
                <main className="inner-container flex-1 p-10 bg-[#D9D9D9]">
                    <div className="bg-white w-[75%] mx-auto my-4 rounded-xl p-6">
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label className="block font-semibold">Start Time</label>
                                <input
                                    type="datetime-local"
                                    value={startTime}
                                    onChange={e => setStartTime(e.target.value)}
                                    className="border rounded w-full p-2"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block font-semibold">Movie</label>
                                <select
                                    value={movieId}
                                    onChange={e => setMovieId(e.target.value)}
                                    className="border rounded w-full p-2"
                                    required
                                >
                                    <option value="">-- Select a Movie --</option>
                                    {moviesList.map(m => (
                                        <option key={m.id} value={m.id}>{m.title}</option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="block font-semibold">Hall</label>
                                <select
                                    value={hallId}
                                    onChange={e => setHallId(e.target.value)}
                                    className="border rounded w-full p-2"
                                    required
                                >
                                    <option value="">-- Select a Hall --</option>
                                    {hallsList.map(h => (
                                        <option key={h.id} value={h.id}>{h.name}</option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="block font-semibold">Price</label>
                                <input
                                    type="number"
                                    step="0.01"
                                    value={price}
                                    onChange={e => setPrice(e.target.value)}
                                    className="border rounded w-full p-2"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="bg-[#400505] text-white py-2 px-6 rounded-md"
                            >
                                Add Session
                            </button>
                        </form>
                    </div>
                </main>
    );
}
