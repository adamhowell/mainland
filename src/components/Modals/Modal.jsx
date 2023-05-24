import React, { useState, useEffect } from "react";
import styles from "./Modals.module.scss";

const Modal = ({ children, active, onClose }) => {
  const [innerActive, setInnerActive] = useState(false);

  useEffect(() => {
    active
      ? setTimeout(() => {
          setInnerActive(active);
        }, 50)
      : setInnerActive(active);
  }, [active]);

  return (
    <div
      className={`pointer-events-${innerActive ? "auto" : "none"} opacity-${
        innerActive ? "100" : "0"
      } transition duration-300 w-screen fixed top-0 left-0	h-screen z-50`}
    >
      <div
        onClick={onClose}
        className={`w-full absolute top-0 left-0	h-full bg-stone-900 opacity-60`}
      ></div>
      <div
        className={`${styles.modal} bg-stone-600 rounded-lg p-4 text-stone-300`}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
