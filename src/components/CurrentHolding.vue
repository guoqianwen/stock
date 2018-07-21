<template>
  <div id="currentHolding" class="currentHoldingComponents">
    <div class="row currentHoldingRow">
      <div class="currentHoldingHeader">
        <h3>当前持仓 <span>{{holding.length ? holding[0].newDate : ''}}</span></h3>
      </div>
      <div class="row-fluid">
      <div class="span6" style="float: left; width: 100%">
        <div class="currentHoldingTable">
          <table class="table table-striped table-bordered table-advance curHoldingTable pc_table" contenteditable="false" >
          <thead>
          <tr class="current-holding-thead-tr" >
            <th>股票代码</th>
            <th>公司名称</th>
            <th>买入日期</th>
            <th>买入</th>
            <th>当前价格(元)</th>
            <th>股票份数</th>
            <th>成本(元)</th>
            <th>目前价值(元)</th>
            <th>盈亏率</th>
            <th>浮动盈亏(元)</th>
          </tr>
          </thead>
          <tbody>
          <tr v-if="holding.length>0" v-for="(item,index) in holding" :class="item.gain>=0 ? 'success':''">
            <td>{{item.name}}</td>
            <td>{{item.stockName}}</td>
            <td>{{item.oldDate}}</td>
            <td><div class="data_box2">{{item.oldPrice | setNum}}</div></td>
            <td><div class="data_box2">{{item.newPrice   | setNum}}</div></td>
            <td><div class="data_box2"></div>{{item.amount | setNum}}</td>
            <td><div class="data_box3">{{item.cost  | setNum}}</div></td>
            <td><div class="data_box3">{{item.value  | setNum}}</div></td>
            <td><div class="data_box3">
              <span v-if="item.gain>0" :class="{Green:item.gain<0,Red:item.gain>=0}">+{{item.gain  | toFixed2 }}%</span>
              <span v-else="item.gain<=0" :class="{Green:item.gain<0,Red:item.gain>=0}">{{item.gain  | toFixed2 }}%</span>
            </div></td>
            <td><div class="data_box3">
              <span v-if="item.earning>0"  :class="{Green:item.earning<0,Red:item.earning>=0}">+{{item.earning  | setNum}}</span>
              <span v-else="item.earning<=0" :class="{Green:item.earning<0,Red:item.earning>=0}">{{item.earning  | setNum}}</span>
            </div></td>
          </tr>
          <tr v-else>
            <td colspan="12">目前市场不确定因素较多，暂时已清仓</td>
          </tr>
          </tbody>
        </table>

        <table class="table table-striped table-bordered table-advance curHoldingTable app_table" contenteditable="false" >
          <thead>
          <tr class="current-holding-thead-tr" >
            <th>股票代码/公司名称</th>
            <th>买入日期</th>
            <th>(买入价)<br>当前价<br>(元)</th>
            <th>(股票份数)<br>买入成本<br>(元)</th>
            <th>目前价值(元)</th>
            <th>(盈亏率)<br>浮动盈亏<br>(元)</th>
          </tr>
          </thead>
          <tbody>
          <tr v-if="holding.length>0" v-for="(item,index) in holding" :class="item.gain>=0 ? 'success':''">
            <td>{{item.name}} /{{item.stockName}}</td>
            <td>{{item.oldDate}}</td>

            <td><div class="data_box2">({{item.oldPrice | setNum}}) {{item.newPrice   | setNum}}</div></td>
            <td><div class="data_box2"></div>({{item.amount | setNum}}) {{item.cost  | setNum}}</td>
            <td><div class="data_box3">{{item.value  | setNum}}</div></td>
            <td><div class="data_box3">
              <span v-if="item.gain>0" :class="{Green:item.earning<0,Red:item.earning>=0}">+({{item.gain  | toFixed2 }}%) {{item.earning  | setNum}}</span>
              <span v-else="item.gain<=0" :class="{Green:item.earning<0,Red:item.earning>=0}">({{item.gain  | toFixed2 }}%) {{item.earning  | setNum}}</span>
            </div></td>
          </tr>
          <tr v-else>
            <td colspan="12">目前市场不确定因素较多，暂时已清仓</td>
          </tr>
          </tbody>
        </table>

        </div>
      </div>
      <div class="clear"></div>
    </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "current-holding",
        props:['holding']
    }
</script>

<style scoped>
  *
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
  .pc_table{
    display: table;
  }
  .app_table{
    display: none;
  }
  .currentHoldingComponents{
    margin-top:20px;
    margin-bottom: 20px;
  }
  .currentHoldingTime{
    margin-left: 1rem;
    margin-top: 2rem;
  }
  .currentHoldingRow{
    width: 96%;
    height: auto;
    background: #ffffff;
    margin:0 2%;
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
  .current-holding-thead-tr th{
    text-align: center;
  }
  .data_box1{
    width:56%;
    text-align: right;
  }
  .data_box2{
    width:58%;
    text-align: right;
  }
  .data_box3{
    width:68%;
    text-align: right;
  }
  .row-fluid {
    padding-top: 20px;
    width: 96%;
    margin: 0 2%;
    padding-bottom: 5px;
  }

  /*
屏幕兼容(手机)
*/
  @media screen and (max-width:600px)
  {
    .currentHoldingComponents{
      margin-top:2rem;
      margin-bottom: 20px;
      /*overflow: scroll;*/
    }
    .currentHoldingTable{
      /*overflow: scroll;*/
    }
    .current-holding-thead-tr th{
      text-align: center;
    }
    .curHoldingTable {
      font-size: 1.2rem;
      word-break: keep-all;
    }
    .table th{
      padding: 0px;
      /*vertical-align: middle;*/
    }
    .table td{
      /*padding: 0px;*/
      padding-top: 0px;
      padding-bottom: 0px;
      padding-left: 1px;
      padding-right: 1px;
      vertical-align: middle;
    }
    .data_box2{
      width:100%;
      text-align: right;
    }
    .data_box2_td{
      text-align: right;
    }
    .data_box3{
      width:100%;
      /*text-align: right;*/
    }
    .pc_table{
      display: none;
    }
    .app_table {
      display: inline-table;
      margin-left: 0px;
    }

  }
</style>
