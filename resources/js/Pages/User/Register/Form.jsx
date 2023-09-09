import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { router, useForm, usePage } from "@inertiajs/react";
import React, { useEffect } from "react";

export default function Form({ model, onClose }) {
    const { fak } = usePage().props;
    const { prodi } = usePage().props;
    const { data, setData, post, errors, reset } = useForm({
        id: "",
        nim: "",
        nama: "",
        email: "",
        angkatan: "",
        jenis_kelamin: "Laki-Laki",
        prodi: "1",
        fakultas: "",
        password: "",
    });

    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const submitHandler = (e) => {
        e.preventDefault();
        post(route("register"), {
            onSuccess: () => onClose(false),
        });
    };

    return (
        <div className="py-2 px-4 w-full">
            <form onSubmit={submitHandler} action="" className="w-full">
                <div className="w-full">
                    <InputLabel>NIM</InputLabel>
                    <TextInput
                        value={data.nim}
                        onChange={changeHandler}
                        name="nim"
                        className="w-full text-slate-900"
                        placeholder="NIM"
                    />
                    {errors.nim && <InputError message={errors.nim} />}
                </div>
                <div className="w-full">
                    <InputLabel>Nama Mahasiswa</InputLabel>
                    <TextInput
                        value={data.nama}
                        onChange={changeHandler}
                        name="nama"
                        className="w-full text-slate-900"
                        placeholder="Nama"
                    />
                    {errors.nama && <InputError message={errors.nama} />}
                </div>
                <div className="w-full">
                    <InputLabel>Email</InputLabel>
                    <TextInput
                        value={data.email}
                        onChange={changeHandler}
                        type="email"
                        placeholder="Email"
                        className="w-full text-slate-900"
                        name="email"
                    />
                    {errors.email && <InputError message={errors.email} />}
                </div>
                <div className="w-full">
                    <InputLabel>Angkatan</InputLabel>
                    <TextInput
                        value={data.angkatan}
                        onChange={changeHandler}
                        type="number"
                        min="2010"
                        placeholder="angkatan"
                        className="w-full text-slate-900"
                        name="angkatan"
                    />
                    {errors.angkatan && (
                        <InputError message={errors.angkatan} />
                    )}
                </div>
                <div className="w-full">
                    <InputLabel>Password</InputLabel>
                    <TextInput
                        value={data.password}
                        onChange={changeHandler}
                        placeholder="password"
                        className="w-full text-slate-900"
                        type="password"
                        name="password"
                    />
                    {errors.password && (
                        <InputError message={errors.password} />
                    )}
                </div>
                <div className="w-full">
                    <InputLabel>Jenis Kelamin</InputLabel>
                    <select
                        onChange={changeHandler}
                        name="jenis_kelamin"
                        className="w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm text-slate-950"
                    >
                        <option value={""} disabled>
                            {"Pilih Jenis Kelamin"}
                        </option>
                        <option value="Laki-Laki">Laki-Laki</option>
                        <option value="Perempuan">Perempuan</option>
                    </select>
                    {errors.jenis_kelamin && (
                        <InputError message={errors.jenis_kelamin} />
                    )}
                </div>
                <div className="w-full">
                    <InputLabel>Fakultas</InputLabel>
                    <select
                        onChange={changeHandler}
                        name="fakultas"
                        className="capitalize w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm text-slate-950"
                    >
                        <option value="">Pilih Fakultas</option>
                        {fak.map((item, key) => (
                            <option key={key} value={item.id}>
                                {item.fakultas}
                            </option>
                        ))}
                        {errors.fakultas && (
                            <InputError message={errors.fakultas} />
                        )}
                    </select>
                </div>
                <div className="w-full">
                    <InputLabel>Prodi</InputLabel>
                    <select
                        onChange={changeHandler}
                        name="prodi"
                        className=" capitalize w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm text-slate-950"
                    >
                        <option value="">Pilih Program Studi</option>
                        {prodi.map(
                            (item, key) =>
                                item.fakultas_id == data.fakultas && (
                                    <option key={key} value={item.id}>
                                        {item.prodi}
                                    </option>
                                )
                        )}
                        {errors.prodi && <InputError message={errors.prodi} />}
                    </select>
                </div>
                <div className="my-2">
                    <PrimaryButton>{"Register"}</PrimaryButton>
                </div>
            </form>
        </div>
    );
}
