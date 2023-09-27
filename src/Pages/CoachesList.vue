<template>
  <section>Filter</section>
  <section>
    <div class="controls">
      <button>Refres</button>
      <router-link to="/register">Register as Coach</router-link>
    </div>
    <ul v-if="hasCoaches">
      <coach-item
        v-for="coach in filterdCoaches"
        :key="coach.id"
        :id="coach.id"
        :first-name="coach.firstName"
        :last-name="coach.lastName"
        :areas="coach.areas"
        :rate="coach.hourlyRate"
      ></coach-item>
    </ul>
    <h3 v-else>No coaches found.</h3>
  </section>
</template>
<script>
import CoachItem from '../Components/coaches/CoachItem.vue';
export default {
  components: {
    CoachItem,
  },
  computed: {
    filterdCoaches() {
      return this.$store.getters['coachesMod/coaches'];
    },
    hasCoaches() {
      return this.$store.getters['coachesMod/hasCoaches'];
    },
  },
};
</script>
<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
