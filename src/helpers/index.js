import { useSelector } from "react-redux";
import { classes } from "../configs/tailwind";
import { getResponsivePrefix, getResponsivePrefixes } from "../utils";

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

const getParentNode = (dom, id) => {
  let resultNode = null;
  if (id) {
    const checkEndReturnNode = (node) => {
      if (node.children)
        node.children.forEach((n) => {
          n.id !== id ? checkEndReturnNode(n) : (resultNode = node);
        });
    };

    dom?.forEach((node) => {
      node.id !== id ? checkEndReturnNode(node) : (resultNode = null);
    });
  }

  return resultNode;
};

export const useSelectedNode = () => {
  const { dom, selectedSection } = useSelector((state) => state.data);
  return getNode(dom, selectedSection?.id);
};

export const useSelectedLayout = () => {
  const { dom, selectedSection } = useSelector((state) => state.data);
  const { responsiveView } = useSelector((state) => state.layout);
  const node = getNode(dom, selectedSection?.id);

  if (node?.className) {
    const cls = node.className.split(" ");
    let result = null;

    getResponsivePrefixes(responsiveView).map((view) => {
      if (!result?.length)
        result = classes.display.filter(
          (d) => cls.indexOf(`${view}${d}`) != -1
        );
    });

    return result.length > 0 ? result[0] : null;
  } else {
    return null;
  }
};

export const useParentLayout = () => {
  const { dom, selectedSection } = useSelector((state) => state.data);
  const { responsiveView } = useSelector((state) => state.layout);
  const node = getParentNode(dom, selectedSection?.id);

  if (node?.className) {
    const cls = node.className.split(" ");
    let result = null;

    getResponsivePrefixes(responsiveView).map((view) => {
      if (!result?.length)
        result = classes.display.filter(
          (d) => cls.indexOf(`${view}${d}`) != -1
        );
    });

    return result.length > 0 ? result[0] : null;
  } else {
    return null;
  }
};

export const useShadowProps = () => {
  const { dom, selectedSection } = useSelector((state) => state.data);
  const { responsiveView } = useSelector((state) => state.layout);
  let resultNode = getNode(dom, selectedSection?.id);
  let isFound = false;

  resultNode?.className?.split(" ").forEach((elm) => {
    if (elm.indexOf(`${getResponsivePrefix(responsiveView)}shadow-[`) === 0)
      isFound = true;
  });

  if (isFound) {
    let shadowPropsString = resultNode?.className.split(
      `${getResponsivePrefix(responsiveView)}shadow-[`
    );
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
  const { responsiveView } = useSelector((state) => state.layout);
  let resultNode = getNode(dom, selectedSection?.id);
  let isBorder = false;

  const getClassName = (name) => {
    if (name.includes(`${getResponsivePrefix(responsiveView)}border-r-`))
      return "borderRColor";
    if (name.includes(`${getResponsivePrefix(responsiveView)}border-l-`))
      return "borderLColor";
    if (name.includes(`${getResponsivePrefix(responsiveView)}border-t-`))
      return "borderTColor";
    if (name.includes(`${getResponsivePrefix(responsiveView)}border-b-`))
      return "borderBColor";
    return "borderColor";
  };

  resultNode?.className?.split(" ").forEach((c) => {
    if (c.indexOf(`${getResponsivePrefix(responsiveView)}border-`) === 0)
      isBorder = true;
  });

  if (isBorder) {
    let borderWidth = null;
    let borderStyle = null;
    let borderColor = null;

    const cls = resultNode.className
      .split(" ")
      .filter((item) =>
        item.includes(`${getResponsivePrefix(responsiveView)}border-`)
      );

    classes.borderWidth.forEach((bW) => {
      if (cls.indexOf(`${getResponsivePrefix(responsiveView)}${bW}`) !== -1)
        borderWidth = `${getResponsivePrefix(responsiveView)}${bW}`;
    });

    classes.borderStyle.forEach((bS) => {
      if (cls.indexOf(`${getResponsivePrefix(responsiveView)}${bS}`) !== -1)
        borderStyle = `${getResponsivePrefix(responsiveView)}${bS}`;
    });

    classes[getClassName(resultNode?.className)].forEach((bC) => {
      if (cls.indexOf(`${getResponsivePrefix(responsiveView)}${bC}`) !== -1)
        borderColor = `${getResponsivePrefix(responsiveView)}${bC}`;
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

export const useClassNames = () => {
  const { dom } = useSelector((state) => state.data);
  const { previousClassNames } = useSelector((state) => state.classes);
  let classNames = [];

  const checkEndReturnNode = (node) => {
    node.className?.split(" ").forEach((elm) => {
      if (classNames.indexOf(elm) === -1) classNames.push(elm);
    });

    if (node.children) {
      node.children.forEach((n) => {
        checkEndReturnNode(n);
      });
    }
  };

  checkEndReturnNode(dom[0]);

  if (JSON.stringify(classNames) !== JSON.stringify(previousClassNames)) {
    return { classNames };
  } else {
    return {};
  }
};
