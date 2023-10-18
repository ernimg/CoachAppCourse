export default {
  async addUserRequest(context, payload) {
    const newRequests = {
      userEmeail: payload.userEmeail,
      message: payload.message,
    };
    const token = context.rootGetters.token;
    const response = await fetch(
      `https://coaches-fcc6a-default-rtdb.firebaseio.com/requests/${payload.coachId}.json?auth=` +
        token,
      {
        method: 'POST',
        body: JSON.stringify(newRequests),
      }
    );
    const responseData = await response.json();
    console.log(`add response Data : ${responseData}`);
    console.log(responseData);
    if (!response.ok) {
      const error = new Error(responseData.message || 'Faild to send request');
      throw error;
    }
    newRequests.id = responseData.name;
    newRequests.coachId = payload.coachId;

    context.commit('addRequest', newRequests);
  },
  async fetchRequests(context) {
    const coachId = context.rootGetters.userId;
    const token = context.rootGetters.token;
    console.log(`tokken: ${token}`);
    console.log(`coachId: ${coachId}`);
    const response = await fetch(
      `https://coaches-fcc6a-default-rtdb.firebaseio.com/requests/${coachId}.json?auth=` +
        token
    );
    const responseData = await response.json();
    if (!response.status == 200) {
      const error = new Error(responseData.message || 'Faild to fetch request');
      throw error;
    }
    console.log(`responseData: ${responseData}`);
    const requests = [];

    for (const key in responseData) {
      const request = {
        id: key,
        coachId: coachId,
        userEmeail: responseData[key].userEmeail,
        message: responseData[key].message,
      };
      requests.push(request);
      console.log(requests);
    }

    context.commit('setRequest', requests);
  },
};
