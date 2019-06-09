import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/pages/HomePage'
import ClassPage from '@/pages/ClassPage'
import Personal from '@/pages/Personal'
import ShoopCart from '@/pages/ShoopCart'
import SignRegister from '@/pages/SignRegister'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'HomePage',
      component: HomePage,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/class',
      name: 'ClassPage',
      component: ClassPage,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/personal',
      name: 'Personal',
      component: Personal,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/cart',
      name: 'ShoopCart',
      component: ShoopCart,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/SignRegister',
      name: 'SignRegister',
      component: SignRegister
    },
    {
      path: '/',
      redirect: HomePage,
      meta: {
        showFooter: true
      }
    }
  ]
})
