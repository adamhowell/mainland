import React, { useState, useEffect } from "react";
import Select from "../../../Inputs/Select";
import { useSelectedNode } from "../../../../helpers";
import { combinedColors } from "../../../../configs/tailwind";

const values = [
  "-50px",
  "-40px",
  "-30px",
  "-20px",
  "-10px",
  "-5px",
  "0px",
  "5px",
  "10px",
  "20px",
  "30px",
  "40px",
  "50px",
].map((c) => ({ value: c, label: c }));

const valuesOpacity = [
  "1",
  "0.9",
  "0.8",
  "0.7",
  "0.6",
  "0.5",
  "0.4",
  "0.3",
  "0.2",
  "0.1",
  "0",
].map((c) => ({ value: c, label: c }));

let colors = [];

Object.keys(combinedColors).map((c) => {
  typeof combinedColors[c] === "string"
    ? colors.push({
        value: combinedColors[c],
        label: c,
        color: combinedColors[c],
      })
    : Object.keys(combinedColors[c]).map((k) => {
        colors.push({
          value: combinedColors[c][k],
          label: `${c}-${k}`,
          color: combinedColors[c][k],
        });
      });
});

const BoxShadow = () => {
  const selectedNode = useSelectedNode();
  const [isDefault, setIsDefault] = useState(false);
  const [lengthH, setLengthH] = useState(null);
  const [lengthV, setLengthV] = useState(null);
  const [blur, setBlur] = useState(null);
  const [spread, setSpread] = useState(null);
  const [opacity, setOpacity] = useState(null);
  const [color, setColor] = useState(null);

  useEffect(() => {
    setIsDefault(true);
    setLengthH(null);
    setLengthV(null);
    setBlur(null);
    setSpread(null);
    setOpacity(null);
    setColor(null);
  }, [selectedNode]);

  const onChange = (e) => {};

  return (
    <div className={`pt-2`}>
      <div className="pb-2">
        <Select
          isDisabled={!selectedNode}
          value={selectedNode ? lengthH : null}
          onChange={onChange}
          options={values}
          isDefault={isDefault}
          placeholder={"Select"}
          label={`Length H`}
        />
      </div>
      <div className="pb-2">
        <Select
          isDisabled={!selectedNode}
          value={selectedNode ? lengthV : null}
          onChange={onChange}
          options={values}
          isDefault={isDefault}
          placeholder={"Select"}
          label={`Length V`}
        />
      </div>
      <div className="pb-2">
        <Select
          isDisabled={!selectedNode}
          value={selectedNode ? blur : null}
          onChange={onChange}
          options={values}
          isDefault={isDefault}
          placeholder={"Select"}
          label={`Blur`}
        />
      </div>
      <div className="pb-2">
        <Select
          isDisabled={!selectedNode}
          value={selectedNode ? spread : null}
          onChange={onChange}
          options={values}
          isDefault={isDefault}
          placeholder={"Select"}
          label={`Spread`}
        />
      </div>
      <div className="pb-2">
        <Select
          isDisabled={!selectedNode}
          value={selectedNode ? opacity : null}
          onChange={onChange}
          options={valuesOpacity}
          isDefault={isDefault}
          placeholder={"Select"}
          label={`Opacity`}
        />
      </div>
      <div className="pb-2">
        <Select
          isDisabled={!selectedNode}
          value={selectedNode ? color : null}
          onChange={onChange}
          options={colors}
          isDefault={isDefault}
          isColor
          placeholder={"Select"}
          label={`Color`}
        />
      </div>
    </div>
  );
};

export default BoxShadow;
