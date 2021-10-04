export type VueKitNodeProps = {
  [key: string]: any;
};

export type VueKitConstructor = {
  name: string;
  args: string[];
  pieces: string[];
};

declare global {
  export class VueKitNode {
    static create(view: NSView, key: string, props: VueKitNodeProps, emitEvent: any, emitAction: any): VueKitNode;

    load();

    destroy();

    emitEvent(VueKitNode, any, string): void;

    emitAction(VueKitNode, any, string): void;

    view?: NSView;

    parent: VueKitNode;

    type: string;

    props: { [key: string]: any };

    key: string | number | null;

    children: VueKitNode[];
  }
}

export { VueKitNode };
