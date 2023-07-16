import { Link, usePage } from "@inertiajs/react";
import clsx from "clsx";
import React from "react";

export default function User({ children }) {
    const { auth } = usePage().props;
    console.log(auth.user);
    return (
        <div className="relative bg-slate-950 w-full h-screen">
            <div className="absolute left-0 w-full h-screen flex justify-center items-center">
                <img
                    loading="lazy"
                    src="./img/tomakaka.png"
                    alt=""
                    className="w-[50vw]"
                />
            </div>
            <div className="absolute top-0 left-0 w-full h-screen bg-gradient-to-tr from-slate-900/30 to-bg-slate-700/30 max-h-screen backdrop-blur-sm overflow-hidden">
                <div className="relative w-full bg-slate-950 py-4 px-4">
                    <div className="flex justify-between px-4 items-center">
                        <div className="flex items-center gap-3 text-white">
                            <img
                                loading="lazy"
                                src="./storage/img/tomakaka.png"
                                alt=""
                                className="w-[6vw]"
                            />
                            <img
                                loading="lazy"
                                src="./storage/img/fikom.png"
                                alt=""
                                className="w-[6vw]"
                            />
                            <h3 className="font-bold text-3xl font-mono">
                                Universitas Tomakaka
                            </h3>
                        </div>
                        <div className="flex gap-3">
                            <Link
                                href={route("user.home")}
                                className={clsx(
                                    route().current("user.home")
                                        ? "text-slate-900 bg-white"
                                        : "text-white",
                                    " shadow-sm shadow-white/50 rounded-lg py-2 px-4 active:bg-white active:text-slate-950"
                                )}
                            >
                                Home
                            </Link>
                            {auth.user == null ? (
                                <Link
                                    href={route("login")}
                                    className={clsx(
                                        route().current("login")
                                            ? "text-slate-900 bg-white"
                                            : "text-white",
                                        "shadow-sm shadow-white/50 rounded-lg py-2 px-4 active:bg-white active:text-slate-950"
                                    )}
                                >
                                    Login
                                </Link>
                            ) : (
                                <Link
                                    href={route("dashboard")}
                                    className={clsx(
                                        route().current("dashboard")
                                            ? "text-slate-900 bg-white"
                                            : "text-white",
                                        "shadow-sm shadow-white/50 rounded-lg py-2 px-4 active:bg-white active:text-slate-950"
                                    )}
                                >
                                    Dashboard
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
                <div className="relative text-white">{children}</div>
            </div>
        </div>
    );
}
