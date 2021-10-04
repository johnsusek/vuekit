import { VNodeProps } from '@vue/runtime-core';
import { VueKitConstructor, VueKitNode, VueKitNodeProps } from '../types/VueKit';
// import {
//   NSControl, NSTextView, NSView, NSWindow
// } from '../types/macos/MacOS';
import { snakeToCamel, splitOnCaps, capitalize } from './string';
import { valueTypeForJSType, getTypeAsString } from './type';

function getAllPropertyNames(obj) {
  const proto = Object.getPrototypeOf(obj);
  const inherited = (proto) ? getAllPropertyNames(proto) : [];
  return [...new Set(Object.getOwnPropertyNames(obj).concat(inherited))];
}

// In order to figure out which conveinence constructor to call,
// we compare the defined props against the constructor args
// and return which args have a matching defined prop
function getMatchingPropKeys(propKeys, constructor, idx) {
  return propKeys.map((prop) => {
    // "trackingMode" or "tracking-mode" -> "TRACKINGMODE"
    let key = snakeToCamel(prop.toUpperCase());
    let thisPiece = constructor.pieces[idx];
    let nextPiece = constructor.pieces[idx + 1];

    if (key === thisPiece) {
      return [thisPiece];
    }

    // TODO: generalize to > 2 params
    if (constructor.pieces.length > idx + 1) {
      // For multi-word argument labels:
      // key = "TRACKINGMODE"
      // constructor.pieces = ["TRACKING", "MODE"]
      // thisPiece = "TRACKING"
      // nextPiece = "MODE"
      if (key === thisPiece + nextPiece) {
        return [thisPiece, nextPiece];
      }
    }

    return undefined;
  }).flat().filter((v) => v);
}

export function getCandidateConstructors(elementClass: NSView, vnodeProps?: VueKitNodeProps): string[][] {
  let filteredCandidates = [];

  if (!vnodeProps || Object(vnodeProps) !== vnodeProps) return filteredCandidates;

  let definedProps = Object.keys(vnodeProps).filter((key) => vnodeProps[key] !== undefined);

  // Turn component attrs into a nested array of strings
  // <component size="big" foo-bar="baz" /> -> [["size"], ["foo", "bar"]]
  //
  // We split the keys on dashes/caps because the e.g. `createWithFooBarBaz` funcs
  // created by the bridge make it impossible to distinguish between
  // <component foo-bar="" baz="" /> and <component foo="" bar-baz="" />
  // So we need to check each prop "part" ('foo' and 'bar' in the first example) individually
  let definedPropsPartsMap = definedProps.map((key) => splitOnCaps(snakeToCamel(key)).map((c) => c.toUpperCase()));

  // All of the convenience constructors from the bridge start with "createWith"
  // and then include each argument label pascal cased
  let candidateConstructors = Object.getOwnPropertyNames(elementClass).filter((name) => name.startsWith('createWith'));

  // Turn convenience constructor e.g. createWithFooBarBaz into ["FOO", "BAR", "BAZ"]
  let candidateConstructorsMap = candidateConstructors.map((name) => splitOnCaps(name).slice(2).map((c) => c.toUpperCase()));

  // Now we want to check to see which constructors could be theoretically be called
  // with all the defined props we have
  for (let idx = 0; idx < candidateConstructorsMap.length; idx++) {
    let candidateArgumentLabels = candidateConstructorsMap[idx];
    let candidateIsUsable = true;

    // console.log('Checking to see if we can call ', candidateArgumentLabels, 'with the props we have ', definedPropsPartsMap);

    // TODO change algorithm to overlapping arrays... this is checking the parts individually out of context of each other
    for (const argLabel of candidateArgumentLabels) {
      let hasProp = definedPropsPartsMap.some((pm) => pm.some((pmm) => pmm === argLabel));
      if (!hasProp) {
        candidateIsUsable = false;
        break;
      }
    }

    if (candidateIsUsable) {
      filteredCandidates.push(candidateArgumentLabels);
    }
  }

  return filteredCandidates;
}

