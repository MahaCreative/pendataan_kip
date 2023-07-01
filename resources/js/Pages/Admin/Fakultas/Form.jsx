import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { router, useForm } from "@inertiajs/react";
import React, { useEffect, useState } from "react";

export default function Form({ model, setModal }) {
    const { data, setData, post, errors, reset } = useForm({
        id: "",
        fakultas: "",
        logo: "",
    });

    const submitHandler = (e) => {
        e.preventDefault();
        post(route("fakultas"), {
            onSuccess: () => {
                reset("fakultas", "logo");
                setModal(false);
            },
        });
    };

    const updateHandler = (e) => {
        e.preventDefault();
        router.post(route("fakultas"), {
            _method: "patch",
            data,
            logo: data.logo,
            onSuccess: () => setModal(false),
        });
    };

    useEffect(() => {
        setData({
            ...data,
            id: model ? model.id : "",
            fakultas: model ? model.fakultas : "",
            logo: model ? model.logo : "",
        });
    }, [model]);

    return (
        <form
            onSubmit={model ? updateHandler : submitHandler}
            className="py-2 px-4 w-full flex flex-col gap-2"
        >
            <div className="">
                <TextInput
                    onChange={(e) =>
                        setData({ ...data, [e.target.name]: e.target.value })
                    }
                    value={data.fakultas}
                    name="fakultas"
                    className="w-[90vw]"
                    placeholder="Nama Fakultas"
                />
            </div>
            {errors.fakultas && <InputError message={errors.fakultas} />}
            <div className="w-full">
                <label
                    htmlFor="fileInput"
                    className="w-[90vw] flex items-center px-4 py-2 bg-white text-blue-500 rounded-md shadow-md tracking-wide border border-blue-500 cursor-pointer hover:bg-blue-500 hover:text-white"
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
                    {data.logo ? data.logo.name : "Pilih File"}
                    <input
                        id="fileInput"
                        type="file"
                        className="hidden"
                        onChange={(e) =>
                            setData({ ...data, logo: e.target.files[0] })
                        }
                    />
                </label>
                {errors.logo && <InputError message={errors.logo} />}
            </div>
            <PrimaryButton type={"submit"}>
                {model ? "Update" : "Submit"}
            </PrimaryButton>
        </form>
    );
}
