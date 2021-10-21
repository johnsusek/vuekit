import { emitAction, emitEvent } from './bridge';
import { createInstance } from './createInstance';
import { getViewConstructor, getPropValues } from './node';
import { setInstanceValue } from './setInstanceValue';
import { valueTypeForJSType } from './type';
import { classNameFromTag } from './classNameFromTag';

export function createNode(tag: string, props: VueKitNodeProps = {}): VueKitNode {
  let builtProps: VueKitNodeProps = buildPropDefaults(tag, props);

  // Each VueKitNode has one instance of an NSObject, this is
  // often an NSView subclass, but not always (e.g. TableColumn)
  let instance: NSObject = createInstance(tag, builtProps);

  // This is a bridged call that creates the node on the Swift side
  let node: VueKitNode = VueKitNode.create(instance, builtProps, emitEvent, emitAction);

  // Set any props that weren't used in the constructor

  let className = classNameFromTag(tag);
  let { args } = getViewConstructor(className, builtProps);

  for (let [key, value] of Object.entries(builtProps)) {
    if (args.includes(key)) continue; // constructor already set this
    setInstanceValue(node, key, value);
  }

  // Post-create actions

  if (instance instanceof NSWindow) {
    instance.makeKeyAndOrderFront(null);
    instance.center();
  }

  return node;
}

function buildPropDefaults(tag: string, props: VueKitNodeProps) {
  let className = classNameFromTag(tag);
  let nodeProps = props;

  if (className === 'NSWindow') {
    let defaultContentRect = {
      x: 0,
      y: 0,
      width: 320,
      height: 240
    };
    let defaultStyleMask = NSWindow.StyleMask.Resizable | NSWindow.StyleMask.Titled | NSWindow.StyleMask.Closable | NSWindow.StyleMask.Miniaturizable;
    let defaultBacking = NSWindow.BackingStoreType.Retained;

    nodeProps = getPropValues({
      contentRect: defaultContentRect,
      styleMask: defaultStyleMask,
      backing: defaultBacking,
      defer: true
    }, props);
  }
  else if (className === 'NSControl') {
    // TODO: map to @change
    props.onControlTextDidChange = (node: VueKitNode) => {
      // Control text has changed and the component has a v-model, so update it
      let vModelUpdateFn = node.props['onUpdate:modelValue'];
      if (!vModelUpdateFn) return;
      let valueTypeKey = valueTypeForJSType(typeof node.props.modelValue);
      // console.log(`Updating v-model nscontrol change (calling node.props['onUpdate:modelValue']) with value of el["${valueTypeKey}"] :`, el[valueTypeKey]);
      vModelUpdateFn(node.instance[valueTypeKey]);
    };
  }

  return nodeProps;
}
