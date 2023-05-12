import React, { useRef, useState, useEffect, useMemo } from "react";
import { useDrag, useDrop } from "react-dnd";
import styles from "./Canvas.module.scss";
import {
  setSelectedSection,
  setHoveredSection,
  updateText,
  addToNode,
  setHighlight,
} from "../../redux/data-reducer";
import { useDispatch, useSelector } from "react-redux";
import Actions from "./Actions";
import { htmlToJson } from "../../utils";
import ContentEditable from "react-contenteditable";

const colorBright = "#adadad";
const colorDark = "#696969";

const style = {
  position: "relative",
  border: `1px dashed ${colorDark}`,
  backgroundColor: "transparent",
};

export const Card = ({ index, moveCard, children, node, isEditable }) => {
  const { id, className } = node;
  const ref = useRef(null);
  const dispatch = useDispatch();
  const { hoveredSection, selectedSection, dropHighlight } = useSelector(
    (state) => state.data
  );
  const [isCanEdit, setIsCanEdit] = useState(0);

  useEffect(() => {
    if (!hoveredSection) clearHightLight();
  }, [hoveredSection]);

  const highlight = (monitor) => {
    const hoverBoundingRect = ref.current?.getBoundingClientRect();
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
    const hoverMiddleX = (hoverBoundingRect.right - hoverBoundingRect.left) / 2;
    const clientOffset = monitor.getClientOffset();

    if (clientOffset) {
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      const hoverClientX = clientOffset.x - hoverBoundingRect.left;

      const left = (hoverClientX * 100) / hoverMiddleX;
      const top = (hoverClientY * 100) / hoverMiddleY;

      const offset = 50;

      const percentages = [
        { position: "top", value: top < 100 && top < offset ? top : 0 },
        { position: "left", value: left < 100 && left < offset ? left : 0 },
        {
          position: "right",
          value: left > 100 && left - 100 > offset ? 100 - (left - 100) : 0,
        },
        {
          position: "bottom",
          value: top > 100 && top - 100 > offset ? 100 - (top - 100) : 0,
        },
      ];

      const greater = percentages.sort((a, b) => a.value - b.value).pop();

      greater.value > 0
        ? dispatch(setHighlight({ id: id, position: greater.position }))
        : !node.isClosed ? dispatch(setHighlight({ id: id, position: "all" })) : dispatch(setHighlight(null));
    }
  };

  const [{ handlerId }, drop] = useDrop({
    accept: ["card", "block"],
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
        id: id,
      };
    },
    drop(item, monitor) {
      if (
        (!item.data && !node) ||
        (!item.data && !hoveredSection) ||
        monitor.didDrop() ||
        (!item.data && item.id === id)
      )
        return;
      if (!ref.current) {
        return;
      }

      const dragId = item.id;
      const hoverId = id;

      if (item.data) {
        const doc = new DOMParser().parseFromString(
          item.data.content,
          "text/xml"
        );
        dispatch(
          addToNode(htmlToJson(doc.firstChild, item.data.attributes), hoverId)
        );
      } else {
        moveCard(dragId, hoverId, node);
      }
    },
    hover(item, monitor) {
      if (monitor.isOver({ shallow: true })) {
        highlight(monitor);
      }
    },
  });
  const [dragTargetProps, drag] = useDrag(
    {
      type: "card",
      canDrag: hoveredSection?.id === id,
      item: () => {
        return { id, index };
      },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
        id: id,
      }),
    },
    [hoveredSection, id]
  );

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

  const clearHightLight = () => {
    dispatch(setHighlight(null));
  };

  const onDragLeave = () => {
    clearHightLight();
  };

  const borderStyles = useMemo(
    () => ({
      borderWidth: "1px",
      borderTopColor:
        dropHighlight?.id === id && (dropHighlight.position === "top" || dropHighlight.position === "all")
          ? "white"
          : selectedSection?.id === id || hoveredSection?.id === id
          ? colorBright
          : colorDark,
      borderTopStyle:
        dropHighlight?.id === id && (dropHighlight.position === "top" || dropHighlight.position === "all")
          ? "solid"
          : selectedSection?.id === id || hoveredSection?.id === id
          ? "solid"
          : "dashed",
      borderBottomColor:
        dropHighlight?.id === id && (dropHighlight.position === "bottom" || dropHighlight.position === "all")
          ? "white"
          : selectedSection?.id === id || hoveredSection?.id === id
          ? colorBright
          : colorDark,
      borderBottomStyle:
        dropHighlight?.id === id && (dropHighlight.position === "bottom" || dropHighlight.position === "all")
          ? "solid"
          : selectedSection?.id === id || hoveredSection?.id === id
          ? "solid"
          : "dashed",
      borderLeftColor:
        dropHighlight?.id === id && (dropHighlight.position === "left" || dropHighlight.position === "all")
          ? "white"
          : selectedSection?.id === id || hoveredSection?.id === id
          ? colorBright
          : colorDark,
      borderLeftStyle:
        dropHighlight?.id === id && (dropHighlight.position === "left" || dropHighlight.position === "all")
          ? "solid"
          : selectedSection?.id === id || hoveredSection?.id === id
          ? "solid"
          : "dashed",
      borderRightColor:
        dropHighlight?.id === id && (dropHighlight.position === "right" || dropHighlight.position === "all")
          ? "white"
          : selectedSection?.id === id || hoveredSection?.id === id
          ? colorBright
          : colorDark,
      borderRightStyle:
        dropHighlight?.id === id && (dropHighlight.position === "right" || dropHighlight.position === "all")
          ? "solid"
          : selectedSection?.id === id || hoveredSection?.id === id
          ? "solid"
          : "dashed",
    }),
    [selectedSection, hoveredSection, dropHighlight]
  );

  return isEditable && node.content ? (
    <div
      className={`${styles.card} p-1 ${className ? className : ""}`}
      id={id}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onDragLeave={onDragLeave}
      ref={ref}
      style={{
        ...style,
        cursor: hoveredSection?.id === id ? "move" : "default",
        opacity,
        ...borderStyles,
      }}
      data-handler-id={handlerId}
    >
      <Actions node={node} />
      <ContentEditable
        html={node.content}
        onBlur={() => setIsCanEdit(false)}
        onClick={() => {
          setIsCanEdit(true);
        }}
        disabled={!isCanEdit}
        className="w-full block"
        onChange={(e) => dispatch(updateText(id, e.target.value))}
        tagName={node.tagName}
      />
    </div>
  ) : (
    <node.tagName
      className={`${styles.card} ${node.children?.length ? "" : "empty"} ${
        className ? className : ""
      }`}
      id={id}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onDragLeave={onDragLeave}
      ref={ref}
      style={{
        ...style,
        cursor: hoveredSection?.id === id ? "move" : "default",
        opacity,
        ...borderStyles,
      }}
      data-handler-id={handlerId}
    >
      <Actions node={node} />
      {children}
    </node.tagName>
  );
};
