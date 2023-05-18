import { useSelector } from "react-redux";

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
  return getNode(dom, selectedSection?.id)
};

export const useShadowProps = () => {
  const { dom, selectedSection } = useSelector((state) => state.data);
  let resultNode = getNode(dom, selectedSection?.id);

  if (resultNode?.className?.includes("shadow-[")) {

    let shadowPropsString = resultNode?.className.split("shadow-[")
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
