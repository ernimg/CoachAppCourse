export default {
    coaches(state) {
        return state.coaches;
    },
    hasCoaches(state) {
        return state.coaches.length !== 0 ? true : false;
    },
    isCoach(_, getters, _2, rootGeters) {
        const coaches = getters.coaches;
        const userId = rootGeters.userId;
        return coaches.some(user => user.id === userId)
    }
};