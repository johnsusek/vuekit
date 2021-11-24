import { VNodeProps } from '@vue/runtime-core';
import { snakeToCamel } from './string';

export function getAllPropertyNames(obj) {
  const proto = Object.getPrototypeOf(obj);
  const inherited = (proto) ? getAllPropertyNames(proto) : [];
  return [...new Set(Object.getOwnPropertyNames(obj).concat(inherited))];
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
