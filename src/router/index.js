import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/Index'
import Forum from '@/Forum'
import Login from '@/Login'
import Register from '@/Register'
import SignUp from '@/SignUp'

import RecommendInfo from '@/RecommendInfo'
import DataInquiry   from "@/DataInquiry"
import Recommend from '../components/Recommend'
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
      path: '/data-inquiry',
      name: 'DataInquiry',
      component: DataInquiry
    }
    ,
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },{
      path: '/components/transaction-record',
      name: 'TransactionRecord',
      component: TransactionRecord
    },{
      path: '/Register',
      name: 'Register',
      component: Register
    },{
      path: '/sign-up',
      name: 'SignUp',
      component: SignUp
    }
  ]

})

