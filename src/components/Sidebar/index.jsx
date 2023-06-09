import React from "react";
import styles from "./Sidebar.module.scss";
import { useSelector } from "react-redux";
import Blocks from "./Blocks";
import Layers from "./Layers";
import Settings from "./Settings";
import StyleManager from "./StyleManager";

const Sidebar = () => {
  const { activeTab } = useSelector((state) => state.layout);

  const renderTab = () => {
    switch (activeTab) {
      case "style-manager":
        return <StyleManager />;
      case "blocks":
        return <Blocks />;
      case "layers":
        return <Layers />;
      case "settings":
        return <Settings />;
    }
  };

  return (
    <div className={`${styles.root} bg-slate-800 text-white`}>{renderTab()}</div>
  );
};

export default Sidebar;
