import React from "react";
import styles from "./Classes.module.scss";
import { useDispatch } from "react-redux";
import TextArea from "../../../Inputs/TextArea";
import { setAttribute } from "../../../../redux/data-reducer";
import { useSelectedNode } from "../../../../helpers";

const Classes = () => {
  const selectedNode = useSelectedNode()
  const dispatch = useDispatch();

  return (
    <div className={`${styles.root} pt-2`}>
      <TextArea
        disabled={!selectedNode}
        onChange={(e) =>
          dispatch(
            setAttribute("className", e.target.value)
          )
        }
        value={selectedNode?.className ? selectedNode.className : ""}
      />
    </div>
  );
};

export default Classes;
