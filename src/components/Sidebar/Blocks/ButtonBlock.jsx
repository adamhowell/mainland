import React from "react";
import styles from "./Blocks.module.scss";
import { useDrag } from 'react-dnd'

const ButtonBlock = (props) => {
  const { children, size, active, className, data, ...rest } = props;

  const [{ opacity }, drag] = useDrag(
    () => ({
      type:"block",
      item: () => {
        return { data };
      },
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.2 : 0.6,
      }),
    })
  )

  return (
    <div
      {...rest}
      ref={drag}
      style={{ opacity }}
      className={`${styles.buttonBlock} text-white ${
        active ? styles.active : ""
      } ${className ? className : ""}`}
    >
      {children}
    </div>
  );
};

export default ButtonBlock;
