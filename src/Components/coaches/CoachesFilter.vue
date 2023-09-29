<template>
  <h2>Find Your Coach</h2>
  <span class="filter-option">
    <input type="checkbox" id="frontend" checked @change="handleInput" />
    <label for="frontend">Frontend</label>
  </span>
  <span class="filter-option">
    <input type="checkbox" id="backend" checked @change="handleInput" />
    <label for="backend">Backend</label>
  </span>
  <span class="filter-option">
    <input type="checkbox" id="career" checked @change="handleInput" />
    <label for="career">Career</label>
  </span>
</template>
<script>
export default {
  emits: ['change-filter'],
  data() {
    return {
      filters: {
        frontend: true,
        backend: true,
        career: true,
      },
    };
  },
  methods: {
    handleInput(event) {
      const id = event.target.id;
      const isChecked = event.target.checked;
      console.log(id, isChecked);
      const updateFilters = {
        ...this.filters,
        [id]: isChecked,
      };
      this.filters = updateFilters;
      this.$emit('change-filter', updateFilters);
    },
  },
};
</script>
<style scoped>
h2 {
  margin: 0.5rem 0;
}

.filter-option {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}
</style>
