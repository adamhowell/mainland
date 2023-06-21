import React from "react";
import ClassSelector from "../../../StyleManager/ClassSelector";
import RangeSelector from "../../../StyleManager/RangeSelector";

const Flex = () => {
  return (
    <div className={`pt-2`}>
      <ClassSelector name="gridColumns" title="Columns" defaultValue="none" />
      <ClassSelector name="gridRows" title="Rows" defaultValue="none" />
      <RangeSelector name="gap" title="Gap" defaultValue="none" />
      <RangeSelector name="gapX" title="Gap X" defaultValue="none" />
      <RangeSelector name="gapY" title="Gap Y" defaultValue="none" />
    </div>
  );
};

export default Flex;