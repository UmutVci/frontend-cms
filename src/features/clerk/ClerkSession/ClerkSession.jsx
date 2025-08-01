import Header from "../../admin/AdminLayout/Header";
import React from "react";
import ClerkSidebar from "../ClerkLayout/ClerkSidebar";
import { useNavigate } from "react-router-dom"; // ✅ Eklendi

export default function ClerkSession({ movie }) {
    const navigate = useNavigate(); // ✅ Eklendi

    return (
        <div className="h-screen flex font-[Poppins]">
            <ClerkSidebar />
            <div className="flex-1 flex flex-col">
                <Header title={movie.name + " Sessions"} />
                <main className="inner-container relative flex-1 p-10 bg-[#D9D9D9]">
                    <div className="bg-white w-full h-full mx-3 my-4 rounded-xl p-6 overflow-auto grid grid-cols-12 gap-4">

                        {/* 🎯 SOL TARAF: Session kartları */}
                        <div className="bg-[#400505] col-span-7 h-full w-[70%] p-5 rounded-xl relative justify-items-center ml-4 grid grid-cols-2">
                            {movie.sessions.map((session) => (
                                <div key={session.id}>
                                    <button
                                        onClick={() => navigate(`/clerk/sessions/${session.id}/seats`)} // ✅ Navigasyon eklendi
                                        className="bg-[#D9D9D9] hover:bg-gray-300 rounded-md px-16 py-4 mt-6 transition duration-200 cursor-pointer"
                                    >
                                        {session.time}
                                    </button>
                                </div>
                            ))}
                        </div>

                        <div className="bg-[#D9D9D9] col-span-5 w-[70%] rounded-xl p-10 relative justify-items-center">
                            <img src={movie.img} className="rounded-md max-h-fit" alt={movie.name} />
                            <p className="text-black font-bold m-5">
                                {movie.time} / {movie.category}
                            </p>
                            <p className="text-black font-bold">{movie.d}</p>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
