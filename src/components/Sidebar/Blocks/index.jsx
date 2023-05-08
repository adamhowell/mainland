import React from "react";
import styles from "./Blocks.module.scss";
import { useSelector, useDispatch } from "react-redux";
import ButtonBlock from "./ButtonBlock";
import { addToDom } from "../../../redux/data-reducer";

const StyleManager = () => {
  const {
    config: { blocks },
  } = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const onAddSection = (block) => {
    dispatch(addToDom(block));
  };

  return (
    <div className={`${styles.root}`}>
      {blocks.map((block, i) => (
        <ButtonBlock data={block} onClick={() => onAddSection(block)} key={`bi-${i}`}>
          <div dangerouslySetInnerHTML={{ __html: block.icon }}></div>
          {block.label}
        </ButtonBlock>
      ))}
    </div>
  );
};

export default StyleManager;
