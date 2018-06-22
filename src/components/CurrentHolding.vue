<template>
  <div id="currentHolding" class="currentHoldingComponents">
    <div class="row currentHoldingRow">
      <div class="currentHoldingHeader">
        <h3>当前持仓</h3>
        <h4 class="currentHoldingTime">{{holding.length ? holding[0].newData : ''}}</h4>
      </div>
      <div class="row-fluid">
      <div class="span6" style="float: left; width: 100%">
        <div class="currentHoldingTable">
          <table class="table table-striped table-bordered table-advance curHoldingTable" contenteditable="false" >
          <thead>
          <tr class="current-holding-thead-tr">
            <th>序号</th>
            <th>股票代码</th>
            <th>买入日期</th>
            <th>买入价格</th>
            <th>当前日期</th>
            <th>当前价格</th>
            <th>收益率</th>
            <th>股票类型</th>
            <th>股票份数</th>
            <th>成本</th>
            <th>目前价值</th>
            <th>收益绝对值</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(item,index) in holding" :class="item.gain>=0 ? 'success':''">
            <td>{{index+1}}</td>
            <td>{{item.name}}</td>
            <td>{{item.oldDate}}</td>
            <td><div class="data_box2">{{item.oldPrice | toFixed2 | setNum}}</div></td>
            <td>{{item.newDate}}</td>
            <td><div class="data_box2">{{item.newPrice  | toFixed2 | setNum}}</div></td>
            <td><div class="data_box3"><span :class="{Green:item.gain<0,Red:item.gain>=0}">{{item.gain  | toFixed2 }}%</span></div></td>
            <td>{{item.type}}</td>
            <td><div class="data_box2"></div>{{item.amount | toFixed2 | setNum}}</td>
            <td><div class="data_box3">{{item.cost | toFixed2 | setNum}}</div></td>
            <td><div class="data_box3">{{item.value | toFixed2 | setNum}}</div></td>
            <td><div class="data_box3"><span :class="{Green:item.earning<0,Red:item.earning>=0}">{{item.earning | toFixed2 | setNum}}</span></div></td>
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
    justify-content: left;
  }
  .currentHoldingHeader h3{
    width: 100%;
    text-align: left;
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
      margin-top:60%;
      margin-bottom: 20px;
      /*overflow: scroll;*/
    }
    .currentHoldingTable{
      overflow: scroll;
    }
    .current-holding-thead-tr th{
      text-align: center;
    }
    .curHoldingTable {
      font-size: 1rem;
      word-break: keep-all;
    }

  }
</style>
