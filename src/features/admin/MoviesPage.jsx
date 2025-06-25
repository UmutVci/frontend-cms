import React from 'react'
import Sidebar from '../../components/Sidebar'
import Header  from '../../components/Header'

export default function MoviesPage() {
    const movies = [
        { id: 1, name: "Inception",    imageUrl: "/inception.jpg" },
        { id: 2, name: "Interstellar", imageUrl: "/interstellar.jpg" },
        { id: 3, name: "Memento",      imageUrl: "/memento.jpg" },
    ];
    return (
        <div className="h-screen flex font-[Poppins]">
            <Sidebar />

            <div className="flex-1 flex flex-col">
                <Header />

                <main className="flex-1 p-10 bg-[#D9D9D9]">
                    <div className="bg-white w-full h-full mx-10 my-10 rounded-xl p-6 overflow-auto">
                        {/* Butonlar */}
                        <div className="flex items-center justify-between mb-6">
                            <button className="bg-[#202123] text-white h-12 w-48 rounded-xl flex items-center justify-center">
                                <span className="text-2xl">+ Add Movie</span>
                            </button>
                            <button className="ml-auto flex items-center h-12 w-48 rounded-3xl border-2 border-gray-400 justify-center">
                                <span className="text-lg text-gray-400 mr-2">Sort By:</span>
                                <span className="text-2xl">ID</span>
                            </button>
                        </div>

                        <div className="grid grid-cols-3 gap-4 border-b border-gray-300 pb-2 font-semibold">
                            <div>Movie ID</div>
                            <div>Movie Name</div>
                            <div>Movie Image</div>
                        </div>

                        <div className="grid grid-cols-3 gap-4 mt-4">
                            {movies.map((m) => (
                                <React.Fragment key={m.id}>
                                    <div className="py-2">{m.id}</div>
                                    <div className="py-2">{m.name}</div>
                                    <div className="py-2">{m.imageUrl}</div>
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
