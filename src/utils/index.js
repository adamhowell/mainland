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
  "li",
  "blockquote",
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

export const clearShadowClassNames = (current, prefix) => {
  let result = current;

  if (result) {
    result = result
      .split(" ")
      .filter((c) => c.indexOf(`${prefix}shadow-[`) !== 0)
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
    case "button":
      return "inline-block";
    default:
      return "block";
  }
};

export const getDefaultDisplayClassEditable = (tag) => {
  switch (tag) {
    case "span":
    case "button":
      return "inline-block";
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
    case "xl":
      return "xl:";
    case "lg":
      return "lg:";
    case "md":
      return "md:";
    case "sm":
      return "";
  }
};

export const getResponsivePrefixes = (view) => {
  switch (view) {
    case "xl":
      return ["xl:", "lg:", "md:", ""];
    case "lg":
      return ["lg:", "md:", ""];
    case "md":
      return ["md:", ""];
    case "sm":
      return [""];
  }
};

export const isCanContainsChildren = (name) => {
  switch (name) {
    case "hr":
    case "img":
    case "input":
    case "li":
      return false;
    default:
      return true;
  }
};

export const getEditableTagName = (tagName) => {
  switch (tagName) {
    case "h1":
      return "h1";
    case "h2":
      return "h2";
    case "h3":
      return "h3";
    case "h4":
      return "h4";
    case "h5":
      return "h5";
    case "h6":
      return "h6";
    case "li":
      return "li";
    case "p":
      return "p";
    default:
      return "span";
  }
};

export const getMoreTags = (tagName) => {
  switch (tagName) {
    case "h1":
    case "h2":
    case "h3":
    case "h4":
    case "h5":
    case "h6":
      return ["h1", "h2", "h3", "h4", "h5", "h6"];
    default:
      return [];
  }
};

export const isTagVariants = (tagName) => {
  switch (tagName) {
    case "h1":
    case "h2":
    case "h3":
    case "h4":
    case "h5":
    case "h6":
      return true;
    default:
      return false;
  }
};

export const replceSpecialCharacters = (string) => {
  const replaceChar = [
    { reg: "&", replace: "&amp;" },
    { reg: "£", replace: "&pound;" },
    { reg: "€", replace: "&euro;" },
    { reg: "é", replace: "&eacute;" },
    { reg: "–", replace: "&ndash;" },
    { reg: "®", replace: "&reg;" },
    { reg: "™", replace: "&trade;" },
    { reg: "‘", replace: "&lsquo;" },
    { reg: "’", replace: "&rsquo;" },
    { reg: "“", replace: "&ldquo;" },
    { reg: "”", replace: "&rdquo;" },
    { reg: "#", replace: "&#35;" },
    { reg: "©", replace: "&copy;" },
    { reg: "@", replace: "&commat;" },
    { reg: "$", replace: "&dollar;" },
    { reg: "\\(", replace: "&#40;" },
    { reg: "\\)", replace: "&#41;" },
    { reg: "…", replace: "&hellip;" },
    { reg: "-", replace: "&#45;" },
    { reg: "\\*", replace: "&#42;" },
    { reg: "required", replace: 'required="true"' },
    //{ reg: new RegExp(`\\brequired\\b`, "g"), replace: 'required="true"' },
  ];
  let s = string;
  replaceChar.forEach((obj) => {
    s = s.replaceAll(obj.reg, obj.replace);
  });

  return s;
};

export const toBase64 = (file) =>
new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => resolve(reader.result);
  reader.onerror = reject;
});

export const clearHTML = (html) => {
  if(html.search("</body>")) {
    const result = html.match(
      /\<body(.+?)\<\/body\>/g
    );

    return result[0]
  }else {
    return html
  }
}