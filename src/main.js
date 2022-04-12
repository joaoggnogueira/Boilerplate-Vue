import Vue from "vue"
import App from "./App.vue"
import VueMeta from "vue-meta"
import VueI18n from "vue-i18n"
import axios from "axios"
import VueAxios from "vue-axios"
import store from "./store"

Vue.use(VueI18n)

const i18n = new VueI18n({
  messages: i18nDocuments,
  fallbackLocale: "pt-BR",
  locale: "pt-BR",
})

import i18nDocuments from "./locales"
import { BootstrapVue } from "bootstrap-vue"
import VueRouter from "vue-router"

VueRouter.prototype.i18n = i18n

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "@/assets/global.scss"
import "bootstrap-vue/dist/bootstrap-vue.css"

import router from "./router"
import AOS from "aos"
import "aos/dist/aos.css"

AOS.init()

import { Notifier } from '@airbrake/browser';

var airbrake = new Notifier({
  environment: 'production',
  projectId: 409964,
  projectKey: 'f0feb41dd519d8b944d16ce843ad3e1a'
});

Vue.config.errorHandler = function (err, vm, info) {
  console.error(err)
  airbrake.notify({
    error: err,
    params: {info: info}
  });
}

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.use(VueMeta, {
  // optional pluginOptions
  refreshOnceOnNavigation: true,
})
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
  i18n,
  router,
  store,
  render: (h) => h(App),
}).$mount("#app")
