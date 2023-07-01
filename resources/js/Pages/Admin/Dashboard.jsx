import Admin from "@/Layouts/Admin";
import React from "react";

export default function Dashboard() {
    return <div>Dashboard</div>;
}

Dashboard.layout = (page) => <Admin children={page} />;
