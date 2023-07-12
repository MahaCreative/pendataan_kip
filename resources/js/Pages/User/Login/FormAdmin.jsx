import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import React, { useEffect, useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import clsx from "clsx";
import { useForm } from "@inertiajs/react";
import InputError from "@/Components/InputError";
export default function FormAdmin() {
    const [showPassword, setShowPassword] = useState(false);
    const { data, setData, post, reset, errors } = useForm({
        email: "",
        password: "",
    });
    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };
    const submitHandler = (e) => {
        e.preventDefault();
        post(route("login-admin"));
    };
    useEffect(() => {
        setData({ ...data, email: "", password: "" });
    }, []);
    return (
        <div>
            <form action="" onSubmit={submitHandler}>
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
                            name="password"
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
