export declare type VueKitNodeProps = {
    [key: string]: any;
};
export declare type VueKitConstructor = {
    name: string;
    args: string[];
    pieces: string[];
};
declare global {
    export class VueKitNode {
        static create(view: NSView, key: string, props: VueKitNodeProps, emitEvent: any, emitAction: any): VueKitNode;
        load(): any;
        destroy(): any;
        emitEvent(VueKitNode: any, any: any, string: any): void;
        emitAction(VueKitNode: any, any: any, string: any): void;
        view?: NSView;
        parent: VueKitNode;
        type: string;
        props: {
            [key: string]: any;
        };
        key: string | number | null;
        children: VueKitNode[];
    }
}
export { VueKitNode };
