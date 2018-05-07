import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/Index'
import Forum from '@/Forum'
import Login from '@/Login'
import LatestPolicy from '@/LatestPolicy'
import PaperTrading from '@/PaperTrading'
import RecommendInfo from '@/RecommendInfo'
import VueResource from 'vue-resource'
Vue.use(Router)
Vue.use(VueResource);

export default new Router({
  routes: [
   {
      path: '/',
      name: 'Index',
      component: Index
    } ,
    {
      path: '/index',
      name: 'index',
      component: Index
    } ,
    {
      path: '/latest-policy',
      name: 'LatestPolicy',
      component: LatestPolicy
    },
    {
      path: '/paper-trading',
      name: 'PaperTrading',
      component:PaperTrading
    },
    {
      path: '/recommend-info',
      name: 'RecommendInfo',
      component: RecommendInfo
    },
    {
      path: '/forum',
      name: 'Forum',
      component: Forum
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
