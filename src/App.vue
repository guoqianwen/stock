<template>
  <div id="app">
    <div id="header">
      <nav class="navbar navbar-fixed-top my-navbar" role="navigation">
        <div class="container-fluid">
          <div class="navbar-header">
            <img class="logoimg" src="https://aisharev1.oss-cn-beijing.aliyuncs.com/share/logo.png"/>
            <button type="button" class="navbar-toggle" data-toggle="collapse"
                    data-target="#example-navbar-collapse">
              <span class="sr-only">切换导航</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
          </div>
          <div class="collapse navbar-collapse justify-content-end" id="example-navbar-collapse">
            <ul class="nav navbar-nav navbar-right">
              <li v-for="(item,index) in items" v-on:click="addClass(index)" v-bind:class="{ active:index==current}">
                <router-link :to="{ name : item.url }" data-toggle="collapse"  data-target="#example-navbar-collapse">
                  {{item.title}}
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import './assets/css/iconfont/iconfont.css';
  /*import './assets/css/style.css';*/
export default {
  name: 'App',
  data () {
    return{
      current:0,
      items:[
        {
          title:'首页',
          url:'index'
        },
        {
          title:'推荐信息',
          url:'RecommendInfo'
        },
        {
          title:'讨论区',
          url:'Forum'
        },
        {
          title:'登录',
          url:'Login'
        }
      ]
    }

  },
  methods:{
    addClass:function(index){
      this.current=index;
    }
  }
}
</script>

<style>
  ::-webkit-scrollbar{
    width: 0px;
    height: 0px;
  }
  body{
    background: #E9ECF3;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
#header{
  width: 100%;
  margin: 0;
  border: 0;
  padding: 0;
  height: 70px;
  filter: none;
  background-image: none;
}
nav ul{
  padding-top: 10px;
  padding-bottom: 10px;
}
.content{
  background: #E9ECF3;
}
.nav>li>a:focus, .nav>li>a:hover {
  text-decoration: none;
  background-color: #0275D8!important;
  color: #FFFFFF!important;
}
.
a {
  color: #00ADD2;
  cursor: pointer;
}
.my-navbar{
  background: #3B3F51;
  color: #ffffff;
}
.icon-bar{
  background: #8C95A5;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #00ADD2;
}
.logoimg{
  height: 70px;
  margin-left: 10rem;
}
.footer{
  width: 100%;
  height: 6rem;
  background: #404040;
}
  .footer a{
    color: #00ADD2;
    line-height: 6rem;
    font-size: 1rem;
  }
.footer span{
  color: #ffffff;
  line-height: 6rem;
  font-size: 1rem;
}
  .active{
    text-decoration: none;
    background-color: #0275D8!important;
    color: #FFFFFF!important;
  }
  .active>a{
    color: #FFFFFF!important;
  }
  .Green{
    color: green;
  }
  .Red{
    color: red;
  }
</style>
