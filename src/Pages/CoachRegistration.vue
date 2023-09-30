<template>
  <base-card>
    <h2>Register as a Coach</h2>
    <register-form @save-data="saveData"></register-form>
  </base-card>
</template>
<script>
import RegisterForm from '../Components/coaches/RgisterForm.vue';
import BaseCard from '../Components/UI/BaseCard.vue';
export default {
  components: {
    RegisterForm,
    BaseCard,
  },
  methods: {
    saveData(data) {
      this.$store.dispatch('coachesMod/addCoach', data);
      this.$router.replace('/coaches');
    },
  },
};
</script>
