import './types';
import './components'

if (globalThis.hostLog) {
  let originalConsoleLog = console.log;
  console.log = (...data) => {
    originalConsoleLog(...data);
    globalThis.hostLog(...data);
  };
}

export { createApp, render, defineComponent } from './createRenderer'
