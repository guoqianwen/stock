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
      <latest-recommendation heading="历史业绩" :recommendations="recommendationsList"></latest-recommendation>
    </div>
    <div class="index_contrast">
      <index-contrast  heading="盈亏率对比"  @filterIndexCurImg="filterIndexCurImg($event)"  :GainInfo="GainInfo"  :select="curTime"></index-contrast>
    </div>
    <div class="index_contrast">
      <market-trend :trend="trend" @filterTrendTime="filterTrendByTime($event)" :select="curTime"></market-trend>
    </div>

    <div class="paperTrading">
      <virtual-account  :virtCountStart="virtCountStart" :virtCountEnd="virtCountEnd"></virtual-account>
      <current-holding :holding="holding"></current-holding>
    </div>
    <div class="operationAccount">
        <div class="currentHoldingHeader">
          <h3>交易统计</h3>
          <h4 class="currentHoldingTime">{{holding.length ? holding[0].newData : ''}}</h4>
        </div>
        <div class="row operationAccountRow">
            <div class="col-md-6 now_tb">
                <table class="table table-striped table-bordered table-advance curHoldingTable table_now" contenteditable="false" >
                  <tbody>
                      <tr class="current-holding-thead-tr">
                        <td class="head_td">当前持股</td>
                        <td class="data_box">{{userAccount.holdNumber}}只</td>
                      </tr>
                      <tr class="current-holding-thead-tr">
                        <td class="head_td">挣钱股票</td>
                        <td class="data_box">{{userAccount.profitNumber}}只</td>
                      </tr>
                      <tr class="current-holding-thead-tr">
                        <td class="head_td">赔钱股票</td>
                        <td class="data_box">{{userAccount.lossNumber}}只</td>
                      </tr>
                      <tr class="current-holding-thead-tr">
                        <td class="head_td">胜率</td>
                        <td class="data_box" :class="{Green:userAccount.winRate<50,Red:userAccount.winRate>=0}">{{userAccount.winRate}}%</td>
                      </tr>
                  </tbody>
                </table>
            </div>
            <div class="col-md-6 avg_tb">
              <table class="table table-striped table-bordered table-advance curHoldingTable table_avg" contenteditable="false" >
                <tbody>
                    <tr class="current-holding-thead-tr">
                      <td class="head_td">平均盈亏率</td>
                      <td v-if="userAccount.avgProfitRate>0" :class="{Green:userAccount.avgProfitRate<0,Red:userAccount.avgProfitRate>=0}" class="data_box">+{{userAccount.avgProfitRate}}%</td>
                      <td v-else :class="{Green:userAccount.avgProfitRate<0,Red:userAccount.avgProfitRate>=0}" class="data_box">{{userAccount.avgProfitRate}}%</td>
                    </tr>
                    <tr class="current-holding-thead-tr">
                      <td class="head_td">平均持有天数</td>
                      <td class="data_box">{{userAccount.avgHoldDay}}天</td>
                    </tr>
                    <tr class="current-holding-thead-tr">
                      <td class="head_td">买入次数</td>
                      <td class="data_box">{{userAccount.buyNumber}}次</td>
                    </tr>
                    <tr class="current-holding-thead-tr">
                      <td class="head_td">卖出次数</td>
                      <td class="data_box">{{userAccount.sellNumber}}次</td>
                    </tr>
                </tbody>
              </table>
            </div>
        </div>
        <div class="showTransactionRecord">
          <a>
              <router-link :to="{ path: '/components/transaction-record' }" >
                  查看交易记录
              </router-link>
          </a>
        </div>
    </div>
    <div class="aboutUs">

    </div>
    <div class="feature">
      <div class="featureTitle">
        <h3>关于我们</h3>
      </div>
      <div class="row_top">
        <div class="row row_about">
          <div class="col-md-6 col-md-6_about">
            <div class="icon">
              <i class="iconfont icon-zhinengsuanfa iconfont-icon"></i>
            </div>
            <div class="title">方法论</div>
            <div class="desc">理财专家进行价值选股，量化风控程序实时跟踪检测风险，基于海量交易数据训练良好的必达深度学习机器人分析推荐股票的必达三角勾股理论。</div>
          </div>
          <div class="col-md-6 col-md-6_about">
            <div class="icon">
              <i class="iconfont icon-anquandunpai1 iconfont-icon"></i>
            </div>
            <div class="title">原则</div>
            <div class="desc">挑选最安全，最稳健的投资组合，在充分保证资金安全的前提下，最大限度的将收益最大化。</div>
          </div>
        </div>
      </div>
      <div class="row row_about">
          <div class="col-md-6 col-md-6_about">
            <div class="icon">
              <i class="iconfont icon-tuandui-tianchong iconfont-icon"></i>
            </div>
            <div class="title">团队</div>
            <div class="desc">团队成员由硅谷资深的人工智能开发专家，20余年投资经验的理财顾问领头以及从事互联网开发的团队组成，成员分布于硅谷，北京，上海等科技金融最为活跃的城市。</div>
          </div>
          <div class="col-md-6 col-md-6_about">
            <div class="icon">
              <i class="iconfont icon-taolun iconfont-icon"></i>
            </div>
            <div class="title">讨论交流</div>
            <div class="desc">如果您有好的建议或者批评，希望您在<a>
              <router-link :to="{ path: '/forum' }" >
              （讨论区）
              </router-link>
            </a>发表，我们会虚心接受并改正，以提高您的体验或收益，同时我们承诺将在24H答复您的疑问。</div>
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
  import LatestRecommendation from './components/LatestRecommendation';
  import Recommend from './components/Recommend';
  import MarketTrend from './components/MarketTrend';
  import CurrentHolding from './components/CurrentHolding';
  import IndexContrast  from './components/IndexContrast';
  import VirtualAccount from "./components/VirtualAccount";
  import {httpUrl} from './apiConfig/api'
  export default {
    data () {
      return {
        virtCountStart:{},
        virtCountEnd:{},
        virtualEmpPresent:0,
        recommendationsList:[],
        indexCompare:[],
        recommends: [],
        trend:{},
        holding:[],
        record:{},
        curAmount:'',
        totalAmount:'',
        curTime:"365",
        pageSize:100,
        currentPage:1,
        indexContract:{},
        GainInfo:{},
        userAccount:{}
      }
    },
    components: {
      MarketTrend,
      'virtual-account': VirtualAccount,
      'v-recommend':Recommend,
     'market-trend': MarketTrend,
      'current-holding':CurrentHolding,
      "latest-recommendation":LatestRecommendation,
      "index-contrast":IndexContrast
    },
    mounted: function () {
        this.getGainInfo();
        /**
       * 获取首页的最新推荐赢亏数据
       */
        this.$http.get(httpUrl.newSearchLastGainApi
        ).then(function(res){
          if(res.body.code==0){
            this.recommendationsList=res.body.data.entities;
          }else{
            alert(res.body.message)
          }
        },function(){
          console.log("请求失败")
        });
      /**
       * 获取上证指数与千古指数的对比
       */
      this.fetchTrendData();


      /**
       * 获取用户账户信息数据
       */
      this.getVirtualAccount();


      /**
       * 获取操作统计数据
       */
      this.getOperatorSummary();

      /**
       *获取当前持股
       */
      this.fetchCurStockeData();

    },

    methods:{
      filterTrendByTime(time){
        this.curTime = time;
        this.fetchTrendData();
      },

      filterIndexCurImg(obj){
        this.curTime = obj.id;
        this.getGainInfo();
      },
      /**
       * 获取当前持股信息
       */
      fetchCurStockeData (){
        this.$http.get(httpUrl.tradeFindStockApi).then(function(res){
          if(res.body.code==0){
            this.holding=res.body.data.entities;
          }else{
            alert(res.body.message)
          }
        },function(){
          console.log("请求失败")
        });
      },

      /**
       * 获取用户账户信息数据
       */
      getVirtualAccount:function () {
        this.$http.get(httpUrl.getUserAccoutInfoApi).then(function (res) {
          if (res.body.code == 0) {
            this.virtCountStart = res.body.data.entity.start;
            this.virtCountEnd= res.body.data.entity.end;
          } else {
            alert(res.body.message)
          }
        }, function () {
          console.log("请求失败")
        });
      },


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

      getGainInfo:function(){
        this.$http.get(httpUrl.getGainInfoApi,{
          params:{diff:this.curTime}
        }).then(function (res) {
          if (res.body.code == 0) {
            this.GainInfo = res.body.data.entity;
          } else {
            alert(res.body.message)
          }
        }, function () {
          console.log("请求失败")
        });
      },


      /**
       * 获取操作统计数据
       */
      getOperatorSummary:function () {
        this.$http.get(httpUrl.getOperatorSummaryApi).then(function (res) {
          if (res.body.code == 0) {
            this.userAccount = res.body.data.entity;
          } else {
            alert(res.body.message)
          }
        }, function () {
          console.log("请求失败")
        });
      },



    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  *
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
   width: 96%;
   height: auto;
   background: #ffffff;
   margin: 2rem 2% 2rem 2%;
   padding:  0 0 3rem 0;
  }
 .featureTitle{
   padding: 1rem;
   text-align: center;
 }
  .featureTitle>h3{
    padding:0rem;
    text-align: center;
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
    padding: 0rem 10%;
    text-align: center;
    line-height: 200%;
    font-size:1.5rem;
    color: #595959;
  }
  .row_top{
    padding-bottom: 100px;
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
  .operationAccount{
    width: 96%;
    height: auto;
    background: #ffffff;
    margin: 0 2%;
  }
  .operationAccountRow{
    margin-top: 2rem;
     margin-right: 0px;
     margin-left: 0px;
    background: #ffffff;
  }
  .showTransactionRecord{
    padding-bottom: 2rem;
  }
  .currentHoldingHeader{
    width: 96%;
    border-bottom: 1px solid #EEF1F5;
    margin: 0 2%;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .currentHoldingHeader h3{
    width: 100%;
    text-align: center;
  }

  /*
 屏幕兼容(平板)
  */
  @media screen and (min-width:600px) and (max-width:900px)
  {
    img {
      width: 30%;
      height: 30%;
    }

    .feature {
      margin: auto;
      width: 100%;

    }

    .col-md-4 {
      float: left;
      width: 30%;
      font-size: x-small;
    }

    /*.carousel-inner {*/
    /*display: none;*/
    /*}*/


  }
  /*
  屏幕兼容(手机)
   */
  @media screen and (max-width:600px)
  {
    /*.carousel-inner {
      display: none;
    }*/
    .item{
      height:18rem;
    }
    .feature {
      margin: 20px auto;
      width: 96%;

    }

    .latest_recommend_list{
      margin-bottom: 1rem;
    }
    img{
      width: 100%!important;
      height:18rem!important;
    }
    .ant-row{
      width: 120%;
      position: relative;
      margin-left: -20px;
      height: auto;
      zoom: 1;
      display: block;
      padding-bottom: 100px;
    }

    .col-md-4 {
      float: left;
      width: 30%;
    }

    .icon {
      font-size: 30px;
    }
    .title {
      font-size: 1.5rem;
      line-height: 200%;
      font-weight: bold;
      color: #595959;
    }
    .desc {
      /*text-align: center;*/
      line-height: 100%;
      font-size:0.5rem;
      width: 100%;
      margin: auto;
      color: #595959;
    }

    .iconfont-icon{
      font-size:3rem;
    }
    .row{
      margin: 20px 0;
    }
    .head_td{
      width: 50%;
      text-align: left;
    }
    .data_box{
      text-align: right;
    }
    tr{
      font-size: 1rem;
    }
    .row_top{
      padding-bottom: 0px;
    }
    .row_about{
      margin-top: 0px;
    }
    .col-md-6_about{
      /*float: left;*/
      /*margin-top: 5px;*/
      /*border: 0.5px outset #b0c3e3;*/
    }
    .icon{
      float: left;
      margin-left: 10%;
      margin-top: 20px;
    }
    .title{
      float: left;
      margin: 27px 5%;
    }
    .desc{
      float: left;
      text-align: left;
      margin-top: -20px;
      border-left: 0.5px outset #b0c3e3;
    }
    .col-md-12{
      padding: 0px;
    }
    .table{
      border: none;
      float: left;
      margin-bottom: 0px;
    }
    .table_now{
      border-right: 2px solid #b20030;
    }
    .table td{
      border: none;
      /*border-right: 3px solid #b20030;*/
      padding: 5px;
    }
    .now_tb{
      width: 50%;
      float: left;
      padding: 0px;
    }
    .avg_tb{
      width: 48%;
      float: left;
      padding: 0px;
    }
    .operationAccountRow {
      margin: 20px 1%;
    }
  }
</style>
