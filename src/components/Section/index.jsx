import React from "react";
import styles from './section.module.scss'
import {
  IconClose,
  IconChevronDown,
  IconChevronUp
} from "../Icons"

const Section = ({ children, onRemove, onUp, onDown }) => {

  return <div className={`${styles.root}`}>
    <div className={`${styles.actions}`}>
      <div onClick={() => { if (onUp) onUp() }} className="mb-1"><IconChevronUp /></div>
      <div onClick={() => { if (onDown) onDown() }}><IconChevronDown /></div>
      <div onClick={() => { if (onRemove) onRemove() }} className="mt-4"><IconClose /></div>
    </div>
    {children}
  </div>
}

export default Section;
