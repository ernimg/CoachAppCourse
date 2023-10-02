export default {
    getRequests(state, getters, rootState, rootGetters) {
        const coachId = rootGetters.userId;
        console.log(state.request)
        return state.request.filter(req => req.coachId === coachId);
    },
    hasRequests(_, getters) {
        return getters.getRequests && getters.getRequests.length > 0;
    }
}