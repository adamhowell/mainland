import React, { useState, useEffect, useRef } from "react";
import styles from "./Modals.module.scss";

const Modal = ({ children, active, onClose }) => {
  const [innerActive, setInnerActive] = useState(false);
  const modalContent = useRef();

  useEffect(() => {
    active
      ? setTimeout(() => {
          setInnerActive(active);
        }, 50)
      : setInnerActive(active);
  }, [active]);

  return (
    <div
      className={`${innerActive ? "pointer-events-auto" : "pointer-events-none"
      } overflow-auto ${
        innerActive ? "opacity-100" : "opacity-0"
      } transition duration-300 w-screen fixed top-0 left-0	h-screen z-50 flex ${
        modalContent?.current?.offsetHeight &&
        modalContent?.current?.offsetHeight > window.innerHeight
          ? "items-start"
          : "items-center"
      } justify-center`}
    >
      <div
        onClick={onClose}
        style={{
          height:
            modalContent?.current?.offsetHeight &&
            modalContent?.current?.offsetHeight > window.innerHeight
              ? `${modalContent?.current?.offsetHeight}px`
              : "100vh",
        }}
        className={`w-full absolute top-0 left-0 h-full bg-slate-900 opacity-60 shrink-0`}
      ></div>
      <div
        ref={modalContent}
        className={`${styles.modal} bg-slate-600 rounded-lg p-4 text-slate-300`}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
