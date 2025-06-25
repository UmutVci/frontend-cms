import { useNavigate } from "react-router-dom";
import useAuth from "../store/useAuth";
import { useState } from "react";

export default function LoginPage() {
    const { setUser, setRole } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        if (email && password) {

            const role = email === "admin@cms.com" ? "admin" : "clerk";

            setUser({ name: email });
            setRole(role);

            navigate(role === "admin" ? "/admin" : "/clerk");
        }
    };

    return (
        <div className="login h-screen font-[Poppins]">
            <div className="bg-[#400505] h-[10%] flex items-center">
                <h1 className="text-white font-normal ml-5 sm:text-xl md:text-2xl lg:text-3xl">Cinema Management System</h1>
            </div>
            <hr />
            <div className="bg-[#202123] h-screen flex items-center justify-center">

                <div className="form  bg-[#4B4A4A] pt-10 pb-16 pl-20 pr-20 mb-10 rounded-md mb-52">
                    <div className="loginTitle justify-center flex p-5 sm:text-lg md:text-xl lg:text-2xl">
                        <h2 className="text-white">Login</h2>
                    </div>
                    <hr />
                    <div className="loginForm px-10 pt-6">
                        <form className="w-80">
                            <input
                                type="text"
                                placeholder="Username"
                                required
                                className="block w-full mb-4 p-2 rounded"
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                required
                                className="block w-full mb-4 p-2 rounded"
                            />
                            <div className="inline-flex items-center">
                                    <input type="checkbox"
                                           className=" checked:bg-white
                                           h-5 w-5
                                           cursor-pointer transition-all"
                                           id="check"/>
                                <label className="text-[#8C8C8D] ml-3">Remember Me</label>
                            </div>
                            <div className="flex justify-center mt-6">
                                <button type="submit"
                                        className="bg-[#400505] text-white py-3 px-28 rounded-xl">SIGN IN
                                </button>
                            </div>
                        </form>
                    </div>

                </div>

                <div className="footer">

                </div>
            </div>
        </div>
    );
}
