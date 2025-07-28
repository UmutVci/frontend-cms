import Sidebar from "../ClerkLayout/ClerkSidebar";
import Header from "../ClerkLayout/ClerkHeader";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TicketClerkService from "../../../services/TicketClerkService";
import useAuth from '../../auth/useAuth';

export default function ClerkSettings() {
    const navigate = useNavigate();
    const user = useAuth((state) => state.user);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        if (user?.email) {
            setEmail(user.email);
        }
    }, [user?.email]);


    const handleInput = async (e) => {
        e.preventDefault();
        const updatedClerk = { email, password: password || undefined };
        const success = await TicketClerkService.update(user.id, updatedClerk);
        if (success) {
            navigate("/clerk");
        }
    };
    return (
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
    );
}
