<template>
  <div>
    <base-dialog :show="!!err" title="Failed AUTH" @close="handleErr">
      <p>
        {{ err }}
      </p>
    </base-dialog>
    <base-dialog :show="isLoading" fixed title="Authenticating">
      <base-spiner></base-spiner>
    </base-dialog>
    <base-card>
      <form @submit.prevent="submitForm">
        <div class="form-control">
          <label for="email">E-mail</label>
          <input type="email" id="email" v-model.trim="email" />
        </div>
        <div class="form-control">
          <label for="password">Password</label>
          <input type="password" id="password" v-model.trim="password" />
        </div>
        <p v-if="!fromIsValid">
          Please enter a valid email and password(must be at least 8 characters
          long)
        </p>
        <base-button>{{ submitButtonCaption }}</base-button>
        <base-button type="button" mode="flat" @click="switchForm">{{
          switchModeButtonCaption
        }}</base-button>
      </form>
    </base-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      fromIsValid: true,
      log: 'login',
      isLoading: false,
      err: null,
    };
  },
  computed: {
    submitButtonCaption() {
      if (this.log === 'login') {
        return 'Login';
      } else {
        return 'Singup';
      }
    },
    switchModeButtonCaption() {
      if (this.log === 'login') {
        return 'Singup instead';
      } else {
        return 'Login instead';
      }
    },
  },
  methods: {
    async submitForm() {
      this.fromIsValid = true;
      if (
        this.email === '' ||
        !this.email.includes('@') ||
        this.password.length < 8
      ) {
        console.log('no ok');
        this.fromIsValid = false;
        return;
      }
      this.isLoading = true;
      const actionPayload = {
        email: this.email,
        password: this.password,
      };

      try {
        if (this.log === 'login') {
          await this.$store.dispatch('login', actionPayload);
          this.email = '';
          this.password = '';
        } else {
          await this.$store.dispatch('signup', actionPayload);
          this.email = '';
          this.password = '';
        }
        const redirectUrl = '/' + (this.$route.query.redirect || 'coaches');

        this.$router.replace(redirectUrl);
      } catch (error) {
        this.isLoading = false;
        this.err = error.message || 'Failed authenticate.';
      }
      this.isLoading = false;
    },
    switchForm() {
      if (this.log === 'login') {
        this.log = 'singup';
      } else {
        this.log = 'login';
      }
    },
    handleErr() {
      this.err = null;
    },
  },
};
</script>
<style scoped>
form {
  margin: 1rem;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}
</style>
