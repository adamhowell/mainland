import shortid from "shortid";

export const htmlToJson = (node, attributes) => {
  const id = shortid.generate();

  let tag = {};
  tag["id"] = id;
  tag["tagName"] = node.tagName;
  tag["children"] = [];

  if(attributes) {
    Object.keys(attributes).forEach((key)=>{
      tag[key === "class" ? "className" : key] = attributes[key];
    })
  }

  if (node.innerHTML && !node.innerHTML.includes("<")) {
    const id = shortid.generate();
    tag["children"].push({ id: id, tagName: "span", content: node.innerHTML });
  }

  for (let i = 0; i < node.children.length; i++) {
    tag["children"].push(htmlToJson(node.children[i]));
  }
  for (let i = 0; i < node.attributes.length; i++) {
    let attr = node.attributes[i];
    tag[attr.name === "class" ? "className" : attr.name] = attr.value;
  }
  return tag;
};
