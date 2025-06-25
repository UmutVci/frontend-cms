// src/features/auth/pages/ClerkMoviesPage.jsx
import React from "react";
import ClerkSidebar from "../../components/ClerkSidebar";
import Header from "../../components/Header";
import Movie from "../../components/Movie";

export default function ClerkMoviesPage() {
    const movies = [
        { id: 1, name: "Spider Man",               imageUrl: "/spiderman.jpg" },
        { id: 2, name: "Lilo & Stitch",            imageUrl: "/lilo.jpg" },
        { id: 3, name: "The Movie",                imageUrl: "/themovie.jpg" },
        { id: 4, name: "28 Years Later",           imageUrl: "/28.jpg" },
        { id: 5, name: "Elio",                     imageUrl: "/elio.jpg" },
        { id: 6, name: "How to Train Your Dragon", imageUrl: "/dragon.jpg" },
        { id: 7, name: "Ballerina",                imageUrl: "/ballerina.jpg" },
        { id: 8, name: "Mission Impossible",       imageUrl: "/mi.jpg" },
    ];

    return (
        <div className="h-screen flex">
            <ClerkSidebar />

            <div className="flex-1 flex flex-col">
                <Header title="Movies"/>

                <main className="flex-1 overflow-auto bg-[#D9D9D9] p-6">
                    <div className="bg-white rounded-xl p-6 grid grid-cols-4 gap-6">
                        {movies.map((m) => (
                            <Movie
                                key={m.id}
                                id={m.id}
                                name={m.name}
                                imageUrl={m.imageUrl}
                            />
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
}
