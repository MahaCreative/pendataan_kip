import User from "@/Layouts/User";
import React from "react";
import Form from "./Form";

export default function Register() {
    return (
        <div className="w-full h-screen flex items-center justify-center ">
            <div className="w-[90vw] rounded-lg bg-white/50 shadow-sm shadow-gray-300/50 transition-all duration-300 ease-in-out p-3">
                <h3 className="text-slate-950">Register Your Account</h3>
                <Form />
            </div>
        </div>
    );
}
Register.layout = (page) => <User children={page} />;
