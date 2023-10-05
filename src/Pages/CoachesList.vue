<template>
  <base-dialog :show="!!err" title="An error occurred!" @close="handleErr">
    <p>{{ err }}</p>
  </base-dialog>
  <base-card>
    <coach-filter @change-filter="setFilter"></coach-filter>
  </base-card>
  <section>
    <base-card>
      <div class="controls">
        <base-button @click="loadCoaches(true)" mode="outline"
          >Refres</base-button
        >
        <base-button v-if="!isCoach && !isLoading" link to="/register"
          >Register as Coach</base-button
        >
      </div>
      <div v-if="isLoading">
        <base-spiner></base-spiner>
      </div>
      <ul v-else-if="hasCoaches">
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
      isLoading: false,
      err: '',
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
      return !this.isLoading && this.$store.getters['coachesMod/hasCoaches'];
    },
  },
  methods: {
    setFilter(updateFilters) {
      this.activeFilter = updateFilters;
    },
    async loadCoaches(refresh = false) {
      this.isLoading = true;
      try {
        await this.$store.dispatch('coachesMod/loadCoaches', {
          forceRefresh: refresh,
        });
      } catch (error) {
        this.err = error.message || 'Something went wrong!';
      }

      this.isLoading = false;
    },
    handleErr() {
      this.err = null;
    },
  },
  created() {
    this.loadCoaches();
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
