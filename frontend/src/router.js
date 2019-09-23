import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import UserHome from './views/UserHome.vue'
import UserInfo from './views/UserInfo.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/userHome',
      name: 'userHome',
      component: UserHome
    },
    {
      path: '/userInfo',
      name: 'userInfo',
      component: UserInfo
    }
  ]
})
