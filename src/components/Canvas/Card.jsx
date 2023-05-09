import React, { useRef, useState } from "react";
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
  cursor: "move",
};

export const Card = ({ index, moveCard, children, node, isEditable }) => {
  const { id, className } = node;
  const ref = useRef(null);
  const dispatch = useDispatch();
  const { hoveredSection, selectedSection } = useSelector(
    (state) => state.data
  );
  const [isCanEdit, setIsCanEdit] = useState(0);

  const [dropTargetProps, drop] = useDrop({
    accept: ["card", "block"],
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
        id: id,
      };
    },
    drop(item, monitor) {
      if ((!item.data && !node) || (!item.data && !hoveredSection) || monitor.didDrop() || (!item.data && item.id === id)) return;
      if (!ref.current) {
        return;
      }

      const dragId = item.id;
      const hoverId = id;

      // const dragIndex = item.index;
      // const hoverIndex = index;
      // if (dragIndex === hoverIndex) {
      //   return;
      // }
      // const hoverBoundingRect = ref.current?.getBoundingClientRect();
      // const hoverMiddleY =
      //   (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      // const clientOffset = monitor.getClientOffset();

      // if (clientOffset) {
      //   const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      //   if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
      //     return;
      //   }
      //   if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
      //     return;
      //   }

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
        //item.index = hoverIndex;
      }

      //}
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

  return isEditable && node.content ? (
    <div
      className={`${styles.card} p-1 ${className ? className : ""}`}
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
      <Actions node={node} />
      {children}
    </node.tagName>
  );
};
