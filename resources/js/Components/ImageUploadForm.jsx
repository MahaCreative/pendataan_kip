import React, { useState } from "react";

export default function ImageUploadForm({ setData }) {
    const [selectedImage, setSelectedImage] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);
    const handleChangeImage = (event) => {
        const file = event.target.files[0];

        if (file) {
            setSelectedImage(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewImage(reader.result);
                setData("foto", file);
            };
            reader.readAsDataURL(file);
            onUpload(file);
        } else {
            setSelectedImage(null);
            setPreviewImage(null);
            setData("foto", "");
        }
    };
    return (
        <div className="flex gap-3 relative">
            {previewImage ? (
                <div className="flex flex-col items-center justify-center w-[20vw] bg-slate-400/50 backdrop-blur-sm p-2 rounded-md">
                    <img
                        className="h-12 object-contain object-center"
                        src={previewImage}
                    />
                    <p className="text-white text-center my-1">Preview Image</p>
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center w-[20vw] bg-slate-400/50 backdrop-blur-sm p-2 rounded-md">
                    <img
                        className="h-12 object-contain object-center"
                        src="./storage/img/defalt_user.jpg"
                        alt=""
                    />
                    <p className="text-white text-center my-1">Preview Image</p>
                </div>
            )}
            <label
                htmlFor="fileInput"
                className="w-[90vw] flex items-center px-4 py-2 bg-white text-blue-500 rounded-md shadow-md tracking-wide border border-blue-500 cursor-pointer hover:bg-blue-500 hover:text-white"
            >
                <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                >
                    <path
                        fillRule="evenodd"
                        d="M4 0C1.79086 0 0 1.79086 0 4V16C0 18.2091 1.79086 20 4 20H16C18.2091 20 20 18.2091 20 16V4C20 1.79086 18.2091 0 16 0H4ZM9 16H4C2.89543 16 2 15.1046 2 14V7H4V9H16V7H18V14C18 15.1046 17.1046 16 16 16H11V11H9V16Z"
                    />
                </svg>
                Pilih File
                <input
                    onClick={handleChangeImage}
                    id="fileInput"
                    type="file"
                    name="foto"
                    className="hidden"
                />
            </label>
        </div>
    );
}
