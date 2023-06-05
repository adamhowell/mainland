import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAttribute } from "../../../redux/data-reducer";
import { useSelectedNode } from "../../../helpers";
import { clearClassNames, getResponsivePrefix } from "../../../utils";
import { classes } from "../../../configs/tailwind";
import styles from "./BordersSelector.module.scss";
import Select from "../../Inputs/Select";
import Button from "./Button";
import { combinedColors } from "../../../configs/tailwind";
import { useBordersProps } from "../../../helpers";

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
  const { borderWidth, borderStyle, borderColor } = useBordersProps();
  const { responsiveView } = useSelector((state) => state.layout);

  useEffect(() => {
    setWidth(borderWidth ? { value: borderWidth, label: borderWidth } : null);
    setStyle(borderStyle ? { value: borderStyle, label: borderStyle } : null);
    setColor(
      borderColor
        ? {
            value: borderColor,
            label: borderColor,
            color: getColor(borderColor),
          }
        : null
    );
    if (borderColor) setActive(getPosition(borderColor));
  }, [borderWidth, borderStyle, borderColor]);

  useEffect(() => {
    if (!selectedNode) setActive("center");
  }, [selectedNode, borderColor]);

  useEffect(() => {
    if (selectedNode && style) {
      let className = `${clearClassNames(
        selectedNode.className ? selectedNode.className : "",
        classes.borderStyle.map(
          (c) => `${getResponsivePrefix(responsiveView)}${c}`
        )
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
        classes.borderWidth.map(
          (c) => `${getResponsivePrefix(responsiveView)}${c}`
        )
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
        classes[getColorClass()].map(
          (c) => `${getResponsivePrefix(responsiveView)}${c}`
        )
      )}`;

      className = `${
        className?.length ? `${className} ${color.value}` : color.value
      }`;

      dispatch(setAttribute("className", className));
    }
  }, [color]);

  const getPosition = (name) => {
    if (name.includes("border-r")) return "right";
    if (name.includes("border-l")) return "left";
    if (name.includes("border-t")) return "top";
    if (name.includes("border-b")) return "bottom";
    return "center";
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
        .replace(`${getResponsivePrefix(responsiveView)}border-t-`, "")
        .replace(`${getResponsivePrefix(responsiveView)}border-b-`, "")
        .replace(`${getResponsivePrefix(responsiveView)}border-l-`, "")
        .replace(`${getResponsivePrefix(responsiveView)}border-r-`, "")
        .replace(`${getResponsivePrefix(responsiveView)}border-x-`, "")
        .replace(`${getResponsivePrefix(responsiveView)}border-y-`, "")
        .replace(`${getResponsivePrefix(responsiveView)}border-`, "")
        .split("-");

      c =
        colorParts.length > 1
          ? combinedColors[colorParts[0]][colorParts[1]]
          : combinedColors[colorParts[0]];
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
            value: `${getResponsivePrefix(responsiveView)}${item}`,
            label: `${getResponsivePrefix(responsiveView)}${item}`,
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
            value: `${getResponsivePrefix(responsiveView)}${item}`,
            label: `${getResponsivePrefix(responsiveView)}${item}`,
            color: getColor(`${getResponsivePrefix(responsiveView)}${item}`),
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
            value: `${getResponsivePrefix(responsiveView)}${item}`,
            label: `${getResponsivePrefix(responsiveView)}${item}`,
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
