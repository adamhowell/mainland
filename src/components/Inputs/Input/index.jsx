import React from "react";

const Input = ({className, ...rest}) => {
  return (
    <input
      {...rest}
      className={`px-4 py-3 placeholder:text-stone-400 bg-stone-600 rounded-lg w-full text-stone-300 outline-0 ${className ? className : ""} `}
    />
  );
};

export default Input;
