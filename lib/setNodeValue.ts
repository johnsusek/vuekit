import { snakeToCamel, capitalize } from './string';
import { valueTypeForJSType, getTypeAsString } from './type';
import { getAllPropertyNames } from './node';

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

  if (!objectToSet) {
    return;
  } // Text or comment node

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
    }
    else {
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
    }
    else {
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
    }
    else if (newType === currentType) {
      // console.info(`Setting ${viewKey} to value \`${value}\` on ${node.view}`);
      objectToSet[viewKey] = value;
    }
    else if (newType === 'Boolean' && currentType === 'Number') {
      // console.info(`Setting ${viewKey} to value \`${value}\` (${value ? 1 : 0}) on ${node.view}`);
      objectToSet[viewKey] = value ? 1 : 0;
    }
    else {
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
