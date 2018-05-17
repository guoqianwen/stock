<template>
  <div class="recommend">
    <div id="myCarousel" class="carousel slide" data-ride="carousel" data-interval="5000">
      <!-- 轮播（Carousel）指标 -->
      <ol class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
       <!-- <li data-target="#myCarousel" data-slide-to="3"></li>-->

      </ol>
      <!-- 轮播（Carousel）项目 -->
      <div class="carousel-inner">
        <div class="item active">
          <img src="https://aisharev1.oss-cn-beijing.aliyuncs.com/share/home_cycle_1.png" alt="First slide">
        </div>
        <div class="item">
          <img src="https://aisharev1.oss-cn-beijing.aliyuncs.com/share/home_cycle_2.png	" alt="Second slide">
        </div>
        <div class="item">
          <img src="https://aisharev1.oss-cn-beijing.aliyuncs.com/share/home_cycle_3.png" alt="Third slide">
        </div>
      </div>
      <!-- 轮播（Carousel）导航 -->
      <a class="carousel-control left" href="#myCarousel"
         data-slide="prev">&lsaquo;</a>
      <a class="carousel-control right" href="#myCarousel"
         data-slide="next">&rsaquo;</a>
    </div>
    <div class="latest_recommend_list">
      <latest-recommendation heading="最新推荐盈亏" :recommendations="recommendationsList"></latest-recommendation>
    </div>
    <div class="feature">
      <div class="row" style="padding-bottom: 100px;">
        <div class="row">
          <div class="col-md-4">
            <div class="icon">
              <i class="iconfont icon-zhinengsuanfa iconfont-icon"></i>
            </div>
            <div class="title">算法先进</div>
            <div class="desc">基于大量历史数据测试历年收益率均高于100%</div>
          </div>
          <div class="col-md-4">
            <div class="icon">
              <i class="iconfont icon-gupiao-copy iconfont-icon"></i>
            </div>
            <div class="title">实力抗跌</div>
            <div class="desc">股灾环境下跌幅大大低于沪深300指</div>
          </div>
          <div class="col-md-4">
            <div class="icon">
              <i class="iconfont icon-tuijian iconfont-icon"></i>
            </div>
            <div class="title">智能推荐</div>
            <div class="desc">免费获取人工智能的推荐股</div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="ant-row">
          <div class="col-md-4">
            <div class="icon">
              <i class="iconfont icon-jisuxiangying iconfont-icon"></i>
            </div>
            <div class="title">及时高效</div>
            <div class="desc">每天收盘后就推送出推荐信息</div>
          </div>
          <div class="col-md-4">
            <div class="icon">
              <i class="iconfont icon-jiaoyi iconfont-icon"></i>
            </div>
            <div class="title">公开透明</div>
            <div class="desc">数据来自于证券交易所，收益率可查可算</div>
          </div>
          <div class="col-md-4">
            <div class="icon">
              <i class="iconfont icon-kefu iconfont-icon"></i>
            </div>
            <div class="title">极速响应</div>
            <div class="desc">您在集思广益上的任何问题将会有专人为您解答</div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="contentFooter">
        <div class="row">
          <!--<div class="col-md-6">
              <span>关于我们</span>
              <span>帮助中心</span>
          </div>-->
          <div class="col-md-12">
            <span>Copyright</span>
            <span>©2018 1000Stock All Rights Reserved</span>
            <a  href="http://www.miitbeian.gov.cn/">赣ICP备18004847号</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld';
  import LatestRecommendation from './components/LatestRecommendation';
  import Recommend from './components/Recommend';
  import Header from './components/Header';
  import MarketTrend from './components/MarketTrend'
  import AssetRecord from './components/AssetRecord'
  import CurrentHolding from './components/CurrentHolding'
  import {httpUrl} from './apiConfig/api'
  export default {
    data () {
      return {
        recommendationsList:[],
        recommends: [],
        trend:{},
        holding:[],
        record:{},
        curAmount:'',
        totalAmount:'',
        curTime:"MONTH",
        pageSize:100,
        currentPage:1,
      }
    },
    components: {
      HelloWorld,
      'v-header':Header,
      'v-recommend':Recommend,
      'hello-world':HelloWorld,
     'market-trend': MarketTrend,
      'asset-records':AssetRecord,
      'current-holding':CurrentHolding,
      "latest-recommendation":LatestRecommendation
    },
    mounted: function () {
      /**
       * 获取首页的最新推荐赢亏数据
       */
        this.$http.get(httpUrl.newSearchLastGainApi
        ).then(function(res){
          console.log(res.body.data)
          if(res.body.code==0){
            this.recommendationsList=res.body.data.entities;
          }else{
            alert(res.body.message)
          }
        },function(){
          console.log("请求失败")
        });
    },

    methods:{
      filterTrendByTime(time){
        this.curTime = time;
        this.fetchTrendData();
      },

      fetchTrendData (){
        this.$http.get(httpUrl.trendApi,{
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
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .item{
    height:520px;
  }
  img{
    width: 100%!important;
    height: 100%!important;
  }
  li{
    background: #0c203a;
  }
  /*.active{
    background: #0c91e5;
  }*/
  .recommend{
    background: #ECECEC;
  }

  .carousel-control {

    opacity: 0;
  }
  .carousel-control:focus, .carousel-control:hover {
    color: transparent;
    text-decoration: none;
    outline: 0;
    opacity: .9;
  }
 .feature{
    margin: 64px 21%;
    width: 58%;
    padding: 64px 64px;
    background-color: #fff;
  }
  .ant-row{
    position: relative;
    margin-left: 0;
    margin-right: 0;
    height: auto;
    zoom: 1;
    display: block;
    padding-bottom: 100px;
  }
  .icon {
    font-size: 50px;
    color: #00add2;
  }
 .title {
    font-size: 2rem;
    line-height: 300%;
    font-weight: bold;
    color: #595959;
  }
  .desc {
    padding: 0 20%;
    text-align: justify;
    line-height: 200%;
    font-size:1.5rem;
    color: #595959;
  }

  .iconfont-icon{
    font-size:5rem;
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
</style>
