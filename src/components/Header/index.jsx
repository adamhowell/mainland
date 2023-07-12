import React from "react";
import styles from "./Header.module.scss";
import SidebarActions from "./SidebarActions";
import ResponsiveActions from "./ResponsiveActions";
import MainActions from "./MainActions";
import { useSelector } from "react-redux";
import { IconArrowLeftShort } from "../Icons";
import { Button } from "../Buttons";

const Header = () => {
  const { config } = useSelector((state) => state.data);

  return (
    <div className={`${styles.root} bg-slate-800 text-white`}>
      <div className={`${styles.mainActions} h-full`}>
        {config?.redirectURL ? (
          <div className="h-full flex">
            <Button
              onClick={() => window.location.href = config?.redirectURL}
              className={`text-md bg-slate-900 h-full`}
            >
              <IconArrowLeftShort />
            </Button>
            <ResponsiveActions />
          </div>
        ) : (
          <ResponsiveActions />
        )}
        <MainActions />
      </div>
      <div className={`${styles.sidebarActionsContainer}`}>
        <SidebarActions />
      </div>
    </div>
  );
};

export default Header;
