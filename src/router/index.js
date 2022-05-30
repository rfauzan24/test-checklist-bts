import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/page-home.vue";
import Register from "@/views/page-register.vue";
import Login from "@/views/page-login.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/register",
      name: "register",
      component: Register
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
  ]
});