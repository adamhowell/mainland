import React from "react";
import styles from "./CollapseMenu.module.scss";
import { useCollapse } from "react-collapsed";
import { IconTriangle } from "../Icons";

const CollapseMenu = ({ children, title }) => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse(
    {
      defaultExpanded: true,
    }
  );

  return (
    <div className={`${styles.root} border-b p-4 border-slate-600`}>
      <button className={`${styles.toggler}`} {...getToggleProps()}>
        <IconTriangle
          className={`${styles.icon} me-2 transition-transform ${
            isExpanded ? "rotate-0" : "rotate-180"
          }`}
        />
        <span>{title}</span>
      </button>
      <section {...getCollapseProps()}>
        <div>{children}</div>
      </section>
    </div>
  );
};

export default CollapseMenu;
