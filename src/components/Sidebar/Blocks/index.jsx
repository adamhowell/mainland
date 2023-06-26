import React from "react";
import styles from "./Blocks.module.scss";
import { useSelector, useDispatch } from "react-redux";
import ButtonBlock from "./ButtonBlock";
import { addToDom } from "../../../redux/data-reducer";
import { openModal } from "../../../redux/modals-reducer";

const AIBlocks = [
  {
    label: "AI Template",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="64px" height="64px" viewBox="0 0 64 64"><g><path d="M21.4,36.6l-3.1,9.3h-4l10.1-29.7h4.6l10.1,29.7h-4.1l-3.2-9.3H21.4z M31.1,33.6l-2.9-8.5c-0.7-1.9-1.1-3.7-1.5-5.4h-0.1c-0.4,1.8-0.9,3.6-1.5,5.4l-2.9,8.6H31.1z"/><path d="M47.4,16.3v29.7h-3.8V16.3H47.4z"/></g></svg>',
  },
  {
    label: "AI Headline",
    prompt:
      "one sentence headline about Tailwind, white typography, large, tag h1 and bold",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="64px" height="64px" viewBox="0 0 64 64"><g><path d="M21.4,36.6l-3.1,9.3h-4l10.1-29.7h4.6l10.1,29.7h-4.1l-3.2-9.3H21.4z M31.1,33.6l-2.9-8.5c-0.7-1.9-1.1-3.7-1.5-5.4h-0.1c-0.4,1.8-0.9,3.6-1.5,5.4l-2.9,8.6H31.1z"/><path d="M47.4,16.3v29.7h-3.8V16.3H47.4z"/></g></svg>',
  },
  {
    label: "AI Paragraph",
    prompt: "one random paragraph about Tailwind, 20-30 words, color white",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="64px" height="64px" viewBox="0 0 64 64"><g><path d="M21.4,36.6l-3.1,9.3h-4l10.1-29.7h4.6l10.1,29.7h-4.1l-3.2-9.3H21.4z M31.1,33.6l-2.9-8.5c-0.7-1.9-1.1-3.7-1.5-5.4h-0.1c-0.4,1.8-0.9,3.6-1.5,5.4l-2.9,8.6H31.1z"/><path d="M47.4,16.3v29.7h-3.8V16.3H47.4z"/></g></svg>',
  },
  {
    label: "AI Image",
    prompt: "abstract dark background",
    isImage: true,
    icon: '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="64px" height="64px" viewBox="0 0 64 64"><g><path d="M21.4,36.6l-3.1,9.3h-4l10.1-29.7h4.6l10.1,29.7h-4.1l-3.2-9.3H21.4z M31.1,33.6l-2.9-8.5c-0.7-1.9-1.1-3.7-1.5-5.4h-0.1c-0.4,1.8-0.9,3.6-1.5,5.4l-2.9,8.6H31.1z"/><path d="M47.4,16.3v29.7h-3.8V16.3H47.4z"/></g></svg>',
  },
];

const StyleManager = () => {
  const {
    config: { blocks },
  } = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const onAddSection = (block) => {
    dispatch(addToDom(block));
  };

  return (
    <div className={`${styles.root}`}>
      {AIBlocks.map((block, i) => (
        <ButtonBlock
          onClick={() =>
            dispatch(
              openModal("AI", { prompt: block.prompt, isImage: block.isImage })
            )
          }
        >
          <div dangerouslySetInnerHTML={{ __html: block.icon }}></div>
          {block.label}
        </ButtonBlock>
      ))}
      {blocks.map((block, i) => (
        <ButtonBlock
          data={block}
          onClick={() => onAddSection(block)}
          key={`bi-${i}`}
        >
          <div dangerouslySetInnerHTML={{ __html: block.icon }}></div>
          {block.label}
        </ButtonBlock>
      ))}
    </div>
  );
};

export default StyleManager;
