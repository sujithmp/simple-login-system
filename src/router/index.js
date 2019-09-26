import Vue from 'vue'
import Router from 'vue-router'
import Secure from '@/components/Secure'
import Login from '@/components/Login'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      redirect: {
        name: 'login' }
    },
    {
      path: '/secure',
      name: 'secure',
      component: Secure
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
