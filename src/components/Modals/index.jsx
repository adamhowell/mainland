import React from "react";
import { useSelector } from "react-redux";
import MediaLibrary from "./MediaLibrary";

const Modals = () => {
  const { isMediaLibrary } = useSelector((state) => state.modals);

  return <>{isMediaLibrary && <MediaLibrary />}</>;
};

export default Modals;
