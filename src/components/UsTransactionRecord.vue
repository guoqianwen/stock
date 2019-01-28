<template>
  <div class="transactionRecord" >

    <!--交易记录-->
    <div class="recommendRow">
      <div class="recommendHeader">
        <h3></h3>
        <h4 class="transactionRecordText" style="width: 100%;text-align: center">美股交易记录</h4>
      </div>
      <div class="row-fluid">
        <div class="span12">

          <div class="list">
            <template>
              <table class="transactionRecordTable table table-striped table-bordered table-advance">
                <thead>
                <tr class="recommend-thead-tr">
                  <th>交易日期<br/>交易类型</th>
                  <th>清仓日期</th>
                  <th>股票代码<br/>公司名称</th>
                  <th>股票份数</th>
                  <th>交易价格($)<br/>清仓价格($)</th>
                  <th>盈亏率<br/>盈亏额($)</th>
                </tr>
                </thead>
                <tbody v-if="items.length>0">
                <tr v-for="(item,index) in items">
                  <td>
                    {{item.tradeDate}}<br/><span :class="{SomeGreen:item.action=='平仓',Red:item.action == '卖出'}">{{item.action}}</span>
                  </td>
                  <td>
                    {{item.newDate}}
                  </td>
                  <td>
                    {{item.name}}<br/>{{item.companyName}}
                  </td>
                  <td>
                      <div class="data_box3">
                          {{item.amount}}
                      </div>
                  </td>
                  <td>
                    <div class="data_box3">
                        {{item.oldPrice  | setNum2}}<br/>
                        {{item.newPrice  | setNum2}}
                    </div>
                  </td>
                  <td v-if="item.gainRate>0" :class="{Red:item.gainRate<0,Green:item.gainRate>=0}">
                      <div class="data_box3">
                        +{{item.gainRate}}%
                        <br/>
                        {{item.gain | setNum}}
                      </div>
                  </td>
                  <td v-else-if="item.gainRate<0" :class="{Red:item.gainRate<0,Green:item.gainRate>=0}">
                    <div class="data_box3">
                      {{item.gainRate}}%<br/>
                      {{item.gain  | setNum}}
                    </div>
                  </td>
                  <td v-else="item.gainRate==undefined">

                  </td>

                </tr>
                </tbody>
                <tbody v-else>
                    <tr >
                      <td colspan="9">当前股市波动较大，无交易操作
                      </td>
                    </tr>
                </tbody>
              </table>
              <pagination :perPages="perPages" :page-index="currentPage" :total="count" :page-size="pageSize" @change="pageChange">
              </pagination>
            </template>
          </div>
          <div class="clear"></div>

        </div>
      </div>
    </div>

    <!--当前持仓-->
    <div class="paperTrading">
      <div class="paperTrading_app">
        <us-current-holding :holding="holding" :holdingCode="holdingCode"></us-current-holding>
      </div>
    </div>

    <!--交易统计-->
    <div class="operationAccount1" style="margin-top: 1.5rem">
      <div class="recommendHeader">
        <h4 class="transactionRecordText1" style="width: 100%;text-align: center">美股交易统计</h4>
      </div>
      <div class="row operationAccountRow">
        <div class="col-md-6">
          <table class="table table-striped table-bordered table-advance curHoldingTable table_now" contenteditable="false" >
            <tbody>
            <tr class="current-holding-thead-tr">
              <td class="head_td">交易总数</td>
              <td class="data_td">{{userAccount.tradeNumber}}次</td>
            </tr>
            <tr class="current-holding-thead-tr">
              <td class="head_td">买入次数</td>
              <td class="data_td">{{userAccount.buyNumber}}次</td>
            </tr>
            <tr class="current-holding-thead-tr">
              <td class="head_td">卖出次数</td>
              <td class="data_td">{{userAccount.sellNumber}}次</td>
            </tr>
            <tr class="current-holding-thead-tr">
              <td class="head_td">做空次数</td>
              <td class="data_td">{{userAccount.shortNumber}}次</td>
            </tr>
            <tr class="current-holding-thead-tr">
              <td class="head_td">平仓次数</td>
              <td class="data_td">{{userAccount.coverNumber}}次</td>
            </tr>
            </tbody>
          </table>
        </div>
        <div class="col-md-6">
          <table class="table table-striped table-bordered table-advance curHoldingTable table_avg" contenteditable="false" >
            <tbody>
            <tr class="current-holding-thead-tr">
              <td class="head_td">当前持仓</td>
              <td class="data_td">{{userAccount.holdNumber}}只</td>
            </tr>
            <tr class="current-holding-thead-tr">
              <td class="head_td">赚钱股票</td>
              <td class="data_td">{{userAccount.profitNumber}}只</td>
            </tr>
            <tr class="current-holding-thead-tr">
              <td class="head_td">赔钱股票</td>
              <td class="data_td">{{userAccount.lossNumber}}只</td>
            </tr>
            <tr class="current-holding-thead-tr">
              <td class="head_td">平均持有天数</td>
              <td class="data_td">{{userAccount.avgHoldDay}}天</td>
            </tr>
            <tr class="current-holding-thead-tr">
              <td class="head_td">胜率</td>
              <td class="data_td" :class="{Red:userAccount.winRate<50,Green:userAccount.winRate>=0}">{{userAccount.winRate |toFixed2 }}%</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Pagination from "./Pagination";
  import {httpUrl} from '../apiConfig/api';
  import CurrentHolding from "./UsCurrentHolding";
  import { setSession,getSession } from '../apiConfig/cookie.js';

  export default {
    name: "us-transaction-record",
    data() {
      return {
        //交易记录
        perPages:1,
        pageSize: 20, //每页显示20条数据
        currentPage: 1, //当前页码
        count: 0, //总记录数
        //逆回购纪录
        perPages2:1,
        pageSize2: 20, //每页显示20条数据
        currentPage2: 1, //当前页码
        count2: 0, //总记录数
        //
        items:[],
        temp:[],
        userAccount:[],
        holding:[],
        holdingCode:'',
        reverseRecords:[]
      }
    },
    components: {
      "pagination": Pagination,
      'us-current-holding':CurrentHolding,
    },
    methods: {
      //获取数据
      getList() {
        //交易记录
        this.getTransformRecord();
      },
      getList2() {
        //逆回购记录
        this.searchReverseRepo();
      },

      /**
       * 获取分页交易记录分页信息
       * @param pageSize currentPage
       */
      getTransformRecord: function () {
        this.$http.get(httpUrl.getTradeRecordApiUs, {
          params: {pageSize:this.pageSize,pageNo:this.currentPage}
        }).then(function (res) {
          if (res.body.code == 0) {
            this.count = res.body.data.total;
            this.items= res.body.data.entities;
            console.log(this.items)
          } else {
            alert(res.body.message)
          }
        }, function () {
          console.log("请求失败")
        });
      },
      //从page组件传递过来的当前page
      pageChange(page) {
        this.currentPage = page
        this.getList()
      },

      /**
       * 获取逆回购记录分页信息
       * @param pageSize currentPage
       */
      searchReverseRepo: function () {
        this.$http.get(httpUrl.search_reverse_repoApi, {
          params: {pageSize:this.pageSize2,pageNo:this.currentPage2}
        }).then(function (res) {
          if (res.body.code == 0) {
            this.count2 = res.body.data.total;
            this.reverseRecords= res.body.data.entities;
            console.log(this.reverseRecords)
          } else {
            alert(res.body.message)
          }
        }, function () {
          console.log("请求失败")
        });
      },
      //从page组件传递过来的当前page
      pageChange2(page) {
        this.currentPage2 = page
        this.getList2()
      },

      /**
       * 获取操作统计数据
       */
      getOperatorSummary:function () {
        this.$http.get(httpUrl.getOperatorSummaryApiUs).then(function (res) {
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
       * 获取当前持股信息
       */
      fetchCurStockeData (){
        this.$http.get(httpUrl.tradeFindStockApiUs).then(function(res){
          this.holdingCode=res.body.code;
          if(res.body.code==0){
            this.holding=res.body.data.entities;
          }else{
            //alert(res.body.message)
          }
        },function(){
          console.log("请求失败")
        });
      },




    },
    mounted() {
      //请求第一页数据
      this.getList();
      this.getList2();
      this.getOperatorSummary();
      this.fetchCurStockeData();
    },
    watch: {
      transactionRecord(val) {
        this.items = val;
      },
      date(val){
        this.getList(val);
      }
    }
  }
</script>

<style scoped>
  *
  .transactionRecord {
    width: 96%;
    height: auto;
    margin: 0 2% 2% 2%;
    /*background: #ffffff;*/
  }
  .recommendRow{
    background: #fff;
  }
  .recommendRow{
    background: #ffffff;
  }
  .paperTrading{
    /*width: 96%;*/
    height: auto;
    margin-left: -2%;
    margin-right: -2%;
  }
  .transactionRecordText {
    height: 4rem;
    font-size: 24px;
    line-height: 4rem;
    text-align: center;
    margin: 0 0%;
  }
  .transactionRecordText1 {
    height: 4rem;
    font-size: 24px;
    line-height: 4rem;
    margin-top: 1.5rem;
    text-align: center;

  }

  .forum-list-right {
    width: 66%;
    background: #F2F2F2;
    height: 100%;
    overflow: hidden;
  }

  .forum-list-box {
    height: 100%;
    overflow-y: scroll;
    width: 100%;
  }

  .forum-list-box::-webkit-scrollbar {
    width: 0px;
    height: 0px;
  }

  table {
    margin-bottom: 0px;
  }

  .forumItem {
    display: flex;
    flex-direction: row;
    border: 1px solid #DDDDDD;
    margin: 1rem;
  }

  .forumImg {
    width: 12rem;
    height: 15rem;
    /* border: 1px solid #DDDDDD;*/
  }

  .forumUserImg {
    width: 80%;
    height: 60%;
    margin: 10%;
  }

  .forumUserImg img {
    width: 100%;
    height: 100%;

  }

  .forumInfo {
    /* border: 1px solid #DDDDDD;*/
    width: calc(100% - 12rem);
    height: 15rem;
  }

  .showUserContent {
    width: 100%;
    height: 12rem;
    background: #ffffff;
    /* border: 1px solid #DDDDDD;*/
  }

  .showUserContentDetail {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 3rem;
    line-height: 3rem;
    background: #ffffff;
  }

  .submit_time {
    height: 3rem;
    line-height: 3rem;
  }

  .box {
    padding: 100px;
  }

  .border-left {
    border-left: 1px solid #dddddd;
  }

  .border-right {
    border-right: 1px solid #dddddd;
  }

  .border-bottom {
    border-bottom: 1px solid #dddddd;
  }

  .border-top {
    border-top: 1px solid #dddddd;
  }

  .forumSubmit {
    margin-bottom: 2rem;
  }

  .icon-star {
    color: #FFAC38;
  }

  .recommendHeader {
    text-align: center;
    width: 96%;
    border-bottom: 1px solid #EEF1F5;
    margin: 0 2%;
  }

  .row-fluid {
    padding-top: 20px;
    width: 96%;
    margin: 0 2%;
    padding-bottom: 5px;
  }

  tr > th {
    text-align: center;
  }
  tr>td{
    text-align: center;
  }

  .data_td{
    text-align: center;
  }
  .head_td{
    font-weight: bold;
  }

  .data_box{
    width:60%;
    text-align: right;
  }
  .operationAccount1{
    width: 100%;
    height: auto;
    background: #ffffff;
    padding-bottom: 2rem;
  }
  .operationAccountRow{
    margin-top: 2rem;
    margin-right: 0px;
    margin-left: 0px;
    background: #ffffff;
  }
  .data_box3{
    width:68%;
    text-align: right;
  }

  /*
    pc端隐藏
    */
  @media screen and (min-width:601px)
  {
    .head_td_app{
      display: none;
    }
  }
  /*
屏幕兼容(手机)
*/
  @media screen and (max-width:600px)
  {
    .head_td_pc{
      display: none;
    }
    .data_box3{
      width:90%;
    }
    .transactionRecord {
      width: 100%;
      margin-left: 0px;
      /*background: #ffffff;*/
    }
    /*.transactionRecordTable {*/
    .list {
      /*font-size: 0.5rem;*/
      font-size: 1.2rem;
      word-break: keep-all;
      padding: 0px;
      overflow: scroll;
    }
    .table>thead>tr>th {
      padding: 1px;
    }
    .transactionRecordTable td{
      padding: 0px;
      vertical-align: middle;
    }
    .transactionRecordText{
      width: 100%;
    }
    .transactionRecordText1{
      width: 100%;
    }
    .pc_app_dis_th{
      display: none;
    }
    .pc_app_dis_td{
      display: none;
    }
    .curHoldingTable{
      /*width: 50%;*/
      width: 49%;
      float: left;
      margin-left: 0px;
      /*font-size: 10px;*/
      font-size: 1.2rem;
      border: none;
    }
    .table_now{
      border-right: 2px solid #ddd;
    }
    .data_td{
      width: 40%;
      border:none;
      text-align: right;
    }
    .head_td{
      width: 60%;
      text-align: left;
      border:none;
    }
    .col-md-6{
      /*padding-top: 0px;*/
      padding-left: 2%;
      padding-right: 2%;
    }
    .table_avg{
      /*padding-top: -2px;*/
      float: left;
      margin-left: 1px;
    }
    .pc_th{
      display: none;
    }
    .pc_td{
      display: none;
    }
    .app_td{
      display: table-cell;
    }
    .app_th{
      display: table-cell;
    }
    .paperTrading_app{
      padding-left: 6px;
      padding-right: 6px;
    }
  }
</style>
