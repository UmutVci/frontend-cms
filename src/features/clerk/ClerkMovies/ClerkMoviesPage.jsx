import { useEffect, useRef, useState } from "react";
import Movie from "../../../components/ClerkMovies/Movie";
import ClerkMoviesService from "../../../services/MovieService";

export default function ClerkMoviesPage() {
    const [movies, setMovies] = useState([]);
    const scrollRef = useRef(null);
    const [showLeft, setShowLeft] = useState(false);
    const [showRight, setShowRight] = useState(false);

    useEffect(() => {
        ClerkMoviesService.getAll()
            .then(data => setMovies(data))
            .catch(error => console.log("Data couldn't fetch: " + error));
    }, []);

    useEffect(() => {
        checkScrollButtons();
        window.addEventListener('resize', checkScrollButtons);
        return () => window.removeEventListener('resize', checkScrollButtons);
    }, [movies]);

    const checkScrollButtons = () => {
        const container = scrollRef.current;
        if (!container) return;
        setShowLeft(container.scrollLeft > 5);
        setShowRight(container.scrollLeft + container.clientWidth < container.scrollWidth - 5);
    };

    const scroll = (direction) => {
        const container = scrollRef.current;
        if (!container) return;
        const scrollAmount = container.clientWidth * 0.8; // neredeyse bir ekran kay
        if (direction === "left") container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        if (direction === "right") container.scrollBy({ left: scrollAmount, behavior: "smooth" });
        setTimeout(checkScrollButtons, 350);
    };

    return (
        <div className="bg-[#400505] p-6 w-full min-w-0 overflow-hidden">
            <h2 className="text-xl font-bold text-white mb-4">Now Playing</h2>
            <div className="relative w-full min-w-0" style={{ minHeight: 500 }}>
                {showLeft && (
                    <button
                        onClick={() => scroll("left")}
                        className="absolute top-1/2 left-2 -translate-y-1/2 bg-black text-white px-3 py-2 rounded z-20 shadow"
                    >←</button>
                )}
                {showRight && (
                    <button
                        onClick={() => scroll("right")}
                        className="absolute top-1/2 right-2 -translate-y-1/2 bg-black text-white px-3 py-2 rounded z-20 shadow"
                    >→</button>
                )}
                <div
                    ref={scrollRef}
                    className="flex gap-8 overflow-x-auto hide-scrollbar px-4 py-2 w-full min-w-0"
                    style={{ scrollBehavior: "smooth" }}
                    onScroll={checkScrollButtons}
                >
                    {movies.map((m) => (
                        <Movie key={m.id} movie={m} />
                    ))}
                </div>
            </div>
        </div>
    );
}
