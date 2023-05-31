import React from "react";
import styles from "./Settings.module.scss";
import CollapseMenu from "../../CollapseMenu";
import PropertySelector from "../../StyleManager/PropertySelector";

const StyleManager = () => {
  return (
    <div className={`${styles.root}`}>
      <CollapseMenu title={`Details`}>
        <PropertySelector property="id" />
      </CollapseMenu>
      <CollapseMenu title={`Advanced`}>
        <PropertySelector isTextArea property="style" label="Custom CSS"/>
      </CollapseMenu>
    </div>
  );
};

export default StyleManager;
