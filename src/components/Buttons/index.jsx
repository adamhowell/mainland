import React from "react";
import styles from "./Buttons.module.scss";

export const Button = (props) => {
  const { children, size, active, className, isUnderline, ...rest } = props;

  const getSize = () => {
    switch (size) {
      case "md":
        return styles.md;
      case "sm":
        return styles.sm;
      case "lg":
        return styles.lg;
      default:
        return "";
    }
  };

  return (
    <div
      {...rest}
      className={`${styles.root} ${getSize()} ${active ? styles.active : ""} ${
        isUnderline && "border-b-2 border-"
      }${active && isUnderline ? "stone-300" : "transparent"} ${
        className ? className : ""
      }`}
    >
      {children}
    </div>
  );
};
