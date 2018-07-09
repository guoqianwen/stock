import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/Index'
import Forum from '@/Forum'
import Login from '@/Login'

import RecommendInfo from '@/RecommendInfo'
import TransactionRecord from '../components/TransactionRecord'
import VueResource from 'vue-resource'
import {getCookie} from "../apiConfig/cookie";
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
      path: '/Login',
      name: 'Login',
      component: Login
    },{
      path: '/components/transaction-record',
      name: 'TransactionRecord',
      component: TransactionRecord
    }
  ]

})

