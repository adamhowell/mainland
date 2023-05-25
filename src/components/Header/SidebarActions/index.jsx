import React from "react";
import styles from "./SidebarActions.module.scss";
import { IconList, IconLayers, IconSettings, IconClose } from "../../Icons";
import { Button } from "../../Buttons";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../../../redux/layout-reducer";

export const sidebarTabs = [
  { label: "Style manager", id: "style-manager", icon: <IconList /> },
  { label: "Layers", id: "layers", icon: <IconLayers /> },
  { label: "Settings", id: "settings", icon: <IconSettings /> },
  { label: "Blocks", id: "blocks", icon: <IconClose />, style: styles.plus },
];

const Header = () => {
  const { activeTab } = useSelector((state) => state.layout);
  const dispatch = useDispatch();

  return (
    <div className={`${styles.root}`}>
      {sidebarTabs.map((tab, i) => (
        <Button
          isUnderline
          onClick={() => dispatch(setActiveTab(tab.id))}
          key={`sa-${i}`}
          active={activeTab === tab.id}
          className={tab.style ? tab.style : ""}
        >
          {tab.icon}
        </Button>
      ))}
    </div>
  );
};

export default Header;
