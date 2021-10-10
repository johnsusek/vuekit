if (globalThis.hostLog) {
  let log = console.log;

  console.log = (...args: any[]) => {
    log(...args);
    globalThis.hostLog(...args);
  };
}

// function setImmediate(callback: (...args: any[]) => void): number {
// return global.setTimeout(callback, 0);
// }

// function nextTick(): Promise<void> {
//   return new Promise((resolve) => global.setImmediate(resolve));
// }
