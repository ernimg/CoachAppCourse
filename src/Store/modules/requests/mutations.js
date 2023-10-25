export default {
  addRequest(state, payload) {
    state.request.push(payload);
  },
  setRequest(state, payload) {
    state.request = payload;
  },
};
