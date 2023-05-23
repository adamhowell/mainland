import React from "react";
import ClassSelector from "../../../StyleManager/ClassSelector";
import AlignSelector from "../../../StyleManager/AlignSelector";

const Typography = () => {
  return (
    <div className={`pt-2`}>
      <AlignSelector name="textAlign" title="ALign" defaultValue="left"/>
      <ClassSelector name="fontSize" title="Size" defaultValue="none" />
      <ClassSelector name="textColor" title="Color" defaultValue="none" isColor />
      <ClassSelector name="fontWeight" title="Weight" defaultValue="none" />
      <ClassSelector name="letterSpacing" title="Spacing" defaultValue="none" />
      <ClassSelector name="lineHeight" title="Height" defaultValue="none" />
      <ClassSelector name="textTransform" title="Transform" defaultValue="none" />
      <ClassSelector name="fontFamily" title="Family" defaultValue="none" />
    </div>
  );
};

export default Typography;
