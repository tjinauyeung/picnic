function deepCopy(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function extendClassName(currClassName, newClassName) {
  return newClassName ? [currClassName, newClassName].join(" ") : currClassName;
}

export default {
  deepCopy,
  extendClassName
};
