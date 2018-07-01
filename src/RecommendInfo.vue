<template>
  <div class="content1" style="width: 100%;height: 100%;">
    <!--<v-header></v-header>-->
    <market-trend :trend="trend" @filterTrendTime="filterTrendByTime($event)" :select="curTime"></market-trend>
    <v-recommend :recommends="recommends"  :recomHistory="recomHistory"></v-recommend>
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
        pageNo1:0,
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
      console.log("进入页面监听")
      window.addEventListener("scroll",this.fetchRecommendHistoryData),

      /**
       * 获取大盘与走势AI的数据
       */
      this.fetchTrendData();

      /**
       * 初次调用获取最新推荐数据
       */
      this.fetchLastRecomData();

      /**
       * 获取历史推荐数据
       */
     /* this.fetchRecommendHistoryData();*/
    },

    methods:{
      filterTrendByTime(time){
        this.curTime = time;
        this.fetchTrendData();
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
        let  _this=this;
        let sw = true;
        var wScrollY = window.scrollY | window.pageYOffset ; // 当前滚动条位置
        var wInnerH = window.innerHeight; // 设备窗口的高度（不会变）
        var bScrollH = document.body.scrollHeight; // 滚动条总高度
        if (wScrollY + wInnerH >= bScrollH) {
          console.log("取消监听")
          window.removeEventListener("scroll",this.fetchRecommendHistoryData)
          if(sw==true) {
            sw = false;
            _this.pageNo1++;
            _this.$http.get(httpUrl.recommendHistoryFindApi, {
              params: {pageSize: _this.pageSize, pageNo: _this.pageNo1}
            }).then(function (res) {if (res.body.code == 0) {

              console.log(res.body.data.entities)
              if (res.body.data.entities != null) {
                console.log("获取数据从新监听")
                window.addEventListener("scroll",this.fetchRecommendHistoryData)
                this.recomHistory=this.recomHistory.concat(res.body.data.entities);
                console.log(this.recomHistory)
                sw = true;
              } else {
                _this.pageNo1--;
                console.log("获取数据从新监听")
                window.addEventListener("scroll",this.fetchRecommendHistoryData)
                console.log("到底啦！！！")
                this.show = false;
              }
            } else {
              _this.pageNo1--;
              console.log("获取数据从新监听")
              window.addEventListener("scroll",this.fetchRecommendHistoryData)
              alert("网络出错！")
            }
            }, function () {
              _this.pageNo1--;
              console.log("请求失败")
            });
          }
        }

      },
    },
    beforeDestroy(){
      window.removeEventListener("scroll",this.fetchRecommendHistoryData)
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
