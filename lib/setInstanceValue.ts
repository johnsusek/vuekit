import { snakeToCamel, capitalize } from './string';
import { valueTypeForJSType, getTypeAsString } from './type';
import { getAllPropertyNames } from './node';

function setterNameForProp(camelKey, newType, objectToSet) {
  let setterKey = `set${capitalize(camelKey)}`;
  let setter = objectToSet[setterKey];

  if (typeof setter === 'function') return setterKey;

  let prefixes = ['is', 'has', 'does', 'will'];

  if (newType === 'Boolean') {
    for (const prefix of prefixes) {
      if (camelKey.startsWith(prefix)) {
        let noPrefixKey = camelKey.substring(prefix.length);
        let boolSetterKey = `set${capitalize(noPrefixKey)}`;
        let boolSetter = objectToSet[boolSetterKey];
        if (typeof boolSetter === 'function') return boolSetterKey;
      }
    }
  }
}

export function setInstanceValue(instance: NSObject, key: string, value: any, fromPatch = false) {
  if (typeof value === 'function' && key !== 'draw') {
    // console.info('Skipping setting function-type property ', key);
    return;
  }

  let newType = getTypeAsString(value);

  // Undefined means the prop doesn't have any value,
  // so we leave the property alone on the object
  if (newType === 'Undefined') return;

  let camelKey = snakeToCamel(key);

  if (fromPatch && camelKey === 'modelValue') {
    camelKey = valueTypeForJSType(typeof value);
  }

  let propNames = getAllPropertyNames(instance);

  if (!propNames.includes(camelKey)) {
    if (instance instanceof NSView) {
      console.warn(`"${camelKey}" is undefined, nothing to set: `, instance);
    }
    return;
  }

  let valueToSet = value;
  let currentType = getTypeAsString(instance[camelKey]);
  let isBoolean = newType === 'Boolean' && currentType === 'Number';
  if (isBoolean) valueToSet = value ? 1 : 0;

  let setterName = setterNameForProp(camelKey, newType, instance);

  if (setterName) {
    // console.info(`Calling setter ${setterName} for ${camelKey} with value \`${valueToSet}\` on ${instance}`);
    instance[setterName](valueToSet);
    return;
  }

  if (currentType === 'Undefined') {
    // console.log(`Setting previously undefined key \`${camelKey}\` on ${instance} to ${valueToSet}`);
    instance[camelKey] = valueToSet;
  }
  else if (newType === currentType || isBoolean) {
    // console.info(`Setting ${camelKey} to value \`${valueToSet}\` on ${instance}`);
    instance[camelKey] = valueToSet;
  }
  else {
    // if (currentType === 'CallbackFunction') {
    //   // TODO: Check fn only takes one param
    //   objectToSet[viewKey](value);
    // }
    // else {
    console.error(`Types don't match for ${camelKey} - tried to set \`${newType}\` but view is \`${currentType}\``, instance);
    // }
  }
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

  let objectToSet: NSObject = node.instance;

  if (!objectToSet) {
    // Text or comment node
    return;
  }

  if (snakeToCamel(key) === 'modelValue') {
    let vModelUpdateFn = node.props['onUpdate:modelValue'];

    if (vModelUpdateFn) {
      console.info('set vModelUpdateFn to value', value, node);
      vModelUpdateFn(value);
    }
    else {
      console.warn('Tried to update model value but could not find update fn');
    }
  }

  setInstanceValue(objectToSet, key, value, fromPatch);
}
