import React, { useCallback } from "react";
import styles from "./Canvas.module.scss";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import {
  setDom,
  moveDom,
  setSelectedSection,
  setHoveredSection,
} from "../../redux/data-reducer";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "./Card";
import { renderContent } from "../../render";

const Canvas = () => {
  const dispatch = useDispatch();
  const { dom, selectedSection } = useSelector((state) => state.data);

  console.log("DOM", dom);

  const onUp = (i) => {
    const t = [...dom];
    if (i != 0) {
      const element = t.splice(i, 1)[0];
      t.splice(i - 1, 0, element);
      dispatch(setDom(t));
    }
  };

  const onDown = (i) => {
    const t = [...dom];
    if (i < dom.length) {
      const element = t.splice(i, 1)[0];
      t.splice(i + 1, 0, element);
      dispatch(setDom(t));
    }
  };
  const onRemove = (i) => {
    dispatch(setDom(dom.filter((c, z) => z != i)));
  };

  const renderComponent = (item) => {
    return renderContent(item);
  };

  const moveCard = useCallback((dragIndex, hoverIndex) => {
    dispatch(moveDom(dragIndex, hoverIndex));
  }, []);

  const renderCard = useCallback(
    (node, index) => {
      return (
        <Card
          key={`sd-s${index}`}
          index={index}
          node={node}
          moveCard={moveCard}
        >
          {node.children?.length && node.children[0].tagName !== "span"
            ? node.children.map((n, i) => renderCard(n, i))
            : renderComponent(node)}
        </Card>
      );
    },
    [selectedSection]
  );

  const onCanvasEnter = () => {
    dispatch(setHoveredSection(null));
  };

  const onCanvasClick = (e) => {
    if(e.target.id === "canvas") dispatch(setSelectedSection(null));
  };

  return (
    <div
      onClick={onCanvasClick}
      onMouseEnter={onCanvasEnter}
      id="canvas"
      className={`${styles.root} bg-secondary text-white`}
    >
      <div className={`${styles.container} container mx-auto`}>
        <DndProvider backend={HTML5Backend}>
          {dom?.map((item, i) => renderCard(item, i))}
        </DndProvider>
      </div>
    </div>
  );
};

export default Canvas;
