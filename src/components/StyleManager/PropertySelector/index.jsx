import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setAttribute, setSelectedSection } from "../../../redux/data-reducer";
import { useSelectedNode } from "../../../helpers";
import Label from "../../Inputs/Label";
import Input from "../../Inputs/Input";
import TextArea from "../../Inputs/TextArea";

const PropertySelector = ({ property, isTextArea, label }) => {
  const dispatch = useDispatch();
  const selectedNode = useSelectedNode();

  return (
    <div className={`mb-2 ${!isTextArea ? "flex items-center" : ""} text-slate-800`}>
      <Label className={`${isTextArea ? "mt-2 mb-2 block" : ""}`}>{label ? label : property}</Label>
      {isTextArea ? (
        <TextArea
          disabled={!selectedNode}
          onChange={(e) => {
            const sn = { ...selectedNode, id: e.target.value };

            if (property === "id") {
              setTimeout(() => {
                dispatch(setSelectedSection(sn));
              }, 10);
            }

            dispatch(setAttribute(property, e.target.value));
          }}
          value={selectedNode ? selectedNode[property] ? selectedNode[property] : "" : ""}
        />
      ) : (
        <Input
          disabled={!selectedNode}
          onChange={(e) => {
            const sn = { ...selectedNode, id: e.target.value };

            if (property === "id") {
              setTimeout(() => {
                dispatch(setSelectedSection(sn));
              }, 10);
            }

            dispatch(setAttribute(property, e.target.value));
          }}
          value={selectedNode ? selectedNode[property] ? selectedNode[property] : "" : ""}
        />
      )}
    </div>
  );
};

export default PropertySelector;
