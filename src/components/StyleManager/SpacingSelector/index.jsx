import React, { useState, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAttribute } from "../../../redux/data-reducer";
import { useSelectedNode } from "../../../helpers";
import {
  clearClassNames,
  getClassByPartOfName,
  clearClassNamesByPartOfName,
  getResponsivePrefix,
} from "../../../utils";
import { classes } from "../../../configs/tailwind";
import styles from "./SpacingSelector.module.scss";
import Select from "../../../components/Inputs/Select";
import SidebarModal from "../../Modals/SidebarModal";

const cls = {
  button:
    "focus:bg-slate-500 hover:bg-slate-500 rounded transition text-slate-200 text-sm",
};

const SpacingSelector = () => {
  const dispatch = useDispatch();
  const selectedNode = useSelectedNode();
  const [active, setActive] = useState(null);
  const [selectedOption, setSelectedOption] = useState({
    pt: null,
    pb: null,
    pl: null,
    pr: null,
    mt: null,
    mb: null,
    ml: null,
    mr: null,
  });
  const { responsiveView } = useSelector((state) => state.layout);

  const options1 = useMemo(
    () => [
      ...(active
        ? classes[active].map((c) => ({
            value: `${getResponsivePrefix(responsiveView)}${c}`,
            label: `${getResponsivePrefix(responsiveView)}${c}`,
          }))
        : []),
    ],
    [responsiveView, active, classes]
  );

  const options2 = useMemo(
    () => [
      ...(active
        ? classes[
            active?.includes("margin")
              ? active?.includes("marginLeft") ||
                active?.includes("marginRight")
                ? "marginX"
                : "marginY"
              : active?.includes("paddingLeft") ||
                active?.includes("paddingRight")
              ? "paddingX"
              : "paddingY"
          ].map((c) => ({
            value: `${getResponsivePrefix(responsiveView)}${c}`,
            label: `${getResponsivePrefix(responsiveView)}${c}`,
          }))
        : []),
    ],
    [responsiveView, active, classes]
  );

  const options3 = useMemo(
    () => [
      ...(active
        ? classes[active?.includes("margin") ? "margin" : "padding"].map(
            (c) => ({
              value: `${getResponsivePrefix(responsiveView)}${c}`,
              label: `${getResponsivePrefix(responsiveView)}${c}`,
            })
          )
        : []),
    ],
    [responsiveView, active, classes]
  );

  useEffect(() => {
    if (selectedNode) {
      clear();
      if (selectedNode?.className) {
        selectedNode?.className?.split(" ").map((c) => {
          if (c.indexOf(`${getResponsivePrefix(responsiveView)}pt-`) === 0) {
            const v = c.split(`${getResponsivePrefix(responsiveView)}pt-`);
            setSelectedOption((c) => ({
              ...c,
              pt: v[1],
            }));
          }
          if (c.indexOf(`${getResponsivePrefix(responsiveView)}pb-`) === 0) {
            const v = c.split(`${getResponsivePrefix(responsiveView)}pb-`);
            setSelectedOption((c) => ({
              ...c,
              pb: v[1],
            }));
          }
          if (c.indexOf(`${getResponsivePrefix(responsiveView)}pl-`) === 0) {
            const v = c.split(`${getResponsivePrefix(responsiveView)}pl-`);
            setSelectedOption((c) => ({
              ...c,
              pl: v[1],
            }));
          }
          if (c.indexOf(`${getResponsivePrefix(responsiveView)}pr-`) === 0) {
            const v = c.split(`${getResponsivePrefix(responsiveView)}pr-`);
            setSelectedOption((c) => ({
              ...c,
              pr: v[1],
            }));
          }
          if (c.indexOf(`${getResponsivePrefix(responsiveView)}mt-`) === 0) {
            const v = c.split(`${getResponsivePrefix(responsiveView)}mt-`);
            setSelectedOption((c) => ({
              ...c,
              mt: v[1],
            }));
          }
          if (c.indexOf(`${getResponsivePrefix(responsiveView)}mb-`) === 0) {
            const v = c.split(`${getResponsivePrefix(responsiveView)}mb-`);
            setSelectedOption((c) => ({
              ...c,
              mb: v[1],
            }));
          }
          if (c.indexOf(`${getResponsivePrefix(responsiveView)}ml-`) === 0) {
            const v = c.split(`${getResponsivePrefix(responsiveView)}ml-`);
            setSelectedOption((c) => ({
              ...c,
              ml: v[1],
            }));
          }
          if (c.indexOf(`${getResponsivePrefix(responsiveView)}mr-`) === 0) {
            const v = c.split(`${getResponsivePrefix(responsiveView)}mr-`);
            setSelectedOption((c) => ({
              ...c,
              mr: v[1],
            }));
          }
          if (c.indexOf(`${getResponsivePrefix(responsiveView)}p-`) === 0) {
            const v = c.split(`${getResponsivePrefix(responsiveView)}p-`);
            setSelectedOption((c) => ({
              ...c,
              pt: v[1],
              pb: v[1],
              pl: v[1],
              pr: v[1],
            }));
          }

          if (c.indexOf(`${getResponsivePrefix(responsiveView)}m-`) === 0) {
            const v = c.split(`${getResponsivePrefix(responsiveView)}m-`);
            setSelectedOption((c) => ({
              ...c,
              mt: v[1],
              mb: v[1],
              ml: v[1],
              mr: v[1],
            }));
          }

          if (c.indexOf(`${getResponsivePrefix(responsiveView)}py-`) === 0) {
            const v = c.split(`${getResponsivePrefix(responsiveView)}py-`);
            setSelectedOption((c) => ({
              ...c,
              pt: v[1],
              pb: v[1],
            }));
          }

          if (c.indexOf(`${getResponsivePrefix(responsiveView)}my-`) === 0) {
            const v = c.split(`${getResponsivePrefix(responsiveView)}my-`);
            setSelectedOption((c) => ({
              ...c,
              mt: v[1],
              mb: v[1],
            }));
          }

          if (c.indexOf(`${getResponsivePrefix(responsiveView)}px-`) === 0) {
            const v = c.split(`${getResponsivePrefix(responsiveView)}px-`);
            setSelectedOption((c) => ({
              ...c,
              pl: v[1],
              pr: v[1],
            }));
          }

          if (c.indexOf(`${getResponsivePrefix(responsiveView)}mx-`) === 0) {
            const v = c.split(`${getResponsivePrefix(responsiveView)}mx-`);
            setSelectedOption((c) => ({
              ...c,
              ml: v[1],
              mr: v[1],
            }));
          }
        });
      } else {
        clear();
      }
    } else {
      clear();
    }
  }, [selectedNode, responsiveView]);

  const clear = () =>
    setSelectedOption({
      pt: null,
      pb: null,
      pl: null,
      pr: null,
      mt: null,
      mb: null,
      ml: null,
      mr: null,
    });

  const onChange = (e, partOfName) => {
    if (selectedNode) {
      let className = clearClassNamesByPartOfName(
        selectedNode.className,
        partOfName
      );

      className = `${className?.length ? `${className} ${e.value}` : e.value}`;

      dispatch(setAttribute("className", className));
    }
  };

  const isMargin = () => active?.includes("margin");
  const removeName = () => active?.replace("margin", "").replace("padding", "");

  const getOption = (name) => {
    const className = getClassByPartOfName(
      `${selectedNode.className}`,
      `${getResponsivePrefix(responsiveView)}${name}`
    );
    return className
      ? {
          value: className,
          label: className,
        }
      : null;
  };

  const getSelected = (type) => {
    switch (type) {
      case "Top":
        return getOption(isMargin() ? "mt-" : "pt-");
      case "Bottom":
        return getOption(isMargin() ? "mb-" : "pb-");
      case "Left":
        return getOption(isMargin() ? "ml-" : "pl-");
      case "Right":
        return getOption(isMargin() ? "mr-" : "pr-");
      case "Y":
        return getOption(isMargin() ? "my-" : "py-");
      case "X":
        return getOption(isMargin() ? "mx-" : "px-");
      case "all":
        return getOption(isMargin() ? "m-" : "p-");
    }

    return null;
  };

  const XorY = () => {
    return active?.includes("marginLeft") ||
      active?.includes("marginRight") ||
      active?.includes("paddingLeft") ||
      active?.includes("paddingRight")
      ? "x"
      : "y";
  };

  return (
    <div
      className={`${styles.root} mb-2 text-slate-800 h-36 relative rounded-lg bg-slate-600`}
    >
      <SidebarModal active={active} onClose={() => setActive(null)}>
        <div className="flex items-center w-full mb-2">
          <span className="uppercase text-slate-400 text-xs font-medium w-2/4 shrink-0">
            {active?.includes("margin") ? "Margin" : "Padding"}-{removeName()}
          </span>
          <Select
            isDisabled={!selectedNode}
            value={selectedNode ? getSelected(removeName()) : null}
            onChange={(e) =>
              onChange(
                e,
                isMargin()
                  ? `${getResponsivePrefix(responsiveView)}m${
                      removeName().toLowerCase()[0]
                    }-`
                  : `${getResponsivePrefix(responsiveView)}p${
                      removeName().toLowerCase()[0]
                    }-`
              )
            }
            options={options1}
            className="w-full"
            placeholder={"Select"}
          />
        </div>
        <div className="flex items-center w-full mb-2">
          <span className="uppercase text-slate-400 text-xs font-medium w-2/4 shrink-0">
            {active?.includes("margin") ? "Margin" : "Padding"}{" "}
            {XorY().toUpperCase()}
            -axis
          </span>
          <Select
            isDisabled={!selectedNode}
            value={selectedNode ? getSelected(XorY().toUpperCase()) : null}
            onChange={(e) =>
              onChange(
                e,
                isMargin()
                  ? `${getResponsivePrefix(responsiveView)}m${XorY()}-`
                  : `${getResponsivePrefix(responsiveView)}p${XorY()}-`
              )
            }
            options={options2}
            className="w-full"
            placeholder={"Select"}
          />
        </div>
        <div className="flex items-center w-full">
          <span className="uppercase text-slate-400 text-xs font-medium w-2/4 shrink-0">
            {active?.includes("margin") ? "Margin" : "Padding"} All
          </span>
          <Select
            isDisabled={!selectedNode}
            value={selectedNode ? getSelected("all") : null}
            onChange={(e) =>
              onChange(
                e,
                isMargin()
                  ? `${getResponsivePrefix(responsiveView)}m-`
                  : `${getResponsivePrefix(responsiveView)}p-`
              )
            }
            options={options3}
            className="w-full"
            placeholder={"Select"}
          />
        </div>
      </SidebarModal>
      <div className={`w-full h-full absolute top-0 left-0`}>
        <div className="ps-4">
          <span className="uppercase text-slate-400 text-xs font-medium">
            Margin
          </span>
        </div>
        <input
          className={`${styles.button} ${cls.button} tr-left left-1/2 top-1`}
          value={selectedOption.mt ? selectedOption.mt : 0}
          onFocus={() => setActive("marginTop")}
          type="text"
        />
        <input
          className={`${styles.button} ${cls.button} tr-top left-1 top-1/2`}
          value={selectedOption.ml ? selectedOption.ml : 0}
          onFocus={() => setActive("marginLeft")}
          type="text"
        />
        <input
          className={`${styles.button} ${cls.button} tr-top right-1 top-1/2`}
          value={selectedOption.mr ? selectedOption.mr : 0}
          onFocus={() => setActive("marginRight")}
          type="text"
        />
        <input
          className={`${styles.button} ${cls.button} tr-left bottom-1 left-1/2`}
          value={selectedOption.mb ? selectedOption.mb : 0}
          onFocus={() => setActive("marginBottom")}
          type="text"
        />

        <div
          className={`${styles.padding} rounded-lg border-4 border-slate-800`}
        >
          <div className="ps-4">
            <span className="uppercase text-slate-400 text-xs font-medium">
              Padding
            </span>
          </div>
          <input
            className={`${styles.button} ${cls.button} tr-left left-1/2 top-1`}
            value={selectedOption.pt ? selectedOption.pt : 0}
            onFocus={() => setActive("paddingTop")}
            type="text"
          />
          <input
            className={`${styles.button} ${cls.button} tr-top left-1 top-1/2`}
            value={selectedOption.pl ? selectedOption.pl : 0}
            onFocus={() => setActive("paddingLeft")}
            type="text"
          />
          <input
            className={`${styles.button} ${cls.button} tr-top right-1 top-1/2`}
            value={selectedOption.pr ? selectedOption.pr : 0}
            onFocus={() => setActive("paddingRight")}
            type="text"
          />
          <input
            className={`${styles.button} ${cls.button} tr-left bottom-1 left-1/2`}
            value={selectedOption.pb ? selectedOption.pb : 0}
            onFocus={() => setActive("paddingBottom")}
            type="text"
          />
          <div className={`${styles.shape} bg-slate-800`}></div>
        </div>
      </div>
    </div>
  );
};

export default SpacingSelector;
