import { VueKitNode } from '../types/VueKit';
export declare function decorateEvent(eventDetails: NSEvent, serialized: string): NSEvent;
export declare function emitEvent(node: VueKitNode, event: NSEvent, extended: string): void;
export declare function emitAction(node: VueKitNode, event: NSEvent, extended: string): void;
