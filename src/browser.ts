/* eslint-disable no-unused-vars */
import { transform } from './core';

window.Pollu = {
  transform,
};

declare global {
  interface Window {
    Pollu: {
      transform: typeof transform;
    };
  }
}

export { transform };
