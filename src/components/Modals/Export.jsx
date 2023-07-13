import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../redux/modals-reducer";
import { htmlTemplate } from "../../render/template";
import ReactDOMServer from "react-dom/server";
import TextArea from "../Inputs/TextArea";
import { checkAndReturnStyles } from "../../utils";

const Export = () => {
  const { dom } = useSelector((state) => state.data);
  const { isExport } = useSelector((state) => state.modals);
  const dispatch = useDispatch();
  const [html, setHtml] = useState("");

  const getNodes = () => {
    let reactNodes = [];

    const checkEndReturnNode = (node) => {
      if (node.children?.length) {
        return (
          <node.tagName
            {...(node.style ? { style: checkAndReturnStyles(node) } : {})}
            {...(node.className ? { className: node.className } : {})}
            {...(node.href ? { href: node.href } : {})}
            {...(node.src ? { href: node.src } : {})}
            key={node.id}
          >
            {node.children.map((n) => checkEndReturnNode(n))}
          </node.tagName>
        );
      } else {
        return (
          <node.tagName
            {...(node.style ? { style: checkAndReturnStyles(node) } : {})}
            {...(node.className ? { className: node.className } : {})}
            {...(node.href ? { href: node.href } : {})}
            {...(node.src ? { href: node.src } : {})}
            key={node.id}
          >
            {node.content && node.content}
          </node.tagName>
        );
      }
    };

    dom.forEach((node) => {
      reactNodes.push(checkEndReturnNode(node));
    });

    return reactNodes;
  };

  useEffect(() => {
    const body = ReactDOMServer.renderToStaticMarkup(getNodes());

    let result = htmlTemplate
      .replace(`{Body}`, body)
      .replace("{Title}", "Mainland app");
    setHtml(result);
  }, [dom]);

  return (
    <Modal onClose={() => dispatch(closeModal("export"))} active={isExport}>
      <TextArea defaultValue={html} rows={16} />
    </Modal>
  );
};

export default Export;
