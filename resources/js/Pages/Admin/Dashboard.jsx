import Admin from "@/Layouts/Admin";
import React from "react";
import { motion } from "framer-motion";
import DataJumlah from "@/Components/DataJumlah";
export default function Dashboard() {
    return (
        <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: "0%", opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <DataJumlah />
        </motion.div>
    );
}

Dashboard.layout = (page) => <Admin children={page} />;
