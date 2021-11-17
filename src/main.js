import { createApp } from 'vue';

import VueSidebarMenu from 'vue-sidebar-menu';
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

import App from './App.vue';
import router from './components/router';
import store from './components/store';

const app = createApp(App);
app.use(router);
app.use(store);
app.use(VueSidebarMenu);
app.mount('#app');
