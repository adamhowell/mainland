import React from "react";

const TextArea = (props) => {
  return (
    <textarea
      {...props}
      className={`p-4 bg-stone-600 rounded-lg w-full text-stone-300 outline-0`}
      rows="3"
    />
  );
};

export default TextArea;
