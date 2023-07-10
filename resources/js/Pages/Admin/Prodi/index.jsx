import DangerButton from "@/Components/DangerButton";
import Modal from "@/Components/Modal";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import Admin from "@/Layouts/Admin";
import React, { useState } from "react";
import Form from "./Form";
import { router } from "@inertiajs/react";
import { motion } from "framer-motion";
export default function index(props) {
    const prodi = props.prod;
    const [model, setModel] = useState(null);
    const [tambahModal, setTambahModal] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);

    const editModalShow = (data) => {
        setModel(data);
        setEditModal(true);
    };
    const deleteModalShow = (data) => {
        setModel(data);
        setDeleteModal(true);
    };

    const deleteHandler = () => {
        router.delete(route("prodi", model), {
            onSuccess: () => {
                setDeleteModal(false);
            },
        });
    };
    return (
        <motion.div
            className="px-4 max-w-full overflow-x-hidden"
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: "0%", opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <Modal show={tambahModal} onClose={setTambahModal}>
                <div>
                    <h3 className="mx-4 text-blue-500 ">
                        Tambah Data Program Studi
                    </h3>
                    <Form />
                </div>
            </Modal>
            <Modal show={editModal} onClose={setEditModal}>
                <div>
                    <h3 className="mx-4 text-blue-500 ">
                        Edit Data Program Studi
                    </h3>
                    <Form model={model} onClose={setEditModal} />
                </div>
            </Modal>
            <Modal show={deleteModal} onClose={setDeleteModal}>
                <div className="w-[95vw] py-2 px-4">
                    <h3 className="text-[10pt] text-red-500">Warning</h3>
                    <p>Yakin ingin menghapus data?</p>
                    <p>
                        Menghapus data ini, akan menghapus semua data yang
                        terkait di dalamnya
                    </p>
                    <div className="flex gap-4 my-3">
                        <PrimaryButton onClick={() => deleteHandler()}>
                            Submit
                        </PrimaryButton>
                        <DangerButton onClick={() => setDeleteModal(false)}>
                            Cancell
                        </DangerButton>
                    </div>
                </div>
            </Modal>
            <div className="bg-slate-300 rounded-md w-[70vw] py-3 px-4">
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
                                        src={"./storage/" + item.logo}
                                        alt=""
                                        className="w-14"
                                    />
                                    <h3 className="capitalize">{item.prodi}</h3>
                                </div>
                                <div className="flex gap-3 items-center">
                                    <SecondaryButton
                                        onClick={() => editModalShow(item)}
                                    >
                                        Edit
                                    </SecondaryButton>
                                    <DangerButton
                                        onClick={() => deleteModalShow(item)}
                                    >
                                        Delete
                                    </DangerButton>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>Belum ada data yang berhasil ditambahkan</p>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
index.layout = (page) => <Admin children={page} />;
