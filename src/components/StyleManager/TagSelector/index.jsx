import React, { useEffect } from "react";
import Select from "../../Inputs/Select";
import { getMoreTags } from "../../../utils";
import { useSelectedNode } from "../../../helpers";
import { useDispatch } from "react-redux";
import { setAttribute } from "../../../redux/data-reducer";

const TagSelector = () => {
  const selectedNode = useSelectedNode();
  const dispatch = useDispatch();

  return (
    selectedNode && (
      <Select
        value={{ value: selectedNode.tagName, label: selectedNode.tagName }}
        className="w-full mt-2"
        onChange={(e) => dispatch(setAttribute("tagName", e.value))}
        options={getMoreTags(selectedNode.tagName).map((item) => ({
          value: item,
          label: item,
        }))}
      />
    )
  );
};

export default TagSelector;
