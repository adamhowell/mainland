import React, { useCallback } from "react";
import styles from "./Canvas.module.scss";
import { IconClose, IconChevronDown, IconChevronUp } from "../Icons";
import { useDispatch, useSelector } from "react-redux";
import { setDom, removeNode, setSelectedParent, setSelectedChild } from "../../redux/data-reducer";

const Actions = ({ node }) => {
  const dispatch = useDispatch();
  const { id } = node;
  const { dom, hoveredSection, selectedSection } = useSelector(
    (state) => state.data
  );

  const onUp = () => {
    dispatch(setSelectedParent(id))
  };

  const onDown = () => {
    dispatch(setSelectedChild(id));
  };
  const onRemove = () => {
    dispatch(removeNode(id));
  };

  return (
    <div
      className={`${styles.actions} ${
        selectedSection?.id === id || hoveredSection?.id === id ? "active" : ""
      }`}
    >
      {hoveredSection?.id === id && !(selectedSection?.id === id) ? (
        <span>{node.tagName}</span>
      ) : (
        <>
          <div
            onClick={() => {
              if (onUp) onUp();
            }}
            className="mr-2"
          >
            <IconChevronUp />
          </div>
          <div
            className="mr-2"
            onClick={() => {
              if (onDown) onDown();
            }}
          >
            <IconChevronDown />
          </div>
          <div
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
