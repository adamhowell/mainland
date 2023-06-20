import React from "react";
import styles from "./Buttons.module.scss";

export const Button = (props) => {
  const { children, size, active, className, disabled, isUnderline, ...rest } = props;

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
      className={`${styles.root} ${disabled ? "opacity-20 pointer-events-none" : "opacity-60"} hover:opacity-100 ${getSize()} ${active ? styles.active : ""} ${
        isUnderline && "border-b-2 "
      }${active && isUnderline ? "border-stone-300" : "border-transparent"} ${
        className ? className : ""
      }`}
    >
      {children}
    </div>
  );
};
