/* eslint-disable no-unused-vars */
import { transform } from './core';

window.pollu = {
  transform,
};

declare global {
  interface Window {
    pollu: {
      transform: typeof transform;
    };
  }
}

export { transform };
