import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setAttribute } from "../../redux/data-reducer";
import { useSelectedNode } from "../../helpers";
import { clearClassNames } from "../../utils";
import { classes, combinedColors } from "../../configs/tailwind";
import {
  IconTextLeft,
  IconTextRight,
  IconTextCenter,
  IconTextJustify,
} from "../Icons";

const buttons = [
  {
    name: "text-left",
    icon: <IconTextLeft />,
  },
  {
    name: "text-center",
    icon: <IconTextCenter />,
  },
  {
    name: "text-right",
    icon: <IconTextRight />,
  },
  {
    name: "text-justify",
    icon: <IconTextJustify />,
  },
];

const AlignSelector = ({ title, name, defaultValue, isColor }) => {
  const [selectedOption, setSelectedOption] = useState({
    value: defaultValue,
    label: defaultValue,
  });
  const [isDefault, setIsDefault] = useState(true);
  const dispatch = useDispatch();
  const selectedNode = useSelectedNode();

  const options = classes[name]
    ? classes[name].map((c) => ({
        value: c,
        label: c,
        ...(isColor ? { color: getColor(c) } : {}),
      }))
    : [];

  // useEffect(() => {
  //   if (selectedNode) {
  //     if (selectedNode?.className) {
  //       let option = null;
  //       selectedNode?.className?.split(" ").map((c) => {
  //         const index = options.map((c) => c.value).indexOf(c);
  //         if (index !== -1) option = options[index];
  //       });

  //       if (option) {
  //         setSelectedOption(option);
  //         setIsDefault(false);
  //       } else {
  //         setSelectedOption({ value: defaultValue, label: defaultValue });
  //         setIsDefault(true);
  //       }
  //     } else {
  //       setSelectedOption({ value: defaultValue, label: defaultValue });
  //       setIsDefault(true);
  //     }
  //   }
  // }, [selectedNode]);

  const isActive = (name) => {
    return selectedNode?.className?.includes(name);
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
    <div className={`mb-2 text-stone-800`}>
      <div className="flex items-center w-full">
        {title ? (
          <span className="uppercase text-stone-400 text-sm font-medium w-2/5 shrink-0">
            {title}
          </span>
        ) : (
          <></>
        )}
        <div
          className={`flex items-center rounded bg-stone-600 overflow-hidden text-xl w-3/5 shrink-0 ${
            !selectedNode ? "pointer-events-none" : ""
          }`}
        >
          {buttons.map((button, i) => (
            <button
              key={`ba-${i}`}
              onClick={() => onClick(button.name)}
              className={`w-full ${
                isActive(button.name) ? "bg-stone-700" : ""
              } hover:bg-stone-700 hover:text-stone-200 transition flex justify-center p-2 text-stone-${
                isActive(button.name) ? "200" : "800"
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
