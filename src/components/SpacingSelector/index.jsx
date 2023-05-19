import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setAttribute } from "../../redux/data-reducer";
import { useSelectedNode } from "../../helpers";
import { clearClassNames } from "../../utils";
import { classes } from "../../configs/tailwind";
import styles from "./SpacingSelector.module.scss";

const cls= {
 button: "focus:bg-stone-500 rounded transition text-stone-200 text-sm"
}

const SpacingSelector = ({ title, name, isColor }) => {
  const dispatch = useDispatch();
  const selectedNode = useSelectedNode();

  const options = classes[name]
    ? classes[name].map((c) => ({
        value: c,
        label: c,
        ...(isColor ? { color: getColor(c) } : {}),
      }))
    : [];

  const isActive = (name) => {
    return selectedNode?.className?.includes(name);
  };

  const onClick = (type) => {
    if (selectedNode) {
      let className = `${clearClassNames(
        selectedNode.className ? selectedNode.className : "",
        options.map((c) => c.value)
      )}`;

      className = `${className?.length ? `${className} ${type}` : type}`;

      dispatch(setAttribute("className", className));
    }
  };

  return (
    <div
      className={`${styles.root} mb-2 text-stone-800 h-32 relative rounded-lg bg-stone-600`}
    >
      <div className={`${styles.margin} w-full h-full absolute top-0 left-0`}>
        <div className="ps-4">
          <span className="uppercase text-stone-400 text-xs font-medium">
            Margin
          </span>
        </div>
        <input
          className={`${styles.button} ${cls.button} tr-left left-1/2 top-1`}
          value="0"
          type="text"
        />
        <input
          className={`${styles.button} ${cls.button} tr-top left-1 top-1/2`}
          value="0"
          type="text"
        />
        <input
          className={`${styles.button} ${cls.button} tr-top right-1 top-1/2`}
          value="0"
          type="text"
        />
        <input
          className={`${styles.button} ${cls.button} tr-left bottom-1 left-1/2`}
          value="0"
          type="text"
        />

        <div className={`${styles.padding} rounded-lg border-4 border-primary`}>
          <div className="ps-4">
            <span className="uppercase text-stone-400 text-xs font-medium">
              Padding
            </span>
          </div>
          <input
            className={`${styles.button} ${cls.button} tr-left left-1/2 top-1`}
            value="0"
            type="text"
          />
          <input
            className={`${styles.button} ${cls.button} tr-top left-1 top-1/2`}
            value="0"
            type="text"
          />
          <input
            className={`${styles.button} ${cls.button} tr-top right-1 top-1/2`}
            value="0"
            type="text"
          />
          <input
            className={`${styles.button} ${cls.button} tr-left bottom-1 left-1/2`}
            value="0"
            type="text"
          />
          <div className={`${styles.shape} bg-primary`}></div>
        </div>
      </div>
    </div>
  );
};

export default SpacingSelector;
