import React, { useState, useEffect } from "react";
import Select from "../../../Inputs/Select";
import { useSelectedNode, useShadowProps } from "../../../../helpers";
import {
  combinedColors,
  opacityValues,
  shadowLengthValues,
  shadowBlurValues,
} from "../../../../configs/tailwind";
import hexToRgba from "hex-to-rgba";
import { useDispatch } from "react-redux";
import { setAttribute } from "../../../../redux/data-reducer";
import {
  clearShadowClassNames,
  rgba2hex,
  getColorNameByValue,
  addStyle
} from "../../../../utils";

const values = shadowLengthValues.map((c) => ({ value: c, label: c }));
const valuesOpacity = opacityValues.map((c) => ({ value: c, label: c }));
const valuesBlur = shadowBlurValues.map((c) => ({ value: c, label: c }));

let colors = [];

Object.keys(combinedColors).map((c) => {
  if (typeof combinedColors[c] === "string") {
    colors.push({
      value: combinedColors[c],
      label: c,
      color: combinedColors[c],
    });
  } else {
    colors.push({
      value: combinedColors[c][500],
      label: `${c}-${500}`,
      color: combinedColors[c][500],
    });
  }
});

console.log(
  console.log(
    "Clear",
    clearShadowClassNames(
      "shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)]"
    )
  )
);

const BoxShadow = () => {
  const selectedNode = useSelectedNode();
  const [isDefault, setIsDefault] = useState(false);
  const [lengthH, setLengthH] = useState(null);
  const [lengthV, setLengthV] = useState(null);
  const [blur, setBlur] = useState(null);
  const [spread, setSpread] = useState(null);
  const [opacity, setOpacity] = useState(null);
  const [color, setColor] = useState(null);
  const dispatch = useDispatch();
  const {
    shadowHorizontalLength,
    shadowVerticalLength,
    shadowBlur,
    shadowSpread,
    shadowColor,
  } = useShadowProps();

  useEffect(() => {
    if (shadowHorizontalLength) {
      const color = rgba2hex(shadowColor);
      setLengthH({
        value: shadowHorizontalLength,
        label: shadowHorizontalLength,
      });
      setLengthV({ value: shadowVerticalLength, label: shadowVerticalLength });
      setBlur({ value: shadowBlur, label: shadowBlur });
      setSpread({ value: shadowSpread, label: shadowSpread });
      setOpacity({ value: color.opacity, label: color.opacity });
      setColor({
        value: color.color,
        label: getColorNameByValue(combinedColors, color.color),
        color: color.color,
      });
    } else {
      setIsDefault(true);
      setLengthH(null);
      setLengthV(null);
      setBlur(null);
      setSpread(null);
      setOpacity(null);
      setColor(null);
    }
  }, [
    selectedNode,
    shadowHorizontalLength,
    shadowVerticalLength,
    shadowBlur,
    shadowSpread,
    shadowColor,
  ]);

  useEffect(() => {
    if (color && opacity && spread && blur && lengthV && lengthH) {
      const className = `shadow-[${lengthH.value}_${lengthV.value}_${
        blur.value
      }_${spread.value}_${hexToRgba(color.value, opacity.value).replaceAll(
        " ",
        ``
      )}]`;

      if (!selectedNode?.className?.includes(className)) {
        const classNameSelector = `shadow-\\[${lengthH.value}_${
          lengthV.value
        }_${blur.value}_${spread.value}_${hexToRgba(color.value, opacity.value)
          .replaceAll(",", `\\2c`)
          .replace("(", `\\(`)
          .replaceAll(".", `\\.`)
          .replace(")", `\\)`)}\\]`;

        const css = `.${classNameSelector}{box-shadow:${lengthH.value} ${
          lengthV.value
        } ${blur.value} ${spread.value} ${hexToRgba(
          color.value,
          opacity.value
        )}}`;

        addStyle(css)

        const clearClassNames = clearShadowClassNames(selectedNode?.className);

        dispatch(
          setAttribute(
            "className",
            `${
              selectedNode?.className
                ? `${
                    clearClassNames
                      ? `${clearClassNames} ${className}`
                      : `${className}`
                  }`
                : className
            }`
          )
        );
      }
    }
  }, [color, opacity, spread, blur, lengthV, lengthH]);

  return (
    <div className={`pt-2`}>
      <div className="pb-2">
        <Select
          isDisabled={!selectedNode}
          value={selectedNode ? lengthH : null}
          onChange={setLengthH}
          options={values}
          placeholder={"Select"}
          label={`Length H`}
        />
      </div>
      <div className="pb-2">
        <Select
          isDisabled={!selectedNode}
          value={selectedNode ? lengthV : null}
          onChange={setLengthV}
          options={values}
          placeholder={"Select"}
          label={`Length V`}
        />
      </div>
      <div className="pb-2">
        <Select
          isDisabled={!selectedNode}
          value={selectedNode ? blur : null}
          onChange={setBlur}
          options={valuesBlur}
          placeholder={"Select"}
          label={`Blur`}
        />
      </div>
      <div className="pb-2">
        <Select
          isDisabled={!selectedNode}
          value={selectedNode ? spread : null}
          onChange={setSpread}
          options={values}
          placeholder={"Select"}
          label={`Spread`}
        />
      </div>
      <div className="pb-2">
        <Select
          isDisabled={!selectedNode}
          value={selectedNode ? opacity : null}
          onChange={setOpacity}
          options={valuesOpacity}
          placeholder={"Select"}
          label={`Opacity`}
        />
      </div>
      <div className="pb-2">
        <Select
          isDisabled={!selectedNode}
          value={selectedNode ? color : null}
          onChange={setColor}
          options={colors}
          isColor
          placeholder={"Select"}
          label={`Color`}
        />
      </div>
    </div>
  );
};

export default BoxShadow;
