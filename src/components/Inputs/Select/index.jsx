import React, { useMemo } from "react";
import Select, { components } from "react-select";
import { IconTriangle } from "../../Icons";
import Label from "../Label";

const colors = require("tailwindcss/colors");

const SelectComp = (props) => {
  const { label, isDefault, isColor, isSimpleColor, ...rest } = props;

  const customStyles = useMemo(
    () => ({
      control: (base, state) => ({
        ...base,
        background: colors.slate[600],
        borderRadius: state.isFocused ? "8px 8px 0 0" : 8,
        borderColor: "transparent",
        boxShadow: state.isFocused ? null : null,
        color: colors.slate[200],
        "&:hover": {
          borderColor: state.isFocused ? colors.slate[400] : colors.slate[500],
        },
      }),
      menu: (base) => ({
        ...base,
        borderRadius: 0,
        marginTop: 0,
      }),
      input: (base) => ({
        ...base,
        color: colors.slate[200],
        paddingLeft: "0.5rem",
      }),
      singleValue: (base, { data }) => ({
        ...base,
        color: isDefault ? colors.slate[400] : colors.slate[200],
        paddingLeft: isColor && data.value !== "none" ? 0 : "0.5rem",
        paddingRight: "0.5rem",
        fontSize: "0.875rem"
      }),
      placeholder: (base) => ({
        ...base,
        color: colors.slate[400],
        paddingLeft: "0.5rem",
      }),
      multiValue: (base) => ({
        ...base,
        color: isDefault ? colors.slate[400] : colors.slate[200],
        paddingLeft: "0.5rem",
        paddingRight: "0.5rem",
        fontSize: "0.875rem"
      }),
      menuList: (base) => ({
        ...base,
        padding: 0,
        background: colors.slate[600],
        fontSize: "0.875rem",
        overflowX: "hidden"
      }),
      option: (base, { isFocused, isSelected, data }) => ({
        ...base,
        background: isFocused
          ? colors.slate[500]
          : isSelected
          ? colors.slate[500]
          : undefined,
        color: colors.slate[200],
        zIndex: 1,
        padding: isSimpleColor ? "8px 9px" : "8px 12px",
        width: isSimpleColor ? "26px" : "100%"
      }),
      indicatorsContainer: (base) => ({
        ...base,
        marginRight: "0.5rem",
      }),
    }),
    [isDefault, isSimpleColor, isColor]
  );

  const DropdownIndicator = (props) => {
    return (
      <components.DropdownIndicator {...props}>
        <IconTriangle style={{ fontSize: "0.5rem" }} className="rotate-180" />
      </components.DropdownIndicator>
    );
  };

  const SingleValue = (props) => {
    return (
      <components.SingleValue {...props}>
        <div className="flex items-center">
          {isColor && props.data.value !== "none" && (
            <div
              style={{
                width: "16px",
                height: "16px",
                borderRadius: "4px",
                marginRight: "0.5rem",
                flexShrink: "0",
                backgroundColor: props.data.color,
              }}
            ></div>
          )}
          <span>{props.data.label}</span>
        </div>
      </components.SingleValue>
    );
  };

  const Option = (props) => {
    return (
      <components.Option {...props}>
        <div className={`flex items-center ${isSimpleColor ? "justify-center w-4" : "justify-start"}`}>
          {isColor && props.data.value !== "none" && (
            <div
              style={{
                width: isSimpleColor ? "13px" : "16px",
                height: isSimpleColor ? "13px" : "16px",
                borderRadius: "4px",
                marginRight: "0.5rem",
                flexShrink: "0",
                backgroundColor: props.data.color,
              }}
            ></div>
          )}
          {!isSimpleColor && <span>{props.data.label}</span>}
        </div>
      </components.Option>
    );
  };

  const MenuList = (props) => {
    return (
      <components.MenuList {...props} className={`${isSimpleColor ? "flex flex-wrap" : ""}`}>
          {props.children}
      </components.MenuList>
    );
  };

  return (
    <div className="flex items-center w-full">
      {label ? (
        <Label>{label}</Label>
      ) : (
        <></>
      )}
      <Select
        components={{
          DropdownIndicator,
          IndicatorSeparator: () => null,
          SingleValue,
          Option,
          MenuList
        }}
        {...rest}
        className={`${props.className ? props.className : ''} ${label ? "w-3/5" : ""} shrink-0`}
        styles={customStyles}
      />
    </div>
  );
};

export default SelectComp;
