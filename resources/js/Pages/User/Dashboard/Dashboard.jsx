import UserAuth from "@/Layouts/UserAuth";
import { usePage } from "@inertiajs/react";
import React, { useState } from "react";
import FormDataDiri from "./FormDataDiri";
import PrimaryButton from "@/Components/PrimaryButton";
import { motion } from "framer-motion";
import FormBerkas from "./FormBerkas";
import FormBerkasUpdate from "./FormBerkasUpdate";

export default function Dashboard({ berkas }) {
    const { mahasiswa_login } = usePage().props;
    const [edit, setEdit] = useState(false);
    const [model, setModel] = useState(null);
    const editHandler = () => {
        setModel(mahasiswa_login);
        setEdit(true);
    };

    return (
        <div className="bg-slate-950 max-h-[90vh] overflow-y-auto scrollbar-none">
            {mahasiswa_login.status_data_diri == "belum lengkap" ? (
                <div className="p-4 text-white capitalize m-4 bg-slate-400/50 rounded-lg">
                    Halo {mahasiswa_login.nama}, Selamat Anda Telah Terdaftar
                    Sebagai Penerima KIP. Silahkan Isikan data Diri Anda untuk
                    Proses Lebih Lanjut
                </div>
            ) : (
                <div className="p-4 text-white capitalize m-4 bg-slate-400/50 rounded-lg">
                    Halo {mahasiswa_login.nama}, Selamat Anda Telah Terdaftar
                    Sebagai Penerima KIP.
                </div>
            )}
            {mahasiswa_login.status_data_diri == "belum lengkap" ||
            edit == true ? (
                <motion.div
                    initial={{ x: "100%", opacity: 0 }}
                    animate={{ x: "0%", opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="px-2 w-full"
                >
                    <FormDataDiri
                        model={model}
                        setModel={setModel}
                        setEdit={setEdit}
                    />
                </motion.div>
            ) : (
                <motion.div
                    initial={{ x: "100%", opacity: 0 }}
                    animate={{ x: "0%", opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="p-4 rounded-lg m-4 flex gap-3 bg-slate-400/50 backdrop-blur-sm items-start text-2xl"
                >
                    <div className="w-1/2 h-[30vw] overflow-hidden">
                        <img
                            className="w-full object-contain object-center "
                            src={"./storage/" + mahasiswa_login.foto}
                            alt=""
                        />
                    </div>
                    <div className="text-white capitalize text-3xl">
                        <h1 className="font-bold text-4xl">Data Diri</h1>
                        <p>nama : {mahasiswa_login.nama}</p>
                        <p>nim : {mahasiswa_login.nim}</p>
                        <p>email : {mahasiswa_login.email}</p>
                        <p>angkatan : {mahasiswa_login.angkatan}</p>
                        <p>nama_ayah : {mahasiswa_login.nama_ayah}</p>
                        <p>nama_ibu : {mahasiswa_login.nama_ibu}</p>
                        <p>pekerjaan_ayah : {mahasiswa_login.pekerjaan_ayah}</p>
                        <p>pekerjaan_ibu : {mahasiswa_login.pekerjaan_ibu}</p>
                        <div>
                            <PrimaryButton onClick={editHandler}>
                                Edit Data
                            </PrimaryButton>
                        </div>
                    </div>
                </motion.div>
            )}
            {mahasiswa_login.status_data_diri == "lengkap" ? (
                <div className="max-h[2vh] overflow-y-auto scrollbar-none text-white p-4 rounded-lg m-4 flex gap-3 bg-slate-400/50 backdrop-blur-sm items-start text-2xl">
                    {berkas ? (
                        berkas.status == "disetujui" ? (
                            <div>
                                <p>
                                    Berkas anda telah disetujui oleh petugas
                                    kami. silahkan menunggu informasi
                                    selanjutnya melalui telp anda
                                </p>
                            </div>
                        ) : (
                            <div>
                                <FormBerkasUpdate modelBerkas={berkas} />
                            </div>
                        )
                    ) : (
                        <FormBerkas />
                    )}
                </div>
            ) : (
                ""
            )}
        </div>
    );
}
Dashboard.layout = (page) => <UserAuth children={page} />;
