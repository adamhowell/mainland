import React, { useCallback, useEffect } from "react";
import styles from "./Canvas.module.scss";
import {
  moveNode,
  setSelectedSection,
  setHoveredSection,
  setBackward,
  setForward,
} from "../../redux/data-reducer";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "./Card";
import { screens } from "../../configs/tailwind";

const Canvas = () => {
  const dispatch = useDispatch();
  const { dom, selectedSection } = useSelector((state) => state.data);
  const { responsiveView } = useSelector((state) => state.layout);

  console.log("DOM", dom);

  useEffect(() => {
    window.addEventListener("keydown", onKeyDown);

    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const onKeyDown = (e) => {
    const evtobj = window.event ? e : e;
    if (evtobj.keyCode == 90 && evtobj.ctrlKey) dispatch(setBackward());
    if (evtobj.keyCode == 89 && evtobj.ctrlKey) dispatch(setForward());
  };

  const moveCard = useCallback((dragId, hoverId, node) => {
    dispatch(moveNode(dragId, hoverId, node));
  }, []);

  const renderCard = useCallback(
    (node, index) => {
      return !node.isHidden && node.children?.length && node.tagName !== "span" ? (
        <Card
          key={`sd-s${index}`}
          index={index}
          node={node}
          moveCard={moveCard}
        >
          {node.children.map((n, i) => renderCard(n, i))}
        </Card>
      ) : !node.isHidden && (
        <Card
          key={`sd-si${index}`}
          index={index}
          node={node}
          moveCard={moveCard}
          isEditable={true}
        ></Card>
      );
    },
    [selectedSection]
  );

  const onCanvasEnter = () => {
    dispatch(setHoveredSection(null));
  };

  const onCanvasClick = (e) => {
    if (e.target.id === "canvas") dispatch(setSelectedSection(null));
  };

  return (
    <div
      onClick={onCanvasClick}
      onMouseEnter={onCanvasEnter}
      id="canvas"
      className={`${styles.root} bg-slate-950 text-white`}
    >
      <div
        style={{ maxWidth: responsiveView !== Object.keys(screens).pop() ? screens[responsiveView] : "100%"}}
        className={`${styles.container} bg-slate-900`}
      >
        {dom?.map((item, i) => renderCard(item, i))}
      </div>
    </div>
  );
};

export default Canvas;
