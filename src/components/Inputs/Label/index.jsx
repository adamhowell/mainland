import React from "react";

const Label = ({ className, children, ...rest }) => {
  return (
    <span
      {...rest}
      className={`uppercase text-slate-400 text-sm font-medium w-2/5 shrink-0 ${
        className ? className : ""
      }`}
    >
      {children}
    </span>
  );
};

export default Label;
