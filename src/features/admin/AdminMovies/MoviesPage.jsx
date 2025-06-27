import React, {useState} from 'react'
import Sidebar from '../../../components/Sidebar'
import Header  from '../../../components/Header'
import Pagination from '../../../components/Pagination'
import SearchBar from "../../../components/AdminCustomersSearchBar";
import AdminMoviesTable from "../../../components/AdminMovies/AdminMoviesTable";

export default function MoviesPage() {
    const movies = [
        { id: 1, name: "Inception",    imageUrl: "/inception.jpg" },
        { id: 2, name: "Interstellar", imageUrl: "/interstellar.jpg" },
        { id: 3, name: "Memento",      imageUrl: "/memento.jpg" },
    ];
    const itemsPerPage = 6
    const pageCount    = Math.ceil(movies.length / itemsPerPage)
    const [currentPage, setCurrentPage] = useState(1)

    return (
        <div className="h-screen flex font-[Poppins]">
            <Sidebar />

            <div className="flex-1 flex flex-col">
                <Header title="Movies"/>

                <main className="inner-container flex-1 p-10 bg-[#D9D9D9]">
                    <div className="bg-white w-full h-full mx-3 my-4 rounded-xl p-6 overflow-auto">
                        <SearchBar />
                        <div className="flex items-center justify-between mb-6">
                            <a href="/admin/addMovie"><button className="bg-[#202123] text-white h-8 w-36 rounded-xl flex items-center justify-center">
                                <span className="text-l">+ Add Movie</span>
                            </button></a>
                            <button className="ml-auto flex items-center h-8 w-36 rounded-3xl border-2 border-gray-400 justify-center">
                                <span className="text-l text-gray-400 mr-2">Sort By:</span>
                                <span className="text-l">ID</span>
                            </button>
                        </div>
                        <AdminMoviesTable/>
                        <div className="mt-auto">
                        <Pagination
                            currentPage={currentPage}
                            pageCount={pageCount}
                            onPageChange={setCurrentPage}
                        />
                    </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
