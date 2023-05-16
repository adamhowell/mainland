import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Select from "../../../../Inputs/Select";
import { setAttribute } from "../../../../../redux/data-reducer";
import { useSelectedNode } from "../../../../../helpers";
import { clearClassNames, getDefaultDisplayClass } from "../../../../../utils";
import { classes } from "../../../../../configs/tailwind";

const options = classes.display.map((c) => ({ value: c, label: c }));

const Display = () => {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [isDefault, setIsDefault] = useState(true);
  const dispatch = useDispatch();
  const selectedNode = useSelectedNode();

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
          setSelectedOption(
            options.find(
              (c) => c.value === getDefaultDisplayClass(selectedNode.tagName)
            )
          );
          setIsDefault(true);
        }
      } else {
        setSelectedOption(
          options.find(
            (c) => c.value === getDefaultDisplayClass(selectedNode.tagName)
          )
        );
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
        label={`Display`}
      />
    </div>
  );
};

export default Display;
