import { useSelector } from "react-redux";

export const useSelectedNode = () => {
  const { dom, selectedSection } = useSelector((state) => state.data);
  let resultNode = null;
  const id = selectedSection?.id;

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
