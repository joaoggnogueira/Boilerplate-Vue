import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

import responsive from "./responsive"

export default new Vuex.Store({
  modules: { responsive },
})
