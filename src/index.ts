// if (globalThis.hostLog) {
//   let originalConsoleLog = globalThis.console.log;
//   globalThis.console.log = (...data) => {
//     originalConsoleLog(...data);
//     globalThis.hostLog(...data);
//   };
// }

// import { createPinia } from 'pinia';

// function VueKitPinia({ store }) {
//   let stateContext = globalThis.VueKitStore.create();
//   stateContext.patch = store.$patch;
// }

// export const pinia = createPinia();

// pinia.use(VueKitPinia);

export {
  createApp, render, createElement, defineComponent
} from './createRenderer'