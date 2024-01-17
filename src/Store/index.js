import { createStore } from 'vuex';
import Coaches from './modules/coaches/index.js';
import requestsMod from './modules/requests/index.js';
import AuthMod from './modules/Auth/index.js';
const store = createStore({
  modules: {
    coachesMod: Coaches,
    requests: requestsMod,
    auth: AuthMod,
  },
});

export default store;
