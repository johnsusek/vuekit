declare module '*.vue' {
    import type { DefineComponent } from '@vue/runtime-core';
    const component: DefineComponent<unknown, unknown, any>;
    export default component;
}
