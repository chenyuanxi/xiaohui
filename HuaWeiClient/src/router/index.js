import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/Home'
import My from '@/page/My'
import Class from '@/page/Class'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/my',
      name: 'My',
      component: My
    },
    {
      path: '/class',
      name: 'Class',
      component: Class
    }
  ]
})
