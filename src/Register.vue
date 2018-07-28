<template>
    <div class="registerContainer">
      <div class="registerBox">
          <h3>注册</h3>
            <form class="form-horizontal registerForm">
              <div class="form-group clearMargin">
                <label for="inputEmail3" class="col-sm-3 control-label">用户名</label>
                <div class="col-sm-9">
                  <input type="username" class="form-control" id="inputEmail3" placeholder="请输入用户名" v-model="newUsername">
                </div>
              </div>
              <div class="form-group clearMargin">
                <label for="inputPassword3" class="col-sm-3 control-label">密码</label>
                <div class="col-sm-9">
                  <input type="password" class="form-control" id="inputPassword3" placeholder="请输入密码"  v-model="newPassword">
                </div>
              </div>
              <div class="form-group clearMargin">
                <label for="input4" class="col-sm-3 control-label">总金额</label>
                <div class="col-sm-9">
                  <input type="number" class="form-control" id="input4" placeholder="请输入总金额" min="0"  v-model="newInitAmount">
                </div>
              </div>
              <div class="form-group clearMargin">
                <label for="input3" class="col-sm-3 control-label">份数</label>
                <div class="col-sm-9">
                  <input type="number" class="form-control" id="input3" placeholder="请输入份数" min="0"  v-model="newInitNum">
                  <span  class="help-block textAlignLeft"><a class="aRemarks">注：</a>将总金额按照份数分成等分,每次按照推荐的信息进行最接近该份数的股票交易。</span>
                </div>
              </div>

              <div class="form-group clearMargin clearPadding">
                <label for="input3" class="col-sm-3 control-label clearPaddingTop" >融资</label>
                <div class="col-sm-9">
                  <label class="labeAlignText">
                    <input type="radio" name="newFinance" value="1" v-model="newFinance">是
                    <input type="radio" name="newFinance" value="0"  v-model="newFinance">否
                  </label>
                  <span  class="help-block textAlignLeft"><a class="aRemarks">注：</a>资金不足之时，是否采用借贷的形式买入股票。</span>
                </div>
              </div>
              <div class="form-group clearMargin clearPadding">
                <div class="col-sm-12">
                  <button type="submit" class="pure-button puree-button-primary puree-spinner-button clearMargin clearPadding"  v-on:click="register">立即注册</button>
                  <span >
                      <router-link :to="{ path: '/sign-up' }" >
                          已有账号？马上登录
                      </router-link>
                  </span>
                </div>
              </div>
            </form>

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
        newUsername: '',
        newPassword: '',
        newFinance:'',
        newInitAmount:'',
        newInitNum:""
      }
    },
    mounted(){
      if(getSession('username')){
        this.$router.push('/index')
      }
    },
    methods: {
      register(){
        var isLeverage;
        if(this.newFinance){
          isLeverage=1;
        }else{
          isLeverage=0;
        }
        if(this.newUsername == "" || this.newPassword == ""){
          alert("请输入用户名或密码")
        }else{
          let data = {'name':this.newUsername,'password':this.newPassword, "initAmount":this.newInitAmount, "initNum":this.newInitNum,"isLeverage":isLeverage}
          this.$http.post(httpUrl.userRegisterApi,data).then((res)=>{
            if(res.body.code == 0){
              setTimeout(function(){
                this.$router.push({path:'sign-up'})
              }.bind(this),1000)
            }else{
              alert("注册失败，请重新注册！")
            }
          })
        }
      }
    }
  }
</script>

<style scoped>
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
    min-height: 580px;
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

</style>
