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
        jenis_kelamin: "Laki-Laki",
        prodi: "1",
        fakultas: "",
    });

    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const submitHandler = (e) => {
        e.preventDefault();
        post(route("mahasiswa"), {
            onSuccess: () => onClose(false),
        });
    };

    useEffect(() => {
        setData({
            ...data,
            id: model ? model.id : "",
            nim: model ? model.nim : "",
            nama: model ? model.nama : "",
            email: model ? model.email : "",
            jenis_kelamin: model ? model.jenis_kelamin : "Laki-Laki",
            prodi: model ? model.prodi_id : "1",
            fakultas: model ? model.fakultas : "",
        });
    }, [model]);

    const updateHandler = (e) => {
        e.preventDefault();
        router.patch(route("mahasiswa"), data, {
            onSuccess: onClose(false),
        });
    };

    return (
        <div className="py-2 px-4 w-[95vw]">
            <form
                onSubmit={model ? updateHandler : submitHandler}
                action=""
                className="w-full"
            >
                <div className="w-full">
                    <InputLabel>NIM</InputLabel>
                    <TextInput
                        value={data.nim}
                        onChange={changeHandler}
                        name="nim"
                        className="w-full"
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
                        className="w-full"
                        placeholder="Nama"
                    />
                    {errors.nama && <InputError message={errors.nama} />}
                </div>
                <div className="w-full">
                    <InputLabel>Nama Mahasiswa</InputLabel>
                    <TextInput
                        value={data.email}
                        onChange={changeHandler}
                        type="email"
                        className="w-full"
                        placeholder="Email"
                        name="email"
                    />
                    {errors.email && <InputError message={errors.email} />}
                </div>
                <div className="w-full">
                    <InputLabel>Jenis Kelamin</InputLabel>
                    <select
                        onChange={changeHandler}
                        name="jenis_kelamin"
                        className="w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm "
                    >
                        <option
                            value={model ? data.jenis_kelamin : ""}
                            disabled
                        >
                            {model ? data.jenis_kelamin : "Pilih Jenis Kelamin"}
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
                        className="capitalize w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm "
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
                        className=" capitalize w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm "
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
                    <PrimaryButton>
                        {model ? "Update" : "Kirim Email Akses"}
                    </PrimaryButton>
                </div>
            </form>
        </div>
    );
}
