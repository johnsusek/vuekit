import classesToCreateConstructors from './classesToCreateConstructors.json';
import { capitalize, decapitalize, snakeToCamel } from './string';
import { getClassName } from './util';

const CONSTRUCTOR_PREFIX = 'createWith';

function getCandidate(elementClass: typeof NSObject, props?: VueKitNodeProps, definedProps?: VueKitNodeProps, definedPropsSnake?: VueKitNodeProps): [string, string[], boolean] {
  let candidateName;
  let candidateArgLabels = [];

  // All of the constructors from the framework bridge start with "createWith"
  let constructors = Object.getOwnPropertyNames(elementClass).filter(name => name.startsWith(CONSTRUCTOR_PREFIX));

  let splitToken = new RegExp(`_|${CONSTRUCTOR_PREFIX}`, 'g');

  // createWithFoo_BarBaz_Blarg -> ["foo", "barBaz", "blarg"]
  let constructorsMap = constructors.map(n => n.split(splitToken).slice(1).map(decapitalize));

  let isFirstParamSuffix = false;

  // Now we want to check to see which constructors could be called
  // with all the defined props we have
  for (let idx = 0; idx < constructorsMap.length; idx++) {
    let candidateArgumentLabels = constructorsMap[idx];
    let candidateIsUsable = true;

    for (let jdx = 0; jdx < candidateArgumentLabels.length; jdx++) {
      let argLabel = candidateArgumentLabels[jdx];
      let definedIdx = definedPropsSnake.indexOf(argLabel);
      let hasProp = definedIdx !== -1;
      let firstParamIsClassName = jdx === 0 && argLabel.toLowerCase() === getClassName(elementClass).toLowerCase();

      if (!hasProp && !firstParamIsClassName) {
        candidateIsUsable = false;
        break;
      }

      if (jdx === 0) {
        let propKeyForArg = definedProps[definedIdx];
        if (props[propKeyForArg] === '') {
          // For e.g. <SplitViewItem sidebar>, indicates which constructor to use (but not param to pass)
          //
          // NSSplitViewItem({ viewController, sidebar: "" }) -> NSSplitViewItem.createWithSidebar_ViewController(viewController)
          // (note above create fn only takes 1 param b/c `sidebar` is an empty string)
          //
          // Another example:
          // <TextField label string="foo"> -> NSTextField({ string: "foo", label: "" }) -> NSTextField.createWithLabel_String("foo")
          //
          // When the first param is a createWith suffix, but *not* an empty string, use create fn like normal:
          // NSWindow({ contentRect: ..., styleMask: ... }) -> NSWindow.createWithContentRect_StyleMask(contentRect, styleMask)
          // (note above create fn takes 2 params b/c contentRect is not an empty string)
          //
          let createWithSuffixCandidate = `createWith${capitalize(snakeToCamel(argLabel))}`;
          isFirstParamSuffix = constructors[idx].startsWith(createWithSuffixCandidate);
        }
      }
    }

    // Use the candidate with the most matching args
    if (candidateIsUsable && candidateArgumentLabels.length > candidateArgLabels.length) {
      candidateArgLabels = candidateArgumentLabels;
      candidateName = constructors[idx];
    }
  }

  return [candidateName, candidateArgLabels, isFirstParamSuffix];
}

export function bridgedConstructor(elementClass: typeof NSObject, props?: VueKitNodeProps): any {
  if (!props || Object(props) !== props) return elementClass.create();

  let definedProps = Object.keys(props).filter(key => props[key] !== undefined && typeof props[key] !== 'function');
  let definedPropsSnake = definedProps.map(k => snakeToCamel(k));

  let [candidateName, candidateArgLabels, isFirstParamSuffix] = getCandidate(elementClass, props, definedProps, definedPropsSnake);
  let instance;

  if (candidateName) {
    let args = candidateArgLabels.map(c => props[c]);
    if (isFirstParamSuffix) {
      args.shift();
    }
    // log.debug(`Using constructor ${candidateName}`, args);
    instance = elementClass[candidateName](...args);
  }
  else {
    instance = elementClass.create();
  }

  return instance;
}

function createConstructors() {
  // Creating new instances of bridged JSExport classes works like this:
  // `NSButton.create()` or `NSButton.createWithTitle('foo')`
  //
  // We want to change this to:
  // `NSButton()` and `NSButton({ title: 'foo' })`
  //
  // To this end, this replaces the bridged class at e.g. globalThis.NSButton
  // (which is there because of JSContext setObject in framework-bridge -
  // see JSContext+Bridged.swift) with a function that internally calls the correct
  // .createXYZ function
  //
  // This will create a new global function with the name of the class
  // (thus replacing it). All static and instance properties point to
  // the original bridged class.
  //
  for (let className of Object.values(classesToCreateConstructors).flat()) {
    try {
      let bridgedClass = globalThis[className];

      // Changes e.g. globalThis.NSButton from a bridged JSExport class
      // to a function that creates NSButton instances
      globalThis[className] = args => bridgedConstructor(bridgedClass, args);

      // Point all static properties to the bridged class
      for (let name of Object.getOwnPropertyNames(bridgedClass)) {
        globalThis[className][name] = bridgedClass[name];
      }

      // Use the bridged prototype for instance properties
      globalThis[className].prototype = bridgedClass.prototype;
    }
    catch (error) {
      log.debug(`Could not register ${className}`, error);
    }
  }
}

createConstructors();
