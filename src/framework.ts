/* eslint-disable func-names */
const addAttributes = function (element: HTMLElement, ...attributes: Object[]): void {
  attributes.forEach((attribute) => {
    element.setAttribute(Object.keys(attribute)[0], attribute[Object.keys(attribute)[0]]);
  });
};

const applyElement = function (element: HTMLElement, ...children: HTMLElement[]): void {
  children.forEach((child) => element.appendChild(child));
};

export default {
  addAttributes,
  applyElement,
  str: {
    addAttributes: addAttributes.toString(),
    applyElement: applyElement.toString(),
  },
};
