
import React, { useEffect, useState } from "react";
import MovieService from "../../../services/MovieService";
import {useNavigate} from "react-router-dom";

export default function AddMovieForm() {
    const [movie, setMovie] = useState("");
    const [genre, setGenre] = useState("");
    const [duration, setDuration] = useState("");
    const [img, setImg] = useState("");
    const navigate = useNavigate();

    const handleInput = async (e) => {
        e.preventDefault()
        const thismovie = {title: movie, genre: genre, duration: duration, imgUrl: img}
        const success = await MovieService.create(thismovie)
        if(success){
            navigate("/admin/movies");
        }
      else alert("Error while adding a new Movie!");

    }

    return (
        <div className="bg-white w-full md:w-3/4 mx-3 my-4 rounded-xl p-6 overflow-auto">
            <h1 className="text-2xl font-normal mb-6">Add Movie</h1>

            <form className="space-y-4" onSubmit={handleInput}>
                <div>
                    <label className="block font-semibold mb-1">Movie Name</label>
                    <input
                        type="text"
                        value={movie}
                        onChange={e => setMovie(e.target.value)}
                        className="w-full border-2 border-gray-300 rounded-md h-8 px-2"
                        required
                    />
                </div>

                <div>
                    <label className="block font-semibold mb-1">Genre</label>
                    <input
                        type="text"
                        value={genre}
                        onChange={e => setGenre(e.target.value)}
                        className="w-full border-2 border-gray-300 rounded-md h-8 px-2"
                        required
                    />
                </div>

                <div>
                    <label className="block font-semibold mb-1">Duration</label>
                    <input
                        type="text"
                        value={duration}
                        onChange={e => setDuration(e.target.value)}
                        className="w-full border-2 border-gray-300 rounded-md h-8 px-2"
                        required
                    />
                </div>

                <div>
                    <label className="block font-semibold mb-1">Image URL</label>
                    <input
                        type="text"
                        value={img}
                        onChange={e => setImg(e.target.value)}
                        className="w-full border-2 border-gray-300 rounded-md h-8 px-2"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="bg-[#400505] text-white py-2 px-6 rounded-md"
                >
                    Add Movie
                </button>
            </form>
        </div>
    );
}
