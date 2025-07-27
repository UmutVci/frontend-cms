import { useNavigate } from "react-router-dom";

export default function Movie({ movie }) {
    const navigate = useNavigate();
    const url = "/clerk/movies/" + movie.id + "/sessions";

    return (
        <div
            onClick={() => navigate(url)}
            className="flex-shrink-0 w-[220px] h-[480px] rounded-2xl bg-[#400505] text-[#8C8C8D] flex flex-col items-center p-3 hover:cursor-pointer transition-transform hover:scale-105"
        >
            <img
                src={movie.imgUrl}
                alt={movie.title}
                className="w-full h-[70%] object-cover rounded-lg"
            />

            <div className="w-full mt-2 text-center text-white">
                <p className="font-bold truncate">{movie.title}</p>
                <p className="text-sm">{movie.duration} dk</p>
                <p className="text-sm">{movie.genre}</p>
            </div>

            <button
                className="bg-[#D9D9D9] mt-auto px-4 py-2 rounded-full font-semibold text-black"
            >
                Sessions
            </button>
        </div>
    );
}
