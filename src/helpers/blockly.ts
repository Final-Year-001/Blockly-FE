import _ from "lodash";

const stripId = (_obj: any) => {
  for (const key in _obj) {
    if (["x", "y", "id"].includes(key)) {
      delete _obj[key];
    } else if (typeof _obj[key] === "object") {
      stripId(_obj[key]);
    }
  }

  return _obj;
};

const removeSearch = (toolbox: any) => {
  const newContent = toolbox.contents.filter((v: any) => v.kind != "search");
  return { ...toolbox, contents: newContent };
};

export { stripId, removeSearch };
