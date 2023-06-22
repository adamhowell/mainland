import React from "react";
import { useSelectedLayout } from "../../../helpers";
import styles from "./StyleManager.module.scss";
import CollapseMenu from "../../CollapseMenu";
import Classes from "./Classes";
import Layout from "./Layout";
import Spacing from "./Spacing";
import Size from "./Size";
import Position from "./Position";
import Typography from "./Typography";
import Background from "./Background";
import Effects from "./Effects";
import BoxShadow from "./BoxShadow";
import Borders from "./Borders";
import Flex from "./Flex";
import Grid from "./Grid";
import { getResponsivePrefix } from "../../../utils";

const StyleManager = () => {
  const selectedLayout = useSelectedLayout();

  return (
    <div className={`${styles.root}`}>
      <CollapseMenu title={`Classes`}>
        <Classes />
      </CollapseMenu>
      <CollapseMenu title={`Layout`}>
        <Layout />
      </CollapseMenu>
      {selectedLayout === "grid" && (
        <CollapseMenu title={`Grid`}>
          <Grid />
        </CollapseMenu>
      )}
      {selectedLayout === "flex" && (
        <CollapseMenu title={`Flex`}>
          <Flex />
        </CollapseMenu>
      )}
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
      <CollapseMenu title={`Background`}>
        <Background />
      </CollapseMenu>
      <CollapseMenu title={`Borders`}>
        <Borders />
      </CollapseMenu>
      <CollapseMenu title={`Effects`}>
        <Effects />
      </CollapseMenu>
      <CollapseMenu title={`Box Shadow`}>
        <BoxShadow />
      </CollapseMenu>
    </div>
  );
};

export default StyleManager;
