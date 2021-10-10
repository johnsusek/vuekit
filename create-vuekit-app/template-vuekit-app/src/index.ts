import 'vuekit-vue';
import { createApp } from 'vuekit-vue/lib';
import App from './App.vue';

let app = createApp(App);

app.mount({} as VueKitNode);

console.log('⟁ Welcome to VueKit!');
