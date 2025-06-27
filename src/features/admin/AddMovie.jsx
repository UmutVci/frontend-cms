import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import React, { useEffect, useState } from "react";
import Select from "react-select";

export default function AddMovieForm() {
    const [movie, setMovie] = useState("");
    const [sessions, setSessions] = useState([]);
    const [selectedSessions, setSelectedSessions] = useState([]); // <-- array oldu
    const sessionOptions = sessions.map((session) => ({
        value: session.id,
        label: `${session.startTime} - Hall ID: ${session.hall}`,
    }));

    useEffect(() => {
        fetch("http://localhost:8080/api/sessions")
            .then((res) => res.json())
            .then((data) => {
                console.log("Fetched sessions:", data);
                setSessions(data._embedded?.domainSessionList || []);
            })
            .catch((err) => console.error("Failed to fetch sessions:", err));
    }, []);


    const handleSessionChange = (e) => {
        const selectedOptions = Array.from(e.target.selectedOptions).map(
            (option) => option.value
        );
        setSelectedSessions(selectedOptions);
    };

    return (
        <div className="flex h-screen overflow-hidden">
            <Sidebar />
            <div className="flex flex-col flex-1 overflow-y-auto">
                <Header title="Add Movie"/>
                <main className="inner-container relative flex-1 p-10 bg-[#D9D9D9]">
                    <div className="bg-white w-[75%] h-full mx-3 my-4 rounded-xl p-6 overflow-auto">
        <form className="p-8 space-y-4">
            <label className="block text-black font-semibold">Movie Name</label>
            <input
                type="text"
                value={movie}
                onChange={(e) => setMovie(e.target.value)}
                className="border-2 border-gray-300 rounded-md h-8 w-full"
                required
            />

            <label className="block text-black font-semibold">Image URL</label>
            <input
                type="text"
                className="border-1 border-gray-300 rounded-md h-8 w-full"
                required
            />

            <label className="block text-black font-semibold">Select Sessions</label>
            <Select
                isMulti
                className="basic-multi-select"
                classNamePrefix="select"
                options={sessions.map((session) => ({
                    value: session.id,
                    label: `${session.startTime} - Hall ID: ${session.hall}`,
                }))}
                value={sessions
                    .filter((s) => selectedSessions.includes(s.id))
                    .map((s) => ({
                        value: s.id,
                        label: `${s.startTime} - Hall ID: ${s.hall}`,
                    }))
                }
                onChange={(selected) =>
                    setSelectedSessions(selected.map((option) => option.value))
                }
            />

            <button
                type="submit"
                className="bg-[#400505] text-white py-2 px-6 rounded-md"
            >
                Add Movie
            </button>
        </form>
                    </div>
                </main>
            </div>
        </div>

    );
}
