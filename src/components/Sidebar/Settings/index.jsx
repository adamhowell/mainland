import React from "react";
import styles from "./Settings.module.scss";
import CollapseMenu from "../../CollapseMenu";
import PropertySelector from "../../StyleManager/PropertySelector";
import TagSelector from "../../StyleManager/TagSelector";
import { isTagVariants } from "../../../utils";
import { useSelectedNode } from "../../../helpers";

const StyleManager = () => {
  const selectedNode = useSelectedNode();

  return (
    <div className={`${styles.root}`}>
      <CollapseMenu title={`Details`}>
        <PropertySelector property="id" />
      </CollapseMenu>
      <CollapseMenu title={`Advanced`}>
        <PropertySelector isTextArea property="style" label="Custom CSS" />
      </CollapseMenu>
      {selectedNode?.tagName === "a" && (
        <CollapseMenu title={`Link`}>
          <PropertySelector property="href" />
        </CollapseMenu>
      )}
      {selectedNode?.tagName === "img" && (
        <CollapseMenu title={`Image source`}>
          <PropertySelector property="src" />
        </CollapseMenu>
      )}
      {isTagVariants(selectedNode?.tagName) && (
        <CollapseMenu title={`Tag`}>
          <TagSelector />
        </CollapseMenu>
      )}
    </div>
  );
};

export default StyleManager;
