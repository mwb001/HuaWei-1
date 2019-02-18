// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Element from "element-ui"
import "./assets/iconfont/style.css"
import "./assets/css/public.css"
import store from "../store/index"

import vueResource from  "vue-resource"
import Mint from "mint-ui"

// import jquey from "../node_modules/jquery"
import $ from "jquery"
import "../node_modules/element-ui/lib/theme-chalk/index.css"
import  "../node_modules/swiper/dist/css/swiper.css"
import "../node_modules/swiper/dist/js/swiper"


Vue.use(Element, { size: 'small', zIndex: 3000 });
Vue.use(Mint);
Vue.use(vueResource);
import {IndexList,IndexSection} from "mint-ui"
Vue.component(IndexList.name,IndexList);
Vue.component(IndexSection.name,IndexSection);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  $,
  // jquey,
  components: { App },
  template: '<App/>'
})
