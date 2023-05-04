import React from "react";
import parse from "html-react-parser";

export const renderContent = (item) => {
  if(item.children?.length) {
    const child = item.children[0]

    switch (child.tagName) {
      case "span":
        return <span id={item.id} className={child.className ? child.className : ""}>{child.content}</span>
    }
  }
};
