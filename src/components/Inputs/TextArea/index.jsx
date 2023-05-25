import React from "react";

const TextArea = ({className, ...rest}) => {
  return (
    <textarea
      {...rest}
      className={`p-4 bg-stone-600 rounded-lg w-full text-stone-300 outline-0 ${className ? className : ""}`}
      rows="3"
    />
  );
};

export default TextArea;
