import React from "react";
import ClassSelector from "../../../ClassSelector";

const Background = () => {
  return (
    <div className={`pt-2`}>
      <ClassSelector name="backgroundColor" title="Color" defaultValue="none" isColor />
    </div>
  );
};

export default Background;