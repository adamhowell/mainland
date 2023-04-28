import React from "react";
import styles from "./Layout.module.scss"

const Layout = ({slotHeader, slotSidebar, slotCanvas}) => {
  return <div className={`${styles.root}`}>
    <div className={`${styles.header}`}>{slotHeader}</div>
    <div className={`${styles.inner}`}>
      <div className={`${styles.canvas}`}>{slotCanvas}</div>
      <div className={`${styles.sidebar}`}>{slotSidebar}</div>
    </div>
  </div>;
};

export default Layout;