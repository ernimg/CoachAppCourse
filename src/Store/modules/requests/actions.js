export default {
    addRequest(context, payload) {
        const newRequests = {
            id: new Date().toDateString(),
            coachId: payload.coachId,
            userEmeail: payload.email,
            message: payload.message
        }
        context.commit('addRequest', newRequests)
    }
}