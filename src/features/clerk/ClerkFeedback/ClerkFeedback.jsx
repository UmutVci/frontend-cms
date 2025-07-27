import ClerkSidebar from "../ClerkLayout/ClerkSidebar";
import Header from "../../admin/AdminLayout/Header";
import React, {useState} from "react";

export default function ClerkFeedback(){
    const [clientName, setClientName] = useState("");
    const [movie, setMovie] = useState("");
    const [hall, setHall] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = () =>{

    }
    return (
                <main className="inner-container relative flex-1 p-10 bg-[#D9D9D9]">
                    <div className="bg-white  w-[75%] h-full mx-3 my-4 rounded-xl p-6 overflow-auto">
                        <form className="p-8" onSubmit={handleSubmit}>
                            <label className="block text-black bold">Client Name</label>
                            <input type="text"
                                   value={clientName}
                                   onChange={(e) => setClientName(e.target.value)}
                                   className="border-2 border-gray-300 rounded-md h-8 w-full mt-0.5"
                                   required/>
                            <label className="block text-black mt-8">Movie</label>
                            <input type="text"
                                   value={movie}
                                   onChange={(e) => setMovie(e.target.value)}
                                   className="border-2 border-gray-300 rounded-md h-8 w-full  mt-0.5"
                                   required/>
                            <label className="block text-black mt-8">Hall</label>
                            <input type="text"
                                   value={hall}
                                   onChange={(e) => setHall(e.target.value)}
                                   className="border-2 border-gray-300 rounded-md h-8 w-full  mt-0.5"
                                   required/>
                            <label className="block text-black mt-8">Description</label>
                            <textarea type="text"
                                   value={description}
                                      rows="3"
                                   onChange={(e) => setDescription(e.target.value)}
                                   className="border-2 border-gray-300 rounded-md h-24 w-full mt-0.5"
                                   required/>
                                <button type="submit" className="mt-12 bg-[#400505] text-white py-2 px-16 rounded-xl">Submit</button>
                        </form>
                    </div>
                </main>
    )
}