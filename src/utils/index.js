import shortid from "shortid";

export const closedTags = [
  "span",
  "p",
  "i",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
];

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

  if (closedTags.indexOf(node.tagName) >= 0) tag["isClosed"] = true;

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

export const clearClassNames = (current, exclude) => {
  let result = current;

  if (result) {
    result = result
      .split(" ")
      .filter((c) => exclude.indexOf(c) === -1)
      .join(" ");
  }

  return result;
};

export const getWordBoundsAtPosition = (str, position) => {
  const isSpace = (c) => /\s/.exec(c);
  let start = position - 1;
  let end = position;

  while (start >= 0 && !isSpace(str[start])) {
    start -= 1;
  }
  start = Math.max(0, start + 1);

  while (end < str.length && !isSpace(str[end])) {
    end += 1;
  }
  end = Math.max(start, end);

  return [start, end];
};

export const getDefaultDisplayClass = (tag) => {
  switch (tag) {
    case "span":
      return "inline";
    default:
      return "block";
  }
};
