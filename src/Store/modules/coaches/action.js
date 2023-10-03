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
    },
    async loadCoaches(context) {
        const response = await fetch(`https://coaches-fcc6a-default-rtdb.firebaseio.com/coaches.json`);
        const responseData = await response.json();

        if (!response.ok) {
            console.log(response)
        }

        const coaches = [];

        for (const key in responseData) {
            const coach = {
                id: key,
                firstName: responseData[key].firstName,
                lastName: responseData[key].lastName,
                description: responseData[key].description,
                hourlyRate: responseData[key].hourlyRate,
                areas: responseData[key].areas,
            }
            coaches.push(coach);
        }

        context.commit('setCoaches', coaches)
    }
};