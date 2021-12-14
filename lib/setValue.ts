import { snakeToCamel, capitalize } from './string';
import { valueTypeForJSType, getTypeAsString } from './type';
import { getAllPropertyNames } from './props';

export const mergableViewProps = ['layer', 'textStorage'];

let propToBridgedName = {
  // Since CGColor can't be bridged, we needed to create
  // setBackgroundColor(color: NSColor?) in the CALayer bridge,
  // which gets exported as setBackgroundColorWithColor
  // (note: setBackgroundColor(_: NSColor?) would conflict)
  //
  // TODO: This will have to be generalized to all places a class needs a CGColor
  //
  edgeInsets: 'edgeInsetsWithInsets',
  backgroundColor: 'backgroundColorWithColor',
  borderColor: 'borderColorWithColor'
};

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

const builtinProps = ['is', 'id', 'ref', 'key'];

export function setNodeValue(node: VueKitNode, key: string, value: any, fromPatch = false): void {
  if (builtinProps.includes(key)) return;

  let objectToSet: NSObject = node.instance;

  if (!objectToSet) {
    // Text or comment node
    return;
  }

  if (snakeToCamel(key) === 'modelValue') {
    let vModelUpdateFn = node.props['onUpdate:modelValue'];

    if (vModelUpdateFn) {
      // log.info('set vModelUpdateFn to value', value, node);
      vModelUpdateFn(value);
    }
    else {
      log.warn('Tried to update model value but could not find update fn');
    }
  }

  setInstanceValue(objectToSet, key, value, fromPatch);
}

export function setInstanceValue(instance: NSObject, key: string, value: any, fromPatch = false) {
  if (builtinProps.includes(key)) return;

  if (typeof value === 'function' && key !== 'draw') {
    // log.info('Skipping setting function-type property ', key);
    return;
  }

  let propertyName = snakeToCamel(key);

  if (fromPatch && propertyName === 'modelValue') {
    propertyName = valueTypeForJSType(typeof value);
  }

  if (value === undefined) return;

  if (instance instanceof NSView && mergableViewProps.includes(key)) {
    if (typeof value === 'object' && instance[key] !== undefined) {
      // <Stack :layer="{ position }" />
      // to
      // view.layer.position = position
      log.trace('Found mergableViewProp value, merging properties instead of overwriting', key, value);

      for (let [propName, layerValue] of Object.entries(value)) {
        setInstanceValue(instance[key], propName, layerValue, fromPatch);
      }
    }
    else {
      log.warn('Could not set mergable value on ', instance, 'for key', key);
    }

    return;
  }

  // TODO: Make O(1)
  let instanceProperties = getAllPropertyNames(instance);

  let bridgedPropertyName = propToBridgedName[propertyName];
  let valueType = getTypeAsString(value);

  if (bridgedPropertyName) {
    let setterName = setterNameForProp(bridgedPropertyName, valueType, instance);
    let hasSetterName = setterName && typeof instance[setterName] === 'function';
    if (instanceProperties.includes(bridgedPropertyName) || hasSetterName) {
      propertyName = bridgedPropertyName;
    }
  }

  let setterName = setterNameForProp(propertyName, valueType, instance);
  let hasSetterName = setterName && typeof instance[setterName] === 'function';

  if (!instanceProperties.includes(propertyName) && !hasSetterName) {
    // TODO: when attributes are used to hint a constructor, always ignore them as props
    // also, what if an attribute has the same name as a constructor hint?
    if (instance instanceof NSTextField && ['label', 'wrappingLabel', 'string'].includes(propertyName)) {
      // log.trace(`"${propertyName}" is undefined, nothing to set: `, value, instance);
    }
    else {
      log.warn(`"${propertyName}" is undefined, nothing to set: `, value, instance);
    }
    return;
  }

  let valueToSet = value;
  let currentType = getTypeAsString(instance[propertyName]);
  let isBoolean = valueType === 'Boolean' && currentType === 'Number';
  if (isBoolean) valueToSet = value ? 1 : 0;

  if (hasSetterName && valueToSet !== 'Undefined') {
    log.trace(`Calling setter ${setterName} with value \`${valueToSet}\` on ${instance}`);
    instance[setterName](valueToSet);
  }
  else if (currentType === 'Undefined') {
    log.trace(`Setting previously undefined key \`${propertyName}\` on ${instance} to ${valueToSet}`);
    instance[propertyName] = valueToSet;
  }
  else if (value?.constructor && instance[propertyName] instanceof value.constructor) {
    log.trace(`Setting ${propertyName} to value \`${valueToSet}\` on ${instance}`);
    instance[propertyName] = valueToSet;
  }
  else if (valueType === currentType || isBoolean) {
    log.trace(`Setting ${propertyName} to value \`${valueToSet}\` on ${instance}`);
    instance[propertyName] = valueToSet;
  }
  else if (valueType === 'Null') {
    // log.trace(`Nullifying ${propertyName} on ${instance}`);
    instance[propertyName] = valueToSet;
  }
  else {
    // if (currentType === 'CallbackFunction') {
    //   // TODO: Check fn only takes one param
    //   objectToSet[viewKey](value);
    // }
    // else {
    log.error(`Types don't match for ${propertyName} - tried to set \`${valueType}\` but view is \`${currentType}\``, instance);
    // }
  }
}
