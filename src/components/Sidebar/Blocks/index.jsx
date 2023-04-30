import React from "react";
import styles from "./Blocks.module.scss";
import { useSelector } from "react-redux";
import { ButtonBlock } from "../../Buttons";

const StyleManager = () => {
  const {
    config: { blocks },
  } = useSelector((state) => state.data);

  return (
    <div className={`${styles.root}`}>
      {blocks.map((block, i) => (
        <ButtonBlock key={`bi-${i}`}>
          <div dangerouslySetInnerHTML={{__html: block.icon}}></div>
          {block.label}
        </ButtonBlock>
      ))}
    </div>
  );
};

export default StyleManager;
