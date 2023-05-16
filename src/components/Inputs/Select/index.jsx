import React, { useMemo } from "react";
import Select, { components } from "react-select";
const colors = require("tailwindcss/colors");
import { IconTriangle } from "../../Icons";

const SelectComp = (props) => {
  const { label, isDefault, ...rest } = props;

  const customStyles = useMemo(
    () => ({
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
        paddingLeft: "0.5rem",
      }),
      singleValue: (base) => ({
        ...base,
        color: isDefault ? colors.stone[400] : colors.stone[200],
        paddingLeft: "0.5rem",
        paddingRight: "0.5rem",
      }),
      placeholder: (base) => ({
        ...base,
        color: colors.stone[400],
        paddingLeft: "0.5rem",
      }),
      multiValue: (base) => ({
        ...base,
        color: isDefault ? colors.stone[400] : colors.stone[200],
        paddingLeft: "0.5rem",
        paddingRight: "0.5rem",
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
      indicatorsContainer: (base) => ({
        ...base,
        marginRight: "0.5rem",
      }),
    }),
    [isDefault]
  );

  const DropdownIndicator = (props) => {
    return (
      <components.DropdownIndicator {...props}>
        <IconTriangle style={{ fontSize: "0.5rem" }} className="rotate-180" />
      </components.DropdownIndicator>
    );
  };

  return (
    <div className="flex items-center w-full">
      {label ? (
        <span className="uppercase text-stone-400 me-4 text-sm font-medium w-3/5">
          {label}
        </span>
      ) : (
        <></>
      )}
      <Select
        components={{ DropdownIndicator, IndicatorSeparator: () => null }}
        {...rest}
        className="w-full"
        styles={customStyles}
      />
    </div>
  );
};

export default SelectComp;
