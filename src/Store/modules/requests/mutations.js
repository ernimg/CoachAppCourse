export default {
  addRequest(state, payload) {
    state.request.push(payload);
  },
  setRequest(state, payload) {
    console.log(payload);
    state.request = payload;
  },
};
