import React, { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAttribute } from "../../../redux/data-reducer";
import { useSelectedNode } from "../../../helpers";
import { clearClassNames, getResponsivePrefix } from "../../../utils";
import { classes } from "../../../configs/tailwind";
import Label from "../../Inputs/Label";
import styles from "./RangeSelector.module.scss";

const RangeSelector = ({ title, name, defaultValue }) => {
  const [selectedOption, setSelectedOption] = useState(-1);
  const [isDefault, setIsDefault] = useState(true);
  const dispatch = useDispatch();
  const selectedNode = useSelectedNode();
  const { responsiveView } = useSelector((state) => state.layout);

  const options = useMemo(
    () => [
      ...(classes[name]
        ? classes[name].map((c) => ({
            value: `${getResponsivePrefix(responsiveView)}${c}`,
            label: `${getResponsivePrefix(responsiveView)}${c}`,
          }))
        : []),
    ],
    [responsiveView, classes, name]
  );

  useEffect(() => {
    if (selectedNode) {
      if (selectedNode?.className) {
        let option = 0;
        selectedNode?.className?.split(" ").map((c) => {
          const index = options.map((c, i) => c.value).indexOf(c);
          if (index !== -1) option = index;
        });

        if (option) {
          setSelectedOption(option);
          setIsDefault(false);
        } else {
          setSelectedOption(-1);
          setIsDefault(true);
        }
      } else {
        setSelectedOption(-1);
        setIsDefault(true);
      }
    }
  }, [selectedNode, responsiveView]);

  const onChange = (e) => {
    setSelectedOption(e.target.value);
    console.log(e.target.value, options);

    let className = `${clearClassNames(
      selectedNode.className ? selectedNode.className : "",
      options.map((c) => c.value)
    )}`;

    if (e.target.value >= 0) {
      className = `${
        className?.length
          ? `${className} ${options[e.target.value].value}`
          : options[e.target.value].value
      }`;
    }

    dispatch(setAttribute("className", className));
  };

  return (
    <div className={`flex items-center text-slate-800 py-3`}>
      {title ? <Label>{title}</Label> : <></>}
      <input
        disabled={!selectedNode}
        type="range"
        min="-1"
        className={`${styles.thumb} w-full h-2 bg-slate-500 rounded-lg appearance-none cursor-pointer dark:bg-slate-700`}
        max={options.length - 1}
        onChange={onChange}
        value={selectedNode ? selectedOption : 0}
      />
    </div>
  );
};

export default RangeSelector;
