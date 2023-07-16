import UserAuth from "@/Layouts/UserAuth";
import React from "react";

export default function Dashboard() {
    return <div>Dashboard</div>;
}
Dashboard.layout = (page) => <UserAuth children={page} />;
