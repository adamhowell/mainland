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
      className={`${styles.button} border ${
        active ? "border-slate-300" : "border-slate-500"
      } ${
        active ? "z-10" : "z-0"
      } hover:z-index-20 transition hover:border-slate-400 ${position}`}
    >
      <div
        className={`bg-slate-600 ${styles.buttonShape} ${getBorderStyle()} ${
          active ? "border-slate-300" : "border-slate-500"
        }`}
      ></div>
    </div>
  );
};

export default Button;
