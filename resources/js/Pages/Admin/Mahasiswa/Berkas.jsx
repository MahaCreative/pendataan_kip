import DangerButton from "@/Components/DangerButton";
import InputError from "@/Components/InputError";
import Modal from "@/Components/Modal";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Link, router, useForm } from "@inertiajs/react";
import React, { useState } from "react";

export default function Berkas({ model }) {
    const { data, setData, post, errors } = useForm({ keterangan: "" });
    const [modalTolak, setModalTolak] = useState(false);
    const downloadKTP = (data, type) => {
        console.log(data);
        window.open(route("download_berkas", { file: data, fileType: type }));
    };

    const terimaBerkas = (data) => {
        router.get(route("setujui_berkas"), data);
    };

    const tolakBerkas = (data) => {
        setModalTolak(true);
    };
    const tolakHandler = (e) => {
        e.preventDefault();
        router.post(
            route("tolak_berkas"),
            {
                data: model.berkas,
                keterangan: data.keterangan,
            },
            {
                onSuccess: setModalTolak(false),
            }
        );
    };
    return (
        <div className="my-3 w-[95%] px-4">
            {modalTolak ? (
                <form onSubmit={tolakHandler}>
                    <h3>Masukkan alasan kenapa berkas ditolak</h3>
                    <textarea
                        name="keterangan"
                        onChange={(e) => setData("keterangan", e.target.value)}
                        className="w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm "
                        placeholder="Keterangan"
                    ></textarea>
                    {errors && <InputError message={errors.keterangan} />}
                    <p>
                        Gunakan tanda
                        <span className="font-bold">
                            {" { } "} dan
                            <span className="font bold">{" , "}</span>
                        </span>
                        untuk berkas yang ditolak
                    </p>
                    <p>
                        Contoh:{" "}
                        <span className="font-bold p-1.5 bg-slate-300">
                            Berkas Anda Tidak Lengkap, lengkapi berkas berikut{" "}
                            {"{KTP}, {KRS}"}
                        </span>
                    </p>
                    <div className="flex gap-3 items-center py-2">
                        <PrimaryButton className="my-2">SUBMIT</PrimaryButton>
                        <DangerButton
                            type="button"
                            onClick={() => setModalTolak(false)}
                            className="my-2"
                        >
                            CANCELL
                        </DangerButton>
                    </div>
                </form>
            ) : (
                <div>
                    <div className="flex gap-3 items-center my-2.5">
                        <div className="w-[20%]">KTP</div>
                        <PrimaryButton
                            onClick={(e) => downloadKTP(model.berkas.id, "KTP")}
                            className="w-full"
                        >
                            Download Berkas
                        </PrimaryButton>
                    </div>
                    <div className="flex gap-3 items-center my-2.5">
                        <div className="w-[20%]">KK</div>
                        <PrimaryButton
                            onClick={(e) => downloadKTP(model.berkas.id, "KK")}
                            className="w-full"
                        >
                            Download Berkas
                        </PrimaryButton>
                    </div>
                    <div className="flex gap-3 items-center my-2.5">
                        <div className="w-[20%]">KIP</div>
                        <PrimaryButton
                            onClick={(e) => downloadKTP(model.berkas.id, "KIP")}
                            className="w-full"
                        >
                            Download Berkas
                        </PrimaryButton>
                    </div>
                    <div className="flex gap-3 items-center my-2.5">
                        <div className="w-[20%]">KRS</div>
                        <PrimaryButton
                            onClick={(e) => downloadKTP(model.berkas.id, "KRS")}
                            className="w-full"
                        >
                            Download Berkas
                        </PrimaryButton>
                    </div>
                    <div className="flex gap-3 items-center my-2.5">
                        <div className="w-[20%]">PDDIKTI</div>
                        <PrimaryButton
                            onClick={(e) =>
                                downloadKTP(model.berkas.id, "PDDIKTI")
                            }
                            className="w-full"
                        >
                            Download Berkas
                        </PrimaryButton>
                    </div>

                    {model.berkas.status !== "disetujui" ? (
                        <div>
                            <div className=" my-2 rounded-lg bg-slate-300 p-2">
                                <h3 className="font-bold text-xl">
                                    Alasan Di Tolak Sebelumnya
                                </h3>
                                <p>
                                    <p>{model.berkas.keterangan}</p>
                                </p>
                            </div>

                            <div className="flex gap-3 items-center">
                                <PrimaryButton
                                    onClick={() => terimaBerkas(model.berkas)}
                                >
                                    Terima Berkas
                                </PrimaryButton>
                                <DangerButton
                                    onClick={() => tolakBerkas(model.berkas)}
                                >
                                    Tolak Berkas
                                </DangerButton>
                            </div>
                        </div>
                    ) : (
                        <div className="py-2 bg-slate-300 px-2 rounded-lg">
                            <p>Berkas telah disetujui</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
