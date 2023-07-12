import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import React, { useEffect, useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import clsx from "clsx";
import { useForm } from "@inertiajs/react";
import InputError from "@/Components/InputError";
export default function FormUser() {
    const [showPassword, setShowPassword] = useState(false);
    const { data, setData, post, reset, errors } = useForm({
        nim: "",
        email: "",
        kode_akses: "",
    });
    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };
    const submitHandler = (e) => {
        e.preventDefault();
        post(route("login-user"));
    };
    return (
        <div>
            <form action="" onSubmit={submitHandler}>
                <div>
                    <InputLabel className="text-white text-xl">Nim</InputLabel>
                    <TextInput
                        name="nim"
                        placeholder="nim"
                        className="w-full text-slate-950"
                        onChange={changeHandler}
                    />
                    {errors.nim && <InputError message={errors.nim} />}
                </div>
                <div>
                    <InputLabel className="text-white text-xl">
                        Email
                    </InputLabel>
                    <TextInput
                        name="email"
                        placeholder="email"
                        className="w-full text-slate-950"
                        onChange={changeHandler}
                    />
                    {errors.email && <InputError message={errors.email} />}
                </div>
                <div>
                    <InputLabel className="text-white text-xl">
                        Password
                    </InputLabel>
                    <div className="w-full">
                        <TextInput
                            name="kode_akses"
                            type={clsx(showPassword ? "text" : "password")}
                            placeholder="password"
                            className="w-full text-slate-950"
                            onChange={changeHandler}
                        />
                    </div>

                    <div
                        onClick={() => setShowPassword(!showPassword)}
                        className={clsx(
                            showPassword ? "text-slate-950" : "text-white",
                            " h-full text-xl flex gap-3 items-center active:text-slate-950"
                        )}
                    >
                        <VisibilityIcon fontSize="inherit" color="inherit" />
                        <p>Show Password</p>
                    </div>
                    {errors.kode_akses && (
                        <InputError message={errors.kode_akses} />
                    )}
                </div>
                <div>
                    <button className="py-2 px-4 rounded-lg shadow-md shadow-gray-300/50 active:bg-white active:text-gray-950 bg-slate-950">
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
}
