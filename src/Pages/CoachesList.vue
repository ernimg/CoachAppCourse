<template>
  <base-card>
    <coach-filter @change-filter="setFilter"></coach-filter>
  </base-card>
  <section>
    <base-card>
      <div class="controls">
        <base-button mode="outline">Refres</base-button>
        <base-button v-if="!isCoach" link to="/register"
          >Register as Coach</base-button
        >
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
    </base-card>
  </section>
</template>
<script>
import CoachItem from '../Components/coaches/CoachItem.vue';
import CoachFilter from '../Components/coaches/CoachesFilter.vue';
export default {
  data() {
    return {
      activeFilter: {
        frontend: true,
        backend: true,
        career: true,
      },
    };
  },
  components: {
    CoachItem,
    CoachFilter,
  },
  computed: {
    isCoach() {
      console.log(this.$store.getters['coachesMod/isCoach']);
      return this.$store.getters['coachesMod/isCoach'];
    },
    filterdCoaches() {
      const coaches = this.$store.getters['coachesMod/coaches'];
      return coaches.filter((coach) => {
        if (this.activeFilter.frontend && coach.areas.includes('frontend')) {
          return true;
        }
        if (this.activeFilter.backend && coach.areas.includes('backend')) {
          return true;
        }
        if (this.activeFilter.career && coach.areas.includes('career')) {
          return true;
        }
        return false;
      });
    },
    hasCoaches() {
      return this.$store.getters['coachesMod/hasCoaches'];
    },
  },
  methods: {
    setFilter(updateFilters) {
      this.activeFilter = updateFilters;
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
