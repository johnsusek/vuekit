import { snakeToCamel, capitalize } from './string';
import { valueTypeForJSType, getTypeAsString } from './type';
import { getAllPropertyNames } from './node';

// This gets called when 1) a node is created and we want to apply the props
// to the newly created NSView or 2) a node's props have changed (patchProp) and
// we want to apply those new values to the NSView

export function setInstanceValue(node: VueKitNode, key: string, value: any, fromPatch = false): void {
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

  if (typeof value === 'function' && key !== 'draw') {
    // console.info('Skipping setting function-type property ', key);
    return;
  }

  let newType = getTypeAsString(value);

  // Undefined means the prop doesn't have any value,
  // so we leave the property alone on the object
  if (newType === 'Undefined') return;

  // if (objectToSet instanceof NSTextView) {
  // console.log('TODO: set attributed string on textstorage', objectToSet.textStorage);
  // view.textStorage?.setAttributedString(NSAttributedString.createWithString(nextValue.toString()));
  // }

  let camelKey = snakeToCamel(key);

  if (fromPatch && camelKey === 'modelValue') {
    camelKey = valueTypeForJSType(typeof value);
  }

  // Scenario #1 - v-model

  if (camelKey === 'modelValue') {
    let vModelUpdateFn = node.props['onUpdate:modelValue'];

    if (vModelUpdateFn) {
      console.info('set vModelUpdateFn to value', value, node);
      vModelUpdateFn(value);
    }
    else {
      console.warn('Tried to update model value but could not find update fn');
    }

    return;
  }

  // Scenario #2 - prop name doesn't exist on the NSView, but a setter fn does

  let setter = `set${capitalize(camelKey)}`;

  if (typeof objectToSet[setter] === 'function') {
    // console.info(`Using setter ${setter} with value \`${value}\` on ${node.instance}`);

    if (Array.isArray(value)) {
      objectToSet[setter](...value);
    }
    else {
      // TODO: is there a way to check fn only takes one param?
      objectToSet[setter](value);
    }

    return;
  }

  // Scenario #3 - prop name exists on the NSView

  let propNames = getAllPropertyNames(objectToSet);

  if (propNames.includes(camelKey)) {
    let currentType = getTypeAsString(objectToSet[camelKey]);

    if (currentType === 'Undefined') {
      // console.log(`Setting previously undefined key \`${camelKey}\` on ${objectToSet} to ${value}`);
      objectToSet[camelKey] = value;
    }
    else if (newType === currentType) {
      // console.info(`Setting ${camelKey} to value \`${value}\` on ${node.instance}`);
      objectToSet[camelKey] = value;
    }
    else if (newType === 'Boolean' && currentType === 'Number') {
      // console.info(`Setting ${camelKey} to value \`${value}\` (${value ? 1 : 0}) on ${node.instance}`);
      objectToSet[camelKey] = value ? 1 : 0;
    }
    else {
      // if (currentType === 'CallbackFunction') {
      //   // TODO: Check fn only takes one param
      //   objectToSet[viewKey](value);
      // }
      // else {
      console.error(`Types don't match for ${camelKey} - tried to set \`${newType}\` but view is \`${currentType}\``, objectToSet);
      // }
    }

    return;
  }

  // Scenario #4 - no matching prop name nor setter, inform user
  if (node.instance instanceof NSView) {
    // some non-views like NSTableColumn have constructors that take params not on the instance (like "identifier")
    console.warn(`"${camelKey}" is undefined and there are no setters with the name "${setter}": `, objectToSet);
  }
}
