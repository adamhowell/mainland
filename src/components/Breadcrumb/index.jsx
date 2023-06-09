import React from "react";
import { useSelectedNode } from "../../helpers";
import styles from "./Breadcrumb.module.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  setSelectedSection,
  setHoveredSection,
} from "../../redux/data-reducer";

const Breadcrumb = () => {
  const selectedNode = useSelectedNode();
  const { dom } = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const generate = () => {
    let path = [];
    let isFound = false;

    const id = selectedNode.id;

    const checkNode = (node) => {
      let subPath = [];

      if (node.children) {
        node.children.forEach((n) => {
          if (!isFound) {
            if (n.id === id) {
              subPath = [n];
              isFound = true;
            } else {
              subPath = [n, ...checkNode(n)];
            }
          }
        });
      }

      return subPath;
    };

    dom.forEach((node) => {
      if (!isFound) {
        if (node.id === id) {
          path = [node];
          isFound = true;
        } else {
          path = [node, ...checkNode(node)];
        }
      }
    });
    return path;
  };

  return (
    <div className={`${styles.root} bg-slate-800 text-slate-200`}>
      {selectedNode && (
        <>
          {generate().map((node, i) => (
            <div key={`brn-${i}`}>
              {i !== 0 && <span>&nbsp;&#62;&nbsp;</span>}
              <span
                onClick={() => dispatch(setSelectedSection(node))}
                onMouseEnter={() => dispatch(setHoveredSection(node))}
                onMouseLeave={() => dispatch(setHoveredSection(null))}
                className="p-1 rounded transition hover:bg-slate-600 cursor-pointer leading-none"
              >
                {node?.label
                  ? `${node?.label} (${node?.tagName})`
                  : node?.tagName}
              </span>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Breadcrumb;
