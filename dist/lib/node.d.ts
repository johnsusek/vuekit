import { VNodeProps } from '@vue/runtime-core';
export declare function getAllPropertyNames(obj: any): any;
export declare function getCandidateConstructors(elementClass: NSView, vnodeProps?: VueKitNodeProps): string[][];
export declare function getConstructor(className: string, vnodeProps?: VueKitNodeProps): VueKitConstructor;
export declare function getPropValues(requestedProps: any, props: VNodeProps): Record<string, any>;
