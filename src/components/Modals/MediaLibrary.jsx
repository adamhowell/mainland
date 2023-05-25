import React, { useState } from "react";
import Modal from "./Modal";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../redux/modals-reducer";
import { tab } from "../../styles/classes";
import Input from "../Inputs/Input";
import styles from "./Modals.module.scss";
import { setAttribute } from "../../redux/data-reducer";
import { useSelectedNode } from "../../helpers";

const tabs = [
  { name: "External Images" },
  { name: "Generated Images" },
  { name: "Uploaded Images" },
  { name: "Browse Unsplash" },
];

const MediaLibrary = () => {
  const { isMediaLibrary } = useSelector((state) => state.modals);
  const dispatch = useDispatch();
  const [active, setActive] = useState(0);
  const selectedNode = useSelectedNode();

  const renderTab = () => {
    switch (active) {
      case 0:
        return (
          <>
            <h4>
              {selectedNode?.backgroundImage ? "Replace image" : "Add image"}
            </h4>
            <Input
              disabled={!selectedNode}
              defaultValue={selectedNode?.backgroundImage ? selectedNode?.backgroundImage : ""}
              onChange={(e) =>
                dispatch(setAttribute("backgroundImage", e.target.value))
              }
              placeholder="https://example.com/images/img.png"
              className={`mt-3 mb-3 bg-stone-700`}
            />
            <h5>Preview</h5>
            <div className="border border-stone-500 w-full h-96 mt-3">
              {selectedNode?.backgroundImage && (
                <img
                  className="w-full h-full object-cover"
                  src={selectedNode?.backgroundImage}
                />
              )}
            </div>
          </>
        );
    }
  };

  return (
    <Modal
      onClose={() => dispatch(closeModal("mediaLibrary"))}
      active={isMediaLibrary}
    >
      <div className={`${styles.mediaLibrary}`}>
        <div className="flex align-center">
          {tabs.map((t, i) => (
            <button
              onClick={() => setActive(i)}
              key={`tbi-${i}`}
              className={`${tab} text-stone-${
                active === i ? "200" : "400"
              } border-${active === i ? "stone-200" : "transparent"}`}
            >
              {t.name}
            </button>
          ))}
        </div>
        <div className="mt-6">{renderTab()}</div>
      </div>
    </Modal>
  );
};

export default MediaLibrary;
