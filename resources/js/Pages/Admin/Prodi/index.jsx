import DangerButton from "@/Components/DangerButton";
import Modal from "@/Components/Modal";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import Admin from "@/Layouts/Admin";
import React, { useState } from "react";
import Form from "./Form";

export default function index(props) {
    const prodi = props.prod;
    const [model, setModel] = useState(null);
    const [tambahModal, setTambahModal] = useState(false);
    return (
        <div className="px-4">
            <Modal show={tambahModal} onClose={setTambahModal}>
                <Form />
            </Modal>
            <div className="bg-slate-300 rounded-md w-full py-3 px-4">
                Halo <strong>Admin</strong>, Silahkan melakukan penambahan atau
                perubahan data prodi pada halaman ini
            </div>
            <div className="my-2">
                <PrimaryButton onClick={() => setTambahModal(true)}>
                    Tambah
                </PrimaryButton>
            </div>
            <div className="my-2">
                <h3 className="text-[8pt] ">Data Prodi</h3>
                <div className="bg-gray-100 max-h-[67vh] overflow-y-auto px-3 py-2 rounded-md">
                    {prodi.length > 0 ? (
                        prodi.map((item, key) => (
                            <div className="flex justify-between items-center my-2.5">
                                <div className="flex gap-3 items-center">
                                    <img
                                        src="./img/defalt_user.jpg"
                                        alt=""
                                        className="w-14"
                                    />
                                    <h3 className="capitalize">{item.prodi}</h3>
                                </div>
                                <div className="flex gap-3 items-center">
                                    <SecondaryButton>Edit</SecondaryButton>
                                    <DangerButton>Delete</DangerButton>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>Belum ada data yang berhasil ditambahkan</p>
                    )}
                </div>
            </div>
        </div>
    );
}
index.layout = (page) => <Admin children={page} />;
