import React from "react";
import ClassSelector from "../../../StyleManager/ClassSelector";

const Effects = () => {
  return (
    <div className={`pt-2`}>
      <ClassSelector name="opacity" title="Opacity" defaultValue="none" />
      <ClassSelector name="backgroundBlendMode" title="Blending" defaultValue="none" />
      <ClassSelector name="cursor" title="Cursor" defaultValue="default" />
      <ClassSelector name="blur" title="Blur" defaultValue="none" />
    </div>
  );
};

export default Effects;
