import '@vue/runtime-core';
import { createApp } from 'vuekit-vue';
import App from './App.vue';

let app = createApp(App as any);

app.mount({} as VueKitNode);

console.log('Welcome to VueKit!');
