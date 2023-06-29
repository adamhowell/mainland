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
import { setBackward, setForward } from "../../../redux/data-reducer";

const MainActions = () => {
  const { isPreview } = useSelector((state) => state.layout);
  const { past, future } = useSelector((state) => state.data);
  const dispatch = useDispatch();

  return (
    <div className="flex items-center">
      <Button
        onClick={() => dispatch(setBackward())}
        disabled={past.length <= 0}
        className={`text-lg h-full`}
      >
        <IconArrowRight />
      </Button>
      <Button
        onClick={() => dispatch(setForward())}
        disabled={future.length <= 0}
        className={`text-lg h-full`}
      >
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
      <Button onClick={() => dispatch(openModal("import"))} className={`text-lg h-full`}>
        <IconDownload />
      </Button>
    </div>
  );
};

export default MainActions;
