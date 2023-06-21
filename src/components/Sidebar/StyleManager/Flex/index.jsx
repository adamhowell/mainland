import React from "react";
import ClassSelector from "../../../StyleManager/ClassSelector";
import RangeSelector from "../../../StyleManager/RangeSelector";

const Flex = () => {
  return (
    <div className={`pt-2`}>
      <ClassSelector name="flexDirection" title="Direction" defaultValue="none" />
      <ClassSelector name="alignItems" title="Align" defaultValue="none" />
      <ClassSelector name="justifyContent" title="Justify" defaultValue="none" />
      <ClassSelector name="flexBasis" title="Basis" defaultValue="none" />
      <ClassSelector name="flexGrowShrink" title="Size" defaultValue="none" />
      <RangeSelector name="gap" title="Gap" defaultValue="none" />
      <RangeSelector name="gapX" title="Gap X" defaultValue="none" />
      <RangeSelector name="gapY" title="Gap Y" defaultValue="none" />
    </div>
  );
};

export default Flex;
