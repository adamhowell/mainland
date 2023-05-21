import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAttribute } from "../../redux/data-reducer";
import { useSelectedNode } from "../../helpers";
import {
  clearClassNames,
  getClassByPartOfName,
  clearClassNamesByPartOfName,
} from "../../utils";
import { classes } from "../../configs/tailwind";
import styles from "./SpacingSelector.module.scss";
import Select from "../../components/Inputs/Select";
import SidebarModal from "../Modals/SidebarModal";

const cls = {
  button:
    "focus:bg-stone-500 hover:bg-stone-500 rounded transition text-stone-200 text-sm",
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

  const options1 = active
    ? classes[active].map((c) => ({
        value: c,
        label: c,
      }))
    : [];

  const options2 = active
    ? classes[active?.includes("margin") ? "marginY" : "paddingY"].map((c) => ({
        value: c,
        label: c,
      }))
    : [];

  const options3 = active
    ? classes[active?.includes("margin") ? "margin" : "padding"].map((c) => ({
        value: c,
        label: c,
      }))
    : [];

  const isActive = (name) => {
    return selectedNode?.className?.includes(name);
  };

  const onClick = (type) => {
    if (selectedNode) {
      let className = `${clearClassNames(
        selectedNode.className ? selectedNode.className : "",
        options.map((c) => c.value)
      )}`;

      className = `${className?.length ? `${className} ${type}` : type}`;

      dispatch(setAttribute("className", className));
    }
  };

  useEffect(() => {
    if (selectedNode) {
      clear();
      if (selectedNode?.className) {
        selectedNode?.className?.split(" ").map((c) => {
          if (c.indexOf("pt-") === 0) {
            const v = c.split("pt-");
            setSelectedOption((c) => ({
              ...c,
              pt: v[1],
            }));
          }
          if (c.indexOf("pb-") === 0) {
            const v = c.split("pb-");
            setSelectedOption((c) => ({
              ...c,
              pb: v[1],
            }));
          }
          if (c.indexOf("pl-") === 0) {
            const v = c.split("pl-");
            setSelectedOption((c) => ({
              ...c,
              pl: v[1],
            }));
          }
          if (c.indexOf("pr-") === 0) {
            const v = c.split("pr-");
            setSelectedOption((c) => ({
              ...c,
              pr: v[1],
            }));
          }
          if (c.indexOf("mt-") === 0) {
            const v = c.split("mt-");
            setSelectedOption((c) => ({
              ...c,
              mt: v[1],
            }));
          }
          if (c.indexOf("mb-") === 0) {
            const v = c.split("mb-");
            setSelectedOption((c) => ({
              ...c,
              mb: v[1],
            }));
          }
          if (c.indexOf("ml-") === 0) {
            const v = c.split("ml-");
            setSelectedOption((c) => ({
              ...c,
              ml: v[1],
            }));
          }
          if (c.indexOf("mr-") === 0) {
            const v = c.split("mr-");
            setSelectedOption((c) => ({
              ...c,
              mr: v[1],
            }));
          }
          if (c.indexOf("p-") === 0) {
            const v = c.split("p-");
            setSelectedOption((c) => ({
              ...c,
              pt: v[1],
              pb: v[1],
              pl: v[1],
              pr: v[1],
            }));
          }

          if (c.indexOf("m-") === 0) {
            const v = c.split("m-");
            setSelectedOption((c) => ({
              ...c,
              mt: v[1],
              mb: v[1],
              ml: v[1],
              mr: v[1],
            }));
          }

          if (c.indexOf("py-") === 0) {
            const v = c.split("py-");
            setSelectedOption((c) => ({
              ...c,
              pt: v[1],
              pb: v[1],
            }));
          }

          if (c.indexOf("my-") === 0) {
            const v = c.split("my-");
            setSelectedOption((c) => ({
              ...c,
              mt: v[1],
              mb: v[1],
            }));
          }

          if (c.indexOf("px-") === 0) {
            const v = c.split("px-");
            setSelectedOption((c) => ({
              ...c,
              pl: v[1],
              pr: v[1],
            }));
          }

          if (c.indexOf("mx-") === 0) {
            const v = c.split("mx-");
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
  }, [selectedNode]);

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
    console.log(partOfName)
    if (selectedNode) {
      let className = clearClassNamesByPartOfName(
        selectedNode.className,
        partOfName
      );

      className = `${
        className?.length ? `${className} ${e.value}` : e.value
      }`;

      dispatch(setAttribute("className", className));
    }
  };

  const isMargin = () => active?.includes("margin");
  const removeName = () => active?.replace("margin", "").replace("padding", "");

  const getOption = (name) => {
    const className = getClassByPartOfName(selectedNode.className, name);
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
      case "all":
        return getOption(isMargin() ? "m-" : "p-");
    }

    return null;
  };

  return (
    <div
      className={`${styles.root} mb-2 text-stone-800 h-36 relative rounded-lg bg-stone-600`}
    >
      <SidebarModal active={active} onClose={() => setActive(null)}>
        <div className="flex items-center w-full mb-2">
          <span className="uppercase text-stone-400 text-xs font-medium w-2/4 shrink-0">
            {active?.includes("margin") ? "Margin" : "Padding"}-{removeName()}
          </span>
          <Select
            isDisabled={!selectedNode}
            value={selectedNode ? getSelected(removeName()) : null}
            onChange={(e) =>
              onChange(
                e,
                isMargin()
                  ? `m${removeName().toLowerCase()[0]}-`
                  : `p${removeName().toLowerCase()[0]}-`
              )
            }
            options={options1}
            className="w-full"
            placeholder={"Select"}
          />
        </div>
        <div className="flex items-center w-full mb-2">
          <span className="uppercase text-stone-400 text-xs font-medium w-2/4 shrink-0">
            {active?.includes("margin") ? "Margin" : "Padding"} Y-axis
          </span>
          <Select
            isDisabled={!selectedNode}
            value={selectedNode ? getSelected("Y") : null}
            onChange={(e) => onChange(e, isMargin() ? `my-` : `py-`)}
            options={options2}
            className="w-full"
            placeholder={"Select"}
          />
        </div>
        <div className="flex items-center w-full">
          <span className="uppercase text-stone-400 text-xs font-medium w-2/4 shrink-0">
            {active?.includes("margin") ? "Margin" : "Padding"} All
          </span>
          <Select
            isDisabled={!selectedNode}
            value={selectedNode ? getSelected("all") : null}
            onChange={(e) => onChange(e, isMargin() ? `m-` : `p-`)}
            options={options3}
            className="w-full"
            placeholder={"Select"}
          />
        </div>
      </SidebarModal>
      <div className={`w-full h-full absolute top-0 left-0`}>
        <div className="ps-4">
          <span className="uppercase text-stone-400 text-xs font-medium">
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

        <div className={`${styles.padding} rounded-lg border-4 border-primary`}>
          <div className="ps-4">
            <span className="uppercase text-stone-400 text-xs font-medium">
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
          <div className={`${styles.shape} bg-primary`}></div>
        </div>
      </div>
    </div>
  );
};

export default SpacingSelector;
