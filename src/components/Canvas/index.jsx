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

const Canvas = () => {
  const dispatch = useDispatch();
  const { dom, selectedSection } = useSelector((state) => state.data);

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
      return node.children?.length && node.tagName !== "span" ? (
        <Card
          key={`sd-s${index}`}
          index={index}
          node={node}
          moveCard={moveCard}
        >
          {node.children.map((n, i) => renderCard(n, i))}
        </Card>
      ) : (
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
      className={`${styles.root} bg-secondary text-white`}
    >
      <div className={`${styles.container}`}>
        {dom?.map((item, i) => renderCard(item, i))}
      </div>
    </div>
  );
};

export default Canvas;
