import React from "react";
import Select from "react-select";
const colors = require("tailwindcss/colors");

const SelectComp = (props) => {
  const customStyles = {
    control: (base, state) => ({
      ...base,
      background: colors.stone[600],
      borderRadius: state.isFocused ? "3px 3px 0 0" : 3,
      borderColor: "transparent",
      boxShadow: state.isFocused ? null : null,
      color: colors.stone[200],
      "&:hover": {
        borderColor: state.isFocused ? colors.stone[400] : colors.stone[500],
      },
    }),
    menu: (base) => ({
      ...base,
      borderRadius: 0,
      marginTop: 0,
    }),
    input: (base) => ({
      ...base,
      color: colors.stone[200],
    }),
    singleValue: (base) => ({
      ...base,
      color: colors.stone[200],
    }),
    placeholder: (base) => ({
      ...base,
      color: colors.stone[200],
    }),
    multiValue: (base) => ({
      ...base,
      color: colors.stone[200],
    }),
    menuList: (base) => ({
      ...base,
      padding: 0,
      background: colors.stone[600],
    }),
    option: (base, { isFocused, isSelected }) => ({
      ...base,
      background: isFocused
        ? colors.stone[500]
        : isSelected
        ? colors.stone[500]
        : undefined,
      color: colors.stone[200],
      zIndex: 1,
    }),
  };

  return <Select {...props} styles={customStyles} />;
};

export default SelectComp;
