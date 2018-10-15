<template>
    <div class="registerContainer">
      <div class="registerBox">
          <h3 class="head_title">注册</h3>
            <div class="form-horizontal registerForm">
              <div class="form-group clearMargin title_label">
                <label for="inputEmail3" class="col-sm-3 control-label">用户姓氏</label>
                <div class="col-sm-9">
                  <input type="text" class="form-control"  placeholder="请输入用户姓氏" v-model="familyName">
                </div>
              </div>
              <div class="form-group clearMargin title_label">
                <label for="inputEmail3" class="col-sm-3 control-label">用户昵称</label>
                <div class="col-sm-9">
                  <input type="username" class="form-control" id="inputEmail3" placeholder="请输入用户昵称" v-model="username">
                </div>
              </div>
              <div class="form-group clearMargin title_label">
                <label for="inputPassword3" class="col-sm-3 control-label">用户密码</label>
                <div class="col-sm-9">
                  <input type="password" class="form-control" id="inputPassword3" placeholder="请输入密码"  v-model="password">
                </div>
              </div>
              <div class="form-group clearMargin title_label">
                <label for="input4" class="col-sm-3 control-label">电话号码</label>
                <div class="col-sm-9">
                  <input type="value" class="form-control" id="input4" placeholder="电话号码" min="0"  v-model="telphone">
                </div>
              </div>
              <div class="form-group clearMargin clearPadding title_label">
                <label  class="col-sm-3 control-label clearPaddingTop" >用户性别</label>
                <div class="col-sm-9">
                  <label class="labeAlignText">
                    <input type="radio" name="gender" value="1" v-model="gender">男
                    <input type="radio" name="gender" value="0"  v-model="gender">女
                  </label>
                </div>
              </div>
              <div class="form-group clearMargin clearPadding">
                <div class="col-sm-12">
                  <button  class="pure-button puree-button-primary puree-spinner-button clearMargin clearPadding"  v-on:click="register">立即注册</button>
                  <span >
                      <router-link :to="{ path: '/sign-up' }" >
                          已有账号？马上登录
                      </router-link>
                  </span>
                </div>
              </div>
            </div>

      </div>

  </div>


</template>

<script>
  import { setCookie,getSession } from './apiConfig/cookie.js'
  import {httpUrl} from './apiConfig/api'
  export default {
    name: "register",
    data(){
      return{
        username: '',
        password: '',
        gender:'',
        telphone:'',
        familyName:''
      }
    },
    mounted(){
      if(getSession('username')){
        this.$router.push('/index')
      }
    },
    methods: {
      register(){
        var isSex;
        if(this.gender){
          isSex=1;
        }else{
          isSex=0;
        }
        if(this.telphone == ""){
          alert("手机号不能为空，请输入手机号")
        }else if(this.password == ""){
          alert("密码不能为空，请输入密码")
        }else{
          let data = {'familyName':this.familyName,'name':this.username,'phone':this.telphone,'password':this.password, "gender":isSex}
          this.$http.post(httpUrl.userRegisterApi,data).then((res)=>{
            if(res.body.code == 0){
              setTimeout(function(){
                this.$router.push({path:'sign-up'})
              }.bind(this),1000)
            }else{
              alert(res.body.message)
            }
          })
        }
      }
    }
  }
</script>

<style scoped>
  *
  .registerContainer{
   margin: 0rem  auto ;
    max-width: 1030px;
    min-width: 320px;
    position: relative;
  }
  .registerBox {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    background-color: #fff;
    -webkit-box-shadow: 0 2px 4px 0 rgba(0,0,0,.3);
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.3);
    width: 360px;
    right: 0;
    min-height: 480px;
    z-index: 1;
    padding: 35px 5px;
    padding-bottom: 10px;
    border-top: 1px solid #f1f1f5;
    margin: 5rem  auto ;
  }
  .clearMargin{
    margin-left: 0;
    margin-right: 0;
  }
  .clearPadding{
    padding-left: 0;
    padding-right: 0;
  }
  .clearPaddingTop{
    padding-top: 0;
  }
  button{
    display:block;
    width:100%;
    height:40px;
    line-height: 40px;
    margin:0 auto;
    border:none;
    background-color:#0275D8;
    color:#fff;
    font-size:16px;
    margin-bottom:5px;
  }
  .textAlignLeft{
    text-align: left;
  }
  .labeAlignText{
    display: inline-block;
    max-width: 100%;
    margin-bottom: 5px;
    text-align: left;
    width: 100%;
    font-weight: 700;
  }
  .aRemarks{
    color: red;
    display: inline-block;
  }
  .aRemarks:hover{
    color: red;
    display: inline-block;
    text-decoration: none;
  }
  .registerForm{
    margin-top: 2rem;
  }
  .head_title{
    text-align: center;
    margin: 0px;
  }

  /*
  屏幕兼容(手机)
   */
  @media screen and (max-width:600px)
  {
    .head_title{
      text-align: center;
      margin: 0px;
    }
    .registerBox{
      width: 100%;
    }
    .title_label{
      text-align: left;
    }
  }

  .registerBox>h3{
    width: 100%;
    text-align: center;
  }
</style>
