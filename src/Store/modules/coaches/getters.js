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
    },
    shouldUpdate(state) {
        const lastFeth = state.lastFeth;

        if (!lastFeth) {
            console.log('pobiera pierwsze')
            return true;

        }

        const useGetterTime = new Date().getTime();

        return (useGetterTime - lastFeth) / 1000 > 60
    }

};