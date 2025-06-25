export default function MovieRow({ id, name, imageUrl }) {
    return (
        <div className="w-[211px] h-96 rounded-2xl bg-[#400505] text-[#8C8C8D] flex flex-col justify-end items-center">
            {/* Resim kutusu */}
            <div className="bg-[#8C8C8D] w-48 h-80 my-5 rounded-2xl overflow-hidden">
                <img
                    src={imageUrl}
                    alt={name}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Başlık kutusu */}
            <div className="flex items-center justify-center bg-[#D9D9D9] rounded-3xl w-[180px] my-3 h-10 font-bold text-black">
                {name}
            </div>
        </div>
    );
}
