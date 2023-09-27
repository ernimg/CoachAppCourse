import { createApp } from 'vue';
import router from './router.js'
import App from './App.vue'
import store from './Store/index.js'
const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');
