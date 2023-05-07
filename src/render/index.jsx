import React, { useState, useRef } from "react";
import { updateText } from "../redux/data-reducer";
import { useDispatch } from "react-redux";
import ContentEditable from 'react-contenteditable'

const Span = ({ children, id, className, onChange }) => {
  const [isEditable, setIsEditable] = useState(0);

  return (
    <ContentEditable
      html={children}
      onBlur={() => setIsEditable(false)}
      onClick={() => setIsEditable(true)}
      disabled={!isEditable}
      onChange={(e) => onChange(e.target.value)}
      className={`inline-block w-full  ${className ? className : ""}`}
      tagName="span"
    />
  );
};

export const renderContent = (item) => {
  const dispatch = useDispatch();

  if (item.children?.length) {
    const child = item.children[0];

    switch (child.tagName) {
      case "span":
        return (
          <Span
            id={child.id}
            onChange={(e) => dispatch(updateText(child.id, e))}
            className={child.className ? child.className : ""}
          >
            {child.content}
          </Span>
        );
    }
  }
};
