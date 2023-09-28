import { createApp } from 'vue';
import router from './router.js'
import App from './App.vue'
import store from './Store/index.js'
import BaseCard from './Components/UI/BaseCard.vue'
import BaseButton from './Components/UI/BaseButton.vue'
import BaseBadge from './Components/UI/BaseBadge.vue'
const app = createApp(App);
app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-badge', BaseBadge);
app.use(router);
app.use(store);
app.mount('#app');
