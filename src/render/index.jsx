import parse from "html-react-parser";

export const renderContent = (item) => {
  switch (item.label) {
    default:
      return parse(item.content, {
        replace: (domNode) => {
          if(!domNode.parent) {
            domNode.attribs.id = item.id;
            domNode.attribs.class = item.attributes.class;
          }
          
          return domNode;
        },
      });
  }
};
