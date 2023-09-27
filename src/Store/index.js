import { createStore } from "vuex";
import Coaches from './modules/coaches/index.js'

const store = createStore({
    modules: {
        coachesMod: Coaches
    },
    state() {

    }
})


export default store