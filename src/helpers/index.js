import { useSelector } from "react-redux";
import { classes } from "../configs/tailwind";

const getNode = (dom, id) => {
  let resultNode = null;
  if (id) {
    const checkEndReturnNode = (node) => {
      if (node.children)
        node.children.forEach((n) => {
          n.id !== id ? checkEndReturnNode(n) : (resultNode = n);
        });
    };

    dom?.forEach((node) => {
      node.id !== id ? checkEndReturnNode(node) : (resultNode = node);
    });
  }

  return resultNode;
};

export const useSelectedNode = () => {
  const { dom, selectedSection } = useSelector((state) => state.data);
  return getNode(dom, selectedSection?.id);
};

export const useShadowProps = () => {
  const { dom, selectedSection } = useSelector((state) => state.data);
  let resultNode = getNode(dom, selectedSection?.id);

  if (resultNode?.className?.includes("shadow-[")) {
    let shadowPropsString = resultNode?.className.split("shadow-[");
    shadowPropsString = shadowPropsString[1].split("]");
    shadowPropsString = shadowPropsString[0].split("_");

    return {
      shadowHorizontalLength: shadowPropsString[0],
      shadowVerticalLength: shadowPropsString[1],
      shadowBlur: shadowPropsString[2],
      shadowSpread: shadowPropsString[3],
      shadowColor: shadowPropsString[4],
    };
  } else {
    return {};
  }
};

export const useBordersProps = () => {
  const { dom, selectedSection } = useSelector((state) => state.data);
  let resultNode = getNode(dom, selectedSection?.id);

  const getClassName = (name) => {
    if (name.includes("border-r-")) return "borderRColor";
    if (name.includes("border-l-")) return "borderLColor";
    if (name.includes("border-t-")) return "borderTColor";
    if (name.includes("border-b-")) return "borderBColor";
    return "borderColor";
  };

  if (resultNode?.className?.includes("border-")) {
    let borderWidth = null;
    let borderStyle = null;
    let borderColor = null;

    const cls = resultNode.className
      .split(" ")
      .filter((item) => item.includes("border-"));

    classes.borderWidth.forEach((bW) => {
      if (cls.indexOf(bW) !== -1) borderWidth = bW;
    });

    classes.borderStyle.forEach((bS) => {
      if (cls.indexOf(bS) !== -1) borderStyle = bS;
    });

    classes[getClassName(resultNode?.className)].forEach((bC) => {
      if (cls.indexOf(bC) !== -1) borderColor = bC;
    });

    return {
      borderWidth: borderWidth,
      borderStyle: borderStyle,
      borderColor: borderColor,
    };
  } else {
    return {};
  }
};
