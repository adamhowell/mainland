import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setAttribute } from "../../../redux/data-reducer";
import { useSelectedNode } from "../../../helpers";
import { clearClassNames } from "../../../utils";
import { classes } from "../../../configs/tailwind";
import styles from "./BordersSelector.module.scss";
import Select from "../../Inputs/Select";
import Button from "./Button";
import { combinedColors } from "../../../configs/tailwind";

const buttons = [
  { position: "top" },
  { position: "bottom" },
  { position: "left" },
  { position: "right" },
  { position: "center" },
];

const BordersSelector = () => {
  const dispatch = useDispatch();
  const selectedNode = useSelectedNode();
  const [style, setStyle] = useState(null);
  const [color, setColor] = useState(null);
  const [width, setWidth] = useState(null);
  const [active, setActive] = useState("center");

  useEffect(() => {
    if (selectedNode && style) {
      let className = `${clearClassNames(
        selectedNode.className ? selectedNode.className : "",
        classes.borderStyle
      )}`;

      className = `${
        className?.length ? `${className} ${style.value}` : style.value
      }`;

      dispatch(setAttribute("className", className));
    }
  }, [style]);

  useEffect(() => {
    if (selectedNode && width) {
      let className = `${clearClassNames(
        selectedNode.className ? selectedNode.className : "",
        classes.borderWidth
      )}`;

      className = `${
        className?.length ? `${className} ${width.value}` : width.value
      }`;

      dispatch(setAttribute("className", className));
    }
  }, [width]);

  useEffect(() => {
    if (selectedNode && color) {
      let className = `${clearClassNames(
        selectedNode.className ? selectedNode.className : "",
        classes[getColorClass()]
      )}`;

      className = `${
        className?.length ? `${className} ${color.value}` : color.value
      }`;

      dispatch(setAttribute("className", className));
    }
  }, [color]);

  const isActive = (name) => {
    return selectedNode?.className?.includes(name);
  };

  const getColorClass = () => {
    switch (active) {
      case "center":
        return "borderColor";
      case "left":
        return "borderLColor";
      case "right":
        return "borderRColor";
      case "top":
        return "borderTColor";
      case "bottom":
        return "borderBColor";
    }
  };

  const getColor = (item) => {
    let c = null;

    if (item) {
      const colorParts = item
        .replace("border-t-", "")
        .replace("border-b-", "")
        .replace("border-l-", "")
        .replace("border-r-", "")
        .replace("border-x-", "")
        .replace("border-y-", "")
        .replace("border-", "")
        .split("-");

      c = colorParts.length > 1 ? combinedColors[colorParts[0]][colorParts[1]] : combinedColors[colorParts[0]];
    }

    return c;
  };

  return (
    <div className={`${styles.root}`}>
      <div className="w-2/5 relative">
        <div className={`${styles.buttonsContainer}`}>
          {buttons.map((button, i) => (
            <Button
              active={active === button.position}
              onClick={() => setActive(button.position)}
              position={button.position}
              key={`bbi-${i}`}
            />
          ))}
        </div>
      </div>
      <div className="w-3/5">
        <Select
          isDisabled={!selectedNode}
          value={selectedNode ? style : null}
          onChange={setStyle}
          options={classes.borderStyle.map((item) => ({
            value: item,
            label: item,
          }))}
          placeholder={selectedNode ? "none" : "Select"}
          className="mb-2"
          label={`Style`}
        />
        <Select
          isDisabled={!selectedNode}
          value={selectedNode ? color : null}
          onChange={setColor}
          options={classes[getColorClass()].map((item) => ({
            value: item,
            label: item,
            color: getColor(item),
          }))}
          placeholder={selectedNode ? "none" : "Select"}
          className="mb-2"
          isColor
          isSimpleColor
          label={`Color`}
        />
        <Select
          isDisabled={!selectedNode}
          value={selectedNode ? width : null}
          onChange={setWidth}
          options={classes.borderWidth.map((item) => ({
            value: item,
            label: item,
          }))}
          placeholder={selectedNode ? "none" : "Select"}
          className="mb-2"
          label={`Width`}
        />
      </div>
    </div>
  );
};

export default BordersSelector;
