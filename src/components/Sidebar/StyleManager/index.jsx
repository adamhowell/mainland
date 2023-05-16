import React, { useState } from "react";
import styles from "./StyleManager.module.scss";
import { useSelector } from "react-redux";
import CollapseMenu from "../../CollapseMenu";
import Classes from "./Classes";
import Layout from "./Layout";
import Spacing from "./Spacing";
import Size from "./Size";

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
    </div>
  );
};

export default StyleManager;
