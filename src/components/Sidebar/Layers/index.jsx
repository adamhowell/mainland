import React from "react";
import styles from "./Layers.module.scss";
import { useSelector } from "react-redux";
import Layer from "./Layer";

const Layers = () => {
  const { dom } = useSelector((state) => state.data);

  const renderNode = (node, i) => {
    if (node.children) {
      return (
        <Layer data={node} key={`lbi-${i}`}>
          {node.children.map((n, z) => renderNode(n, `${i}-${z}`))}
        </Layer>
      );
    } else {
      return <Layer data={node} key={`lbi-${i}`} />;
    }
  };

  return (
    <div className={`${styles.root}`}>
      {dom.map((node, i) => renderNode(node, i))}
    </div>
  );
};

export default Layers;
