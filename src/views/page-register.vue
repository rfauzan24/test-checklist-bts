<template>
  <div>
    <h1>Register</h1>
    <input type="email" placeholder="Email" v-model="email" />
    <input type="text" placeholder="Password" v-model="password" />
    <input type="text" placeholder="Username" v-model="username" />
    <input type="button" @click="register" value="Register" />
    <p v-if="msg">{{ msg }}</p>
  </div>
</template>
<script>
import AuthService from '@/services/AuthService.js';

export default {
  data() {
    return {
      email: '',
      username: '',
      password: '',
      msg: ''
    };
  },
  methods: {
    async register() {
      try {
        const credentials = {
          email: this.email,
          password: this.password,
          username: this.username
        };
        const response = await AuthService.Register(credentials);
        this.msg = response.msg;
      } catch (error) {
        this.msg = error.response.data.msg;
      }
    }
  }
};
</script>