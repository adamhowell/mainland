import React from "react";

const TextArea = ({className, rows, ...rest}) => {
  return (
    <textarea
      {...rest}
      className={`p-4 bg-stone-600 rounded-lg w-full text-stone-300 outline-0 ${className ? className : ""}`}
      rows={rows ? rows : "3"}
    />
  );
};

export default TextArea;
