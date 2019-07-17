function deepCopy(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function extendClassName(currClassName, newClassName) {
  return newClassName ? [currClassName, newClassName].join(" ") : currClassName;
}

function memoize(fn) {
  let cache = {};

  return function() {
    const args = JSON.stringify(arguments);
    cache[args] = cache[args] || fn.apply(this, arguments);
    return cache[args];
  };
}

export default {
  deepCopy,
  memoize,
  extendClassName
};
