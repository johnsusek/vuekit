import * as Constraint from './constraint';

declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $constraints: Constraint.Definitions
  }
}

declare global {
  export type VueKitNodeProps = {
    [key: string]: any;
  };

  export type VueKitConstructor = {
    name: string;
    args: string[];
    pieces: string[];
  };

  export class VueKitElement extends VueKitNode {
  }

  export class VueKitNode {
    static create(instance?: NSObject, props?: VueKitNodeProps, emitEvent?: any, emitAction?: any): VueKitNode;

    load();
    destroy();
    emitEvent(VueKitNode, any, string): void;
    emitAction(VueKitNode, any, string): void;

    instance?: NSObject;
    controller?: any;
    props: { [key: string]: any };
    parent: VueKitNode;
    children: VueKitNode[];
  }
}

export { VueKitNode };
