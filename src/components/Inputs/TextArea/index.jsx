import React from "react";
import { useDispatch } from "react-redux";
import { setEnableRemove } from "../../../redux/data-reducer";

const TextArea = ({ className, rows, onFocus, onBlur, border, ...rest }) => {
  const dispatch = useDispatch();

  const onFocusInner = (e) => {
    if (onFocus) onFocus(e);
    dispatch(setEnableRemove(false));
  };

  const onBlurInner = () => {
    if (onBlur) onBlur(e);
    dispatch(setEnableRemove(true));
  };

  return (
    <textarea
      {...rest}
      onFocus={onFocusInner}
      onBlur={onBlurInner}
      className={`p-4 bg-slate-600 rounded-lg w-full text-slate-300 outline-0 ${
        className ? className : ""
      } ${border ? 'border border-slate-500' : ""}`}
      rows={rows ? rows : "3"}
    />
  );
};

export default TextArea;