export function getConstructor(className: string, vnodeProps?: VueKitNodeProps): VueKitConstructor {
  let viewClass = globalThis[className];
  let filteredCandidates = getCandidateConstructors(viewClass, vnodeProps);

  if (!viewClass) {
    throw new Error(`Class ${className} not found.`);
  }

  let constructor: VueKitConstructor = {
    name: 'create',
    args: [],
    pieces: []
  };

  if (filteredCandidates.length === 0) {
    // console.log('Could not find any conveinence constructors, using "create" for name');
    return constructor;
  }

  if (filteredCandidates.length > 1) {
    console.log('Found multiple conveinence constructor candidates, falling back to "create" for name', filteredCandidates);
    return constructor;
  }

  if (filteredCandidates.length === 1) {
    constructor.pieces = filteredCandidates[0];

    // We have found a conveinence constructor - so create the list of args (prop name)
    let args = [];
    let propKeys = vnodeProps ? Object.keys(vnodeProps) : [];

    for (let idx = 0; idx < constructor.pieces.length; idx++) {
      let matchingPropKeys = getMatchingPropKeys(propKeys, constructor, idx);

      if (matchingPropKeys?.length > 0) {
        // ["BEZEL", "STYLE"] -> "BEZEL-STYLE"
        let arg = matchingPropKeys.join('-');
        // Convert "BEZEL-STYLE" to bezelStyle OR bezel-style (needed? or can we assume camelCase to simplify?)
        let actualKey = propKeys.find((key) => snakeToCamel(key.toUpperCase()) === snakeToCamel(arg.toUpperCase()));
        args.push(actualKey);
      }
    }

    constructor.args = args;
  }

  if (constructor.args.length > 0) {
    // This matches the algorithm used by JSExport to name functions that have argument labels.
    // e.g. `func create(foo: String, bar: Int)` via the JS bridge gets named `createWithFooBar`
    constructor.name = 'createWith';
    constructor.name += constructor.pieces.reduce((acc, curr) => {
      acc += curr[0].toUpperCase() + curr.toLowerCase().slice(1);
      return acc;
    }, '');
  }

  return constructor;
}

export function createView(type: string, vnodeProps?: VueKitNodeProps): NSView {
  let view;
  let viewClass = globalThis[type];

  if (!viewClass) {
    // throw new Error(`Class ${type} not found.`);
    console.log(`Bridged Class ${type} not found.`);
    return null;
  }

  let { args, name } = getConstructor(type, vnodeProps);

  let fn = viewClass[name];

  if (typeof fn !== 'function') {
    let definedProps = Object.keys(vnodeProps).filter((key) => vnodeProps[key] !== undefined && typeof vnodeProps[key] !== 'function');
    throw new Error(`Could not find a valid constructor for type ${type} using defined component props ${definedProps}`);
  }

  if (args.length === 0) {
    // console.log('Using constructor ', name, '(no params)');
    view = fn();
  }

  let argValues = args.map((arg) => vnodeProps[arg]);

  // console.log('Using constructor ', name, 'with params', argValues);

  view = fn(...argValues);

  if (!view) {
    throw new Error(`Could not create view for element type ${type}.`);
  }

  if (view instanceof NSControl) {
    // TODO: map to @change
    vnodeProps.onControlTextDidChange = (node: VueKitNode) => {
      // Control text has changed and the component has a v-model, so update it
      let vModelUpdateFn = node.props['onUpdate:modelValue'];

      if (vModelUpdateFn) {
        let valueTypeKey = valueTypeForJSType(typeof node.props.modelValue);
        // console.log(`Updating v-model nscontrol change (calling node.props['onUpdate:modelValue']) with value of el["${valueTypeKey}"] :`, el[valueTypeKey]);
        vModelUpdateFn(view[valueTypeKey]);
      }
    };
  }

  return view;
}

