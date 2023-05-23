import React from "react";
import ClassSelector from "../../../StyleManager/ClassSelector";

const Size = () => {
  return (
    <div className={`pt-2`}>
      <ClassSelector name="width" title="Width" defaultValue="auto" />
      <ClassSelector name="minWidth" title="Min width" defaultValue="0" />
      <ClassSelector name="maxWidth" title="Max width" defaultValue="none" />
      <div className="pb-3"></div>
      <ClassSelector name="height" title="Height" defaultValue="auto" />
      <ClassSelector name="minHeight" title="Min height" defaultValue="0" />
      <ClassSelector name="maxHeight" title="Max height" defaultValue="none" />
    </div>
  );
};

export default Size;
