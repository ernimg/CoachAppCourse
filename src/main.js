import { createApp } from 'vue';
import router from './router.js'
import App from './App.vue'
import store from './Store/index.js'
import BaseCard from './Components/UI/BaseCard.vue'
import BaseButton from './Components/UI/BaseButton.vue'
import BaseBadge from './Components/UI/BaseBadge.vue'
import BaseSpiner from './Components/UI/BaseSpiner.vue'
const app = createApp(App);
app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-badge', BaseBadge);
app.component('base-spiner', BaseSpiner);
app.use(router);
app.use(store);
app.mount('#app');
