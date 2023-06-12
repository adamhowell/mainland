import React from "react";
import { IconClose, IconChevronDown, IconChevronUp } from "../Icons";
import { useDispatch, useSelector } from "react-redux";
import {
  removeNode,
  setSelectedParent,
  setSelectedChild,
} from "../../redux/data-reducer";

const Actions = ({ node }) => {
  const dispatch = useDispatch();
  const { id } = node;
  const { hoveredSection, selectedSection } = useSelector(
    (state) => state.data
  );

  const onUp = () => {
    dispatch(setSelectedParent(id));
  };

  const onDown = () => {
    dispatch(setSelectedChild(id));
  };
  const onRemove = () => {
    dispatch(removeNode(id));
  };

  const isActive = () =>
    selectedSection?.id === id || hoveredSection?.id === id;

  return (
    <div
      className={`absolute left-0 top-[-25px] h-5 flex bg-white items-center cursor-pointer py-1 px-1.5 text-xs transition-opacity opacity-${
        isActive() ? "100" : "0"
      } rounded pointer-events-${isActive() ? "auto" : "none"}`}
    >
      {hoveredSection?.id === id && !(selectedSection?.id === id) ? (
        <span className="text-black text-sm capitalize">{node.tagName}</span>
      ) : (
        <>
          <div
            onClick={() => {
              if (onUp) onUp();
            }}
            className="mr-2 text-black opacity-80 hover:opacity-100 transition-opacity"
          >
            <IconChevronUp />
          </div>
          <div
            className="mr-2 text-black opacity-80 hover:opacity-100 transition-opacity"
            onClick={() => {
              if (onDown) onDown();
            }}
          >
            <IconChevronDown />
          </div>
          <div
            className="text-black opacity-80 hover:opacity-100 transition-opacity"
            onClick={() => {
              if (onRemove) onRemove();
            }}
          >
            <IconClose />
          </div>
        </>
      )}
    </div>
  );
};

export default Actions;
