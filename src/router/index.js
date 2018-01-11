import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/login',
      name: 'Login',
      component: resolve=>require(['@/pages/Login/Login'],resolve)
    },
    {
      path: '/register',
      name: 'Register',
      component: resolve=>require(['@/pages/Login/Register'],resolve)
    },
    {
      path: '/novel',
      name: 'Novel',
      component: resolve=>require(['@/pages/Novel/Index'],resolve)
    },
  ]
})
