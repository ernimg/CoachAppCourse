<template>
  <section>
    <base-dialog :show="!!err" title="An error occurred!" @close="handleCole">
      {{ err }}
    </base-dialog>
    <base-card>
      <header>
        <h2>Requests Recived</h2>
      </header>
      <div v-if="isLoading">
        <base-spiner></base-spiner>
      </div>
      <ul v-else-if="hasRequests && !isLoading">
        <request-item
          v-for="request in recivedRequests"
          :key="request.id"
          :email="request.userEmeail"
          :message="request.message"
        ></request-item>
      </ul>
      <h3 v-else>You havent't recived any requests yet!</h3>
    </base-card>
  </section>
</template>
<script>
import RequestItem from '../Components/requests/RequestItem.vue';
import BaseDialog from '../Components/UI/BaseDialog.vue';

export default {
  components: { RequestItem, BaseDialog },
  data() {
    return {
      isLoading: false,
      err: null,
    };
  },
  computed: {
    recivedRequests() {
      return this.$store.getters['requests/getRequests'];
    },
    hasRequests() {
      return this.$store.getters['requests/hasRequests'];
    },
  },
  methods: {
    async loadRequest() {
      this.isLoading = true;
      try {
        await this.$store.dispatch('requests/fetchRequests');
      } catch (error) {
        this.err = error.message || 'Something went wrong!';
      }
      this.isLoading = false;
    },
  },
  handleCole() {
    this.err = null;
  },
  created() {
    this.loadRequest();
  },
};
</script>
<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>
