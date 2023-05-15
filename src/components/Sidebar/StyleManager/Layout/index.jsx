import React, { useState } from "react";
import styles from "./Layout.module.scss";
import { useSelector } from "react-redux";
import Select from "../../../Inputs/Select";

const options = [
  { value: "block", label: "Block" },
  { value: "flex", label: "Flex" },
  { value: "inline-block", label: "Inline Block" },
  { value: "inline", label: "Inline" },
  { value: "hidden", label: "Hidden" },
];

const Layout = () => {
  const { selectedSection } = useSelector((state) => state.data);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  return (
    <div className={`${styles.root} pt-2 text-stone-800`}>
      <Select
        value={selectedOption}
        onChange={(e) => setSelectedOption(e)}
        options={options}
      />
    </div>
  );
};

export default Layout;
