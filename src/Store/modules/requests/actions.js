export default {
    addUserRequest(context, payload) {
        const newRequests = {
            id: new Date().toDateString(),
            coachId: payload.coachId,
            userEmeail: payload.userEmeail,
            message: payload.message
        }
        context.commit('addRequest', newRequests)
        console.log('wysłano wiadomość');
    }
}