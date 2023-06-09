import React from "react";

const TextArea = ({className, rows, ...rest}) => {
  return (
    <textarea
      {...rest}
      className={`p-4 bg-slate-600 rounded-lg w-full text-slate-300 outline-0 ${className ? className : ""}`}
      rows={rows ? rows : "3"}
    />
  );
};

export default TextArea;
