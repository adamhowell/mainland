import React from "react";
import ClassSelector from "../../../StyleManager/ClassSelector";

const FlexChild = () => {
  return (
    <div className={`pt-2`}>
      <ClassSelector name="flexGrowShrink" title="Size" defaultValue="none" />
    </div>
  );
};

export default FlexChild;
