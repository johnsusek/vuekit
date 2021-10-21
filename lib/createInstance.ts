import { classNameFromTag } from './classNameFromTag';
import { getViewConstructor } from './node';

function createInstanceFromClassName(bridgedClassName: string, nodeProps: VueKitNodeProps = {}): NSObject {
  let { args, name } = getViewConstructor(bridgedClassName, nodeProps);

  let instanceClass = globalThis[bridgedClassName];

  let fn = instanceClass[name];

  if (typeof fn !== 'function') {
    let definedProps = Object.keys(nodeProps).filter(key => nodeProps[key] !== undefined && typeof nodeProps[key] !== 'function');
    throw new Error(`Could not find a valid constructor for type ${bridgedClassName} using defined component props ${definedProps}`);
  }

  let instance;

  if (args.length === 0) {
    // console.info('Using constructor ', name, '(no params) for ', className);
    instance = fn();
  }
  else {
    let argValues = args.map(arg => nodeProps[arg]);
    // console.info('Using constructor ', name, argValues, ' for ', className);
    instance = fn(...argValues);
  }

  if (!instance) {
    throw new Error(`Could not create instance for element type ${bridgedClassName}.`);
  }

  return instance;
}

export function createInstance(tag: string, vnodeProps: VueKitNodeProps = {}): NSObject {
  let bridgedClassName = classNameFromTag(tag);

  if (!globalThis[bridgedClassName]) {
    console.error(`Bridged instance class ${bridgedClassName} not found.`);
    return null;
  }

  let instance = createInstanceFromClassName(bridgedClassName, vnodeProps);

  if (instance instanceof NSView) {
    // https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/AutolayoutPG
    //
    // Autoresizing masks are kind of a hack on top of OG coordinate/frame-based layouts,
    // to make them more responsive to external changes in size.
    //
    // Auto Layout (constraints) replaces autoresizing masks.
    //
    // Since VueKit uses Auto Layout via the constraint plugin and views like
    // NSStackView (which uses Auto Layout internally), we never want autoresizing masks.
    //
    instance.translatesAutoresizingMaskIntoConstraints = false;
  }

  return instance;
}
