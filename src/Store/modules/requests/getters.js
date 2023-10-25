export default {
  getRequests(state, getters, rootState, rootGetters) {
    const coachId = rootGetters.userId;
    return state.request.filter((req) => req.coachId === coachId);
  },
  hasRequests(_, getters) {
    console.log(getters.getRequests);
    return getters.getRequests && getters.getRequests.lenght > 0;
  },
};
