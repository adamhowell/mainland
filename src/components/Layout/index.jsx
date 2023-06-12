import React, { useEffect, useContext, useState } from "react";
import styles from "./Layout.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { IconEyeSlash } from "../Icons";
import { setIsPreview } from "../../redux/layout-reducer";
import { setBackward, setForward } from "../../redux/data-reducer";
import Frame, {
  FrameContextConsumer,
  FrameContext,
} from "react-frame-component";
import { DndContext } from "react-dnd";
import { screens } from "../../configs/tailwind";

const Layout = ({
  slotHeader,
  slotSidebar,
  slotCanvas,
  slotBreadcrumb,
  slotModals,
}) => {
  const { isPreview, responsiveView } = useSelector((state) => state.layout);
  const dispatch = useDispatch();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsReady(true);
    }, 500);
  }, []);

  const DndFrame = ({ children }) => {
    const { dragDropManager } = useContext(DndContext);
    const { window } = useContext(FrameContext);

    useEffect(() => {
      dragDropManager.getBackend().addEventListeners(window);
    });

    return children;
  };

  const FrameBindingContext = ({ children }) => (
    <FrameContextConsumer>
      {({ document, window }) => (
        <Canvas document={document} window={window}>
          {children}
        </Canvas>
      )}
    </FrameContextConsumer>
  );

  const Canvas = ({ children, document, window }) => {
    const tw = document.createElement("script");
    const twElm = document.querySelector("#tailwind");

    useEffect(() => {
      if (!twElm) {
        tw.setAttribute("src", "https://cdn.tailwindcss.com");
        tw.setAttribute("id", "tailwind");
        document.head.appendChild(tw);
      }
      window.addEventListener("keydown", onKeyDown);

      return () => window.removeEventListener("keydown", onKeyDown);
    }, []);

    return children;
  };

  const onKeyDown = (e) => {
    const evtobj = window.event ? e : e;
    if (evtobj.keyCode == 90 && evtobj.ctrlKey) dispatch(setBackward());
    if (evtobj.keyCode == 89 && evtobj.ctrlKey) dispatch(setForward());
  };

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
          className={`${styles.canvasContainer} bg-slate-950 ${
            isPreview ? "expand" : ""
          }`}
        >
          <div
            style={{
              maxWidth:
                responsiveView !== Object.keys(screens).pop()
                  ? screens[responsiveView]
                  : "100%",
            }}
            className={`${styles.canvas} transition-opacity opacity-${
              isReady ? "100" : "0"
            } mx-auto ${isPreview ? "expand" : ""}`}
          >
            <Frame style={{ width: "100%", height: "100%" }}>
              <FrameBindingContext>
                <DndFrame>{slotCanvas}</DndFrame>
              </FrameBindingContext>
            </Frame>
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
