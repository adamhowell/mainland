import React from "react";
import ClassSelector from "../../../StyleManager/ClassSelector";

const Position = () => {
  return (
    <div className={`pt-2`}>
      <ClassSelector name="position" title="Position" defaultValue="none" />
      <ClassSelector name="zIndex" title="Z-index" defaultValue="none" />
    </div>
  );
};

export default Position;
