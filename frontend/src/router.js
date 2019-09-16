import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import UserHome from './views/UserHome.vue'
import UserInfo from './views/UserInfo.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/userhome',
      name: 'userHome',
      component: UserHome
    },
    {
      path: '/userinfo',
      name: 'userInfo',
      component: UserInfo
    }
  ]
})
