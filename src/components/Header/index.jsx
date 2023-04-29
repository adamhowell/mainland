import React from "react";
import styles from "./Header.module.scss";
import { IconList, IconLayers, IconSettings, IconClose } from "../Icons";
import { Button } from "../Buttons";

const Header = () => {
  return (
    <div className={`${styles.root} bg-primary text-white`}>
      <div className={`${styles.mainActions}`}></div>
      <div className={`${styles.sidebarActions}`}>
        <Button active={true}>
          <IconList />
        </Button>
        <Button>
          <IconLayers />
        </Button>
        <Button>
          <IconSettings />
        </Button>
        <Button className={`${styles.plus}`}>
          <IconClose />
        </Button>
      </div>
    </div>
  );
};

export default Header;
