<template>
  <div class="virtualAccount">
    <div class="row virtualAccountRow">
      <div class="virtualAccountHeader">
        <h3 class="virtureAllLook">账户总览</h3>
      </div>
      <div class="row-fluid virtualAccountBox">
        <div class="col-md-4 virtualAccountC4">
          <div class="virtualTotalMoney" style="height:7rem;padding-top: 2rem;">
                <div class="virtualTotalMoneyTitle" style="height: 2rem;line-height: 2rem;color: #7E7E7E;font-size: 1.8rem">总金额(元)</div>
                <div class="virtualTotalMoneyValue" style="height: 3rem;line-height: 3rem;color: #E9531E;font-size: 3rem">{{parseInt(virtCountSummary.total)|setNum}}</div>
          </div>
          <div class="row-fluid virtual_item">
              <div class="col-sm-4 virtual_sm virtual_sm_1" >
                  <div class="virtualTotalMoneyTitleName" >最新盈亏(元)</div>
                  <div v-if="virtCountSummary.todayGain>0" class="virtualTotalMoneyTitleValue"  :class="{Green:virtCountSummary.todayGain<0,Red:virtCountSummary.todayGain>=0}">+{{parseInt(virtCountSummary.todayGain)|setNum}}</div>
                  <div v-else="virtCountSummary.todayGain<=0" class="virtualTotalMoneyTitleValue"  :class="{Green:virtCountSummary.todayGain<0,Red:virtCountSummary.todayGain>=0}">{{parseInt(virtCountSummary.todayGain)|setNum}}</div>

              </div>
              <div class="col-sm-4 virtual_sm virtual_sm_2" >
                <div class="virtualTotalMoneyTitleName">持有盈亏(元)</div>
                <div  v-if="virtCountSummary.totalGain>0" class="virtualTotalMoneyTitleValue" :class="{Green:virtCountSummary.totalGain<0,Red:virtCountSummary.totalGain>=0}">+{{parseInt(virtCountSummary.totalGain)|setNum}}</div>
                <div  v-else="virtCountSummary.totalGain<=0" class="virtualTotalMoneyTitleValue" :class="{Green:virtCountSummary.totalGain<0,Red:virtCountSummary.totalGain>=0}">{{parseInt(virtCountSummary.totalGain)|setNum}}</div>
              </div>
              <div class="col-sm-4 virtualTotalMoneyItem virtual_sm virtual_sm_3">
                <div class="virtualTotalMoneyTitleName">持有盈亏率</div>
                <div v-if="virtCountSummary.totalGainRate>0" class="virtualTotalMoneyTitleValue" :class="{Green:virtCountSummary.totalGainRate<0,Red:virtCountSummary.totalGainRate>=0}">+{{virtCountSummary.totalGainRate*100 |toFixed2 }}%</div>
                <div v-else="virtCountSummary.totalGainRate<=0" class="virtualTotalMoneyTitleValue" :class="{Green:virtCountSummary.totalGainRate<0,Red:virtCountSummary.totalGainRate>=0}">{{virtCountSummary.totalGainRate*100 |toFixed2 }}%</div>
              </div>
          </div>
        </div>
        <div class="col-md-8 virtualAccountC8">
          <div class="row">
            <div class="col-md-6 clearPadRig accountOverview">
              <table cellspacing="0" cellpadding="0" border="0"
                     class="virtable table table-striped table-bordered table-advance start_tb">
                <tbody>
                <tr>
                  <th class="head_td">开始日期</th>
                  <td><div class="data_box">{{virtCountStart.date}}</div></td>
                </tr>
                <tr>
                  <th class="head_td">总资产(元)</th>
                  <td>
                    <div class="data_box">{{virtCountStart.totalAsset|setNum}}</div>
                  </td>
                </tr>
                <tr>
                  <th class="head_td">持股价值(元)</th>
                  <td>
                    <div class="data_box">{{virtCountStart.stockAmount|setNum}}</div>
                  </td>
                </tr>
                <tr>
                  <th class="head_td">账户余额(元)</th>
                  <td>
                    <div class="data_box">{{virtCountStart.balanceAmount|setNum}}</div>
                  </td>
                </tr>
                <tr>
                  <th class="head_td">今日盈亏率</th>
                  <td>
                    <div v-if="virtCountStart.todayProfit>0" class="data_box" :class="{Green:virtCountStart.todayProfit<0,Red:virtCountStart.todayProfit>=0}">
                      +{{(virtCountStart.todayProfit * 100).toFixed(2)}}%
                    </div>
                    <div v-else="virtCountStart.todayProfit<=0" class="data_box" :class="{Green:virtCountStart.todayProfit<0,Red:virtCountStart.todayProfit>=0}">
                      {{(virtCountStart.todayProfit * 100).toFixed(2)}}%
                    </div>
                  </td>
                </tr>
                <tr>
                  <th class="head_td">平均仓位</th>
                  <td>
                    <div class="data_box">{{virtCountStart.avgPosition|setNum}}%</div>
                  </td>

                </tr>
                </tbody>
              </table>
            </div>
            <div></div>
            <div class="col-md-6 clearPadRig accountOverview">
              <table cellspacing="0" cellpadding="0" border="0"
                     class="virtable table table-striped table-bordered table-advance end_tb">
                <tbody>
                <tr>
                  <th class="head_td">截止日期</th>
                  <td>
                    <div class="data_box">{{virtCountEnd.date}}</div>
                  </td>
                </tr>
                <tr>
                  <th class="head_td">总资产(元)</th>
                  <td>
                    <div class="data_box">{{virtCountEnd.totalAsset|setNum}}</div>
                  </td>
                </tr>
                <tr>
                  <th class="head_td">持股价值(元)</th>
                  <td>
                    <div class="data_box" >
                      {{virtCountEnd.stockAmount|setNum}}
                    </div>
                  </td>
                </tr>
                <tr>
                  <th class="head_td">账户余额(元)</th>
                  <td>
                    <div class="data_box">{{virtCountEnd.balanceAmount|setNum}}</div>
                  </td>
                </tr>
                <tr>
                  <th class="head_td">累计盈亏率</th>
                  <td>
                    <div v-if="virtCountEnd.totalProfit>0" class="data_box" :class="{Green:virtCountEnd.totalProfit<0,Red:virtCountEnd.totalProfit>=0}">
                      +{{virtCountEnd.totalProfit * 100 | toFixed2}}%
                    </div>
                    <div v-else="virtCountEnd.totalProfit<=0" class="data_box" :class="{Green:virtCountEnd.totalProfit<0,Red:virtCountEnd.totalProfit>=0}">
                      {{virtCountEnd.totalProfit * 100 | toFixed2}}%
                    </div>
                  </td>
                </tr>
                <tr>
                  <th class="head_td">今日仓位</th>
                  <td>
                    <div class="data_box">{{virtCountEnd.todayPosition|setNum}}%</div>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    </div>
     </div>
