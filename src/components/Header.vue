<template>
  <div id="header">
    <nav class="navbar navbar-fixed-top my-navbar" role="navigation">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse"
                  data-target="#example-navbar-collapse">
            <span class="sr-only">切换导航</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">主页</a>
        </div>
        <div class="collapse navbar-collapse justify-content-end" id="example-navbar-collapse">
          <ul class="nav navbar-nav navbar-right">
            <li class="active">
              <a href="#">
                登陆
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
  export default {
    name: 'Header'
  }
</script>
<style>
  /*3F4457*/
 /* #header{
    width: 100%;
    margin: 0;
    border: 0;
    padding: 0;
    height: 70px;
    min-height: 70px;
    filter: none;
    background-image: none;
  }
  .nav>li>a:focus, .nav>li>a:hover {
    text-decoration: none;
    background-color: #3F4457;
    color: #A4B2C4;
  }
  a {
    color: #42b983;
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
    color: #42b983;
  }*/
</style>
