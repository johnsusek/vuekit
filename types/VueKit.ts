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
    // addEventListener(event: string, handler: any, options: any): void
    // removeEventListener(event: string, handler?: any): void
    // dispatchEvent(event: string): void
    // getAttribute(name: string): unknown
    // setAttribute(name: string, value: unknown): void
    // removeAttribute(name: string): void
    // insertBefore(el: VueKitNode, anchor?: VueKitNode | null): void
    // appendChild(el: VueKitNode): void
    // removeChild(el: VueKitNode): void
  }

  export class VueKitNode {
    static create(view: NSView, key: string, props: VueKitNodeProps, emitEvent: any, emitAction: any): VueKitNode;

    load();
    destroy();
    emitEvent(VueKitNode, any, string): void;
    emitAction(VueKitNode, any, string): void;

    view?: NSView;

    // often the same as `view`, except for e.g. NSWindow where the view is instance.contentView
    instance?: NSObject;

    text?: string | undefined // for text or comment nodes

    type: string; // only 'NSWindow' for now, b/c class <-> NSView don't map clean..

    props: { [key: string]: any };

    key: string | number | null;

    parent: VueKitNode;
    children: VueKitNode[];
  }
}

export { VueKitNode };
