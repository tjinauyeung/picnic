function deepCopy(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function extendClassName(currClassName, newClassName) {
  return newClassName ? [currClassName, newClassName].join(" ") : currClassName;
}

function isMobile() {
  return (
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/BlackBerry/i) ||
    navigator.userAgent.match(/iPhone|iPad|iPod/i) ||
    navigator.userAgent.match(/Opera Mini/i) ||
    navigator.userAgent.match(/IEMobile/i)
  );
}

export default {
  deepCopy,
  extendClassName,
  isMobile
};
