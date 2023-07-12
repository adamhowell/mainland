import React, { useCallback, useEffect } from "react";
import {
  moveNode,
  setSelectedSection,
  setHoveredSection,
  setBackward,
  setForward,
  removeNode,
  save
} from "../../redux/data-reducer";
import { useDispatch, useSelector } from "react-redux";
import { closeAllModals } from "../../redux/modals-reducer";
import { Card } from "./Card";

const Canvas = ({ windowFrame }) => {
  const dispatch = useDispatch();
  const { dom, selectedSection } = useSelector((state) => state.data);
  const { config } = useSelector((state) => state.data);

  useEffect(()=>{
    if(config?.apiURL) dispatch(save())
  }, [dom])

  useEffect(() => {
    window.addEventListener("keydown", onKeyDown);

    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const onKeyDown = (e) => {
    const evtobj = window.event ? e : e;
    if (evtobj.keyCode == 90 && evtobj.ctrlKey) dispatch(setBackward());
    if (evtobj.keyCode == 89 && evtobj.ctrlKey) dispatch(setForward());
    if (evtobj.keyCode == 27) {
      dispatch(closeAllModals());
      dispatch(setSelectedSection(null));
    }
    if (evtobj.keyCode == 46) dispatch(removeNode());
  };

  const moveCard = useCallback((dragId, hoverId, node) => {
    dispatch(moveNode(dragId, hoverId, node));
  }, []);

  const renderCard = useCallback(
    (node, index) => {
      return !node.isHidden && node.children?.length && !node.content ? (
        <Card
          key={`sd-s${index}`}
          index={index}
          node={node}
          moveCard={moveCard}
          windowFrame={windowFrame}
        >
          {node.children.map((n, i) => renderCard(n, i))}
        </Card>
      ) : (
        !node.isHidden && (
          <Card
            key={`sd-si${index}`}
            index={index}
            node={node}
            moveCard={moveCard}
            isEditable={true}
            windowFrame={windowFrame}
          ></Card>
        )
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
      className={`w-full h-screen text-white`}
    >
      <div className={`mx-auto h-full`}>
        {dom?.map((item, i) => renderCard(item, i))}
      </div>
    </div>
  );
};

export default Canvas;
