import React from "react";
import ClassSelector from "../../../StyleManager/ClassSelector";

const Flex = () => {
  return (
    <div className={`pt-2`}>
      <ClassSelector name="gridColumns" title="Columns" defaultValue="none" />
      <ClassSelector name="gridRows" title="Rows" defaultValue="none" />
      <ClassSelector name="gap" title="Gap" defaultValue="none" />
      <ClassSelector name="gapX" title="Gap X" defaultValue="none" />
      <ClassSelector name="gapY" title="Gap Y" defaultValue="none" />
    </div>
  );
};

export default Flex;