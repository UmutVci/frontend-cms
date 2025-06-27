// src/features/auth/pages/ClerkMoviesPage.jsx
import React, {useEffect, useState} from "react";
import ClerkSidebar from "../../../components/ClerkSidebar";
import Header from "../../../components/Header";
import Movie from "../../../components/ClerkMovies/Movie";
import ClerkMoviesService from "./ClerkMoviesService";

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
        <div className="h-screen flex">
            <ClerkSidebar />

            <div className="flex-1 flex flex-col">
                <Header title="Movies"/>

                <main className="flex-1 overflow-auto bg-[#D9D9D9] p-6">
                    <div className="bg-white rounded-xl p-6 grid grid-cols-4 gap-6">
                        {movies.map((m) => (
                            <Movie
                                movie = {m}
                            />
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
}
