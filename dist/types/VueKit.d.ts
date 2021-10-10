import * as Constraint from './constraint';
declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $constraints: Constraint.Definitions;
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
        static create(view: NSView, key: string, props: VueKitNodeProps, emitEvent: any, emitAction: any): VueKitNode;
        load(): any;
        destroy(): any;
        emitEvent(VueKitNode: any, any: any, string: any): void;
        emitAction(VueKitNode: any, any: any, string: any): void;
        view?: NSView;
        instance?: NSObject;
        text?: string | undefined;
        type: string;
        props: {
            [key: string]: any;
        };
        key: string | number | null;
        parent: VueKitNode;
        children: VueKitNode[];
    }
}
export { VueKitNode };
