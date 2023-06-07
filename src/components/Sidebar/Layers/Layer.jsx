import React from "react";
import styles from "./Layers.module.scss";
import { useDrag } from "react-dnd";
import { IconEye, IconTriangle, IconMove } from "../../Icons";
import { useCollapse } from "react-collapsed";

const Layer = (props) => {
  const { children, data, active, className, ...rest } = props;
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse({
    defaultExpanded: false,
  });

  const [{ opacity }, drag] = useDrag(() => ({
    type: "layer",
    item: () => {
      return { data };
    },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.2 : 0.6,
    }),
  }));

  return (
    <>
      <div
        {...rest}
        ref={drag}
        style={{ opacity }}
        className={`flex text-sm items-center justify-between border-b border-stone-600 bg-stone-700 p-2 border-solid text-white ${
          active ? styles.active : ""
        } ${className ? className : ""}`}
      >
        <div className="flex items-center">
          <IconEye className="mr-3" />
          {data.children?.length > 0 && (
            <IconTriangle
              {...getToggleProps()}
              className={`${styles.icon} me-2 transition-transform ${
                isExpanded ? "rotate-0" : "rotate-180"
              }`}
            />
          )}
          {data.label ? `${data.label} (${data.tagName})` : data.tagName}
        </div>
        <div className="flex items-center">
          {data.children?.length > 0 && <span className="text-xs mr-2">{data.children?.length}</span>}
          <IconMove />
        </div>
      </div>
      {children && (
        <div className="pl-2" {...getCollapseProps()}>
          {children}
        </div>
      )}
    </>
  );
};

export default Layer;
