import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAttribute } from "../../../redux/data-reducer";
import { useSelectedNode } from "../../../helpers";
import { clearClassNames, getResponsivePrefix } from "../../../utils";
import { classes } from "../../../configs/tailwind";
import {
  IconTextLeft,
  IconTextRight,
  IconTextCenter,
  IconTextJustify,
} from "../../Icons";

const AlignSelector = ({ title, name, isColor }) => {
  const dispatch = useDispatch();
  const selectedNode = useSelectedNode();
  const { responsiveView } = useSelector((state) => state.layout);

  const buttons = useMemo(()=>[
    {
      name: `${getResponsivePrefix(responsiveView)}text-left`,
      icon: <IconTextLeft />,
    },
    {
      name: `${getResponsivePrefix(responsiveView)}text-center`,
      icon: <IconTextCenter />,
    },
    {
      name: `${getResponsivePrefix(responsiveView)}text-right`,
      icon: <IconTextRight />,
    },
    {
      name: `${getResponsivePrefix(responsiveView)}text-justify`,
      icon: <IconTextJustify />,
    },
  ], [responsiveView]);

  const options = classes[name]
    ? classes[name].map((c) => ({
        value: `${getResponsivePrefix(responsiveView)}${c}`,
        label: `${getResponsivePrefix(responsiveView)}${c}`,
        ...(isColor ? { color: getColor(c) } : {}),
      }))
    : [];

  const isActive = (name) => {
    let isActive = false;

    selectedNode?.className?.split(" ").forEach(elm => {
      if(elm === name) isActive = true
    })

    return isActive
  };

  const onClick = (type) => {
    if (selectedNode) {
      let className = `${clearClassNames(
        selectedNode.className ? selectedNode.className : "",
        options.map((c) => c.value)
      )}`;

      className = `${className?.length ? `${className} ${type}` : type}`;

      dispatch(setAttribute("className", className));
    }
  };

  return (
    <div className={`mb-2 text-slate-800`}>
      <div className="flex items-center w-full">
        {title ? (
          <span className="uppercase text-slate-400 text-sm font-medium w-2/5 shrink-0">
            {title}
          </span>
        ) : (
          <></>
        )}
        <div
          className={`flex items-center rounded-lg bg-slate-600 overflow-hidden text-xl w-3/5 shrink-0 ${
            !selectedNode ? "pointer-events-none" : ""
          }`}
        >
          {buttons.map((button, i) => (
            <button
              key={`ba-${i}`}
              onClick={() => onClick(button.name)}
              className={`w-full ${
                isActive(button.name) ? "bg-slate-700" : ""
              } hover:bg-slate-700 hover:text-slate-200 transition flex justify-center p-2 ${
                isActive(button.name) ? "text-slate-200" : "text-slate-800"
              }`}
            >
              {button.icon}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlignSelector;
