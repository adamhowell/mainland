import React, { useState } from "react";
import Modal from "../Modal";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../../redux/modals-reducer";
import { tab } from "../../../styles/classes";
import styles from "../Modals.module.scss";

import UploadImage from "./UploadImage";
import ExternalImages from "./ExternalImages";

const tabs = [
  { name: "Upload image" },
  { name: "Paste URL" },
];

const ImageSource = () => {
  const { isImageSource } = useSelector((state) => state.modals);
  const dispatch = useDispatch();
  const [active, setActive] = useState(0);

  const renderTab = () => {
    switch (active) {
      case 0:
        return <UploadImage />;
      case 1:
        return <ExternalImages />;
    }
  };

  return (
    <Modal
      onClose={() => dispatch(closeModal("imageSource"))}
      active={isImageSource}
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

export default ImageSource;
