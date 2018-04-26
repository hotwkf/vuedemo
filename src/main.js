// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import iview from 'iview'
import router from './router'
import axios from 'axios';
import Vuex from 'vuex';
import 'es6-promise/auto';
import Cookies from 'vue-cookie';
import Util from './js/util';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './css/web.css'
// import 'iview/dist/styles/iview.css'
//ui 库
// Vue.use(iview);
Vue.use(ElementUI);

Vue.use(Vuex);
Vue.use(Cookies);
Vue.config.productionTip = false;
axios.defaults.baseURL = 'http://t.readingmate.com.cn/';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.prototype.$axios = axios;

router.beforeEach((to, from, next) => {
  Util.title(to.meta.title);
  next();
});
const store = new Vuex.Store({
  //共享的数据
  state:{
    count: 0
  },
  //获取数据
  getters: {

  },
  //存储数据
  mutations: {
    setAvator (state, path) {
      localStorage.avatorImgPath = path;
    },
  },
  //处理数据
  actions: {

  }
})
// router.beforeEach((to, from, next) => {
//   // console.log(this)
//   Util.title(to.meta.title);
//   // console.log(to)
//   // console.log(from)
//   // console.log(next)
// });
router.afterEach(() => {
  Util.title();
});
/* eslint-disable no-new */
// const store = new Vuex.Store({
//   state: {
//     count: 0
//   },
//   mutations: {
//     increment (state) {
//       state.count++
//     }
//   }
// })
// store.commit('increment')

// console.log(store.state.count)
var vm = new Vue({
  el: '#app',
  store: store,
  router,
  render: h => h(App)
  // components: { App },
  // template: '<App/>'
})
