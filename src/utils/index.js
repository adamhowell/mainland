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

export const htmlToJson = (node, attributes, label) => {
  const id = shortid.generate();
  let tag = {};
  tag["id"] = id;
  tag["tagName"] = node.tagName;
  if (label) tag["label"] = label;
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

export const clearShadowClassNames = (current) => {
  let result = current;

  if (result) {
    result = result
      .split(" ")
      .filter((c) => c.indexOf("shadow-[") === -1)
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

export const rgba2hex = (rgba) => {
  const [red, green, blue, alpha] = rgba.match(/[\d.]+/g);
  const color = `#${Number(red).toString(16).padStart(2, "0")}${Number(green)
    .toString(16)
    .padStart(2, "0")}${Number(blue).toString(16).padStart(2, "0")}`;
  const opacity = parseFloat(alpha);

  return {
    color: color,
    opacity: opacity,
  };
};

export const getColorNameByValue = (colors, value) => {
  let result = null;
  Object.keys(colors).forEach((ck) => {
    if (typeof colors[ck] === "string") {
      if (colors[ck] === value) result = ck;
    } else {
      Object.keys(colors[ck]).forEach((zk) => {
        if (colors[ck][zk] === value) result = `${ck}-${zk}`;
      });
    }
  });

  return result;
};

export const addStyle = (css) => {
  const head = document.head || document.getElementsByTagName("head")[0];
  const style = document.createElement("style");
  style.appendChild(document.createTextNode(css));

  head.appendChild(style);
};

export const getClassByPartOfName = (className, partOfName) => {
  let result = null;

  className?.split(" ").map((c) => {
    if (c.indexOf(partOfName) === 0) result = c;
  });

  return result;
};

export const clearClassNamesByPartOfName = (className, partOfName) =>
  className
    ?.split(" ")
    .filter((c) => c.indexOf(partOfName) !== 0)
    .join(" ");

export const checkAndReturnStyles = (node) => {
  const regex = /([\w-]*)\s*:\s*([^;]*)/g;
  let match,
    properties = {};
  while ((match = regex.exec(node.style)))
    properties[match[1]] = match[2].trim();

  return properties;
};

export const getResponsivePrefix = (view) => {
    switch (view) {
      case "lg":
        return "lg:";
      case "md":
        return "md:";
      case "sm":
        return "";
    }
}