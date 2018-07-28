<template>
  <div class="signUpContainer">
    <div class="signUpBox">
      <h3>登陆</h3>
      <form class="form-horizontal signUpForm">
        <div class="form-group clearMargin">
          <div class="col-sm-offset-1 col-sm-10">
            <input type="username" class="form-control" id="inputEmail3" placeholder="请输入用户名" v-model="username">
          </div>
        </div>
        <div class="form-group clearMargin">
          <div class="col-sm-offset-1 col-sm-10">
            <input type="password" class="form-control" id="inputPassword3" placeholder="请输入密码" v-model="password">
          </div>
        </div>
        <div class="form-group clearMargin clearPadding signUpBtnFix">
          <div class="col-sm-12">
            <button type="submit" class="pure-button puree-button-primary puree-spinner-button clearMargin clearPadding" v-on:click="login">登陆</button>
            <!--<span >没有帐号？马上注册</span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<span>忘记密码？</span>-->
            <span >
                <router-link :to="{ path: '/Register' }" >
                    没有帐号？马上注册
                </router-link>
            </span>
          </div>
        </div>
      </form>

    </div>

  </div>


</template>

<script>
  import { setSession,getSession } from './apiConfig/cookie.js'
  import {httpUrl} from './apiConfig/api'
  export default {
    name: "sign-up",
    data(){
      return{
        username: '',
        password: ''
      }
    },
    inject:['reload'],
    mounted(){
      if(getSession('username')){
        setSession('username',"");
        var tempArr=[
          {
            title:'首页',
            url:'index'
          }
          ,
          {
            title:'讨论区',
            url:'Forum'
          } ,
          {
            title:'数据区',
            url:'DataInquiry'
          },
          {
            title:'登陆',
            url:'SignUp'
          }
        ];
        this.aa.seturl(tempArr);
        this.reload()
        this.$router.push({path:'sign-up',query:{id:1}})
      }
    },
    methods: {
      login(){
        if(this.username == "" || this.password == ""){
          alert("请输入用户名或密码")
        }else{
          let data = {'name':this.username,'password':this.password}
          this.$http.post(httpUrl.userLoginApi,data).then((res)=>{
            if(res.body.code == 0){
              setSession('username',this.username);
              var tempArr=[
                {
                  title:'首页',
                  url:'index'
                }
                ,
                {
                  title:'讨论区',
                  url:'Forum'
                } ,
                {
                  title:'数据区',
                  url:'DataInquiry'
                },
                {
                  title:'退出',
                  url:'SignUp'
                }
              ];
              this.aa.seturl(tempArr);
              this.reload()
              setTimeout(function(){
                this.$router.push({path:'index'})
              }.bind(this),1000);
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
  .signUpContainer{
    margin: 0rem  auto ;
    max-width: 1030px;
    min-width: 320px;
    position: relative;
  }
  .signUpBox {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    background-color: #fff;
    -webkit-box-shadow: 0 2px 4px 0 rgba(0,0,0,.3);
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.3);
    width: 360px;
    right: 0;
    min-height: 380px;
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
  .signUpForm{
    margin-top: 2rem;
  }
  .signUpBtnFix{
    margin-top: 4rem;
  }

</style>
