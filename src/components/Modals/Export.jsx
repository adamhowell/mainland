import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../redux/modals-reducer";
import { htmlTemplate } from "../../render/template";
import styles from "./Modals.module.scss";
import ReactDOMServer from "react-dom/server";
import TextArea from "../Inputs/TextArea"

const Export = () => {
  const { dom } = useSelector((state) => state.data);
  const { isExport } = useSelector((state) => state.modals);
  const dispatch = useDispatch();
  const [html, setHtml] = useState("")

  useEffect(() => {
    const body = ReactDOMServer.renderToStaticMarkup(dom.map((node) => <node.tagName key={node.id}></node.tagName>));
    //const styles = createStyles(clientStyles.rootBr).replaceAll("& ", "")

    //let result = htmlTemplate.replace(`{Body}`, body).replace(`{Styles}`, styles).replace("{Title}", "MainlandJs app").replace("{Dom}", JSON.stringify(dom))
    let result = htmlTemplate.replace(`{Body}`, body).replace("{Title}", "MainlandJs app").replace("{Dom}", JSON.stringify(dom))
    setHtml(result)
  }, [dom])

  return (
    <Modal
      onClose={() => dispatch(closeModal("export"))}
      active={isExport}
    >
      <TextArea defaultValue={html} rows={16} />
    </Modal>
  );
};

export default Export;
