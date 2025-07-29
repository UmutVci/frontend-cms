import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import FeedbackService from "../../../services/FeedbackService";
import MovieService from "../../../services/MovieService";
import HallService from "../../../services/HallService";
import api from "../../../lib/axios";

export default function FeedbackForm() {
    const [clientName, setClientName] = useState("");
    const [description, setDescription] = useState("");
    const [movieId, setMovieId] = useState("");
    const [hallId, setHallId] = useState("");
    const [moviesList, setMoviesList] = useState([]);
    const [hallsList, setHallsList] = useState([]);

    const navigate = useNavigate();

    // Filmleri ve salonları getir
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
            clientName,
            description,
            movie: Number(movieId), // ID'leri sayıya çeviriyoruz
            hall: Number(hallId),
        };

        const success = await FeedbackService.create(payload);
        if (success) {
            alert("🎉 Geri bildiriminiz başarıyla gönderildi!");
            navigate("/clerk/feedback");
        } else {
            alert("Gönderim başarısız!");
        }
    };

    return (
        <main className="inner-container relative flex-1 p-10 bg-[#D9D9D9]">
            <div className="bg-white w-[75%] h-full mx-auto my-4 rounded-xl p-6 overflow-auto">
                <form className="p-8" onSubmit={handleSubmit}>
                    <label className="block text-black font-semibold">Client Name</label>
                    <input
                        type="text"
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        className="border-2 border-gray-300 rounded-md h-8 w-full mt-1"
                        required
                    />

                    <label className="block text-black font-semibold mt-6">Movie</label>
                    <select
                        value={movieId}
                        onChange={(e) => setMovieId(e.target.value)}
                        className="border-2 border-gray-300 rounded-md h-8 w-full mt-1"
                        required
                    >
                        <option value="">-- Select a Movie --</option>
                        {moviesList.map((movie) => (
                            <option key={movie.id} value={movie.id}>
                                {movie.title}
                            </option>
                        ))}
                    </select>

                    <label className="block text-black font-semibold mt-6">Hall</label>
                    <select
                        value={hallId}
                        onChange={(e) => setHallId(e.target.value)}
                        className="border-2 border-gray-300 rounded-md h-8 w-full mt-1"
                        required
                    >
                        <option value="">-- Select a Hall --</option>
                        {hallsList.map((hall) => (
                            <option key={hall.id} value={hall.id}>
                                {hall.name}
                            </option>
                        ))}
                    </select>

                    <label className="block text-black font-semibold mt-6">Description</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="border-2 border-gray-300 rounded-md w-full mt-1 h-24"
                        required
                    />

                    <button
                        type="submit"
                        className="mt-10 bg-[#400505] text-white py-2 px-16 rounded-xl"
                    >
                        Submit Feedback
                    </button>
                </form>
            </div>
        </main>
    );
}
