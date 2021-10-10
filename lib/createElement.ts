import { findClass } from './findClass';
import { createNode } from './createNode';

export function createElement(type: string, _?: boolean, __?: string, vnodeProps?: VueKitNodeProps) {
  let node: VueKitNode;

  // button -> Button
  // text -> Text
  // stack -> StackView
  // text-field -> TextField
  // window -> NSWindow
  // av-player -> PlayerView
  // av-capture -> CaptureView
  // ik-camera-device -> CameraDeviceView
  let className = findClass(type);

  // console.log(`Creating ${viewClass}`, vnodeProps);
  node = createNode(className, vnodeProps);

  if (!node.props) {
    console.log('Could not find node.props to set');
    return node;
  }

  if (!node.view) {
    console.log('Could not find node.view');
    return node;
  }

  return node;
}
