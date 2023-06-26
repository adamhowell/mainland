import React, { useState, useCallback } from "react";
import { setAttribute, addImage } from "../../../redux/data-reducer";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../../redux/modals-reducer";
import { useDropzone } from "react-dropzone";
import { toBase64 } from "../../../utils";

const UploadImage = () => {
  const { mediaLibrary } = useSelector((state) => state.data);
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.map((file)=>{
      toBase64(file).then((data)=>{
        dispatch(addImage(data));
      })
    })
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "image/jpeg": [],
      "image/png": [],
      "image/svg": [],
    },
    onDrop,
  });

  const dispatch = useDispatch();

  return (
    <>
      <h4>Add image</h4>
      <div
        {...getRootProps()}
        className={`${
          isDragActive ? "border-slate-200" : "border-slate-500"
        } transition p-5 flex items-center justify-center border h-40 rounded my-5 w-full`}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop images here ...</p>
        ) : (
          <p>Drag 'n' drop images here, or click to select files</p>
        )}
      </div>
      <h5>Images</h5>
      <div className="w-full h-96 mt-3 flex gap-3 flex-wrap">
        {mediaLibrary?.map((image, i) => (
          <img
            onClick={() => {
              dispatch(closeModal("imageSource"));
              dispatch(setAttribute("src", image));
            }}
            key={`mdi-${i}`}
            className="w-44 h-36 object-cover cursor-pointer border border-slate-500 my-3 transition hover:border-slate-200"
            src={image}
          />
        ))}
      </div>
    </>
  );
};

export default UploadImage;
