<template>
  <base-card>
    <h2>Register as a Coach</h2>
    <register-form></register-form>
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
};
</script>
