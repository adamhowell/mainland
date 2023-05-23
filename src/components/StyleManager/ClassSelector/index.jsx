import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Select from "../../Inputs/Select";
import { setAttribute } from "../../../redux/data-reducer";
import { useSelectedNode } from "../../../helpers";
import { clearClassNames } from "../../../utils";
import { classes, combinedColors } from "../../../configs/tailwind";

const ClassSelector = ({ title, name, defaultValue, isColor }) => {
  const [selectedOption, setSelectedOption] = useState({
    value: defaultValue,
    label: defaultValue,
  });
  const [isDefault, setIsDefault] = useState(true);
  const dispatch = useDispatch();
  const selectedNode = useSelectedNode();

  const getColor = (name) => {
    if (name) {
      const parts = name.split("-");
      return parts.length > 2 ? combinedColors[parts[1]][parts[2]] : combinedColors[parts[1]];
    }
  };

  const options = classes[name]
    ? classes[name].map((c) => ({
        value: c,
        label: c,
        ...(isColor ? { color: getColor(c) } : {}),
      }))
    : [];

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
  }, [selectedNode]);

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
    <div className={`mb-2 text-stone-800`}>
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
