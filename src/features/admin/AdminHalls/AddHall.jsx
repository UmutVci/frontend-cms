import Sidebar from "../AdminLayout/Sidebar";
import Header from "../AdminLayout/Header";
import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import HallService from "../../../services/HallService";

export default function AddHallForm() {
    const [name, setName] = useState("");
    const [capacity, setCapacity] = useState("");
    const [type, setType] = useState("");
    const navigate = useNavigate();

    const handleInput = async (e) => {
        e.preventDefault()
        const thishall = {name: name, capacity: parseInt(capacity), type: type}
        const success = await HallService.create(thishall)
        if(success){
            navigate("/admin/halls");
        }
    }

    return (
        <div className="bg-white w-full md:w-3/4 mx-3 my-4 rounded-xl p-6 overflow-auto">
            <h1 className="text-2xl font-normal mb-6">Add Hall</h1>

            <form className="space-y-4" onSubmit={handleInput}>
                <div>
                    <label className="block font-semibold mb-1">Hall Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="w-full border-2 border-gray-300 rounded-md h-8 px-2"
                        required
                    />
                </div>

                <div>
                    <label className="block font-semibold mb-1">Capacity</label>
                    <input
                        type="text"
                        value={capacity}
                        onChange={e => setCapacity(e.target.value)}
                        className="w-full border-2 border-gray-300 rounded-md h-8 px-2"
                        required
                    />
                </div>

                <div>
                    <label className="block font-semibold mb-1">Type</label>
                    <input
                        type="text"
                        value={type}
                        onChange={e => setType(e.target.value)}
                        className="w-full border-2 border-gray-300 rounded-md h-8 px-2"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="bg-[#400505] text-white py-2 px-6 rounded-md"
                >
                    Add Hall
                </button>
            </form>
        </div>
    );
}
