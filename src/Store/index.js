import { createStore } from "vuex";
import Coaches from './modules/coaches/index.js'

const store = createStore({
    modules: {
        coachesMod: Coaches
    },
    state() {
        return {
            userId: 'C4',
        }
    },
    getters: {
        userId(state) {
            return state.userId;
        }
    }
})


export default store