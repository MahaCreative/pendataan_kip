import User from "@/Layouts/User";
import clsx from "clsx";
import React, { useState } from "react";
import FormAdmin from "./FormAdmin";
import FormUser from "./FormUser";

export default function Login() {
    const [menuStatus, setMenuStatus] = useState("login-admin");
    return (
        <div className="px-4 py-6 h-[90vh] w-full flex justify-center items-center">
            <div
                className={clsx(
                    menuStatus == "login-admin" ? "h-[50vw]" : "h-[65vw]",
                    "px-8 py-2 w-[85vw]  rounded-lg bg-white/50 shadow-sm shadow-gray-300/50 transition-all duration-300 ease-in-out"
                )}
            >
                <div className="relative">
                    <div className="rounded-mg flex">
                        <button
                            onClick={() => setMenuStatus("login-admin")}
                            className={clsx(
                                menuStatus == "login-admin"
                                    ? "bg-white text-gray-950"
                                    : "bg-slate-950",
                                "py-2 px-4 rounded-lg shadow-md shadow-gray-300/50 active:bg-white active:text-gray-950"
                            )}
                        >
                            Login Admin
                        </button>
                        <button
                            onClick={() => setMenuStatus("login-mahasiswa")}
                            className={clsx(
                                menuStatus == "login-mahasiswa"
                                    ? "bg-white text-gray-950"
                                    : "bg-slate-950",
                                "py-2 px-4 rounded-lg shadow-md shadow-gray-300/50 active:bg-white active:text-gray-950"
                            )}
                        >
                            Login Mahasiswa
                        </button>
                    </div>
                    <div className="relative">
                        <div
                            className={clsx(
                                menuStatus == "login-admin"
                                    ? "translate-x-0"
                                    : "translate-x-[9999px]",
                                "absolute left-0 top-0 transition-all duration-300 ease-in-out"
                            )}
                        >
                            <p className="text-slate-950 py-2 text-xl font-light font-mono">
                                Halo Admin, Silahkan masukkan email dan password
                                anda untuk login ke dashboard
                            </p>
                            <div>
                                <FormAdmin />
                            </div>
                            <p className="text-red-500 italic">
                                *NOTE Hanya Untuk Operator
                            </p>
                        </div>
                        <div
                            className={clsx(
                                menuStatus == "login-mahasiswa"
                                    ? "translate-x-0"
                                    : "translate-x-[9999px]",
                                "absolute left-0 top-0 transition-all duration-300 ease-in-out"
                            )}
                        >
                            <p className="text-slate-950 py-2 text-xl font-light font-mono">
                                Halo Mahasiswa, Silahkan masukkan email dan
                                password anda untuk login ke dashboard
                            </p>
                            <div>
                                <FormUser />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
Login.layout = (page) => <User children={page} />;
