// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import 'bootstrap/js/bootstrap.min.js'
import 'bootstrap/css/bootstrap.min.css'
import {getCookie} from "./apiConfig/cookie";
import * as custom from "./apiConfig/filters"


Vue.config.productionTip = false;
//Vue.http.headers.common['Account-Code'] = 'root';
Vue.http.interceptors.push((request,next)=>{
  //request.credentials = true; // 接口每次请求会跨域携带cookie
  //request.method= 'POST'; // 请求方式（get,post）
  console.log(getCookie("username"))
  if(getCookie("username")!=""){
    request.headers.set('Account-Code',getCookie("username")) // 请求headers携带参数
  }else {
    request.headers.set('Account-Code',"echo_gou") // 请求headers携带参数
  }

  next(function(response){
    return response;

  });
})
Object.keys(custom).forEach(key => {
  Vue.filter(key, custom[key])
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

