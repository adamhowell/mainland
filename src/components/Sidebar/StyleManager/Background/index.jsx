import React from "react";
import ClassSelector from "../../../StyleManager/ClassSelector";
import ImageSelector from "../../../StyleManager/ImageSelector";

const Background = () => {
  return (
    <div className={`pt-2`}>
      <ImageSelector />
      <ClassSelector name="backgroundColor" title="Color" defaultValue="none" isColor />
    </div>
  );
};

export default Background;
