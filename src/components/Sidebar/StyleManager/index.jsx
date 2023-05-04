import React from "react";
import styles from "./StyleManager.module.scss";
import { useSelector } from "react-redux";

const StyleManager = () => {
  const { selectedSection } = useSelector((state) => state.data);

  return (
    <div className={`${styles.root} p-4`}>
      {selectedSection && (
        <>
          {" "}
          Selected: <span className="opacity-50">{selectedSection?.tagName}</span>{" "}
          <span className="opacity-50">#{selectedSection?.id}</span>
        </>
      )}
    </div>
  );
};

export default StyleManager;
