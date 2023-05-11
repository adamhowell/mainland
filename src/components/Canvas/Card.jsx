import React, { useRef, useState, useEffect } from "react";
import { useDrag, useDrop } from "react-dnd";
import styles from "./Canvas.module.scss";
import {
  setSelectedSection,
  setHoveredSection,
  updateText,
  addToNode,
} from "../../redux/data-reducer";
import { useDispatch, useSelector } from "react-redux";
import Actions from "./Actions";
import { htmlToJson } from "../../utils";
import ContentEditable from "react-contenteditable";

const style = {
  position: "relative",
  border: "1px dashed #696969",
  backgroundColor: "transparent",
};

export const Card = ({ index, moveCard, children, node, isEditable }) => {
  const { id, className } = node;
  const ref = useRef(null);
  const dispatch = useDispatch();
  const { hoveredSection, selectedSection } = useSelector(
    (state) => state.data
  );
  const [isCanEdit, setIsCanEdit] = useState(0);
  const [isHighLightTop, setIsHighLightTop] = useState(false);
  const [isHighLightBottom, setIsHighLightBottom] = useState(false);
  const [isHighLightLeft, setIsHighLightLeft] = useState(false);
  const [isHighLightRight, setIsHighLightRight] = useState(false);

  useEffect(()=>{
    if(!hoveredSection) clearHightLight()
  }, [hoveredSection])

  const highlight = (monitor) => {
    const hoverBoundingRect = ref.current?.getBoundingClientRect();
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
    const hoverMiddleX = (hoverBoundingRect.right - hoverBoundingRect.left) / 2;
    const clientOffset = monitor.getClientOffset();

    if (clientOffset) {
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      const hoverClientX = clientOffset.x - hoverBoundingRect.left;

      setIsHighLightTop(hoverClientY < hoverMiddleY);
      setIsHighLightBottom(hoverClientY > hoverMiddleY);
      setIsHighLightLeft(hoverClientX < hoverMiddleX);
      setIsHighLightRight(hoverClientX > hoverMiddleX);
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
    setIsHighLightTop(false);
    setIsHighLightBottom(false);
    setIsHighLightLeft(false);
    setIsHighLightRight(false);
  }

  const onDragLeave = () => {
    clearHightLight()
  }

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
        borderWidth: "1px",
        borderTopColor: isHighLightTop
          ? "white"
          : selectedSection?.id === id || hoveredSection?.id === id
          ? "#adadad"
          : "#696969",
        borderTopStyle: isHighLightTop
          ? "solid"
          : selectedSection?.id === id || hoveredSection?.id === id
          ? "solid"
          : "dashed",
        borderBottomColor: isHighLightBottom
          ? "white"
          : selectedSection?.id === id || hoveredSection?.id === id
          ? "#adadad"
          : "#696969",
        borderBottomStyle: isHighLightBottom
          ? "solid"
          : selectedSection?.id === id || hoveredSection?.id === id
          ? "solid"
          : "dashed",
        borderLeftColor: isHighLightLeft
          ? "white"
          : selectedSection?.id === id || hoveredSection?.id === id
          ? "#adadad"
          : "#696969",
        borderLeftStyle: isHighLightLeft
          ? "solid"
          : selectedSection?.id === id || hoveredSection?.id === id
          ? "solid"
          : "dashed",
        borderRightColor: isHighLightRight
          ? "white"
          : selectedSection?.id === id || hoveredSection?.id === id
          ? "#adadad"
          : "#696969",
        borderRightStyle: isHighLightRight
          ? "solid"
          : selectedSection?.id === id || hoveredSection?.id === id
          ? "solid"
          : "dashed",
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
        borderTopColor: isHighLightTop
          ? "white"
          : selectedSection?.id === id || hoveredSection?.id === id
          ? "#adadad"
          : "#696969",
        borderTopStyle: isHighLightTop
          ? "solid"
          : selectedSection?.id === id || hoveredSection?.id === id
          ? "solid"
          : "dashed",
        borderBottomColor: isHighLightBottom
          ? "white"
          : selectedSection?.id === id || hoveredSection?.id === id
          ? "#adadad"
          : "#696969",
        borderBottomStyle: isHighLightBottom
          ? "solid"
          : selectedSection?.id === id || hoveredSection?.id === id
          ? "solid"
          : "dashed",
        borderLeftColor: isHighLightLeft
          ? "white"
          : selectedSection?.id === id || hoveredSection?.id === id
          ? "#adadad"
          : "#696969",
        borderLeftStyle: isHighLightLeft
          ? "solid"
          : selectedSection?.id === id || hoveredSection?.id === id
          ? "solid"
          : "dashed",
        borderRightColor: isHighLightRight
          ? "white"
          : selectedSection?.id === id || hoveredSection?.id === id
          ? "#adadad"
          : "#696969",
        borderRightStyle: isHighLightRight
          ? "solid"
          : selectedSection?.id === id || hoveredSection?.id === id
          ? "solid"
          : "dashed",
      }}
      data-handler-id={handlerId}
    >
      <Actions node={node} />
      {children}
    </node.tagName>
  );
};
