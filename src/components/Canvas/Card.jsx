import React, { useRef, useState, useEffect, useMemo } from "react";
import { useDrag, useDrop } from "react-dnd";
import {
  setSelectedSection,
  setHoveredSection,
  updateText,
  addToNode,
  setHighlight,
} from "../../redux/data-reducer";
import { useDispatch, useSelector } from "react-redux";
import Actions from "./Actions";
import {
  htmlToJson,
  checkAndReturnStyles,
  isCanContainsChildren,
  getEditableTagName,
  replceSpecialCharacters,
  getDefaultDisplayClassEditable,
} from "../../utils";
//import ContentEditable from "react-contenteditable";
import { openModal } from "../../redux/modals-reducer";
import ContentEditable from "react-medium-editor";

export const Card = ({
  index,
  moveCard,
  children,
  node,
  isEditable,
  windowFrame,
}) => {
  const { id, backgroundImage, className } = node;
  const ref = useRef(null);
  const dispatch = useDispatch();
  const { hoveredSection, selectedSection, dropHighlight } = useSelector(
    (state) => state.data
  );
  const [isCanEdit, setIsCanEdit] = useState(0);
  const { isPreview } = useSelector((state) => state.layout);
  const editableRef = useRef();

  useEffect(() => {
    if ((!selectedSection && editableRef?.current) || (selectedSection?.id != id && editableRef?.current)) {
      editableRef.current.medium.origElements.blur();
      if (windowFrame.getSelection) {
        if (windowFrame.getSelection().empty) {
          windowFrame.getSelection().empty();
        } else if (windowFrame.getSelection().removeAllRanges) {
          windowFrame.getSelection().removeAllRanges();
        }
      } else if (windowFrame.document.selection) {
        windowFrame.document.selection.empty();
      }
    }
  }, [selectedSection]);

  useEffect(() => {
    if (selectedSection?.id != id && editableRef?.current) {
      editableRef.current.medium.origElements.blur()
    }
  }, [hoveredSection]);

  const colorBright = useMemo(
    () => (node.tagName === "body" ? "#696969" : "#adadad"),
    [node]
  );
  const colorDark = useMemo(() => "#696969", [node]);

  const style = useMemo(
    () => ({
      ...(!isPreview
        ? {
            border: `1px dashed ${colorDark}`,
          }
        : {}),
    }),
    [colorDark, isPreview]
  );

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
        : !node.isClosed
        ? dispatch(setHighlight({ id: id, position: "all" }))
        : dispatch(setHighlight(null));
    }
  };

  const [{ handlerId }, drop] = useDrop(
    {
      accept: ["card", "block"],
      collect(monitor) {
        return {
          handlerId: monitor.getHandlerId(),
          id: id,
        };
      },
      canDrop() {
        return dropHighlight;
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

        if (!(node.isClosed && !dropHighlight)) {
          if (item.data) {
            const doc = new DOMParser().parseFromString(
              replceSpecialCharacters(item.data.content),
              "text/xml"
            );
            dispatch(
              addToNode(
                htmlToJson(doc.firstChild, item.data.attributes),
                hoverId
              )
            );
          } else {
            moveCard(dragId, hoverId, node);
          }
        }

        dispatch(setHighlight(null));
      },
      hover(item, monitor) {
        if (monitor.isOver({ shallow: true })) {
          highlight(monitor);
        }
      },
    },
    [node, dropHighlight]
  );

  const [dragTargetProps, drag] = useDrag(
    {
      type: "card",
      canDrag:
        !isPreview && hoveredSection?.id === id && node.tagName !== "body",
      item: () => {
        return { id, index };
      },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
        id: id,
      }),
    },
    [hoveredSection, id, isPreview]
  );

  const opacity = dragTargetProps.isDragging ? 0 : 1;
  drag(drop(ref));

  const onMouseMove = (e) => {
    if (e.target.id === id && hoveredSection?.id !== id)
      dispatch(setHoveredSection(node));
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
        dropHighlight?.id === id &&
        (dropHighlight.position === "top" || dropHighlight.position === "all")
          ? "white"
          : selectedSection?.id === id || hoveredSection?.id === id
          ? colorBright
          : colorDark,
      borderTopStyle:
        dropHighlight?.id === id &&
        (dropHighlight.position === "top" || dropHighlight.position === "all")
          ? "solid"
          : selectedSection?.id === id || hoveredSection?.id === id
          ? "solid"
          : "dashed",
      borderBottomColor:
        dropHighlight?.id === id &&
        (dropHighlight.position === "bottom" ||
          dropHighlight.position === "all")
          ? "white"
          : selectedSection?.id === id || hoveredSection?.id === id
          ? colorBright
          : colorDark,
      borderBottomStyle:
        dropHighlight?.id === id &&
        (dropHighlight.position === "bottom" ||
          dropHighlight.position === "all")
          ? "solid"
          : selectedSection?.id === id || hoveredSection?.id === id
          ? "solid"
          : "dashed",
      borderLeftColor:
        dropHighlight?.id === id &&
        (dropHighlight.position === "left" || dropHighlight.position === "all")
          ? "white"
          : selectedSection?.id === id || hoveredSection?.id === id
          ? colorBright
          : colorDark,
      borderLeftStyle:
        dropHighlight?.id === id &&
        (dropHighlight.position === "left" || dropHighlight.position === "all")
          ? "solid"
          : selectedSection?.id === id || hoveredSection?.id === id
          ? "solid"
          : "dashed",
      borderRightColor:
        dropHighlight?.id === id &&
        (dropHighlight.position === "right" || dropHighlight.position === "all")
          ? "white"
          : selectedSection?.id === id || hoveredSection?.id === id
          ? colorBright
          : colorDark,
      borderRightStyle:
        dropHighlight?.id === id &&
        (dropHighlight.position === "right" || dropHighlight.position === "all")
          ? "solid"
          : selectedSection?.id === id || hoveredSection?.id === id
          ? "solid"
          : "dashed",
    }),
    [selectedSection, hoveredSection, dropHighlight]
  );

  const isBottom = () => {
    return ref?.current?.getBoundingClientRect().top < 25;
  };

  const stylesNotEditable = {
    ...style,
    ...(node.style ? checkAndReturnStyles(node) : {}),
    cursor:
      !isPreview && hoveredSection?.id === id && node.tagName !== "body"
        ? "move"
        : "default",
    opacity,
    ...(!isPreview ? borderStyles : {}),
    ...(backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}),
    ...(backgroundImage ? { backgroundSize: "cover" } : {}),
    ...(!children && isCanContainsChildren(node.tagName)
      ? { height: !className?.includes("h-") && !isPreview ? "30px" : "" }
      : {}),
    zIndex: selectedSection?.id === id && isBottom() ? 2 : 1,
  };

  const isInner = () => {
    if (node.tagName === "body")
      return ref?.current?.getBoundingClientRect().bottom -
        windowFrame?.innerHeight <
        25
        ? true
        : false;
  };

  const onDoubleClick = () => {
    if (node.tagName === "img") dispatch(openModal("imageSource"));
  };

  return isEditable && node.content ? (
    <div
      className={`relative p-1 ${className ? className : ""}`}
      id={id}
      onClick={onClick}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onDragLeave={onDragLeave}
      ref={ref}
      style={{
        ...style,
        display: getDefaultDisplayClassEditable(node.tagName),
        ...(node.style ? checkAndReturnStyles(node) : {}),
        cursor:
          !isPreview && hoveredSection?.id === id && node.tagName !== "body"
            ? "move"
            : "default",
        opacity,
        ...(!isPreview ? borderStyles : {}),
        ...(backgroundImage
          ? { backgroundImage: `url(${backgroundImage})` }
          : {}),
        ...(backgroundImage ? { backgroundSize: "cover" } : {}),
        ...(node.tagName === "li" ? { display: "list-item" } : {}),
        zIndex: selectedSection?.id === id && isBottom() ? 2 : 1,
      }}
      data-handler-id={handlerId}
    >
      {!isPreview && (
        <Actions isBottom={isBottom()} isInner={isInner()} node={node} />
      )}
      <ContentEditable
        style={{
          textAlign: "inherit",
          pointerEvents:
            selectedSection?.id != id || isPreview ? "none" : "all",
        }}
        text={node.content}
        ref={editableRef}
        onBlur={() => setIsCanEdit(false)}
        onClick={(e) => {
          dispatch(setSelectedSection(node));
          setIsCanEdit(true);
        }}
        options={{
          toolbar: { buttons: ["bold", "italic", "underline", "anchor"] },
          contentWindow: windowFrame,
          ownerDocument: windowFrame.document,
          elementsContainer: windowFrame.document.body,
        }}
        className="w-full block"
        onChange={(text) => dispatch(updateText(id, text))}
        tag={getEditableTagName(node.tagName)}
      />
    </div>
  ) : children ? (
    <node.tagName
      className={`${node.children?.length ? "" : "empty"} ${
        className ? className : ""
      } relative`}
      id={id}
      onClick={onClick}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onDragLeave={onDragLeave}
      ref={ref}
      style={stylesNotEditable}
      data-handler-id={handlerId}
    >
      {!isPreview && (
        <Actions isBottom={isBottom()} isInner={isInner()} node={node} />
      )}
      {children}
    </node.tagName>
  ) : (
    <div
      className={`relative`}
      id={id}
      onClick={onClick}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onDragLeave={onDragLeave}
      onDoubleClick={onDoubleClick}
      ref={ref}
      style={{
        display: getDefaultDisplayClassEditable(node.tagName),
        ...stylesNotEditable,
        ...(node.width ? { width: node.width } : {}),
        ...(node.height ? { height: node.height } : {}),
      }}
      data-handler-id={handlerId}
      {...(node.width ? { width: node.width } : {})}
      {...(node.height ? { height: node.height } : {})}
    >
      {!isPreview && (
        <Actions isBottom={isBottom()} isInner={isInner()} node={node} />
      )}
      <node.tagName
        className={`${node.children?.length ? "" : "empty"} ${
          !isPreview ? "pointer-events-none" : ""
        } ${className ? className : ""}`}
        {...(node.src ? { src: node.src } : {})}
        {...(node.width ? { width: node.width } : {})}
        {...(node.height ? { height: node.height } : {})}
      >
        {children}
      </node.tagName>
    </div>
  );
};
