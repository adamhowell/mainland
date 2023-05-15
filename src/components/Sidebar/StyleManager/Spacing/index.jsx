import React, { useState } from "react";
import styles from "./Spacing.module.scss";
import { useSelector } from "react-redux";

const Spacing = () => {
  const { selectedSection } = useSelector((state) => state.data);

  return (
    <div className={`${styles.root} p-4`}>
      Spacing
    </div>
  );
};

export default Spacing;
