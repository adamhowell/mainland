import React, { useCallback } from "react";
import styles from "./Canvas.module.scss";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Section from "../../components/Section";
import { setDom, moveDom, setSelectedSection } from "../../redux/data-reducer";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "./Card";
import { renderContent } from "../../render";

const Canvas = () => {
  const dispatch = useDispatch();
  const { dom, selectedSection } = useSelector((state) => state.data);

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
    (card, index, component) => {
      return (
        <Card
          active={selectedSection?.id == card.id}
          key={card.id}
          index={index}
          id={card.id}
          onClick={() => dispatch(setSelectedSection(card))}
          moveCard={moveCard}
        >
          {component}
        </Card>
      );
    },
    [selectedSection]
  );

  return (
    <div className={`${styles.root} bg-secondary text-white`}>
      <div className={`${styles.container} container mx-auto`}>
        <DndProvider backend={HTML5Backend}>
          {dom?.map((item, i) =>
            renderCard(
              item,
              i,
              <Section
                onUp={() => onUp(i)}
                onDown={() => onDown(i)}
                onRemove={() => onRemove(i)}
              >
                {renderComponent(item)}
              </Section>
            )
          )}
        </DndProvider>
      </div>
    </div>
  );
};

export default Canvas;
