import React from "react";
import styles from "./Header.module.scss";
import { IconList, IconLayers, IconSettings, IconClose } from "../Icons";
import { Button } from "../Buttons";
import SidebarActions from "./SidebarActions";

const Header = () => {
  return (
    <div className={`${styles.root} bg-primary text-white`}>
      <div className={`${styles.mainActions}`}></div>
      <div className={`${styles.sidebarActionsContainer}`}>
        <SidebarActions />
      </div>
    </div>
  );
};

export default Header;
