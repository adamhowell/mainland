import React, { useCallback } from "react";
import styles from "./Canvas.module.scss";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import {
  moveNode,
  setSelectedSection,
  setHoveredSection,
} from "../../redux/data-reducer";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "./Card";

const Canvas = () => {
  const dispatch = useDispatch();
  const { dom, selectedSection } = useSelector((state) => state.data);

  console.log("DOM", dom);

  const renderComponent = (item) => {
    return renderContent(item);
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
      <DndProvider backend={HTML5Backend}>
        <div className={`${styles.container} container mx-auto`}>
          {dom?.map((item, i) => renderCard(item, i))}
        </div>
      </DndProvider>
    </div>
  );
};

export default Canvas;
