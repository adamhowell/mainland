import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAttribute } from "../../redux/data-reducer";
import { useSelectedNode } from "../../helpers";
import { clearClassNames } from "../../utils";
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
    pt: 0,
    pb: 0,
    pl: 0,
    pr: 0,
    mt: 0,
    mb: 0,
    ml: 0,
    mr: 0,
  });
  const [selectedY, setSelectedY] = useState(null);
  const [selectedAll, setSelectedAll] = useState(null);
  const [isDefault, setIsDefault] = useState(true);

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
          if (c.includes("pt-")) {
            const v = c.split("pt-");
            setSelectedOption((c) => ({
              ...c,
              pt: v[1],
            }));
          }
          if (c.includes("pb-")) {
            const v = c.split("pb-");
            setSelectedOption((c) => ({
              ...c,
              pb: v[1],
            }));
          }
          if (c.includes("pl-")) {
            const v = c.split("pl-");
            setSelectedOption((c) => ({
              ...c,
              pl: v[1],
            }));
          }
          if (c.includes("pr-")) {
            const v = c.split("pr-");
            setSelectedOption((c) => ({
              ...c,
              pr: v[1],
            }));
          }
          if (c.includes("m-")) {
            const v = c.split("mt-");
            setSelectedOption((c) => ({
              ...c,
              mt: v[1],
            }));
          }
          if (c.includes("mb-")) {
            const v = c.split("mb-");
            setSelectedOption((c) => ({
              ...c,
              mb: v[1],
            }));
          }
          if (c.includes("ml-")) {
            const v = c.split("ml-");
            setSelectedOption((c) => ({
              ...c,
              ml: v[1],
            }));
          }
          if (c.includes("mr-")) {
            const v = c.split("mr-");
            setSelectedOption((c) => ({
              ...c,
              mr: v[1],
            }));
          }
          if (c.includes("p-")) {
            const v = c.split("p-");
            setSelectedOption((c) => ({
              ...c,
              pt: v[1],
              pb: v[1],
              pl: v[1],
              pr: v[1],
            }));
          }

          if (c.includes("m-")) {
            const v = c.split("m-");
            setSelectedOption((c) => ({
              ...c,
              mt: v[1],
              mb: v[1],
              ml: v[1],
              mr: v[1],
            }));
          }

          if (c.includes("py-")) {
            const v = c.split("py-");
            setSelectedOption((c) => ({
              ...c,
              pt: v[1],
              pb: v[1],
            }));
          }

          if (c.includes("my-")) {
            const v = c.split("my-");
            setSelectedOption((c) => ({
              ...c,
              mt: v[1],
              mb: v[1],
            }));
          }

          if (c.includes("px-")) {
            const v = c.split("px-");
            setSelectedOption((c) => ({
              ...c,
              pl: v[1],
              pr: v[1],
            }));
          }

          if (c.includes("mx-")) {
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
      pt: 0,
      pb: 0,
      pl: 0,
      pr: 0,
      mt: 0,
      mb: 0,
      ml: 0,
      mr: 0,
    });

  const onChange = (e) => {};

  const getSelected = (type) => {
    // if (selectedNode) {
    //   if (selectedNode?.className) {
    //     let option = null;
    //     selectedNode?.className?.split(" ").map((c) => {
    //       const index = options1.map((c) => c.value).indexOf(c);
    //       if (index !== -1) option = options[index];
    //     });
    //   }
    // }
    return null;
  };

  return (
    <div
      className={`${styles.root} mb-2 text-stone-800 h-36 relative rounded-lg bg-stone-600`}
    >
      <SidebarModal active={active} onClose={() => setActive(null)}>
        <div className="flex items-center w-full mb-2">
          <span className="uppercase text-stone-400 text-sm font-medium w-2/4 shrink-0">
            {active?.includes("margin") ? "Margin" : "Padding"}-
            {active?.replace("margin", "").replace("padding", "")}
          </span>
          <Select
            isDisabled={!selectedNode}
            value={
              selectedNode
                ? getSelected(
                    active?.replace("margin", "").replace("padding", "")
                  )
                : null
            }
            onChange={onChange}
            options={options1}
            className="w-full"
            placeholder={"Select"}
          />
        </div>
        <div className="flex items-center w-full mb-2">
          <span className="uppercase text-stone-400 text-sm font-medium w-2/4 shrink-0">
            {active?.includes("margin") ? "Margin" : "Padding"} Y-axis
          </span>
          <Select
            isDisabled={!selectedNode}
            value={selectedNode ? getSelected("Y") : null}
            onChange={onChange}
            options={options2}
            className="w-full"
            placeholder={"Select"}
          />
        </div>
        <div className="flex items-center w-full">
          <span className="uppercase text-stone-400 text-sm font-medium w-2/4 shrink-0">
            {active?.includes("margin") ? "Margin" : "Padding"} All
          </span>
          <Select
            isDisabled={!selectedNode}
            value={selectedNode ? getSelected("all") : null}
            onChange={onChange}
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
          value={selectedOption.mt}
          onFocus={() => setActive("marginTop")}
          type="text"
        />
        <input
          className={`${styles.button} ${cls.button} tr-top left-1 top-1/2`}
          value={selectedOption.ml}
          onFocus={() => setActive("marginLeft")}
          type="text"
        />
        <input
          className={`${styles.button} ${cls.button} tr-top right-1 top-1/2`}
          value={selectedOption.mr}
          onFocus={() => setActive("marginRight")}
          type="text"
        />
        <input
          className={`${styles.button} ${cls.button} tr-left bottom-1 left-1/2`}
          value={selectedOption.mb}
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
            value={selectedOption.pt}
            onFocus={() => setActive("paddingTop")}
            type="text"
          />
          <input
            className={`${styles.button} ${cls.button} tr-top left-1 top-1/2`}
            value={selectedOption.pl}
            onFocus={() => setActive("paddingLeft")}
            type="text"
          />
          <input
            className={`${styles.button} ${cls.button} tr-top right-1 top-1/2`}
            value={selectedOption.pr}
            onFocus={() => setActive("paddingRight")}
            type="text"
          />
          <input
            className={`${styles.button} ${cls.button} tr-left bottom-1 left-1/2`}
            value={selectedOption.pb}
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
