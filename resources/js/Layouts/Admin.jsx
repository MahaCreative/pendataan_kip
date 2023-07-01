import { Link } from "@inertiajs/react";
import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";
import SchoolIcon from "@mui/icons-material/School";
import ComputerIcon from "@mui/icons-material/Computer";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
export default function Admin({ children }) {
    const menuRef = useRef(null);
    const [menuOpen, setMenuOpen] = useState(false);
    console.log(route().current("dashboard"));
    const dropdownOpen = () => {
        setMenuOpen(!menuOpen);
    };
    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setMenuOpen(false);
        }
    };
    useEffect(() => {
        window.addEventListener("click", handleClickOutside);
        return () => {
            window.removeEventListener("click", handleClickOutside);
        };
    }, []);
    return (
        <div className="">
            {/* Header */}
            <div className="fixed top-0 left-0 w-full bg-slate-950">
                <div className="flex justify-between items-center text-white  px-4">
                    <h1 className="font-bold">Pendataan Penerima KIP</h1>
                    <div
                        ref={menuRef}
                        className={clsx(
                            menuOpen ? "bg-white" : "",
                            " relative px-4 py-2 duration-300 transition-all"
                        )}
                        onClick={dropdownOpen}
                    >
                        <img
                            src="./img/defalt_user.jpg"
                            alt=""
                            className="h-10"
                        />
                        <div
                            className={clsx(
                                menuOpen
                                    ? "translate-y-2"
                                    : "-translate-y-6 collapse ",
                                "absolute rounded-md w-[80px] bg-slate-800 top-10 right-0 px-3 transition-all duration-200"
                            )}
                        >
                            <Link className="block my-1 border-b">
                                Setting Profile
                            </Link>
                            <Link className="block my-1">LOGOUT</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative top-16">{children}</div>
            {/* Footer */}
            <div className="fixed bottom-0 left-0 w-full bg-slate-950">
                <div className="flex justify-between px-4">
                    <Link
                        href={route("dashboard")}
                        className={clsx(
                            route().current("dashboard")
                                ? "text-slate-900 py-2 bg-white "
                                : "text-red-500",
                            "flex flex-col items-center font-bold"
                        )}
                    >
                        <ComputerIcon color="inherit" />
                        <p>Dashboard</p>
                    </Link>
                    <Link
                        href={route("fakultas")}
                        className={clsx(
                            route().current("fakultas")
                                ? "text-slate-900 py-2 bg-white "
                                : "text-red-500",
                            "flex flex-col items-center font-bold"
                        )}
                    >
                        <ComputerIcon color="inherit" />
                        <p>fakultas</p>
                    </Link>
                    <Link
                        href={route("prodi")}
                        className={clsx(
                            route().current("prodi")
                                ? "text-slate-900 py-2 bg-white "
                                : "text-red-500",
                            "flex flex-col items-center font-bold"
                        )}
                    >
                        <ComputerIcon color="inherit" />
                        <p>prodi</p>
                    </Link>
                    <Link
                        href={route("mahasiswa")}
                        className={clsx(
                            route().current("mahasiswa")
                                ? "text-slate-900 py-2 bg-white "
                                : "text-red-500",
                            "flex flex-col items-center font-bold"
                        )}
                    >
                        <ComputerIcon color="inherit" />
                        <p>mahasiswa</p>
                    </Link>
                    <Link
                        href={route("user")}
                        className={clsx(
                            route().current("user")
                                ? "text-slate-900 py-2 bg-white "
                                : "text-red-500",
                            "flex flex-col items-center font-bold"
                        )}
                    >
                        <ComputerIcon color="inherit" />
                        <p>user</p>
                    </Link>
                </div>
            </div>
        </div>
    );
}
