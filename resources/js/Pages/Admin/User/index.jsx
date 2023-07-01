import Admin from "@/Layouts/Admin";
import React from "react";

export default function index() {
    return <div>index</div>;
}
index.layout = (page) => <Admin children={page} />;
