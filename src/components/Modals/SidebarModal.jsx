import React from "react";
import { IconClose } from "../Icons";
import styles from "./Modals.module.scss";

const SidebarModal = ({ active, children, onClose }) => {
  return (
    <div
      className={`w-full h-full absolute top-0 left-0 z-10 ${
        active ? "opacity-1" : "opacity-0"
      } ${
        active ? "pointer-events-auto" : "pointer-events-none"
      } transition bg-slate-700 rounded-lg px-4 py-2`}
    >
      <div onClick={onClose} className={`${styles.close} bg-slate-600 transition text-white hover:bg-slate-700`}>
        <IconClose />
      </div>
      {children}
    </div>
  );
};

export default SidebarModal;
