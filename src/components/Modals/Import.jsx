import React, { useState } from "react";
import Modal from "./Modal";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../redux/modals-reducer";
import TextArea from "../Inputs/TextArea";
import { buttonSimple } from "../../styles/classes";
import { addToDom, replaceDom } from "../../redux/data-reducer";
import { clearHTML } from "../../utils";

const Export = () => {
  const { isImport } = useSelector((state) => state.modals);
  const dispatch = useDispatch();
  const [html, setHtml] = useState("");

  const onAdd = () => {
    dispatch(addToDom({ label: "Import", content: clearHTML(html) }));
    dispatch(closeModal("import"));
  };

  const onReplace = () => {
    dispatch(replaceDom({ label: "Import", content: clearHTML(html) }));
    dispatch(closeModal("import"));
  };

  return (
    <Modal onClose={() => dispatch(closeModal("import"))} active={isImport}>
      <h4 className="mb-3">Import HTML</h4>
      <TextArea
        onChange={(e) => setHtml(e.target.value)}
        defaultValue={html}
        border
        rows={16}
      />
      <div className="text-center mt-4">
        <button
          disabled={!html}
          onClick={() => onAdd()}
          className={`${buttonSimple} ${
            !html ? "pointer-events-none" : "pointer-events-auto"
          } ${!html ? "opacity-30" : "opacity-100"}`}
        >
          Add to the Canvas
        </button>
        <button
          disabled={!html}
          onClick={() => onReplace()}
          className={`${buttonSimple} ${
            !html ? "pointer-events-none" : "pointer-events-auto"
          } ${!html ? "opacity-30" : "opacity-100"}`}
        >
          Replace
        </button>
      </div>
    </Modal>
  );
};

export default Export;
