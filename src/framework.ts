/* eslint-disable func-names */
const addAttributes = function (element: HTMLElement, ...attributes: Object[]): void {
  attributes.forEach((attribute) => {
    element.setAttribute(Object.keys(attribute)[0], attribute[Object.keys(attribute)[0]]);
  });
};

const applyElement = function (element: HTMLElement, ...children: Array<HTMLElement | string>): void {
  children.forEach((child) => {
    if (typeof child === 'string') {
      element.appendChild(document.createTextNode(child));
    } else {
      element.appendChild(child);
    }
  });
};

export default {
  addAttributes,
  applyElement,
  str: {
    addAttributes: addAttributes.toString(),
    applyElement: applyElement.toString(),
  },
};
