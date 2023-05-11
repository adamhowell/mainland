import shortid from "shortid";

export const closedTags = ["span", "p", "i", "h1", "h2", "h3", "h4", "h5", "h6"]

export const htmlToJson = (node, attributes) => {
  const id = shortid.generate();

  let tag = {};
  tag["id"] = id;
  tag["tagName"] = node.tagName;
  tag["children"] = [];

  if (attributes) {
    Object.keys(attributes).forEach((key) => {
      tag[key === "class" ? "className" : key] = attributes[key];
    });
  }

  if(closedTags.indexOf(node.tagName) >= 0) tag["isClosed"] = true;

  if (
    (node.innerHTML && !node.innerHTML.includes("<")) ||
    node.tagName === "span"
  ) {
    tag.content = node.textContent;
  } else {
    for (let i = 0; i < node.children.length; i++) {
      tag["children"].push(htmlToJson(node.children[i]));
    }
  }

  for (let i = 0; i < node.attributes.length; i++) {
    let attr = node.attributes[i];
    tag[attr.name === "class" ? "className" : attr.name] = attr.value;
  }
  return tag;
};
