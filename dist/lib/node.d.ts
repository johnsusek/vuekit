import { VNodeProps } from '@vue/runtime-core';
import { VueKitConstructor, VueKitNode, VueKitNodeProps } from '../types/VueKit';
export declare function getCandidateConstructors(elementClass: NSView, vnodeProps?: VueKitNodeProps): string[][];
export declare function getConstructor(className: string, vnodeProps?: VueKitNodeProps): VueKitConstructor;
export declare function createView(type: string, vnodeProps?: VueKitNodeProps): NSView;
export declare function setNodeValue(node: VueKitNode, key: string, value: any, fromPatch?: boolean): void;
export declare function getPropValues(requestedProps: any, props: VNodeProps): Record<string, any>;