</template>

<script>
  import echarts from 'echarts'
  export default {
    name: "virtual-account",
    props:{
      virtCountStart:{
        type: Object,
        required:true
      },
      virtCountEnd:{
        type: Object,
        required:true
      },
      virtCountSummary:{
        type: Object,
          required:true
      },
      className: {
      type: String,
    default: 'yourClassName'
    },
      id: {
        type: String,
      default: 'yourID'
      },
      width: {
        type: String,
      default: (window.height*80)+"%"
      },
        height: {
          type: String,
        default: '250px'
        },
    },
    methods: {
    },
    filters: {
      toFixed2: function (value) {
        return value.toFixed(2);
      }
    }
  }
</script>

<style scoped>
  *
  .virtualAccountBox {
    display: flex;
    flex-direction: row;
    width: 100%;
   /* overflow-x: scroll;*/
    margin: 0%;
    padding-top: 0px;
    /*margin-bottom:2rem;*/
  }

  .virtualTotalMoney{
    height:7rem;
    padding-top: 2rem;
  }
  .virtualTotalMoneyTitle{
    height: 2rem;
    line-height: 2rem;
    color: #7E7E7E;
    font-size: 1.8rem;
  }
  .virtualTotalMoneyValue{
    height: 3rem;
    line-height: 3rem;
    color: #E9531E;
    font-size: 3rem;
  }
  .virtual_item{
    margin-top: 2rem;
    width: 100%;
    height: 8rem;
  }
  .span6 {
    width: 50%;
  }

  .virtualAccountComponents {
    margin-top: 20px;
  }

  .virtualAccountRow {
    width: 96%;
    height: auto;
    margin: 0 2%;
    margin-top: 2rem;
    background: #fff;
    padding: 0 2%
  }

  .virtable {
    margin: 2% auto !important;
  }

  .virtualAccountHeader {
    /*margin: 0 2%;*/
    background: #ffffff;
    width: 100%;
    border-bottom: 1px solid #EEF1F5;
    text-align: center;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }

  .virtualAccountHeader h3 {
    /*height: 4rem;*/
    /*  margin-top:10px;*/
    /*line-height: 4rem;*/
    text-align: center;
  }

  .virtualAccountC4 {
    background: #ffffff;
    /*margin-top: 0.5rem;*/
  }

  .virtualAccountC8 {
   /* margin-top: 0.5rem;
    margin-left: 0.5rem;*/
    background: #ffffff;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  .data_box {
    width: 63%;
    text-align: right;
  }
  .virtualEmpty{
    font-size: 1.8rem;
    color: red;
  }
  .virtualTotalMoneyTitleValue{
    font-size: 2.5rem
  }
  .virtualTotalMoneyTitleName{
    height: 2rem;
    line-height: 2rem;
    color: #7E7E7E;
    font-size: 1.5rem;
    padding-left: 0;
    padding-right: 0;
  }
  .virtualTotalMoneyItem{
    padding-left: 0;
    padding-right: 0;
  }
  .accountOverview th{
    text-align: center;
  }
  .fontColor{
    color: rgb(51, 51, 51);
  }

  /*
屏幕兼容(手机)
*/
  @media screen and (max-width:600px)
  {
    .virtualAccountHeader {
      margin-top: 10px;
    }
    .virtualAccount{
      width: 96%;
      margin: auto;
    }
    .virtualAccountBox{
      display: flex;
      flex-wrap: wrap;
    }
    .virtualAccountC4 {
      width: 100%;
      background: #ffffff;
      height: 30%;
      padding-left: 2px;
      padding-right: 5px;
    }
    .yourClassName {
      margin-left: 1%;
    }
    .row{
      width: 100%;
      margin: 0px;

    }
    .virtualAccountC8 {
      width: 100%;
      margin-left: 0rem;
      padding-left: 1%;
      padding-right: 1%;
    }
    .col-md-12{
      padding: 1px;
    }
    .virtureAllLook{
      /*font-size: 1.5rem;*/
    }
    .virtual_item{
      float: left;
    }
    .virtual_sm{
      float: left;
      margin-left: 2px;
    }
    .virtual_sm_1{
      border-right: 1px solid #c1c7ba;
    }
    .virtual_sm_2{
      border-right: 1px solid #c1c7ba;
    }
    .virtualEmpty{
      font-size: 1.5rem;
    }
    .col-md-12 table {
      font-size: 0.5rem;
     /* word-break: keep-all;*/

    }
    .col-md-12 table td {
      width: 20%;
    }
    .data_box {
      width: 100%;
      text-align: right;
    }
    .head_td {
      width: 52%;
      text-align: left;
    }
    tr {
      font-size: 1rem;
    }
    .table{
      width: 50%;
      float: left;
    }
    .table td{
      /*padding: 5px;*/
      border: none;
    }
    .table th{
      text-align: left;
      border: none;
    }
    .col-md-6{
      min-height: 0px;
      padding: 0px;
    }
    .end_tb{
      border: none;
    }
    .start_tb{
      border: none;
      border-right: 2px solid #b20030;
    }
  }
</style>
