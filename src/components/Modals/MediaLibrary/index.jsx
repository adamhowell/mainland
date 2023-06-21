import React, { useState } from "react";
import Modal from "../Modal";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../../redux/modals-reducer";
import { tab } from "../../../styles/classes";
import styles from "../Modals.module.scss";


import UploadImage from "./UploadImage";
import ExternalImages from "./ExternalImages";

const tabs = [
  { name: "External Images" },
  { name: "Generated Images" },
  { name: "Upload an image" },
  { name: "Browse Unsplash" },
];

const MediaLibrary = () => {
  const { isMediaLibrary } = useSelector((state) => state.modals);
  const dispatch = useDispatch();
  const [active, setActive] = useState(0);

  const renderTab = () => {
    switch (active) {
      case 0:
        return <ExternalImages />;
      case 2:
        return <UploadImage />;
    }
  };

  return (
    <Modal
      onClose={() => dispatch(closeModal("mediaLibrary"))}
      active={isMediaLibrary}
    >
      <div className={`${styles.mediaLibrary}`}>
        <div className="flex items-center">
          {tabs.map((t, i) => (
            <button
              onClick={() => setActive(i)}
              key={`tbi-${i}`}
              className={`${tab} ${
                active === i ? "text-slate-200" : "text-slate-400"
              } ${active === i ? "border-slate-200" : "border-transparent"}`}
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
