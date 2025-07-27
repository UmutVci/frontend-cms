import Sidebar from "../../../components/Sidebar";
import Header from "../../../components/Header";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import TicketClerkService from "../../../services/TicketClerkService";

export default function ClerkSettings() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchClerk = async () => {
            try {
                const response = await TicketClerkService.getById(id);
                setEmail(response.email);
                setPassword(""); // şifreyi boş bırak (hash'i gösterme)
            } catch (err) {
                console.error("Ticket clerk yüklenemedi:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchClerk();
    }, [id]);

    const handleInput = async (e) => {
        e.preventDefault();
        const updatedClerk = { email, password: password || undefined };
        const success = await TicketClerkService.update(id, updatedClerk);
        if (success) {
            navigate("/ticket-clerks");
        }
    };

    if (loading) {
        return <div className="p-10">Loading...</div>;
    }

    return (
        <div className="flex h-screen overflow-hidden">
            <Sidebar />
            <div className="flex flex-col flex-1 overflow-y-auto">
                <Header title="Update Ticket Clerk" />
                <main className="inner-container relative flex-1 p-10 bg-[#D9D9D9]">
                    <div className="bg-white w-[75%] h-full mx-3 my-4 rounded-xl p-6 overflow-auto">
                        <form className="p-8 space-y-4" onSubmit={handleInput}>
                            <label className="block text-black font-semibold">Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="border-2 border-gray-300 rounded-md h-8 w-full"
                                required
                            />
                            <label className="block text-black font-semibold">
                                Password (leave blank to keep current)
                            </label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="border-2 border-gray-300 rounded-md h-8 w-full"
                            />
                            <button
                                type="submit"
                                className="bg-[#400505] text-white py-2 px-6 rounded-md"
                            >
                                Update Clerk
                            </button>
                        </form>
                    </div>
                </main>
            </div>
        </div>
    );
}
