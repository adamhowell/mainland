import React from "react";
import { useSelector } from "react-redux";
import MediaLibrary from "./MediaLibrary";
import Export from "./Export";
import AI from "./AI";
import Import from "./Import";
import ImageSource from "./ImageSource";

const Modals = () => {
  const { isMediaLibrary, isImageSource, isExport, isAI, isImport } = useSelector((state) => state.modals);

  return (
    <>
      {isImageSource && <ImageSource />}
      {isMediaLibrary && <MediaLibrary />}
      {isExport && <Export />}
      {isAI && <AI />}
      {isImport && <Import />}
    </>
  );
};

export default Modals;
