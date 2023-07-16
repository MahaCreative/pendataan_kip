import DangerButton from "@/Components/DangerButton";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import { useForm } from "@inertiajs/react";
import React, { useEffect } from "react";
import Marquee from "react-fast-marquee";

export default function FormBerkas({
    modelBerkas,
    editBerkas,
    setEditBerkas,
    setModelBerkas,
}) {
    const { data, setData, post, reset, errors } = useForm({
        ktp: "",
        kk: "",
        kip: "",
        krs: "",
        pddikti: "",
    });

    const cancelHandler = () => {
        setModelBerkas(null);
        setEditBerkas(null);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        post(route("upload_berkas"));
    };

    useEffect(() => {
        setData({
            ...data,
            ktp: modelBerkas ? modelBerkas.ktp : "",
            kk: modelBerkas ? modelBerkas.kk : "",
            kip: modelBerkas ? modelBerkas.kip : "",
            krs: modelBerkas ? modelBerkas.krs : "",
            pddikti: modelBerkas ? modelBerkas.pddikti : "",
        });
    }, [modelBerkas]);

    return (
        <form onSubmit={submitHandler} className="">
            <div className="my-4 ">
                <Marquee>
                    *NOTE SEMUA BERKAS DI UPLOAD DALAM BENTUK PDF DAN MAXIMAL
                    SIZE 2MB
                </Marquee>
            </div>
            <div className="flex flex-col gap-3">
                <div className="flex gap-3 items-center">
                    <InputLabel className="w-[15vw] text-white text-xl">
                        KTP
                    </InputLabel>
                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="fileInputKTP"
                            className="w-[70vw] flex items-center px-4 py-2 bg-white text-blue-500 rounded-md shadow-md tracking-wide border border-blue-500 cursor-pointer hover:bg-blue-500 hover:text-white"
                        >
                            <svg
                                className="w-5 h-5 mr-2"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4 0C1.79086 0 0 1.79086 0 4V16C0 18.2091 1.79086 20 4 20H16C18.2091 20 20 18.2091 20 16V4C20 1.79086 18.2091 0 16 0H4ZM9 16H4C2.89543 16 2 15.1046 2 14V7H4V9H16V7H18V14C18 15.1046 17.1046 16 16 16H11V11H9V16Z"
                                />
                            </svg>
                            {data.ktp ? data.ktp.name : "Pilih File"}
                            <input
                                onChange={(e) =>
                                    setData("ktp", e.target.files[0])
                                }
                                id="fileInputKTP"
                                type="file"
                                name="ktp"
                                className="hidden"
                            />
                        </label>
                        {errors.ktp && (
                            <InputError
                                className="bg-slate-300/80 backdrop-blur-md rounded-lg px-2 py-1"
                                message={errors.ktp}
                            />
                        )}
                    </div>
                </div>
                <div className="flex gap-3 items-center">
                    <InputLabel className="w-[15vw] text-white text-xl">
                        KK
                    </InputLabel>
                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="fileInputKK"
                            className="w-[70vw] flex items-center px-4 py-2 bg-white text-blue-500 rounded-md shadow-md tracking-wide border border-blue-500 cursor-pointer hover:bg-blue-500 hover:text-white"
                        >
                            <svg
                                className="w-5 h-5 mr-2"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4 0C1.79086 0 0 1.79086 0 4V16C0 18.2091 1.79086 20 4 20H16C18.2091 20 20 18.2091 20 16V4C20 1.79086 18.2091 0 16 0H4ZM9 16H4C2.89543 16 2 15.1046 2 14V7H4V9H16V7H18V14C18 15.1046 17.1046 16 16 16H11V11H9V16Z"
                                />
                            </svg>
                            {data.kk ? data.kk.name : "Pilih File"}
                            <input
                                onChange={(e) =>
                                    setData("kk", e.target.files[0])
                                }
                                id="fileInputKK"
                                type="file"
                                name="kk"
                                className="hidden"
                            />
                        </label>
                        {errors.kk && (
                            <InputError
                                className="bg-slate-300/80 backdrop-blur-md rounded-lg px-2 py-1"
                                message={errors.kk}
                            />
                        )}
                    </div>
                </div>
                <div className="flex gap-3 items-center">
                    <InputLabel className="w-[15vw] text-white text-xl">
                        KIP
                    </InputLabel>
                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="fileInputKIP"
                            className="w-[70vw] flex items-center px-4 py-2 bg-white text-blue-500 rounded-md shadow-md tracking-wide border border-blue-500 cursor-pointer hover:bg-blue-500 hover:text-white"
                        >
                            <svg
                                className="w-5 h-5 mr-2"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4 0C1.79086 0 0 1.79086 0 4V16C0 18.2091 1.79086 20 4 20H16C18.2091 20 20 18.2091 20 16V4C20 1.79086 18.2091 0 16 0H4ZM9 16H4C2.89543 16 2 15.1046 2 14V7H4V9H16V7H18V14C18 15.1046 17.1046 16 16 16H11V11H9V16Z"
                                />
                            </svg>
                            {data.kip ? data.kip.name : "Pilih File"}
                            <input
                                onChange={(e) =>
                                    setData("kip", e.target.files[0])
                                }
                                id="fileInputKIP"
                                type="file"
                                name="kip"
                                className="hidden"
                            />
                        </label>
                        {errors.kip && (
                            <InputError
                                className="bg-slate-300/80 backdrop-blur-md rounded-lg px-2 py-1"
                                message={errors.kip}
                            />
                        )}
                    </div>
                </div>
                <div className="flex gap-3 items-center">
                    <InputLabel className="w-[15vw] text-white text-xl">
                        KRS
                    </InputLabel>
                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="fileInputKRS"
                            className="w-[70vw] flex items-center px-4 py-2 bg-white text-blue-500 rounded-md shadow-md tracking-wide border border-blue-500 cursor-pointer hover:bg-blue-500 hover:text-white"
                        >
                            <svg
                                className="w-5 h-5 mr-2"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4 0C1.79086 0 0 1.79086 0 4V16C0 18.2091 1.79086 20 4 20H16C18.2091 20 20 18.2091 20 16V4C20 1.79086 18.2091 0 16 0H4ZM9 16H4C2.89543 16 2 15.1046 2 14V7H4V9H16V7H18V14C18 15.1046 17.1046 16 16 16H11V11H9V16Z"
                                />
                            </svg>
                            {data.krs ? data.krs.name : "Pilih File"}
                            <input
                                onChange={(e) =>
                                    setData("krs", e.target.files[0])
                                }
                                id="fileInputKRS"
                                type="file"
                                name="krs"
                                className="hidden"
                            />
                        </label>
                        {errors.krs && (
                            <InputError
                                className="bg-slate-300/80 backdrop-blur-md rounded-lg px-2 py-1"
                                message={errors.krs}
                            />
                        )}
                    </div>
                </div>
                <div className="flex gap-3 items-center">
                    <InputLabel className="w-[15vw] text-white text-xl">
                        PDDIKTI
                    </InputLabel>
                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="fileInputPDDIKTI"
                            className="w-[70vw] flex items-center px-4 py-2 bg-white text-blue-500 rounded-md shadow-md tracking-wide border border-blue-500 cursor-pointer hover:bg-blue-500 hover:text-white"
                        >
                            <svg
                                className="w-5 h-5 mr-2"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4 0C1.79086 0 0 1.79086 0 4V16C0 18.2091 1.79086 20 4 20H16C18.2091 20 20 18.2091 20 16V4C20 1.79086 18.2091 0 16 0H4ZM9 16H4C2.89543 16 2 15.1046 2 14V7H4V9H16V7H18V14C18 15.1046 17.1046 16 16 16H11V11H9V16Z"
                                />
                            </svg>
                            {data.pddikti ? data.pddikti.name : "Pilih File"}
                            <input
                                onChange={(e) =>
                                    setData("pddikti", e.target.files[0])
                                }
                                id="fileInputPDDIKTI"
                                type="file"
                                name="pddikti"
                                className="hidden"
                            />
                        </label>
                        {errors.pddikti && (
                            <InputError
                                className="bg-slate-300/80 backdrop-blur-md rounded-lg px-2 py-1"
                                message={errors.pddikti}
                            />
                        )}
                    </div>
                </div>
            </div>
            <div className="flex gap-3">
                <PrimaryButton className="my-2 py-2">
                    Upload Berkas
                </PrimaryButton>
                {modelBerkas && (
                    <DangerButton
                        type="button"
                        className="my-2"
                        onClick={cancelHandler}
                    >
                        Cancell
                    </DangerButton>
                )}
            </div>
        </form>
    );
}
