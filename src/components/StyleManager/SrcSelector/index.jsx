import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { setAttribute } from "../../../redux/data-reducer";
import { useSelectedNode } from "../../../helpers";
import Label from "../../Inputs/Label";
import { useDropzone } from "react-dropzone";
import { toBase64 } from "../../../utils";

const SrcSelector = ({ property, label }) => {
  const dispatch = useDispatch();
  const selectedNode = useSelectedNode();

  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles)
    acceptedFiles.map((file)=>{
      toBase64(file).then((data)=>{
        dispatch(setAttribute(property, data));
      })
    })
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "image/jpeg": [],
      "image/png": [],
      "image/svg": [],
    },
    multiple: false,
    onDrop,
  });

  return (
    <div className={`mb-2`}>
      <div
        {...getRootProps()}
        className={`${
          isDragActive ? "border-slate-200" : "border-slate-500"
        } transition p-5 flex items-center justify-center border h-40 rounded my-5 w-full text-center`}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop image here ...</p>
        ) : (
          <p>Drag 'n' drop image here, or click to select file</p>
        )}
      </div>
    </div>
  );
};

export default SrcSelector;
