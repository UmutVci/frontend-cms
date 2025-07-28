import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../lib/axios";

function generateRandomPassword(length = 10) {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%";
    let pass = "";
    for (let i = 0; i < length; i++) {
        pass += chars[Math.floor(Math.random() * chars.length)];
    }
    return pass;
}

export default function AddTicketClerk() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(generateRandomPassword(10));
    const [photo, setPhoto] = useState(null);
    const [preview, setPreview] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    // İsim değiştikçe e-mail güncelle
    useEffect(() => {
        const safe = name.trim().toLowerCase().replace(/\s+/g, ".");
        setEmail(safe ? `${safe}@cms-clerk.com` : "");
    }, [name]);

    // Fotoğraf seçilince preview oluştur
    useEffect(() => {
        if (photo) {
            const objectUrl = URL.createObjectURL(photo);
            setPreview(objectUrl);
            return () => URL.revokeObjectURL(objectUrl);
        } else {
            setPreview("");
        }
    }, [photo]);

    const handlePhotoChange = (e) => {
        if (e.target.files[0]) setPhoto(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        // Fotoğrafı base64'e çevir (örnek)
        let photoUrl = "";
        if (photo) {
            const reader = new FileReader();
            reader.onloadend = async () => {
                photoUrl = reader.result;
                await submitClerk(photoUrl);
            };
            reader.readAsDataURL(photo);
        } else {
            await submitClerk(photoUrl);
        }
    };


    const submitClerk = async (photoUrl) => {
        const payload = {
            name,
            email,
            password,
            photo: photoUrl
        };
        try {
            await api.post("/ticket-clerks", payload); // <-- GERÇEK POST!
            alert(`Clerk eklendi!\n\nEmail: ${payload.email}\nPassword: ${payload.password}`);
            navigate("/admin/ticket-clerks");
        } catch (err) {
            alert("Bir hata oluştu: " + err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="inner-container flex-1 p-10 bg-[#D9D9D9] min-h-screen">
            <div className="bg-white w-[75%] mx-auto my-4 rounded-xl p-10">
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <h2 className="text-xl font-bold text-center mb-6">Add Ticket Clerk</h2>
                    <div>
                        <label className="block font-semibold">Full Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            className="border rounded w-full p-3"
                            required
                        />
                    </div>

                    <div>
                        <label className="block font-semibold">E-mail (auto)</label>
                        <input
                            type="email"
                            value={email}
                            readOnly
                            disabled
                            className="border rounded w-full p-3 bg-gray-100 text-gray-500"
                        />
                    </div>

                    <div>
                        <label className="block font-semibold">Password (auto)</label>
                        <input
                            type="text"
                            value={password}
                            readOnly
                            disabled
                            className="border rounded w-full p-3 bg-gray-100 text-gray-500"
                        />
                    </div>

                    <div>
                        <label className="block font-semibold">Photo</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handlePhotoChange}
                            className="w-full"
                        />
                        {preview &&
                            <img src={preview} alt="Preview" className="mt-4 rounded-lg w-28 h-28 object-cover" />
                        }
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-[#400505] text-white py-3 px-6 rounded-md w-full text-lg font-semibold"
                    >
                        {loading ? "Adding..." : "Add Ticket Clerk"}
                    </button>
                </form>
            </div>
        </main>
    );
}
