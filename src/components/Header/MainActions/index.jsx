import React from "react";
import {
  IconDownload,
  IconCode,
  IconEye,
  IconArrowLeft,
  IconArrowRight,
} from "../../Icons";
import { Button } from "../../Buttons";
import { useDispatch, useSelector } from "react-redux";
import { setIsPreview } from "../../../redux/layout-reducer";
import { openModal } from "../../../redux/modals-reducer";

const MainActions = () => {
  const { isPreview } = useSelector((state) => state.layout);
  const dispatch = useDispatch();

  return (
    <div className="flex align-center">
      <Button onClick={() => {}} className={`text-lg h-full`}>
        <IconArrowRight />
      </Button>
      <Button onClick={() => {}} className={`text-lg h-full`}>
        <IconArrowLeft />
      </Button>
      <Button
        onClick={() => dispatch(openModal("export"))}
        className={`text-lg h-full`}
      >
        <IconCode />
      </Button>
      <Button
        active={isPreview}
        onClick={() => dispatch(setIsPreview(!isPreview))}
        className={`text-lg h-full`}
      >
        <IconEye />
      </Button>
      <Button onClick={() => {}} className={`text-lg h-full`}>
        <IconDownload />
      </Button>
    </div>
  );
};

export default MainActions;
