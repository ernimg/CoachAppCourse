export default {
    async addCoach(context, data) {
        const userId = context.rootState.userId
        const coachData = {
            firstName: data.first,
            lastName: data.last,
            description: data.desc,
            hourlyRate: data.rate,
            areas: data.areas
        };

        const response = fetch(`https://coaches-fcc6a-default-rtdb.firebaseio.com/coaches/${userId}.json`, {
            method: 'PUT',
            body: JSON.stringify(coachData)
        })
        if ((await response).status != 200) {
            console.log(response)
        }

        context.commit('addCoach', {
            ...coachData,
            id: userId
        });
    }
};