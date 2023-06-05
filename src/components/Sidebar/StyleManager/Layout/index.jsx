import React from "react";
import ClassSelector from "../../../StyleManager/ClassSelector";

const Layout = () => {

  return (
    <div className={`pt-2`}>
      <ClassSelector name="display" title="Layout" defaultValue="none" />
    </div>
  );
};

export default Layout;
