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

    // The instance to which we apply node props
    // For a <Button>, this is an instanceof NSButton, etc
    // Typically an NSView, but not always (e.g. NSTableColumn)
    instance?: NSObject;

    // This is typically === instance, but sometimes the NSView
    // we add to the parent is different than the NSView we
    // want to apply our props to.
    //
    // e.g. NSSplitView.splitView = instance
    //      NSSplitView.view = view
    //
    // So for hierarchy stuff, we use `view` and for props stuff we
    // use `instance`, in case we are dealing with a component like this.
    view?: NSView;

    // Usually not used, but sometimes helpful for e.g SplitViews to insert items
    // We use this internally, but VueKit users should never have to know or think
    // about controllers
    controller?: any;

    props: { [key: string]: any };
    parent: VueKitNode;
    children: VueKitNode[];
  }
}

export { VueKitNode };
