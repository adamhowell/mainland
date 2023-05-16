import React from "react";
import styles from "./StyleManager.module.scss";
import CollapseMenu from "../../CollapseMenu";
import Classes from "./Classes";
import Layout from "./Layout";
import Spacing from "./Spacing";
import Size from "./Size";
import Position from "./Position";
import Typography from "./Typography";

const StyleManager = () => {
  return (
    <div className={`${styles.root}`}>
      <CollapseMenu title={`Classes`}>
        <Classes />
      </CollapseMenu>
      <CollapseMenu title={`Layout`}>
        <Layout />
      </CollapseMenu>
      <CollapseMenu title={`Spacing`}>
        <Spacing />
      </CollapseMenu>
      <CollapseMenu title={`Size`}>
        <Size />
      </CollapseMenu>
      <CollapseMenu title={`Position`}>
        <Position />
      </CollapseMenu>
      <CollapseMenu title={`Typography`}>
        <Typography />
      </CollapseMenu>
    </div>
  );
};

export default StyleManager;
