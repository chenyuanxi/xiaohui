import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/pages/HomePage'
import ClassPage from '@/pages/ClassPage'
import Personal from '@/pages/Personal'
import ShoopCart from '@/pages/ShoopCart'
import SignRegister from '@/pages/SignRegister'
import Goods from '@/pages/Goods/Goods'
import GoodsList from '@/pages/Goods/GoodsList'

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
      path: '/goods',
      name: 'Goods',
      component: Goods
    },
    {
      path: '/goodsList',
      name: 'GoodsList',
      component: GoodsList,
      meta: {
        showFooter: true
      }
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
