import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import Admin from "@/Layouts/Admin";
import { router, useForm, usePage } from "@inertiajs/react";
import React from "react";

export default function Index() {
    const { auth } = usePage().props;
    const { data, setData, post, errors } = useForm({
        id: auth.user.id,
        username: auth.user.name,
        email: auth.user.email,
        password: "",
    });
    const updateHandler = (e) => {
        e.preventDefault();
        router.patch(route("setting-profile"), data, {
            preserveState: true,
        });
    };
    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    return (
        <div className="px-4 py-6">
            <h3 className="text-white font-white font-3xl font-bold">
                Setting Your Account
            </h3>
            <div className="rounded-sm shadow-sm shadow-white/50 border border-dashed border-white/50 px-3 py-3 bg-slate-900/50">
                <form onSubmit={updateHandler}>
                    <InputLabel className="text-white">Username</InputLabel>
                    <TextInput
                        name="username"
                        onChange={changeHandler}
                        placeholder="Username"
                        className="w-full my-3"
                        value={data.username}
                    ></TextInput>
                    {errors && <InputError message={errors.username} />}
                    <InputLabel className="text-white">Email</InputLabel>
                    <TextInput
                        name="email"
                        onChange={changeHandler}
                        placeholder="Email"
                        className="w-full my-3"
                        value={data.email}
                    ></TextInput>
                    {errors && <InputError message={errors.email} />}
                    <InputLabel className="text-white">Password</InputLabel>
                    <TextInput
                        name="password"
                        onChange={changeHandler}
                        className="w-full my-3"
                        type="password"
                        placeholder="Password"
                    ></TextInput>
                    {errors && <InputError message={errors.password} />}
                    <PrimaryButton>Update</PrimaryButton>
                </form>
            </div>
        </div>
    );
}

Index.layout = (page) => <Admin children={page} />;
