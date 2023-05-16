import React from "react";
import SizeSelector from "./SizeSelector";

const Size = () => {
  return (
    <div className={`pt-2`}>
      <SizeSelector name="width" title="Width" defaultValue="auto" />
      <SizeSelector name="minWidth" title="Min width" defaultValue="0" />
      <SizeSelector name="maxWidth" title="Max width" defaultValue="none" />
      <div className="pb-3"></div>
      <SizeSelector name="height" title="Height" defaultValue="auto" />
      <SizeSelector name="minHeight" title="Min height" defaultValue="0" />
      <SizeSelector name="maxHeight" title="Max height" defaultValue="none" />
    </div>
  );
};

export default Size;