// This gets called when 1) a node is created and we want to apply the props
// to the newly created NSView or 2) a node's props have changed (patchProp) and
// we want to apply those new values to the NSView
export function setNodeValue(node: VueKitNode, key: string, value: any, fromPatch = false): void {
  // TODO: use a list of all vue builtins
  let builtins = ['ref', 'class', 'key'];

  if (builtins.includes(key)) {
    return;
  }

  if (typeof value === 'function' && key !== 'draw') {
    // console.info('Skipping setting function-type property ', key);
    return;
  }

  let newType = getTypeAsString(value);

  // Undefined means the prop doesn't have any value,
  // so we leave the property alone on the object
  if (newType === 'Undefined') {
    return;
  }

  let objectToSet: NSView | NSWindow = node.view;

  if (!objectToSet) return; // Text or comment node

  // For NSWindow, props get applies to the NSWindow object
  if (node.view === node.view.window?.contentView) {
    objectToSet = node.view.window;
  }

  if (objectToSet instanceof NSTextView) {
    console.log('TODO: set attributed string on textstorage', objectToSet.textStorage);
    // view.textStorage?.setAttributedString(NSAttributedString.createWithString(nextValue.toString()));
  }

  let viewKey = snakeToCamel(key);

  if (fromPatch && viewKey === 'modelValue') {
    viewKey = valueTypeForJSType(typeof value);
  }

  // Scenario #1 - v-model

  if (viewKey === 'modelValue') {
    let vModelUpdateFn = node.props['onUpdate:modelValue'];

    if (vModelUpdateFn) {
      console.log('set vModelUpdateFn to value', value, node);
      vModelUpdateFn(value);
    } else {
      console.log('Tried to update model value but could not find update fn');
    }

    return;
  }

  // Scenario #2 - prop name doesn't exist on the NSView, but a setter fn does

  let setter = `set${capitalize(viewKey)}`;

  if (typeof objectToSet[setter] === 'function') {
    console.info(`Using setter ${setter} with value \`${value}\` on ${node.view}`);

    if (Array.isArray(value)) {
      objectToSet[setter](...value);
    } else {
      // TODO: is there a way to check fn only takes one param?

      objectToSet[setter](value);
    }

    return;
  }

  // Scenario #3 - prop name exists on the NSView

  let propNames = getAllPropertyNames(objectToSet);

  if (propNames.includes(viewKey)) {
    let currentType = getTypeAsString(objectToSet[viewKey]);

    if (currentType === 'Undefined') {
      console.log(`Setting previously undefined key \`${viewKey}\` on ${objectToSet} to ${value}`);
      objectToSet[viewKey] = value;
    } else if (newType === currentType) {
      console.info(`Setting ${viewKey} to value \`${value}\` on ${node.view}`);
      objectToSet[viewKey] = value;
    } else if (newType === 'Boolean' && currentType === 'Number') {
      console.info(`Setting ${viewKey} to value \`${value}\` (${value ? 1 : 0}) on ${node.view}`);
      objectToSet[viewKey] = value ? 1 : 0;
    } else {
      // if (currentType === 'CallbackFunction') {
      //   // TODO: Check fn only takes one param
      //   objectToSet[viewKey](value);
      // }
      // else {
      console.log(`Types don't match for ${viewKey} - tried to set \`${newType}\` but view is \`${currentType}\``, objectToSet);
      // }
    }

    return;
  }

  // Scenario #4 - no matching prop name nor setter, inform user
  console.info(`"${viewKey}" is undefined and there are no setters with the name "${setter}": `, objectToSet);
}

// Get prop value using normalized key, so that snake vs camel case doesn't matter
function getPropValueForKey(key: string, props: VNodeProps, defaultValue: any) {
  let propKeys = props ? Object.keys(props) : [];

  // "trackingMode" or "tracking-mode" -> "TRACKINGMODE"
  let dkey = snakeToCamel(key.toUpperCase());

  let foundKey = propKeys.find((propKey) => {
    if (dkey === snakeToCamel(propKey.toUpperCase())) {
      return props[propKey];
    }

    return false;
  });

  if (foundKey) return props[foundKey];

  return defaultValue;
}

export function getPropValues(requestedProps: any, props: VNodeProps): Record<string, any> {
  let values: any = {};

  for (let [propName, defaultValue] of Object.entries(requestedProps)) {
    values[propName] = getPropValueForKey(propName, props, defaultValue);
  }

  return values;
}
