import React from "react";
import styles from "./Header.module.scss";
import SidebarActions from "./SidebarActions";
import ResponsiveActions from "./ResponsiveActions";
import MainActions from "./MainActions";

const Header = () => {
  return (
    <div className={`${styles.root} bg-slate-800 text-white`}>
      <div className={`${styles.mainActions} h-full`}>
        <ResponsiveActions />
        <MainActions />
      </div>
      <div className={`${styles.sidebarActionsContainer}`}>
        <SidebarActions />
      </div>
    </div>
  );
};

export default Header;
