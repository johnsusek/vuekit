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
    emitEvent(VueKitNode, NSEvent, string): void;
    emitAction(VueKitNode, NSEvent, string): void;

    view?: NSView;
    parent: VueKitNode;

    type: string;
    props: { [key: string]: any };
    key: string | number | null;

    children: VueKitNode[];
  }
}

Object.assign((globalThis as any).VueKitNode, VueKitNode);

export { VueKitNode };
