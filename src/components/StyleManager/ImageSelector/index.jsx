import React, { useEffect, useState } from "react";
import { useSelectedNode } from "../../../helpers";
import { IconPlus } from "../../Icons";
import { button } from "../../../styles/classes";
import { openModal } from "../../../redux/modals-reducer";
import { useDispatch } from "react-redux";

const ImageSelector = () => {
  const selectedNode = useSelectedNode();
  const dispatch = useDispatch();

  return (
    <div
      className={`mb-2 text-slate-800 flex items-center justify-between w-full`}
    >
      <span className="uppercase text-slate-400 text-sm font-medium w-2/5 shrink-0">
        Image
      </span>
      <button
        onClick={() =>
          selectedNode ? dispatch(openModal("mediaLibrary")) : null
        }
        className={`${button}`}
      >
        <IconPlus />
      </button>
    </div>
  );
};

export default ImageSelector;
