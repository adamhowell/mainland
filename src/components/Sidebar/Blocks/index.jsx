import React from "react";
import styles from "./Blocks.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { ButtonBlock } from "../../Buttons";
import { addToDom } from "../../../redux/data-reducer";
import shortid from "shortid";

const StyleManager = () => {
  const {
    config: { blocks },
  } = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const onAddSection = (block) => {
    dispatch(
      addToDom({
        ...block,
        id: shortid.generate(),
      })
    );
  };

  return (
    <div className={`${styles.root}`}>
      {blocks.map((block, i) => (
        <ButtonBlock onClick={() => onAddSection(block)} key={`bi-${i}`}>
          <div dangerouslySetInnerHTML={{ __html: block.icon }}></div>
          {block.label}
        </ButtonBlock>
      ))}
    </div>
  );
};

export default StyleManager;
