<template>
  <div>
    <h1>Login</h1>
    <input type="text" placeholder="Username" v-model="username" />
    <input type="text" placeholder="Password" v-model="password" />
    <input type="button" @click="login" value="Login" />
    <p v-if="msg">{{ msg }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      password: '',
      msg: ''
    };
  },
  methods: {
    methods: {
    async login() {
      const url = 'http://94.74.86.174:8080/api/login/';

      try {
        const credentials = {
          username: this.username,
          password: this.password
        };
        const response = await axios.get(url, { credentials }).then(res => res.data);
        console.log(response)

        this.$router.push('/');
      } catch (error) {
        this.msg = error.errorMessage;   
      }
    }
  }
  }
};
</script>