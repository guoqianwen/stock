<template>
  <div id="currentHolding" class="currentHoldingComponents">
    <div class="row currentHoldingRow">
      <div class="currentHoldingHeader">
        <h3>美股当前持仓 <span>{{holding.length ? holding[0].newDate : ''}}<span class="timeArea">(纽约时间)</span></span></h3>
      </div>
      <div class="row-fluid">
      <div class="span6" style="float: left; width: 100%">
        <div class="currentHoldingTable">
          <table class="table table-striped table-bordered table-advance curHoldingTable pc_table" contenteditable="false" >
          <thead>
          <tr class="current-holding-thead-tr" >
            <th>股票代码<br>公司名称</th>
            <th>交易日期<br>资产类型</th>
            <th>交易价格($)<br>当前价格($)</th>
            <th>交易份数</th>
            <th>交易成本($)<br>目前市值($)</th>
            <th>浮动盈亏率<br>浮动盈亏($)</th>
          </tr>
          </thead>
          <tbody v-if="holding.length>0 && holdingCode != '11090010' && holdingCode != '11090012'">
          <tr  v-for="(item,index) in holding" >
            <td>{{item.name}}<br>{{item.stockName}}</td>
            <td>{{item.oldDate}}<br><span :class="{Green:item.type == '做多',SomeRed:item.type == '做空'}">{{item.type}}</span></td>
            <td><div class="data_box2">{{item.oldPrice | setNum}}<br>{{item.newPrice | setNum}}</div></td>
            <td><div class="data_box2"></div>{{item.amount | setNum}}</td>
            <td><div class="data_box3">{{item.cost | setNum}}<br>{{item.value | setNum}}</div></td>
            <td>
              <div class="data_box3">
                <span v-if="item.gain>0" :class="{Red:item.gain<0,Green:item.gain>=0}">+{{item.gain  | toFixed2 }}%<br>+{{item.earning  | setNum}}</span>
                <span v-else="item.gain<=0" :class="{Red:item.gain<0,Green:item.gain>=0}">{{item.gain  | toFixed2 }}%<br>{{item.earning  | setNum}}</span>
              </div>
            </td>
          </tr>
          </tbody>
          <tbody v-else-if="holding.length==0 && holdingCode != '11090010' && holdingCode != '11090012'">
            <tr >
              <td colspan="12">目前市场不确定因素较多，暂时已清仓</td>
            </tr>
          </tbody>
          <tbody v-else>
            <tr >
              <td colspan="12">此信息仅限合作伙伴；如需帮助，请参考页面底部的联系方式。</td>
            </tr>
          </tbody>
        </table>

        <table class="table table-striped table-bordered table-advance curHoldingTable app_table" contenteditable="false" >
          <thead>
          <tr class="current-holding-thead-tr" >
            <th>股票代码/<br>公司名称</th>
            <th>交易日期/<br>资产类型</th>
            <th>交易价格/<br>当前价格<br>($)</th>
            <th>交易份数</th>
            <th>交易成本/<br>目前市值<br>($)</th>
            <th>浮动盈亏率/<br>浮动盈亏<br>($)</th>
          </tr>
          </thead>
          <tbody v-if="holding.length>0 && holdingCode != '11090010' && holdingCode != '11090012'">
          <tr v-for="(item,index) in holding" :class="item.gain>=0 ? 'success':''">
            <td>{{item.name}}<br>{{item.stockName}}</td>
            <td>{{item.oldDate}}<br><span :class="{Green:item.type == '做多',SomeRed:item.type == '做空'}">{{item.type}}</span></td>
            <td><div class="data_box2">{{item.oldPrice | setNum}}<br>{{item.newPrice | setNum}}</div></td>
            <td class="data_box2_td"><div class="data_box2"></div>{{item.amount | setNum}}</td>
            <td><div class="data_box3">{{item.cost | setNum}}<br>{{item.value | setNum}}</div></td>
            <td><div class="data_box3">
              <span v-if="item.gain>0" :class="{Red:item.earning<0,Green:item.earning>=0}">+{{item.gain | toFixed2 }}%<br>{{item.earning | setNum}}</span>
              <span v-else="item.gain<=0" :class="{Red:item.earning<0,Green:item.earning>=0}">{{item.gain | toFixed2 }}%<br>{{item.earning | setNum}}</span>
            </div></td>
          </tr>
          </tbody>
          <tbody v-else-if="holding.length==0 && holdingCode != '11090010' && holdingCode != '11090012'">
          <tr >
            <td colspan="12">目前市场不确定因素较多，暂时已清仓</td>
          </tr>
          </tbody>
          <tbody v-else>
          <tr >
            <td colspan="12">此信息仅限合作伙伴；如需帮助，请参考页面底部的联系方式。</td>
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
        name: "us-current-holding",
        props:['holding','holdingCode'],
      mounted: function () {
      }
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
    width:58%;
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
    .currentHoldingRow{
      width: 100%;
      margin-left: 0px;
    }
    .currentHoldingTable{
      overflow: scroll;
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
      padding-left: 2px;
      padding-right: 2px;
      /*vertical-align: middle;*/
    }
    .table td{
      /*padding: 0px;*/
      padding-top: 3px;
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
    .timeArea{
      font-size: 2rem;
    }

  }
</style>
