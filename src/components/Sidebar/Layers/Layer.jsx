import React, { useMemo, useRef, useCallback } from "react";
import styles from "./Layers.module.scss";
import { useDrag, useDrop } from "react-dnd";
import { IconEye, IconTriangle, IconMove, IconEyeSlash } from "../../Icons";
import { useCollapse } from "react-collapsed";
import { useDispatch, useSelector } from "react-redux";
import {
  setHighlightLayer,
  moveNode,
  setHoveredLayer,
  setSelectedSection,
  setIsHiden,
} from "../../../redux/data-reducer";

const Layer = (props) => {
  const { children, data, active, className, ...rest } = props;
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse({
    defaultExpanded: true,
  });
  const dispatch = useDispatch();
  const { dropHighlightLayer, hoveredLayer, selectedSection } = useSelector(
    (state) => state.data
  );
  const ref = useRef(null);

  const [{ handlerId }, drop] = useDrop({
    accept: ["layer"],
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
        id: data.id,
      };
    },
    canDrop() {
      return !(data.isClosed && !dropHighlightLayer);
    },
    drop(item, monitor) {
      if (
        (!item.data && !data) ||
        (!item.data && !hoveredLayer) ||
        monitor.didDrop() ||
        (!item.data && item.id === data.id)
      )
        return;
      if (!ref.current) {
        return;
      }

      const dragId = item.id;
      const hoverId = data.id;

      if (!(data.isClosed && !dropHighlightLayer)) {
        if (item.data) {
          const doc = new DOMParser().parseFromString(
            item.data.content,
            "text/xml"
          );
          dispatch(
            addToNode(htmlToJson(doc.firstChild, item.data.attributes), hoverId)
          );
        } else {
          moveCard(dragId, hoverId, data);
        }
      }

      dispatch(setHighlightLayer(null));
    },
    hover(item, monitor) {
      if (monitor.isOver({ shallow: true })) {
        highlight(monitor);
      }
    },
  });

  const [dragTargetProps, drag] = useDrag(
    {
      type: "layer",
      canDrag: hoveredLayer?.id === data.id && data.tagName !== "body",
      item: () => {
        return { id: data.id };
      },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
        id: data.id,
      }),
    },
    [hoveredLayer, data.id]
  );

  const opacity = dragTargetProps.isDragging ? 0.2 : data.isHidden ? 0.3 : 0.6;

  drag(drop(ref));

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
        ? dispatch(
            setHighlightLayer({ id: data.id, position: greater.position })
          )
        : !data.isClosed
        ? dispatch(setHighlightLayer({ id: data.id, position: "all" }))
        : dispatch(setHighlightLayer(null));
    }
  };

  const moveCard = useCallback((dragId, hoverId, node) => {
    dispatch(moveNode(dragId, hoverId, "layer"));
  }, []);

  const colorDark = useMemo(() => "#696969", [data]);
  const colorBright = useMemo(
    () => (data.tagName === "body" ? "#696969" : "#adadad"),
    [data]
  );

  const borderStyles = useMemo(
    () => ({
      borderWidth: "1px",
      borderTopColor:
        dropHighlightLayer?.id === data.id &&
        (dropHighlightLayer.position === "top" ||
          dropHighlightLayer.position === "all")
          ? "white"
          : selectedSection?.id === data.id || hoveredLayer?.id === data.id
          ? colorBright
          : colorDark,
      borderBottomColor:
        dropHighlightLayer?.id === data.id &&
        (dropHighlightLayer.position === "bottom" ||
          dropHighlightLayer.position === "all")
          ? "white"
          : selectedSection?.id === data.id || hoveredLayer?.id === data.id
          ? colorBright
          : colorDark,
    }),
    [hoveredLayer, dropHighlightLayer]
  );

  const clearHightLight = () => {
    dispatch(setHighlightLayer(null));
  };

  const onDragLeave = () => {
    clearHightLight();
  };

  const onMouseEnter = (e) => {
    if (e.target.id === data.id) dispatch(setHoveredLayer(data));
  };

  const onMouseLeave = () => {
    dispatch(setHoveredLayer(null));
  };

  const onClick = (e) => {
    if (e.target.id === data.id) dispatch(setSelectedSection(data));
  };

  return (
    <>
      <div
        {...rest}
        ref={ref}
        id={data.id}
        data-handler-id={handlerId}
        style={{ opacity, ...borderStyles, cursor: "pointer" }}
        onClick={onClick}
        onDragLeave={onDragLeave}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={`flex text-sm items-center justify-between border-b border-slate-600 bg-slate-700 p-2 border-solid text-white select-none ${
          active ? styles.active : ""
        } ${className ? className : ""}`}
      >
        <div className="flex items-center">
          <div
            onClick={() => dispatch(setIsHiden(data.id, !data.isHidden))}
            className="mr-3"
          >
            {data.isHidden ? <IconEyeSlash /> : <IconEye />}
          </div>
          {data.children?.length > 0 && (
            <IconTriangle
              {...getToggleProps()}
              className={`${styles.icon} me-2 transition-transform ${
                isExpanded ? "rotate-0" : "rotate-180"
              }`}
            />
          )}
          <span {...(data.children?.length ? getToggleProps() : {})}>
            {data.label ? `${data.label} (${data.tagName})` : data.tagName}
          </span>
        </div>
        <div className="flex items-center">
          {data.children?.length > 0 && (
            <span className="text-xs mr-2">{data.children?.length}</span>
          )}
          <IconMove />
        </div>
      </div>
      {children && (
        <div
          className={`${data.isHidden ? "opacity-50" : "opacity-100"} pl-2`}
          {...getCollapseProps()}
        >
          {children}
        </div>
      )}
    </>
  );
};

export default Layer;
