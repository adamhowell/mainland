import React from "react";
import styles from "./BordersSelector.module.scss";

const Button = ({ position, active, ...rest }) => {
  const getBorderStyle = () => {
    switch (position) {
      case "center":
        return "border-2";
      case "left":
        return "border-l-2";
      case "right":
        return "border-r-2";
      case "top":
        return "border-t-2";
      case "bottom":
        return "border-b-2";
    }
  };

  return (
    <div
      {...rest}
      className={`${styles.button} border border-stone-${
        active ? "300" : "500"
      } z-${
        active ? "10" : "0"
      } hover:z-index-20 transition hover:border-stone-400 ${position}`}
    >
      <div
        className={`bg-stone-600 ${styles.buttonShape} ${getBorderStyle()} border-stone-${
          active ? "300" : "500"
        }`}
      ></div>
    </div>
  );
};

export default Button;
