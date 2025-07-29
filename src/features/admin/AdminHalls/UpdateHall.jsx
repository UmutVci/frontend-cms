import Sidebar from "../AdminLayout/Sidebar";
import Header from "../AdminLayout/Header";
import React, { useState } from "react";
import {useLocation, useNavigate} from "react-router-dom";
import HallService from "../../../services/HallService";

export default function UpdateHall() {

    const location = useLocation();
    const hall = location.state?.hall;

    const [name, setName] = useState(hall.name);
    const [capacity, setCapacity] = useState(hall.capacity);
    const [type, setType] = useState(hall.type);
    const navigate = useNavigate();

    const handleInput = async (e) => {
        e.preventDefault()
        const thishall = {name: name, capacity: capacity, type: type}
        const success = await HallService.update(hall.id, thishall)
        if(success){
            navigate("/admin/halls");
        }
    }

    return (
                <main className="inner-container relative flex-1 p-10 bg-[#D9D9D9]">
                    <div className="bg-white w-[75%] h-full mx-3 my-4 rounded-xl p-6 overflow-auto">
                        <form className="p-8 space-y-4" onSubmit={handleInput}>
                            <label className="block text-black font-semibold">Hall Name</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="border-2 border-gray-300 rounded-md h-8 w-full"
                                required
                            />
                            <label className="block text-black font-semibold">Hall Capacity</label>
                            <input
                                type="text"
                                value={capacity}
                                onChange={(e) => setCapacity(e.target.value)}
                                className="border-2 border-gray-300 rounded-md h-8 w-full"
                                required
                            />
                            <label className="block text-black font-semibold">Hall Type</label>
                            <input
                                type="text"
                                value={type}
                                onChange={(e) => setType(e.target.value)}
                                className="border-2 border-gray-300 rounded-md h-8 w-full"
                                required
                            />
                            <button
                                type="submit"
                                className="bg-[#400505] text-white py-2 px-6 rounded-md"
                            >
                                Update Hall
                            </button>
                        </form>
                    </div>
                </main>
    );
}
