import React from "react";
import { useSelector } from "react-redux";
import MediaLibrary from "./MediaLibrary";
import Export from "./Export";

const Modals = () => {
  const { isMediaLibrary, isExport } = useSelector((state) => state.modals);

  return (
    <>
      {isMediaLibrary && <MediaLibrary />}
      {isExport && <Export />}
    </>
  );
};

export default Modals;
