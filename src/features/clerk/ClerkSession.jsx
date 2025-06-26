import Header from "../../components/Header";
import React from "react";
import ClerkSidebar from "../../components/ClerkSidebar";

export default function ClerkSession({movie}){
    return (
        <div className="h-screen flex font-[Poppins]">
            <ClerkSidebar />
            <div className="flex-1 flex flex-col">
                <Header title={movie.name + " Sessions"} />
                <main className="inner-container relative flex-1 p-10 bg-[#D9D9D9]">
                    <div className="bg-white w-full h-full mx-3 my-4 rounded-xl p-6 overflow-auto grid grid-cols-12 gap-4 ">
                        <div className="bg-[#400505] col-span-7 h-full w-[70%] p-5 rounded-xl relative justify-items-center ml-4 grid grid-cols-2">
                            {movie.sessions.map((session) => (
                                <div>
                                    <button className="bg-[#D9D9D9] rounded-md px-16 py-4 mt-6">
                                        {session.time}
                                    </button>
                                </div>
                            ))}
                        </div>
                        <div className="bg-[#D9D9D9] col-span-5 w-[70%] rounded-xl p-10 relative justify-items-center">
                            <img src={movie.img} className="rounded-md max-h-fit"/>
                            <p className="text-black font-bold m-5">{movie.time} / {movie.category}</p>
                               <p className="text-black font-bold">{movie.d}</p>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}