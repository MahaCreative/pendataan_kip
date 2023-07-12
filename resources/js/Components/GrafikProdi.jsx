import React from "react";
import {
    Bar,
    BarChart,
    CartesianGrid,
    Cell,
    LabelList,
    Legend,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";
export default function GrafikProdi({ data }) {
    const colors = [
        "#8884d8",
        "#82ca9d",
        "#ffc658",
        "#ff7f50",
        "#0088FE",
        "#00C49F",
        "#FFBB28",
        "#FF8042",
    ];
    return (
        <div>
            <ResponsiveContainer width="100%" height={200}>
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="7 7" />
                    <XAxis
                        dataKey="prodi"
                        tick={{
                            fontSize: 10,
                            textDecoration: "capitalize",
                        }}
                    />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="jumlah_mahasiswa">
                        <LabelList
                            dataKey="prodi"
                            position="top"
                            tick={{ fontSize: 10 }}
                        />
                        {data.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={`rgba(${Math.floor(
                                    Math.random() * 256
                                )}, ${Math.floor(
                                    Math.random() * 256
                                )}, ${Math.floor(Math.random() * 256)}, 0.8)`}
                            />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
