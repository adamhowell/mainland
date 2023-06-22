import React from "react";
import { useDispatch } from "react-redux";
import { setEnableRemove } from "../../../redux/data-reducer";

const Input = ({ className, onFocus, onBlur, ...rest }) => {
  const dispatch = useDispatch();

  const onFocusInner = (e) => {
    if(onFocus) onFocus(e)
    dispatch(setEnableRemove(false))
  };

  const onBlurInner = () => {
    if(onBlur) onBlur(e)
    dispatch(setEnableRemove(true))
  };

  return (
    <input
      {...rest}
      onFocus={onFocusInner}
      onBlur={onBlurInner}
      className={`px-4 py-2 placeholder:text-slate-400 bg-slate-600 rounded w-full text-slate-300 outline-0 ${
        className ? className : ""
      } `}
    />
  );
};

export default Input;
