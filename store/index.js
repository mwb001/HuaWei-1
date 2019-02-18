import Vue from "vue"
import Vuex from "vuex"
import tang from "./modules/tang"
Vue.use(Vuex);

let store = new Vuex.Store({
  modules:[
    tang
  ]
});

export default store;
