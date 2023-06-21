import React, { useState } from "react";
import { useSelectedNode } from "../../../helpers";
import { setAttribute, addImage } from "../../../redux/data-reducer";
import Input from "../../Inputs/Input";
import { buttonSimple } from "../../../styles/classes";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../../redux/modals-reducer";

const UploadImage = () => {
  const { mediaLibrary } = useSelector((state) => state.data);

  const selectedNode = useSelectedNode();
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const onAdd = () => {
    setValue("");
    dispatch(addImage(value));
  };

  return (
    <>
      <h4>Add base64 image</h4>
      <div className="flex items-center">
        <Input
          disabled={!selectedNode}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="data:image/jpeg;base64,/9j/4AA..."
          className={`mt-3 mb-3 bg-slate-700`}
        />
        <button
          disabled={!value}
          onClick={() => onAdd()}
          className={`${buttonSimple} whitespace-nowrap pointer-events-${
            !value ? "none" : "auto"
          } ${!value ? "opacity-30" : "opacity-100"}`}
        >
          Add
        </button>
      </div>
      <h5>Images</h5>
      <div className="w-full h-96 mt-3">
        {mediaLibrary?.map((image, i) => (
          <img
            onClick={() => {
              dispatch(closeModal("mediaLibrary"));
              dispatch(setAttribute("backgroundImage", image));
            }}
            key={`mdi-${i}`}
            className="w-48 h-40 object-cover cursor-pointer border border-slate-500 my-3 transition hover:border-slate-200"
            src={image}
          />
        ))}
      </div>
    </>
  );
};

export default UploadImage;
