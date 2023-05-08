import React, { useState } from "react";
import ContentEditable from "react-contenteditable";

const EditableNode = (props) => {
  const [isEditable, setIsEditable] = useState(0);
  const {
    id,
    children,
    content,
    className,
    onChange,
    tagName,
    onClick,
    onMouseEnter,
    onMouseLeave,
    ...rest
  } = props;

  return (
    <div
      id={id}
      {...rest}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`${className ? className : ""} p-1`}
    >
      {children}
      <ContentEditable
        html={content}
        onMouseEnter={()=>{
          onMouseEnter({ target: { id: id } })
        }}
        onMouseLeave={()=>{
          onMouseLeave({ target: { id: id } })
        }}
        onBlur={() => setIsEditable(false)}
        onClick={() => {
          onClick({ target: { id: id } });
          setIsEditable(true);
        }}
        disabled={!isEditable}
        className="w-full block"
        onChange={(e) => onChange(e.target.value)}
        tagName={tagName}
      />
    </div>
  );
};

export default EditableNode;
