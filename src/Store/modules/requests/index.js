import requestsActions from './actions.js'
import reqestsMutations from './mutations.js'
import requestsGetters from './getters.js'
export default {
    namespaced: true,
    state() {
        return {
            request: []
        }
    },
    mutations: reqestsMutations,
    getters: requestsGetters,
    actions: requestsActions,


}