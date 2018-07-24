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
    <div class="index_recommend">
      <div class="recommendRow1 recommendRownew">
        <div class="recommendHeader">
          <h3 style="width: 100%;text-align: center">最新推荐 <span class="recommentTime">{{recommends.length>0 ? recommends[0].newDate : ""}}</span></h3>
        </div>
        <div class="recomment_row">
          <div class="row-fluid">
            <div class="span12">
              <table class="table table-striped table-bordered table-advance recomment_tb" >
                <thead>
                <tr class="recommend-thead-tr">
                  <th>股票代码</th>
                  <th>公司名称</th>
                  <th>推荐操作</th>
                  <th>股票类型</th>
                  <th>备注</th>
                </tr>
                </thead>
                <tbody v-if="recommends.length>0">
                <tr v-for="(item,index) in recommends">
                  <td >{{item.name}}</td>
                  <td>{{item.stockName}}</td>
                  <td  :class="{Green:item.action=='卖出',Red:item.action=='买入'}">{{item.action}}</td>
                   <td>{{item.type}}</td>
                  <td>{{item.note}}</td>
                </tr>
                </tbody>
                <tbody v-else>
                <tr >
                  <td colspan="7">当前股市风险较高，暂不推荐操作
                  </td>
                </tr>
                </tbody>
              </table>
              <div class="clear"></div>
            </div>
          </div>
        </div>
        <div class="showTransactionRecord">
          <a class="recommend_info">
            <router-link :to="{ path: '/recommend-info' }" >
              查看推荐详情
            </router-link>
          </a>
        </div>
      </div>

    </div>
    <div class="paperTrading">
      <current-holding :holding="holding"></current-holding>
    </div>
    <div class="paperTrading">
      <virtual-account  :virtCountStart="virtCountStart" :virtCountEnd="virtCountEnd" :virtCountSummary="virtCountSummary" ></virtual-account>
      <!--<current-holding :holding="holding"></current-holding>-->
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
                        <th class="head_td">当前持股</th>
                        <td class="data_box">{{userAccount.holdNumber}}只</td>
                      </tr>
                      <tr class="current-holding-thead-tr">
                        <th class="head_td">挣钱股票</th>
                        <td class="data_box">{{userAccount.profitNumber}}只</td>
                      </tr>
                      <tr class="current-holding-thead-tr">
                        <th class="head_td">赔钱股票</th>
                        <td class="data_box">{{userAccount.lossNumber}}只</td>
                      </tr>
                      <tr class="current-holding-thead-tr">
                        <th class="head_td">胜率</th>
                        <td class="data_box" :class="{Green:userAccount.winRate<50,Red:userAccount.winRate>=0}">{{userAccount.winRate}}%</td>
                      </tr>
                      <tr class="current-holding-thead-tr">
                        <th class="head_td">单日最大盈亏率</th>
                        <td class="data_box" :class="{Green:userAccount.maxGain<0,Red:userAccount.maxGain>=0}">+{{userAccount.maxGain *100}}%</td>
                      </tr>
                  </tbody>
                </table>
            </div>
            <div class="col-md-6 avg_tb">
              <table class="table table-striped table-bordered table-advance curHoldingTable table_avg" contenteditable="false" >
                <tbody>
                    <tr class="current-holding-thead-tr">
                      <th class="head_td">平均盈亏率</th>
                      <td v-if="userAccount.avgProfitRate>0" :class="{Green:userAccount.avgProfitRate<0,Red:userAccount.avgProfitRate>=0}" class="data_box">+{{userAccount.avgProfitRate}}%</td>
                      <td v-else :class="{Green:userAccount.avgProfitRate<0,Red:userAccount.avgProfitRate>=0}" class="data_box">{{userAccount.avgProfitRate}}%</td>
                    </tr>
                    <tr class="current-holding-thead-tr">
                      <th class="head_td">平均持有天数</th>
                      <td class="data_box">{{userAccount.avgHoldDay}}天</td>
                    </tr>
                    <tr class="current-holding-thead-tr">
                      <th class="head_td">买入次数</th>
                      <td class="data_box">{{userAccount.buyNumber}}次</td>
                    </tr>
                    <tr class="current-holding-thead-tr">
                      <th class="head_td">卖出次数</th>
                      <td class="data_box">{{userAccount.sellNumber}}次</td>
                    </tr>
                    <tr class="current-holding-thead-tr">
                      <th class="head_td">单日最小盈亏率</th>
                      <td class="data_box" :class="{Green:userAccount.minGain<0,Red:userAccount.minGain>=0}">{{userAccount.minGain *100}}%</td>
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

    <div class="feature">
      <div class="row_top">
        <div class="row row_about">
          <div class="col-md-12 col-md-6_about">
            <div class="icon_title">
              <div class="icon"><i class="iconfont icon-zhinengsuanfa iconfont-icon"></i></div>
              <div class="title">必达公告</div>
            </div>
            <div class="desc">必达科技的勾股系统于2018/8/1正式上线测试。测试期间，账号免费公开。系统业绩透明。欢迎批评指导。也可以参考或跟随勾股系统交易。必达科技不做任何承诺（包括系统的稳定性，推荐的正确性与数据的及时性），盈亏用户自负。请用户根据自身财力与风险承受力合理理财。</div>
          </div>
          <div class="col-md-12 col-md-6_about">
            <div class="icon_title">
                <div class="icon">
                  <i class="iconfont icon-tuandui-tianchong iconfont-icon"></i>
                </div>
                <div class="title">关于我们</div>
            </div>
            <div class="desc">必达科技是核心团队由硅谷资深的人工智能专家，及股票投资资深人士领头创建。主要开发人员分布于硅谷，北京，上海三地。勾股是必达科技公司（Pyttatec.com）科学家及人工智能工程师为中国股市量身打造的股票交易系统。勾股系统的交易算法集巴菲特的价值投资，华尔街的量化风控策略，及机器深度学习于一身。勾股交易属于低频，稳健，长短结合型的价值投资。</div>
          </div>
          <div class="col-md-12 col-md-6_about">
            <div class="icon_title">
                  <div class="icon">
                    <i class="iconfont icon-taolun iconfont-icon"></i>
                  </div>
                  <div class="title">合作交流</div>
            </div>
            <div class="desc">必达正在策划私募基金，希望能与您共赢。与此同时，也愿与大资金机构或个人合作（5000万元资本以上），为您量身制定交易策略。有意者请与bd@pyttatec.com联系。如对我们的产品系统等有建议，请联系tec@pyttatec.com， 或前往 <router-link :to="{ path: '/forum' }" >
              （讨论区）
            </router-link>提出您的宝贵建议。谢谢！</div>
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
        virtCountSummary:{},
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


      /**
       * 获取推荐信息
       */
      this.fetchLastRecomData();

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
            this.virtCountSummary=res.body.data.entity.summary;
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
      }

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
    padding: 0rem  0rem 0rem 15%;
    font-size: 50px;
  }
 .title {
   padding: 0rem  0rem 0rem 2%;
    font-size: 2rem;
    line-height: 300%;
    font-weight: bold;
    color: #595959;
  }
  .desc {
    padding: 0rem 15%;
    text-align: left;
    line-height: 200%;
    font-size:1.5rem;
    text-indent: 2.8rem;
    color: #595959;
  }
  .row_top{
    padding-top: 2rem;
    padding-bottom: 100px;
  }
  .iconfont-icon{
    font-size:5rem;
    color: #00add2;
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
  .recommendRow1{
    width: 96%;
    height: auto;
    background: #ffffff;
    margin-top: 1rem;
  }
  .recommendRownew{
    width: 96%;
    height: auto;
    background: #ffffff;
    margin-top: 1rem;
    margin:0 2%;
  }

  .recommendHeader{
    width: 96%;
    border-bottom: 1px solid #EEF1F5;
    margin: 0 2%;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .row-fluid{
    padding-top:20px;
    width: 96%;
    margin:0 2%;
    padding-bottom: 5px;
  }
  .recommend-thead-tr th{
    text-align: center;
  }


  .table-striped>tbody>tr:nth-of-type(odd) {
    background-color: #fbfcfd;
  }
  .recommendComponents{
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  .current-holding-thead-tr th{
    text-align: center;
  }
  .icon_title{
    display:flex;
    flex-direction: row;
    justify-content: flex-start;
  }
  .col-md-6_about{
    padding-top: 5rem;
    padding-bottom: 5rem;
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
      padding-right: 5%;
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
      display: flex;
      flex-direction: column;
    }
    .col-md-6_about{
      width: 100%;
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
    .recomment_tb{
      border: 1px solid #ddd;
    }
    .recomment_tb td{
      border: 1px solid #ddd;
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
    .recomment_row {
      margin-bottom: 20px;
      float: left;
    }
    .recommend_info{
      font-size: 14px;
    }
  }
</style>
