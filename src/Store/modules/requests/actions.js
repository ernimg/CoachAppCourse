
export default {
    async addUserRequest(context, payload) {
        const newRequests = {
            userEmeail: payload.userEmeail,
            message: payload.message
        }
        const token = context.rootGeters.token;
        const response = await fetch(`https://coaches-fcc6a-default-rtdb.firebaseio.com/requests/${payload.coachId}.json?auth=` + token, {
            method: 'POST',
            body: JSON.stringify(newRequests)
        })
        const responseData = await response.json()

        if (!response.ok) {
            const error = new Error(responseData.message || 'Faild to send request');
            throw error;
        }
        newRequests.id = responseData.name;
        newRequests.coachId = payload.coachId

        context.commit('addRequest', newRequests)
    },
    async fetchRequests(context) {
        const coachId = context.rootGetters.userId;
        const token = context.rootGetters.token;
        console.log(token);
        const response = await fetch(`https://coaches-fcc6a-default-rtdb.firebaseio.com/requests/${coachId}.json?auth=` + token)
        const responseData = await response.json()
        if (!response.ok) {
            const error = new Error(responseData.message || 'Faild to fetch request');
            throw error;
        }

        const requests = [];

        for (const key in responseData) {
            const request = {
                id: key,
                coachId: coachId,
                userEmeail: responseData[key].userEmeail,
                message: responseData[key].message
            }
            requests.push(request)
        }

        context.commit('setRequest', requests)

    }
}