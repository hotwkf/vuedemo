import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import foo from '@/components/foo'
// import bar from '@/components/bar'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login,
      // children: [
      //   { path: '/foo', title: 'foo', name: 'foo', component: resolve => { require(['../components/foo'], resolve); } },
      //   { path: '/bar', title: 'bar', name: 'bar', component: resolve => { require(['../components/bar'], resolve); } }
      // ]
    },
    {
      path: '/foo',
      name: 'foo',
      component: resolve => require(['../components/foo'], resolve)
    },
    // {
    //   path: '/bar',
    //   name: 'bar',
    //   component: bar
    // }
  ]
})
