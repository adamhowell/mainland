import React, { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "../../Inputs/Select";
import { setAttribute } from "../../../redux/data-reducer";
import { useSelectedNode } from "../../../helpers";
import { clearClassNames, getResponsivePrefix } from "../../../utils";
import { classes, combinedColors } from "../../../configs/tailwind";

const ClassSelector = ({ title, name, defaultValue, isColor }) => {
  const [selectedOption, setSelectedOption] = useState({
    value: defaultValue,
    label: defaultValue,
  });
  const [isDefault, setIsDefault] = useState(true);
  const dispatch = useDispatch();
  const selectedNode = useSelectedNode();
  const { responsiveView } = useSelector((state) => state.layout);

  const getColor = (name) => {
    if (name) {
      const parts = name.split("-");
      return parts.length > 2
        ? combinedColors[parts[1]][parts[2]]
        : combinedColors[parts[1]];
    }
  };

  const options = useMemo(
    () => [
      ...(classes[name]
        ? classes[name].map((c) => ({
            value: `${getResponsivePrefix(responsiveView)}${c}`,
            label: `${getResponsivePrefix(responsiveView)}${c}`,
            ...(isColor ? { color: getColor(c) } : {}),
          }))
        : []),
    ],
    [responsiveView, classes, name]
  );

  useEffect(() => {
    if (selectedNode) {
      if (selectedNode?.className) {
        let option = null;
        selectedNode?.className?.split(" ").map((c) => {
          const index = options.map((c) => c.value).indexOf(c);
          if (index !== -1) option = options[index];
        });

        if (option) {
          setSelectedOption(option);
          setIsDefault(false);
        } else {
          setSelectedOption({ value: defaultValue, label: defaultValue });
          setIsDefault(true);
        }
      } else {
        setSelectedOption({ value: defaultValue, label: defaultValue });
        setIsDefault(true);
      }
    }
  }, [selectedNode, responsiveView]);

  const onChange = (e) => {
    setSelectedOption(e);

    let className = `${clearClassNames(
      selectedNode.className ? selectedNode.className : "",
      options.map((c) => c.value)
    )}`;

    className = `${className?.length ? `${className} ${e.value}` : e.value}`;

    dispatch(setAttribute("className", className));
  };

  return (
    <div className={`mb-2 text-slate-800`}>
      <Select
        isDisabled={!selectedNode}
        value={selectedNode ? selectedOption : null}
        onChange={onChange}
        options={options}
        isDefault={isDefault}
        placeholder={"Select"}
        label={title}
        isColor={isColor}
      />
    </div>
  );
};

export default ClassSelector;
