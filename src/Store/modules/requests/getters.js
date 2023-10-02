export default {
    getRequests(state) {
        return state.request;
    },
    hasRequests(state) {
        return state.request && state.request.length > 0;
    }
}