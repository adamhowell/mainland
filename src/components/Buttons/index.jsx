import React from "react";
import styles from "./Buttons.module.scss";

export const Button = (props) => {
  const { children, size, active, className, ...rest } = props;

  const getSize = () => {
    switch (size) {
      case "md":
        return styles.md;
      case "sm":
        return styles.sm;
      case "lg":
        return styles.lg;
    }
  };

  return (
    <div
      {...rest}
      className={`${styles.root} ${getSize()} ${active ? styles.active : ""} ${
        className ? className : ""
      }`}
    >
      {children}
    </div>
  );
};

export default Button;
