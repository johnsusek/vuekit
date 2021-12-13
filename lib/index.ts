import './builtins';
import './constructors';

import { createApp, render } from './createApp';
import { setInstanceValue } from './setValue';
import { createInstance } from './createNode';
import { debounce, fetch } from './util';

export { createApp, render } from './createApp';
export { setInstanceValue } from './setValue';
export { createInstance } from './createNode';
export { debounce, fetch } from './util';
export { getAnchorViewIndex } from './addToParent';
export { updateInstanceFromComponent } from './props';

export default {
  createApp,
  render,
  setInstanceValue,
  createInstance,
  debounce,
  fetch
};
