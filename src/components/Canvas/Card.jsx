import React, { useState, useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { IconClose, IconChevronDown, IconChevronUp } from "../Icons";
import styles from "./Canvas.module.scss";
import {
  setSelectedSection,
  setHoveredSection,
} from "../../redux/data-reducer";
import { useDispatch, useSelector } from "react-redux";

const style = {
  position: "relative",
  border: "1px dashed #696969",
  backgroundColor: "transparent",
  cursor: "move",
};
export const Card = ({
  text,
  index,
  moveCard,
  children,
  onUp,
  onDown,
  onRemove,
  node,
}) => {
  const { id, className } = node;
  const ref = useRef(null);
  const dispatch = useDispatch();
  const { hoveredSection, selectedSection } = useSelector(
    (state) => state.data
  );

  const [dropTargetProps, drop] = useDrop({
    accept: ["card", "div"],
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
        id: id,
      };
    },
    drop(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragId = item.id;
      const hoverId = id;

      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();

      if(clientOffset) {
        const hoverClientY = clientOffset.y - hoverBoundingRect.top;
        if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
          return;
        }
        if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
          return;
        }
        moveCard(dragId, hoverId, node);
        item.index = hoverIndex;
      }
    },
  });
  const [dragTargetProps, drag] = useDrag({
    type: "card",
    item: () => {
      return { id, index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      id: id,
    }),
  });
  const opacity = dragTargetProps.isDragging ? 0 : 1;
  drag(drop(ref));

  const onMouseEnter = (e) => {
    if (e.target.id === id) dispatch(setHoveredSection(node));
  };

  const onMouseLeave = () => {
    dispatch(setHoveredSection(null));
  };

  const onClick = (e) => {
    if (e.target.id === id) dispatch(setSelectedSection(node));
  };

  return (
    <node.tagName
      className={`${styles.card} ${node.children.length ? "" : "empty"} ${className ? className : ""}`}
      id={id}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      ref={ref}
      style={{
        ...style,
        opacity,
        border:
          selectedSection?.id === id || hoveredSection?.id === id
            ? "1px solid #adadad"
            : "1px dashed #696969",
      }}
      data-handler-id={dropTargetProps.handlerId}
    >
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
      {children}
    </node.tagName>
  );
};
