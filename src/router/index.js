import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "*",
    name: "PageNotFound",
    component: () => import("@/views/PageNotFound.vue"),
  },
]

const router = new VueRouter({
  mode: "history",
  routes,
})

export default router
