import DangerButton from "@/Components/DangerButton";
import ImageUploadForm from "@/Components/ImageUploadForm";
import InputError from "@/Components/InputError ";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { useForm, usePage } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { motion } from "framer-motion";
export default function FormDataDiri({ model, setModel, setEdit }) {
    const { mahasiswa_login } = usePage().props;
    const [newTelp, setNewTelp] = useState("");
    const { data, setData, post, processing, errors, reset } = useForm({
        tempat_lahir: "",
        tanggal_lahir: "",
        nama_ayah: "",
        nama_ibu: "",
        alamat: "",
        pekerjaan_ayah: "",
        pekerjaan_ibu: "",
        foto: "",
        telp: "",
    });
    const submitHandler = (e) => {
        e.preventDefault();
        post(route("upload_data_diri"));
    };
    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };
    const changeTelp = (value) => {
        setData({ ...data, telp: value });
    };
    const cancelHandler = () => {
        setEdit(false);
        setModel(null);
    };

    useEffect(() => {
        setData({
            tempat_lahir: model ? model.tempat_lahir : "",
            tanggal_lahir: model ? model.tanggal_lahir : "",
            nama_ayah: model ? model.nama_ayah : "",
            nama_ibu: model ? model.nama_ibu : "",
            alamat: model ? model.alamat : "",
            pekerjaan_ayah: model ? model.pekerjaan_ayah : "",
            pekerjaan_ibu: model ? model.pekerjaan_ibu : "",
            foto: model ? model.foto : "",
            telp: model ? model.telp : "",
        });
    }, [model]);
    const updateHandler = (e) => {
        e.preventDefault();
        post(route("upload_data_diri"), data, {
            _method: "patch",
            foto: data.foto,
        });
    };
    return (
        <motion.form
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: "0%", opacity: 1 }}
            transition={{ duration: 0.5 }}
            onSubmit={model ? updateHandler : submitHandler}
            className="w-full max-h-[70vh] overflow-y-auto scrollbar-none"
        >
            <div className="w-full">
                <div className="py-1 flex flex-col gap-3 w-full">
                    <InputLabel className="text-white">Nama</InputLabel>
                    <TextInput
                        className="w-full"
                        disabled
                        value={mahasiswa_login.nama}
                    />
                </div>
                <div className="py-1 flex flex-col gap-3 w-full">
                    <InputLabel className="text-white">NIM</InputLabel>
                    <TextInput
                        className="w-full"
                        disabled
                        value={mahasiswa_login.nim}
                    />
                </div>
                <div className="py-1 flex flex-col gap-3 w-full">
                    <InputLabel className="text-white">Email</InputLabel>
                    <TextInput
                        className="w-full"
                        disabled
                        value={mahasiswa_login.nim}
                    />
                </div>
            </div>
            <div className="my-2">
                <ImageUploadForm setData={setData} />
                {errors.foto && (
                    <InputError
                        className="bg-slate-300/80 backdrop-blur-md rounded-lg px-2 py-1"
                        message={errors.foto}
                    />
                )}
            </div>
            <div className="w-full">
                <div className="py-1 flex flex-col gap-3 w-full">
                    <InputLabel className="text-white">Tempat Lahir</InputLabel>
                    <TextInput
                        value={data.tempat_lahir}
                        onChange={changeHandler}
                        name="tempat_lahir"
                        className="w-full"
                    />
                    {errors.tempat_lahir && (
                        <InputError
                            className="bg-slate-300/80 backdrop-blur-md rounded-lg px-2 py-1"
                            message={errors.tempat_lahir}
                        />
                    )}
                </div>
                <div className="py-1 flex flex-col gap-3 w-full">
                    <InputLabel className="text-white">
                        Tanggal Lahir
                    </InputLabel>
                    <TextInput
                        value={data.tanggal_lahir}
                        onChange={changeHandler}
                        type="date"
                        name="tanggal_lahir"
                        className="w-full"
                    />
                    {errors.tanggal_lahir && (
                        <InputError
                            className="bg-slate-300/80 backdrop-blur-md rounded-lg px-2 py-1"
                            message={errors.tanggal_lahir}
                        />
                    )}
                </div>
                <div className="py-1 flex flex-col gap-3 w-full">
                    <InputLabel className="text-white">Alamat</InputLabel>
                    <TextInput
                        value={data.alamat}
                        onChange={changeHandler}
                        name="alamat"
                        className="w-full"
                    />
                    {errors.alamat && (
                        <InputError
                            className="bg-slate-300/80 backdrop-blur-md rounded-lg px-2 py-1"
                            message={errors.alamat}
                        />
                    )}
                </div>
                <div className="py-1 flex flex-col gap-3 w-full">
                    <InputLabel className="text-white">Telp</InputLabel>
                    <PhoneInput
                        value={data.telp}
                        value={data.telp}
                        onChange={changeTelp}
                        name="telp"
                        country={"id"}
                        className="w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                    />
                    {errors.telp && (
                        <InputError
                            className="bg-slate-300/80 backdrop-blur-md rounded-lg px-2 py-1"
                            message={errors.telp}
                        />
                    )}
                </div>
            </div>
            <div className="text-white">
                <h3 className="font-bold my-3 text-xl border-b-2 border-white inline">
                    Data Orang Tua
                </h3>
                <div className="w-full text-slate-950">
                    <div className="py-1 flex flex-col gap-3 w-full">
                        <InputLabel className="text-white">
                            Nama Ayah
                        </InputLabel>
                        <TextInput
                            value={data.nama_ayah}
                            onChange={changeHandler}
                            name="nama_ayah"
                            className="w-full"
                        />
                        {errors.nama_ayah && (
                            <InputError
                                className="bg-slate-300/80 backdrop-blur-md rounded-lg px-2 py-1"
                                message={errors.nama_ayah}
                            />
                        )}
                    </div>
                    <div className="py-1 flex flex-col gap-3 w-full">
                        <InputLabel className="text-white">Nama Ibu</InputLabel>
                        <TextInput
                            value={data.nama_ibu}
                            onChange={changeHandler}
                            name="nama_ibu"
                            className="w-full"
                        />
                        {errors.nama_ibu && (
                            <InputError
                                className="bg-slate-300/80 backdrop-blur-md rounded-lg px-2 py-1"
                                message={errors.nama_ibu}
                            />
                        )}
                    </div>
                </div>
                <div className="w-full">
                    <div className="py-1 flex flex-col gap-3 w-full">
                        <InputLabel className="text-white">
                            Pekerjaan Ayah
                        </InputLabel>
                        <TextInput
                            value={data.pekerjaan_ayah}
                            onChange={changeHandler}
                            name="pekerjaan_ayah"
                            className="w-full"
                        />
                        {errors.pekerjaan_ayah && (
                            <InputError
                                className="bg-slate-300/80 backdrop-blur-md rounded-lg px-2 py-1"
                                message={errors.pekerjaan_ayah}
                            />
                        )}
                    </div>
                    <div className="py-1 flex flex-col gap-3 w-full">
                        <InputLabel className="">Pekerjaan Ibu</InputLabel>
                        <TextInput
                            value={data.pekerjaan_ibu}
                            onChange={changeHandler}
                            name="pekerjaan_ibu"
                            className="w-full"
                        />
                        {errors.pekerjaan_ibu && (
                            <InputError
                                className="bg-slate-300/80 backdrop-blur-md rounded-lg px-2 py-1"
                                message={errors.pekerjaan_ibu}
                            />
                        )}
                    </div>
                </div>
            </div>
            <div className="flex gap-3">
                <PrimaryButton className="my-2 py-2">
                    Upload Data Diri
                </PrimaryButton>
                <DangerButton
                    type="button"
                    className="my-2"
                    onClick={cancelHandler}
                >
                    Cancell
                </DangerButton>
            </div>
        </motion.form>
    );
}
