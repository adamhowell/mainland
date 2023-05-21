import React from "react";
import styles from "./Layout.module.scss";

const Layout = ({ slotHeader, slotSidebar, slotCanvas, slotBreadcrumb }) => {
  return (
    <div className={`${styles.root}`}>
      <div className={`${styles.header}`}>{slotHeader}</div>
      <div className={`${styles.inner}`}>
        <div className={`${styles.canvasContainer}`}>
          <div className={`${styles.canvas}`}>{slotCanvas}</div>
          <div className={`${styles.breadcrumb}`}>{slotBreadcrumb}</div>
        </div>
        <div className={`${styles.sidebar}`}>{slotSidebar}</div>
      </div>
    </div>
  );
};

export default Layout;
