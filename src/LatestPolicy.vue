<!--<template>
  <div>
    <ul>
      <li v-for="item in articles">
        <h2>{{item.title}}</h2>
        <img :src="item.images" alt="">
      </li>
    </ul>
  </div>
</template>
<script>
  import {httpUrl} from './apiConfig/api'
  export default{
    name: "latest-policy",
    data(){
      return {
        articles : [],
        pageSize:10,
        pageNo:1
      }
    },
    mounted(){
      // 缓存指针
      let _this = this;
      // 设置一个开关来避免重负请求数据
      let sw = true;
      // 此处使用node做了代理
      this.$http.get(httpUrl.recommendHistoryFindApi,{
        params:{pageSize:this.pageSize,pageNo:this.pageNo}
      })
        .then(function(response){
          // console.log(JSON.parse(response.data).stories);
          // 将得到的数据放到vue中的data
          _this.articles = JSON.parse(response.data).stories;
        })
        .catch(function(error){
          console.log(error);
        });

      // 注册scroll事件并监听
      window.addEventListener('scroll',function(){
        // console.log(document.documentElement.clientHeight+'-&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;'+window.innerHeight); // 可视区域高度
        // console.log(document.body.scrollTop); // 滚动高度
        // console.log(document.body.offsetHeight); // 文档高度
        // 判断是否滚动到底部
        if(document.body.scrollTop + window.innerHeight >= document.body.offsetHeight) {
          // console.log(sw);
          // 如果开关打开则加载数据
          if(sw==true){
            // 将开关关闭
            sw = false;
            this.$http.get(httpUrl.recommendHistoryFindApi,{
              params:{pageSize:this.pageSize,pageNo:this.pageNo}
            })
              .then(function(response){
                console.log(JSON.parse(response.data));
                // 将新获取的数据push到vue中的data，就会反应到视图中了
                JSON.parse(response.data).stories.forEach(function(val,index){
                  _this.articles.push(val);
                  // console.log(val);
                });
                // 数据更新完毕，将开关打开
                sw = true;
              })
              .catch(function(error){
                console.log(error);
              });
          }
        }
      });
    }
  }
</script>
<style lang="less">
  *{
    margin:0;
    padding:0;
  }
  li{
    list-style:none;
  }
</style>-->
<template>
  <div>11111111111111111111111111111111111111
    111111111111111
    1
    1

    1
    1
    1
    1
    1

    1
    1LatestPoliy</div>
</template>

<script>
    export default {
        name: "latest-policy"
    }
</script>

<style >
  html,body{
    height: auto!important;
  }
</style>
