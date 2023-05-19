import React from "react";
import { IconClose } from "../Icons";
import styles from "./Modals.module.scss";

const SidebarModal = ({ active, children, onClose }) => {
  return (
    <div
      className={`w-full h-full absolute top-0 left-0 z-10 opacity-${
        active ? "1" : "0"
      } pointer-events-${
        active ? "auto" : "none"
      } transition bg-stone-700 rounded-lg px-4 py-2`}
    >
      <div onClick={onClose} className={`${styles.close} bg-stone-600 transition text-white hover:bg-stone-700`}>
        <IconClose />
      </div>
      {children}
    </div>
  );
};

export default SidebarModal;
