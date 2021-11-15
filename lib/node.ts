import { VNodeProps } from '@vue/runtime-core';
import classesToRegister from './classesToRegister.json';
import { snakeToCamel } from './string';

export function getAllPropertyNames(obj) {
  const proto = Object.getPrototypeOf(obj);
  const inherited = (proto) ? getAllPropertyNames(proto) : [];
  return [...new Set(Object.getOwnPropertyNames(obj).concat(inherited))];
}

function decapitalize(str) {
  return str.charAt(0).toLowerCase() + str.slice(1);
}

function getClassName(obj) {
  return Object.prototype.toString.call(obj).slice(8, -12);
}

function bridgedConstructor(elementClass: typeof NSObject, props?: VueKitNodeProps): any {
  if (!props || Object(props) !== props) return elementClass.create();
  let definedProps = Object.keys(props).filter(key => props[key] !== undefined);
  let candidateName;
  let candidateArgLabels = [];

  // All of the constructors from the bridge start with "createWith"
  let constructors = Object.getOwnPropertyNames(elementClass).filter(name => name.startsWith('createWith'));

  // createWithFooWithBarBazWithBlarg -> ["foo", "barBaz", "blarg"]
  let constructorsMap = constructors.map(n => n.split('With').slice(1).map(decapitalize));

  // Now we want to check to see which constructors could be called
  // with all the defined props we have
  for (let idx = 0; idx < constructorsMap.length; idx++) {
    let candidateArgumentLabels = constructorsMap[idx];
    let candidateIsUsable = true;

    for (let jdx = 0; jdx < candidateArgumentLabels.length; jdx++) {
      let argLabel = candidateArgumentLabels[jdx];
      let hasProp = definedProps.includes(argLabel);
      let firstParamIsClassName = jdx === 0 && argLabel.toLowerCase() === getClassName(elementClass).toLowerCase();
      if (!hasProp && !firstParamIsClassName) {
        candidateIsUsable = false;
        break;
      }
    }

    // Use the candidate with the most matching args
    if (candidateIsUsable && candidateArgumentLabels.length > candidateArgLabels.length) {
      candidateArgLabels = candidateArgumentLabels;
      candidateName = constructors[idx];
    }
  }

  if (candidateName) {
    let args = candidateArgLabels.map(c => props[c]);
    // TODO: for props that were defined but not part of constructor,
    // apply them here? (or will patchProp immediately set them anyways?)
    return elementClass[candidateName](...args);
  }

  if (definedProps.length) {
    console.log(`Using default constructor for ${elementClass}`);
    // console.warn(
    //   `Could not find constructor for ${elementClass
    //   } using args: [${definedProps.join(', ')
    //   }]\nCandidates were: ${constructors.join(', ')}`
    // );
  }

  return elementClass.create();
}

export function createConstructors() {
  // Creating new instances of bridged JSExport classes works like this:
  // `Button.create()` or `Button.createWithTitle('foo')`
  //
  // We want to change this to:
  // `Button()` and `Button({ title: 'foo' })`
  //
  // To this end, this replaces the bridged class at e.g. globalThis.Button
  // with a function that internally calls the correct .createXYZ function
  //
  // This will create a new global function with the name of the class
  // (thus replacing it). All static and instance properties point to
  // the original bridged class.
  //
  for (let className of Object.values(classesToRegister).flat()) {
    try {
      let bridgedClass = globalThis[className];

      // Changes e.g. globalThis.Button from a bridged JSExport class
      // to a function that creates Button instances
      globalThis[className] = args => bridgedConstructor(bridgedClass, args);

      // Point all static properties to the bridged class
      for (let name of Object.getOwnPropertyNames(bridgedClass)) {
        globalThis[className][name] = bridgedClass[name];
      }

      // Use the bridged prototype for instance properties
      // globalThis[className].prototype = Object.create(bridgedClass.prototype);
      globalThis[className].prototype = bridgedClass.prototype;
    }
    catch (error) {
      console.log(`Could not register ${className}`, error);
    }
  }
}

// Get prop value using normalized key, so that snake vs camel case doesn't matter
function getPropValueForKey(key: string, props: VNodeProps, defaultValue: any) {
  let propKeys = props ? Object.keys(props) : [];

  // "trackingMode" or "tracking-mode" -> "TRACKINGMODE"
  let dkey = snakeToCamel(key.toUpperCase());

  let foundKey = propKeys.find(propKey => {
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
