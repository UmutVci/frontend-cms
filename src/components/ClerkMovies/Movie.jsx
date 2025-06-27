export default function MovieRow({ movie }) {
    return (
        <div className="w-[211px] h-96 rounded-2xl bg-[#400505] text-[#8C8C8D] flex flex-col justify-end items-center">
            <div className="bg-[#8C8C8D] w-48 h-80 my-5 rounded-2xl overflow-hidden">
                <img
                    src={movie.imgUrl}
                    alt={movie.title}
                    className="w-full h-full object-cover"
                />
            </div>

            <a href="">
                <div className="flex items-center justify-center bg-[#D9D9D9] rounded-3xl w-[180px] my-3 h-10 font-bold text-black">
                    {movie.title}
                </div>
            </a>
        </div>
    );
}
