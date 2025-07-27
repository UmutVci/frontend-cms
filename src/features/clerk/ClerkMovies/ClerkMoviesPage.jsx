// src/features/auth/pages/ClerkMoviesPage.jsx
import React, {useEffect, useState} from "react";
import Movie from "../../../components/ClerkMovies/Movie";
import ClerkMoviesService from "../../../services/MovieService";

export default function ClerkMoviesPage() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            ClerkMoviesService.getAll()
                .then(data => setMovies(data))
                .catch(error => console.log("Data couldnt fetch : " + error))
        }
        fetchData();
    }, []);

    return (
                <main className="flex-1 overflow-auto bg-[#D9D9D9] p-6">
                    <div className="bg-white rounded-xl p-6 grid grid-cols-4 gap-6">
                        {movies.map((m) => (
                            <Movie
                                movie = {m}
                            />
                        ))}
                    </div>
                </main>
    );
}
