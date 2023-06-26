import React, { useState } from "react";
import { useSelectedNode } from "../../../helpers";
import { setAttribute } from "../../../redux/data-reducer";
import Input from "../../Inputs/Input";
import { useDispatch } from "react-redux";

const ExternalImages = () => {
  const selectedNode = useSelectedNode();
  const dispatch = useDispatch();

  return (
    <>
      <h4>{selectedNode?.src ? "Replace image" : "Add image"}</h4>
      <Input
        disabled={!selectedNode}
        defaultValue={
          selectedNode?.src ? selectedNode?.src : ""
        }
        onChange={(e) =>
          dispatch(setAttribute("src", e.target.value))
        }
        placeholder="https://example.com/images/img.png"
        className={`mt-3 mb-3 bg-slate-700`}
      />
      <h5>Preview</h5>
      <div className="border border-slate-500 w-full h-96 mt-3">
        {selectedNode?.src && (
          <img
            className="w-full h-full object-cover"
            src={selectedNode?.src}
          />
        )}
      </div>
    </>
  );
};

export default ExternalImages;
