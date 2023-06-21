import React from "react";
import ClassSelector from "../../../StyleManager/ClassSelector";

const Flex = () => {
  return (
    <div className={`pt-2`}>
      <ClassSelector name="flexDirection" title="Direction" defaultValue="none" />
      <ClassSelector name="alignItems" title="Align" defaultValue="none" />
      <ClassSelector name="justifyContent" title="Justify" defaultValue="none" />
      <ClassSelector name="flexBasis" title="Basis" defaultValue="none" />
      <ClassSelector name="flexGrowShrink" title="Size" defaultValue="none" />
      <ClassSelector name="gap" title="Gap" defaultValue="none" />
      <ClassSelector name="gapX" title="Gap X" defaultValue="none" />
      <ClassSelector name="gapY" title="Gap Y" defaultValue="none" />
    </div>
  );
};

export default Flex;
