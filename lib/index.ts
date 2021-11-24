import { createConstructors } from './createConstructors';

let levels = ['error', 'warn', 'log', 'info', 'debug'];

for (const level of levels) {
  let original = console[level];
  console[level] = (...args: any[]) => {
    original(...args);
    globalThis.VueKitLog(level, ...args);
  };
}

// export function setImmediate(callback: (...args: any[]) => void) {
//   return global.setTimeout(callback, 0);
// }

// export function nextTick(): Promise<void> {
//   return new Promise(resolve => global.setImmediate(resolve));
// }

createConstructors();

export { createApp } from './createApp';
export { createNode } from './createNode';
export { setInstanceValue } from './setInstanceValue';
