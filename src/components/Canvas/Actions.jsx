import React, { useCallback } from "react";
import styles from "./Canvas.module.scss";
import { IconClose, IconChevronDown, IconChevronUp } from "../Icons";
import { useDispatch, useSelector } from "react-redux";
import { setDom, removeNode } from "../../redux/data-reducer";

const Actions = ({ node }) => {
  const dispatch = useDispatch();
  const { id } = node;
  const { dom, hoveredSection, selectedSection } = useSelector(
    (state) => state.data
  );

  const onUp = (i) => {
    const t = [...dom];
    if (i != 0) {
      const element = t.splice(i, 1)[0];
      t.splice(i - 1, 0, element);
      dispatch(setDom(t));
    }
  };

  const onDown = (i) => {
    const t = [...dom];
    if (i < dom.length) {
      const element = t.splice(i, 1)[0];
      t.splice(i + 1, 0, element);
      dispatch(setDom(t));
    }
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
