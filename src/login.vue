<template>
  <div>
    <div class="login-wrap" v-show="showLogin">
      <h3>登录</h3>
      <p v-show="showTishi">{{tishi}}</p>
      <input type="text" placeholder="请输入用户名" v-model="username">
      <input type="password" placeholder="请输入密码" v-model="password">
      <button v-on:click="login">登录</button>
      <span v-on:click="ToRegister">没有账号？马上注册</span>
    </div>

    <div class="register-wrap" v-show="showRegister">
      <h3>注册</h3>
      <p v-show="showTishi">{{tishi}}</p>
      <input type="text" placeholder="请输入用户名" v-model="newUsername">
      <input type="password" placeholder="请输入密码" v-model="newPassword">
      <input type="text" placeholder="请输入初始资金" v-model="newInitAmount">
      <input type="password" placeholder="请输入份数" v-model="newInitNum">
      <button v-on:click="register">注册</button>
      <span v-on:click="ToLogin">已有账号？马上登录</span>
    </div>
  </div>
</template>

<script>
  import { setCookie,getCookie } from './apiConfig/cookie.js'
  import {httpUrl} from './apiConfig/api'
  export default{
    data(){
      return{
        username: '',
        password: '',
        newUsername: '',
        newPassword: '',
        tishi: '',
        showTishi: false,
        showLogin: true,
        showRegister: false,
        newInitAmount:'',
        newInitNum:""
      }
    },
    mounted(){
      if(getCookie('username')){
        this.$router.push('/index')
      }
    },
    methods: {
      login(){
        if(this.username == "" || this.password == ""){
          alert("请输入用户名或密码")
        }else{
          let data = {'name':this.username,'password':this.password}

          this.$http.post(httpUrl.userLoginApi,data).then((res)=>{
            console.log(res)
           if(res.body.code == 0){
                 this.tishi = "登录成功"
                 this.showTishi = true
                 setCookie('username',this.username,1000*60)
                 setTimeout(function(){
                   this.$router.push({path:'index',query:{id:1}})
                 }.bind(this),1000)
            }else{
              this.tishi = res.body.message;
              this.showTishi = true

            }
          })
        }
      },
      ToRegister(){
        this.showRegister = true
        this.showLogin = false
      },
      ToLogin(){
        this.showRegister = false
        this.showLogin = true
      },
      register(){
        if(this.newUsername == "" || this.newPassword == ""){
          alert("请输入用户名或密码")
        }else{
          let data = {'name':this.newUsername,'password':this.newPassword, "initAmount":this.newInitAmount, "initNum":this.newInitNum}
          this.$http.post(httpUrl.userRegisterApi,data).then((res)=>{
            console.log(res)
            if(res.body.code == 0){
              this.tishi = "注册成功"
              setCookie('username',this.newUsername,1000*60)
              this.showTishi = true
              this.username = ''
              this.password = ''
              setTimeout(function(){
                this.showRegister = false
                this.showLogin = true
                this.showTishi = false
              }.bind(this),1000)
            }
          })
        }
      }
    }
  }
</script>

<style scoped>
  .login-wrap{
    text-align:center;
  }
  .login-wrap,register-wrap>h3{
    text-align: center;
  }
  input{
    display:block;
    width:250px;
    height:40px;
    line-height:40px;
    margin:0 auto;
    margin-bottom: 10px;
    outline:none;
    border:1px solid #888;
    padding:10px;
    box-sizing:border-box;
  }
  p{
    color:red;
  }
  button{
    display:block;
    width:250px;
    height:40px;
    line-height: 40px;
    margin:0 auto;
    border:none;
    background-color:#41b883;
    color:#fff;
    font-size:16px;
    margin-bottom:5px;
  }
  span{
    cursor:pointer;
  }
  span:hover{
    color:#41b883;
  }
</style>
