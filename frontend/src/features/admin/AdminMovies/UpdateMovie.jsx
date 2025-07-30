import Sidebar from "../AdminLayout/Sidebar";
import Header from "../AdminLayout/Header";
import React, { useState, useEffect } from "react";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import MovieService from "../../../services/MovieService";

export default function UpdateMovie() {
    const navigate = useNavigate();
    const { id } = useParams();

    const location = useLocation();
    const movie = location.state?.movie;

    const [name, setName] = useState(movie.name);
    const [genre, setGenre] = useState(movie.genre);
    const [duration, setDuration] = useState(movie.duration);
    const [img, setImg] = useState(movie.imgUrl);

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const movie = await MovieService.getById(id);
                if (movie) {
                    setName(movie.title);
                    setGenre(movie.genre);
                    setDuration(movie.duration);
                    setImg(movie.imgUrl || movie.imageUrl);
                } else {
                    alert("Movie not found.");
                    navigate("/admin/movies");
                }
            } catch (error) {
                console.error("Error fetching movie:", error);
            }
        };
        fetchMovie();
    }, [id, navigate]);

    const handleInput = async (e) => {
        e.preventDefault();
        const updatedMovie = {
            id, title: name, genre, duration, imgUrl: img
        };

        const success = await MovieService.update(id, updatedMovie);

        if (success) {
            navigate("/admin/movies");
        }
        else {
            alert("Fail")
        }
    };

    return (
                <main className="inner-container relative flex-1 p-10 bg-[#D9D9D9]">
                    <div className="bg-white w-[75%] h-full mx-3 my-4 rounded-xl p-6 overflow-auto">
                        <form className="p-8 space-y-4" onSubmit={handleInput}>
                            <label className="block text-black font-semibold">Movie Name</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="border-2 border-gray-300 rounded-md h-8 w-full"
                                required
                            />
                            <label className="block text-black font-semibold">Genre</label>
                            <input
                                type="text"
                                value={genre}
                                onChange={(e) => setGenre(e.target.value)}
                                className="border-2 border-gray-300 rounded-md h-8 w-full"
                                required
                            />
                            <label className="block text-black font-semibold">Duration (min)</label>
                            <input
                                type="text"
                                value={duration}
                                onChange={(e) => setDuration(e.target.value)}
                                className="border-2 border-gray-300 rounded-md h-8 w-full"
                                required
                            />
                            <label className="block text-black font-semibold">Image URL</label>
                            <input
                                type="text"
                                value={img}
                                onChange={(e) => setImg(e.target.value)}
                                className="border-2 border-gray-300 rounded-md h-8 w-full"
                                required
                            />
                            <button
                                type="submit"
                                className="bg-[#400505] text-white py-2 px-6 rounded-md"
                            >
                                Update Movie
                            </button>
                        </form>
                    </div>
                </main>
    );
}
