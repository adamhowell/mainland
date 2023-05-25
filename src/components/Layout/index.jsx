import React from "react";
import styles from "./Layout.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { IconEyeSlash } from "../Icons";
import { setIsPreview } from "../../redux/layout-reducer";

const Layout = ({
  slotHeader,
  slotSidebar,
  slotCanvas,
  slotBreadcrumb,
  slotModals,
}) => {
  const { isPreview } = useSelector((state) => state.layout);
  const dispatch = useDispatch();

  return (
    <div className={`${styles.root}`}>
      <div
        onClick={() => dispatch(setIsPreview(false))}
        className={`${styles.previewToggler} ${isPreview ? "show" : ""}`}
      >
        <IconEyeSlash />
      </div>
      <div className={`${styles.header} ${isPreview ? "hide" : ""}`}>
        {slotHeader}
      </div>
      <div className={`${styles.inner} ${isPreview ? "expand" : ""}`}>
        <div
          className={`${styles.canvasContainer} ${isPreview ? "expand" : ""}`}
        >
          <div className={`${styles.canvas} ${isPreview ? "expand" : ""}`}>
            {slotCanvas}
          </div>
          <div className={`${styles.breadcrumb} ${isPreview ? "hide" : ""}`}>
            {slotBreadcrumb}
          </div>
        </div>
        <div className={`${styles.sidebar} ${isPreview ? "hide" : ""}`}>
          {slotSidebar}
        </div>
      </div>
      {slotModals}
    </div>
  );
};

export default Layout;
