import Modal from "@/Components/Modal";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import Admin from "@/Layouts/Admin";
import React, { useState } from "react";
import Form from "./Form";
import SecondaryButton from "@/Components/SecondaryButton";
import DangerButton from "@/Components/DangerButton";
import { router } from "@inertiajs/react";
import { motion } from "framer-motion";
import Berkas from "./Berkas";
export default function index({ mahasiswa }) {
    const [modalTambah, setModalTambah] = useState(false);
    const [modalEdit, setModalEdit] = useState(false);
    const [modalDelete, setModalDelete] = useState(false);
    const [modalLihat, setModalLihat] = useState(false);
    const [model, setModel] = useState(null);
    const editClick = (data) => {
        setModel(data);
        setModalEdit(true);
    };
    const deleteClick = (data) => {
        setModel(data);
        setModalDelete(true);
    };
    const deleteHandler = () => {
        console.log(model);
        router.post(route("mahasiswa-delete"), {
            id: model.id,
            onSuccess: setModalDelete(false),
        });
    };
    const lihatClick = (data) => {
        setModel(data);
        setModalLihat(true);
    };
    return (
        <motion.div
            className="px-2 py-4"
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: "0%", opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <Modal onClose={setModalDelete} show={modalDelete}>
                <h3 className="mx-4 text-red-500 w-[95vw] border-b border-dashed border-red-500">
                    Warning!!!
                </h3>
                <div className="mx-4 my-2">
                    <p>Menghaspus data, akan menghapus data terkait lainnya</p>
                </div>
                <div className="my-2 mx-4 flex items-center gap-3">
                    <PrimaryButton onClick={deleteHandler}>
                        Submit
                    </PrimaryButton>
                    <DangerButton onClick={() => setModalDelete(false)}>
                        Cancell
                    </DangerButton>
                </div>
            </Modal>
            <Modal onClose={setModalLihat} show={modalLihat}>
                <h3 className="mx-4 text-blue-500 ">Berkas Mahasiswa</h3>
                <div className="mx-4 w-[95vw]">
                    <Berkas model={model} />
                </div>
            </Modal>
            <Modal onClose={setModalTambah} show={modalTambah}>
                <h3 className="mx-4 text-blue-500 ">
                    Tambah Data Mahasiswa Penerima KIP
                </h3>
                <div>
                    <Form onClose={setModalTambah} />
                </div>
            </Modal>
            <Modal onClose={setModalEdit} show={modalEdit}>
                <h3 className="mx-4 text-blue-500 ">
                    Edit Data Mahasiswa Penerima KIP
                </h3>
                <div>
                    <Form model={model} onClose={setModalEdit} />
                </div>
            </Modal>
            <div className="bg-slate-300 rounded-md w-[70vw] py-3 px-4">
                Halo <strong>Admin</strong>, Silahkan melakukan penambahan
                penerima KIP
            </div>
            <div className="my-2 flex justify-between items-center">
                <PrimaryButton onClick={() => setModalTambah(true)}>
                    Tambah
                </PrimaryButton>
                <TextInput placeholder="Search" />
            </div>
            <div className="max-h-[73vh] overflow-y-auto scrollbar-none">
                {mahasiswa.length > 0 ? (
                    mahasiswa.map((item, key) => (
                        <div
                            key={key}
                            className="my-6 relative bg-gray-200/50 backdrop-blur-sm px-3 py-2 flex gap-4 capitalize items-center"
                        >
                            <div>
                                <img
                                    className="w-[10vw]"
                                    src={"./storage/" + item.foto}
                                    alt=""
                                />
                            </div>
                            <div>
                                <p className="text-white bg-slate-900 py-1 px-2 inline rounded-md">
                                    {item.nim}
                                </p>
                                <p>{item.nama}</p>
                                <p>{item.email}</p>
                                <p>{item.prodi.prodi}</p>
                            </div>
                            <div className="absolute bottom-12 right-5">
                                <div className="flex gap-2 items-center">
                                    {item.berkas && (
                                        <SecondaryButton
                                            onClick={() => lihatClick(item)}
                                        >
                                            Lihat Berkas
                                        </SecondaryButton>
                                    )}
                                    <PrimaryButton
                                        onClick={() => editClick(item)}
                                    >
                                        Edit
                                    </PrimaryButton>
                                    <DangerButton
                                        onClick={() => deleteClick(item)}
                                    >
                                        Delete
                                    </DangerButton>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="bg-gray-300 px-3 py-3 rounded-lg">
                        Belum Ada Data Yang Ditambahkan
                    </div>
                )}
            </div>
        </motion.div>
    );
}
index.layout = (page) => <Admin children={page} />;
