import React from "react";
import { useSelector } from "react-redux";
import MediaLibrary from "./MediaLibrary";
import Export from "./Export";
import AI from "./AI";

const Modals = () => {
  const { isMediaLibrary, isExport, isAI } = useSelector((state) => state.modals);

  return (
    <>
      {isMediaLibrary && <MediaLibrary />}
      {isExport && <Export />}
      {isAI && <AI />}
    </>
  );
};

export default Modals;
