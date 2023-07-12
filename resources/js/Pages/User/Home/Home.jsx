import DataJumlah from "@/Components/DataJumlah";
import GrafikFakultas from "@/Components/GrafikFakultas";
import GrafikProdi from "@/Components/GrafikProdi";

import User from "@/Layouts/User";
import { router } from "@inertiajs/react";
import { debounce } from "@mui/material";

import clsx from "clsx";
import React, { useCallback, useEffect, useState } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Marquee from "react-fast-marquee";
export default function Home(props) {
    const { data: mahasiswa } = props.mahasiswa;
    const [params, setParams] = useState({ tambah: 0, search: "" });
    const countMahasiswa = props.countMahasiswa;
    console.log(countMahasiswa);
    const changeHandler = (e) => {
        setParams({ ...params, [e.target.name]: e.target.value });
    };
    const reload = useCallback(
        debounce((query) => {
            router.get(
                route("user.home"),
                query,
                {
                    preserveState: true,
                    preserveScroll: "",
                },
                300
            );
        }),
        []
    );
    useEffect(() => reload(params), [params]);
    return (
        <div className="h-[100vh] overflow-y-auto">
            <DataJumlah />
            <div className="my-4 mx-4 px-4 bg-slate-950/50 backdrop-blur-sm py-2 rounded-md shadow-md shadow-white/30">
                <h3 className="font-mono text-2xl font-bold">
                    Daftar Penerima KIP
                </h3>
                <Marquee>
                    <p className="text-xl">
                        Silahkan Cek Nama Anda, Apakah Anda Telah Terdaftar
                        Sebagai Penerima KIP
                    </p>
                </Marquee>
                <div className="flex items-end justify-end">
                    <input
                        onChange={changeHandler}
                        type="text"
                        name="search"
                        className="input px-2 py-4 text-xl accent-white   bg-white/50 text-white border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                        placeholder="Cari"
                    />
                </div>
                <div className="my-2">
                    {mahasiswa.length > 0 ? (
                        mahasiswa.map((item, key) => (
                            <div
                                key={key}
                                className="my-2 shadow-sm shadow-white/40 py-2 px-3 odd:hover:bg-slate-900/50 even:hover:bg-slate-800/50 "
                            >
                                <div className="flex gap-8 items-start">
                                    <div className="w-24 p-2 bg-white/80 rounded-full overflow-hidden ">
                                        <img
                                            loading="lazy"
                                            className="w-28 content-center object-cover object-center"
                                            src={item.foto}
                                        />
                                    </div>
                                    <div className="capitalize">
                                        <p className="text-2xl">{item.nama}</p>
                                        <p className="text-2xl">{item.nim}</p>
                                        <p className="text-2xl">
                                            {item.angkatan}
                                        </p>
                                        <p className="text-2xl">
                                            Fakultas {item.fakultas.fakultas}
                                        </p>
                                        <p className="text-2xl">
                                            Program Studi {item.prodi.prodi}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="shadow-sm shadow-white/40 py-2 px-3 text-center">
                            <p className="texy-2xl">Tidak Ada Data</p>
                        </div>
                    )}
                </div>
                <div className="flex items-center gap-3 px-4 my-6 mb-28">
                    <div className="w-full h-1 border border-dotted border-spacing-5  border-white"></div>
                    <div className="flex gap-3 items-center">
                        {params.tambah <= countMahasiswa && (
                            <div
                                onClick={() =>
                                    setParams({
                                        ...params,
                                        tambah: params.tambah + 10,
                                    })
                                }
                                className="active:bg-white/50 active:text-slate-950 text-white text-2xl flex items-center justify-center text-center border border-dotted border-white rounded-full w-12 h-12 p-2 rotate-180"
                            >
                                <ArrowUpwardIcon
                                    color="inherit"
                                    fontSize="inherit"
                                />
                            </div>
                        )}
                        {params.tambah > 0 && (
                            <div
                                onClick={() =>
                                    setParams({
                                        ...params,
                                        tambah: params.tambah - 10,
                                    })
                                }
                                className="active:bg-white/50 active:text-slate-950 text-white text-2xl flex items-center justify-center text-center border border-dotted border-white rounded-full w-12 h-12 p-2"
                            >
                                <ArrowUpwardIcon
                                    color="inherit"
                                    fontSize="inherit"
                                />
                            </div>
                        )}
                    </div>
                    <div className="w-full h-1 border border-dotted border-spacing-5  border-white"></div>
                </div>
            </div>
        </div>
    );
}
Home.layout = (page) => <User children={page} />;
