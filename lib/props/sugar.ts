import { nscolor } from '../plugins/nsColor';
import { getClassName } from '../util';

export function sweeten(props = {}, types = {}) {
  let params = {};

  // Convert enums from string -> number
  for (const [propName, propType] of Object.entries(types)) {
    if (props[propName] !== undefined) {
      let propValue = propType[props[propName]];
      if (propValue !== undefined) params[propName] = propValue;
    }
  }

  // Convert colors from string -> NSColor
  for (const [propName, propValue] of Object.entries(props)) {
    if (propValue === undefined) continue;
    let typeClass = types[propName];
    if (!typeClass?.prototype || typeof propValue !== 'string') continue;
    let className = getClassName(typeClass.prototype);
    if (className === 'NSColor') params[propName] = nscolor(propValue);
  }

  return params;
}
