/* eslint-disable no-underscore-dangle */
import { createRenderer } from '@vue/runtime-core';
// import { connect } from '@vue/devtools';
import constraintsPlugin from './plugins/constraints';
import nsColorPlugin from './plugins/nsColor';
import Logger from './logger';
import { nodeOps } from './nodeOps';

const renderer = createRenderer<VueKitNode, VueKitNode>(nodeOps);

function sayHello() {
  log.debug('%cš·š»āāļø Welcome to the VueKit Technical Preview!', 'font-weight: bold');
  log.debug('%cāØ Be excellent to each other.', 'font-weight: bold');
  log.debug('%cš Remember to launch Console.app and filter by your process name to see full debug output.', 'font-weight: bold');
}

let defaultOptions = { logLevel: 'WARN' };
let objectMerge = (a: AnyObject = {}, b: AnyObject = {}) => ({ ...a, ...b });

function createApp(App: any, { logLevel } = defaultOptions) {
  Logger.setLevel(logLevel);
  log.info(`Logger ready at level: ${logLevel}`);

  sayHello();

  let app = renderer.createApp(App);

  // For extend/mixin of base components, we merge the `types` component option objects
  app.config.optionMergeStrategies.types = objectMerge;

  app.use(constraintsPlugin);
  app.use(nsColorPlugin);

  return app;
}

const render = renderer.render;

export { createApp, render };
