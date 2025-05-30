// dom.js
export const createElement = (tag, text) => {
  const el = document.createElement(tag);
  el.textContent = text;
  return el;
};
