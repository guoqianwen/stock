<template>
  <div class="content1" style="width: 100%;height: 100%;">
    <!--<v-header></v-header>-->
    <market-trend :trend="trend" @filterTrendTime="filterTrendByTime($event)" :select="curTime"></market-trend>
    <v-recommend :recommends="recommends" @showHistrReomm="showHistrReomm($event)" :recomHistory="recomHistory"></v-recommend>
    <!--<v-loading v-if="show"></v-loading>-->
    <!--<asset-records :record="record"></asset-records>
    <current-holding :holding="holding"></current-holding>-->
  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld';
  import Recommend from './components/Recommend';
  import Header from './components/Header';
  import MarketTrend from './components/MarketTrend'
  import AssetRecord from './components/AssetRecord'
  import CurrentHolding from './components/CurrentHolding'
  import Loading from './components/Loading.vue'
  import {httpUrl} from './apiConfig/api'

  export default {
    data () {
      return {
        recommends: [],
        trend:{},
        holding:[],
        record:{},
        curAmount:'',
        totalAmount:'',
        curTime:"MONTH",
        pageSize:10,
        pageNo:1,
        remmonent:'',
        recomHistory:[],
        show:true
      }
    },
    components: {
      'v-header':Header,
      'v-recommend':Recommend,
      'hello-world':HelloWorld,
      'market-trend': MarketTrend,
      'asset-records':AssetRecord,
      'current-holding':CurrentHolding,
      'v-loading':Loading
    },
    mounted: function () {
      let  _this=this;
      let sw = true;
     /* window.addEventListener('scroll',function(){
        if(document.documentElement.scrollTop + window.innerHeight >= (document.documentElement.offsetHeight-240)) {
          if(sw==true){
            sw = false;
            _this.$http.get(httpUrl.recommendHistoryFindApi,{
              params:{pageSize:_this.pageSize,pageNo:_this.pageNo}
            }).then(function(res){
              if(res.body.code==0){
                console.log(res.body.data.entities)
                if(res.body.data.entities!=null){
                  _this.recomHistory.push(res.body.data.entities);
                  _this.pageNo++;
                  console.log(_this.recomHistory)
                  sw = true;
                }else {
                  console.log("到底啦！！！")
                  this.show=false;
                }
              }else{
                alert("网络出错！")
              }
            },function(){
              console.log("请求失败")
            });
            console.log("到底啦！！！")
          }
        }
      });*/
      $(window).scroll(function(event){
        var wScrollY = window.scrollY; // 当前滚动条位置
        var wInnerH = window.innerHeight; // 设备窗口的高度（不会变）
        var bScrollH = document.body.scrollHeight; // 滚动条总高度
        console.log("______________")
        console.log((wScrollY + wInnerH))
        console.log(bScrollH)
        console.log("++++++++++++++++++")
        if (wScrollY + wInnerH >= bScrollH) {
          if(sw==true) {
            sw = false;
            _this.$http.get(httpUrl.recommendHistoryFindApi, {
              params: {pageSize: _this.pageSize, pageNo: _this.pageNo}
            }).then(function (res) {
              if (res.body.code == 0) {
                console.log(res.body.data.entities)
                if (res.body.data.entities != null) {
                  _this.recomHistory=_this.recomHistory.concat(res.body.data.entities);
                  _this.pageNo++;
                  console.log(_this.recomHistory)
                  sw = true;
                } else {
                  console.log("到底啦！！！")
                  this.show = false;
                }
              } else {
                alert("网络出错！")
              }
            }, function () {
              console.log("请求失败")
            });
            console.log("到底啦！！！")
          }
        }
      });

      /**
       * 获取大盘与走势AI的数据
       */
      this.fetchTrendData();

      /**
       * 初次调用获取最新推荐数据
       */
      this.fetchLastRecomData();
    },

    methods:{
      filterTrendByTime(time){
        this.curTime = time;
        this.fetchTrendData();
      },
      showHistrReomm(e){
        console.log(e)
        this.pageNo++;
        this.fetchRecommendHistoryData();
      },

      /**
       * 获取大盘与走势AI的数据
       */
      fetchTrendData (){
        this.$http.get(httpUrl.GetContrastApi,{
          params:{step:this.curTime}
        }).then(function(res){
          if(res.body.code==0){
            this.trend=res.body.data.entity;
          }else{
            alert(res.body.message)
          }
        },function(){
          console.log("请求失败")
        });
      },

      /**
       * 获取最新推荐的数据
       */
      fetchLastRecomData (){
        this.$http.get(httpUrl.lastRecommendationApi).then(function(res){
          if(res.body.code==0){
            this.recommends=res.body.data.entities;
          }else{
            alert(res.body.message)
          }
        },function(){
          console.log("请求失败")
        });
      },

      /**
       * 获取历史推荐数据
       */
      fetchRecommendHistoryData (){
        this.$http.get(httpUrl.recommendHistoryFindApi,{
          params:{pageSize:this.pageSize,pageNo:this.pageNo}
        }).then(function(res){
          if(res.body.code==0){
            this.recomHistory.push(res.body.data.entity);
          }else{
            alert(res.body.message)
          }
        },function(){
          console.log("请求失败")
        });
      },
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  html,body{
    height: auto!important;
  }
  .content1{
    background: #E9ECF3;
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
  .content{
    background: #E9ECF3;
  }
</style>
