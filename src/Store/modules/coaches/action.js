export default {
    addCoach(context, data) {
        const coachData = {
            id: context.rootState.userId,
            firstName: data.first,
            lastName: data.last,
            description: data.desc,
            hourlyRate: data.rate,
            areas: data.areas
        };
        context.commit('addCoach', coachData);
    }
};