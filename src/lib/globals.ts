if (globalThis.hostLog) {
  let originalConsoleLog = console.log;

  console.log = (...data: any[]) => {
    originalConsoleLog(...data);
    globalThis.hostLog(...data);
  };
}
