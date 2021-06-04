import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import NotFound from "../views/NotFound.vue";
import Login from "../views/Login.vue";

const routes: Array<RouteRecordRaw>  = [
  {
    path: "/welcome",
    name: "Welcome",
    component: Home,
    beforeEnter: (to, from, next) => {
      if (JSON.parse(localStorage.getItem("user") || "")) {
        next();
      } else {
        next({ name: "Login" });
      }
    },
  },
  {
    path: "/",
    redirect: () => {
      return { path: "/welcome" };
    },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: () => {
      return { path: "/404" };
    },
  },
  {
    path: "/404",
    name: "NotFound",
    component: NotFound,
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
// router.beforeEach((to, from, next) => {
//   // if (to.name === 'Login' && !JSON.parse(localStorage.getItem("user"))) {
//   //   next()
//   // } else
//   if (to.name === "Welcome" || to.name === "NotFound" && !JSON.parse(localStorage.getItem("user"))) {
//     next({ name: "Login"})
//   } else next({ name: "Welcome" })
// })
export default router;
