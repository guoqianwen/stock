// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import 'bootstrap/js/bootstrap.min.js'
import 'bootstrap/css/bootstrap.min.css'
import {getSession} from "./apiConfig/cookie";
import * as custom from "./apiConfig/filters"
import aa from "./apiConfig/global";

Vue.config.productionTip = false;
//Vue.http.headers.common['Account-Code'] = 'root';
Vue.http.interceptors.push((request,next)=>{
  //request.credentials = true; // 接口每次请求会跨域携带cookie
  //request.method= 'POST'; // 请求方式（get,post）
  request.headers.set('Access-Control-Allow-Origin',"*") // 请求headers携带参数
  if(getSession("username")!=""){
    console.log("传递给后台的code："+encodeURI(getSession("username")))
    request.headers.set('Account-Code',encodeURI(getSession("username"))) // 请求headers携带参数
  }else {
    request.headers.set('Account-Code',"echo_gou") // 请求headers携带参数
  }
  if(getSession("Amount-Share")!=""){
    var AmountShare=getSession("Amount-Share").split("万")[0]+"0000"
    request.headers.set('Amount-Share',AmountShare) // 请求headers携带参数
  }else{
    request.headers.set('Amount-Share',"10000000") // 请求headers携带参数
  }
  next(function(response){
    return response;

  });
})
Vue.prototype.aa = aa;
console.log(aa)
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

