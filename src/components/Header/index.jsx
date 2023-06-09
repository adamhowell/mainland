import React from "react";
import styles from "./Header.module.scss";
import { Button } from "../Buttons";
import SidebarActions from "./SidebarActions";
import { useSelector, useDispatch } from "react-redux";
import { setResponsiveView } from "../../redux/layout-reducer";
import ResponsiveActions from "./ResponsiveActions";
import MainActions from "./MainActions";

const Header = () => {
  const { responsiveView } = useSelector((state) => state.layout);
  const dispatch = useDispatch();

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
