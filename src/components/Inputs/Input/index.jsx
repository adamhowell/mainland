import React from "react";

const Input = ({className, ...rest}) => {
  return (
    <input
      {...rest}
      className={`px-4 py-2 placeholder:text-slate-400 bg-slate-600 rounded w-full text-slate-300 outline-0 ${className ? className : ""} `}
    />
  );
};

export default Input;
