import React, { useRef } from "react";
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
import EditableNode from "./EditableNode";
import { htmlToJson } from "../../utils";

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

  const [dropTargetProps, drop] = useDrop({
    accept: ["card", "block"],
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
        id: id,
      };
    },
    drop(item, monitor) {
      console.log(item);
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
        item.index = hoverIndex;
      }

      //}
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

  return isEditable && node.content ? (
    <EditableNode
      id={id}
      onChange={(e) => dispatch(updateText(id, e))}
      tagName={node.tagName}
      className={`${styles.card} ${className ? className : ""}`}
      content={node.content}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
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
    </EditableNode>
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
