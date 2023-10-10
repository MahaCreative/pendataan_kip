import { usePage } from "@inertiajs/react";
import clsx from "clsx";
import React, { useState } from "react";
import GrafikFakultas from "@/Components/GrafikFakultas";
import GrafikProdi from "@/Components/GrafikProdi";

export default function DataJumlah() {
    const { dataPro } = usePage().props;
    const { dataFak } = usePage().props;
    const [menuStatus, setMenuStatus] = useState("perFakultas");

    return (
        <div className="text-white">
            <div className="relative mx-4 px-4 mt-8">
                <h3 className="font-mono font-bold text-2xl text-white">
                    Grafik Penerima KIP per Fakultas
                </h3>
                <div className="rounded-mg flex">
                    <button
                        onClick={() => setMenuStatus("perFakultas")}
                        className={clsx(
                            menuStatus == "perFakultas"
                                ? "bg-white text-gray-950"
                                : "",
                            "py-2 px-4 rounded-lg shadow-md shadow-gray-300/50 active:bg-white active:text-gray-950"
                        )}
                    >
                        Per Fakultas
                    </button>
                    <button
                        onClick={() => setMenuStatus("perProdi")}
                        className={clsx(
                            menuStatus == "perProdi"
                                ? "bg-white text-gray-950"
                                : "",
                            "py-2 px-4 rounded-lg shadow-md shadow-gray-300/50 active:bg-white active:text-gray-950"
                        )}
                    >
                        Per Prodi
                    </button>
                </div>
                <div className="relative backdrop-blur-md rounded-md py-4 px-4 mx-4 my-4 flex">
                    <div
                        className={clsx(
                            menuStatus == "perFakultas"
                                ? "translate-x-0"
                                : "translate-x-full",
                            "absolute top-0 left-0 w-full transition-all duration-300 ease-in"
                        )}
                    >
                        <GrafikFakultas data={dataFak} />
                    </div>
                    <div
                        className={clsx(
                            menuStatus == "perProdi"
                                ? "translate-x-0"
                                : "translate-x-full",
                            "absolute top-0 left-0 w-full transition-all duration-300 ease-in"
                        )}
                    >
                        <GrafikProdi data={dataPro} />
                    </div>
                </div>
                <div></div>
            </div>
            <div className="relative mx-4 px-4 mt-[26vh] bg-slate-950/50 backdrop-blur-sm py-2 rounded-md shadow-md shadow-white/30">
                <h3 className="font-mono font-bold text-2xl ">
                    Total Penerima KIP per Fakultas
                </h3>
                <div className="grid grid-cols-2 gap-2 max-h-[40vh] overflow-auto">
                    {dataFak.map((item, key) =>
                        dataFak.length % 2 !== 0 ? (
                            <div
                                key={key}
                                className={clsx(
                                    key + 1 == dataFak.length
                                        ? "col-span-2"
                                        : "",
                                    "my-2 mx-4 bg-2 flex items-center gap-5"
                                )}
                            >
                                <img
                                    loading="lazy"
                                    className="w-24"
                                    src={"./storage/" + item.logo}
                                    alt=""
                                />
                                <div
                                    className={clsx(
                                        key + 1 == dataFak.length
                                            ? "w-full"
                                            : "w-1/2",
                                        "capitalize  flex flex-col justify-center items-center"
                                    )}
                                >
                                    <h3 className="text-white font-bold text-4xl">
                                        {item.jumlah_mahasiswa}
                                    </h3>
                                    <p className="text-white font-bold text-xl text-center">
                                        {item.fakultas}
                                    </p>
                                </div>
                            </div>
                        ) : (
                            <div
                                key={key}
                                className={clsx(
                                    "my-2 mx-4 bg-2 flex items-center gap-5"
                                )}
                            >
                                <img
                                    loading="lazy"
                                    className="w-24"
                                    src={"./storage/" + item.logo}
                                    alt=""
                                />
                                <div className="capitalize w-1/2 flex flex-col justify-center items-center">
                                    <h3 className="text-white font-bold text-4xl">
                                        {item.jumlah_mahasiswa}
                                    </h3>
                                    <p className="text-white font-bold text-xl text-center">
                                        {item.fakultas}
                                    </p>
                                </div>
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
    );
}
