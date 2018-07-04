<template>
  <div id="recommend" class="recommendComponents">
    <div class="recommendRow1 recommendRownew">
      <div class="recommendHeader">
        <h3>最新推荐 <span class="recommentTime">{{recommends.length>0 ? recommends[0].newDate : ""}}</span></h3>
      </div>
      <div class="row-fluid">
        <div class="span12">
          <table class="table table-striped table-bordered table-advance" >
            <thead>
            <tr class="recommend-thead-tr">
              <th>股票代码</th>
              <th>股票类型</th>
              <th>推荐操作</th>
              <th>备注</th>
            </tr>
            </thead>
            <tbody v-if="recommends.length>0">
              <tr v-for="(item,index) in recommends">
                <td >{{item.name}}</td>
                <td >{{item.action}}</td>
                <!-- <td >{{item.newDate}}</td>-->
                <td>{{item.type}}</td>
              <td>{{item.note}}</td>
            </tr>
            </tbody>
            <tbody v-else>
              <tr >
                <td colspan="7">当前股市波动较大，不推荐进一步操作，请等待明天的推荐结果
                </td>
              </tr>

            </tbody>
          </table>
          <div class="clear"></div>

        </div>
      </div>
    </div>
    <div class="recommdationBasciInfo" >
      <div class="basicInfoTitle"><h3>基本信息</h3></div>
      <div class="row BasciInfoItem" >
        <div class="col-md-8" >
            <img src="../assets/logo.png"/>
        </div>
        <div class="col-md-4">
          <table class="table table-striped table-bordered table-advance curHoldingTable">
            <tbody>
            <tr class="recommend-thead-tr">
              <td>所属地域:</td>
              <td>浙江省</td>
            </tr>
            <tr class="recommend-thead-tr">
              <td>涉及概念:</td>
              <td>融资融券，深股通，人工智能，机器...</td>
            </tr>
            <tr class="recommend-thead-tr">
              <td>主营业务:</td>
              <td>经营分析 第二类增值电信业务中的信息服务业务（范围详见...</td>
            </tr>
            <tr class="recommend-thead-tr">
              <td>上市日期:</td>
              <td>2009-12-25</td>
            </tr>
            <tr class="recommend-thead-tr">
              <td>每股净资产:</td>
              <td>5.11元</td>
            </tr>
            <tr class="recommend-thead-tr">
              <td>每股收益:</td>
              <td>0.14元</td>
            </tr>
            <tr class="recommend-thead-tr">
              <td>净利润:</td>
              <td>0.75亿元</td>
            </tr>
            <tr class="recommend-thead-tr">
              <td>净利润增长率:</td>
              <td>-26.37%</td>
            </tr>
            <tr class="recommend-thead-tr">
              <td>营业收入:</td>
              <td>2.38亿元</td>
            </tr>
            <tr class="recommend-thead-tr">
              <td>每股现金流:</td>
              <td>0.13元</td>
            </tr>
            <tr class="recommend-thead-tr">
              <td>每股公积金:</td>
              <td>0.66元</td>
            </tr>
            <tr class="recommend-thead-tr">
              <td>每股未分配利润:</td>
              <td>浙江省</td>
            </tr>
            <tr class="recommend-thead-tr">
              <td>总股本:</td>
              <td>5.38亿</td>
            </tr>
            <tr class="recommend-thead-tr">
              <td>流通股 :</td>
              <td>2.64亿</td>
            </tr>
            <tr class="recommend-thead-tr">
              <td>昨日收盘价：</td>
              <td>12.12元</td>
            </tr>
            <tr class="recommend-thead-tr">
              <td>成交额 :</td>
              <td>123355555元</td>
            </tr>
            <tr class="recommend-thead-tr">
              <td>成交数 :</td>
              <td>123456600</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="row BasciInfoItem" >
        <div class="col-md-8" >
          <img src="../assets/logo.png"/>
        </div>
        <div class="col-md-4">
          <table class="table table-striped table-bordered table-advance curHoldingTable">
            <tbody>
            <tr class="recommend-thead-tr">
              <td>所属地域:</td>
              <td>浙江省</td>
            </tr>
            <tr class="recommend-thead-tr">
              <td>涉及概念:</td>
              <td>融资融券，深股通，人工智能，机器...</td>
            </tr>
            <tr class="recommend-thead-tr">
              <td>主营业务:</td>
              <td>经营分析 第二类增值电信业务中的信息服务业务（范围详见...</td>
            </tr>
            <tr class="recommend-thead-tr">
              <td>上市日期:</td>
              <td>2009-12-25</td>
            </tr>
            <tr class="recommend-thead-tr">
              <td>每股净资产:</td>
              <td>5.11元</td>
            </tr>
            <tr class="recommend-thead-tr">
              <td>每股收益:</td>
              <td>0.14元</td>
            </tr>
            <tr class="recommend-thead-tr">
              <td>净利润:</td>
              <td>0.75亿元</td>
            </tr>
            <tr class="recommend-thead-tr">
              <td>净利润增长率:</td>
              <td>-26.37%</td>
            </tr>
            <tr class="recommend-thead-tr">
              <td>营业收入:</td>
              <td>2.38亿元</td>
            </tr>
            <tr class="recommend-thead-tr">
              <td>每股现金流:</td>
              <td>0.13元</td>
            </tr>
            <tr class="recommend-thead-tr">
              <td>每股公积金:</td>
              <td>0.66元</td>
            </tr>
            <tr class="recommend-thead-tr">
              <td>每股未分配利润:</td>
              <td>浙江省</td>
            </tr>
            <tr class="recommend-thead-tr">
              <td>总股本:</td>
              <td>5.38亿</td>
            </tr>
            <tr class="recommend-thead-tr">
              <td>流通股 :</td>
              <td>2.64亿</td>
            </tr>
            <tr class="recommend-thead-tr">
              <td>昨日收盘价：</td>
              <td>12.12元</td>
            </tr>
            <tr class="recommend-thead-tr">
              <td>成交额 :</td>
              <td>123355555元</td>
            </tr>
            <tr class="recommend-thead-tr">
              <td>成交数 :</td>
              <td>123456600</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Recommend',
    props: ["recomHistory","recommends"],
    mounted:function (){
      console.log(this.recommends)
    },
    methods: {

    }
  }
</script>
<style>
  *
  h1, h2,h3 ,h5{
    font-weight: normal;
    text-align: left;

  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  .recommentTime{
    margin-top: 2rem;
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


  .virtualAccountHeader1 h3 {
    margin: 0 2%;
    height: 4rem;
    line-height: 4rem;
    text-align: left;
  }

  .recommendPicRow img{
    width: 100%;
    height: auto;
  }
  .BasciInfoItem{
    margin-right: 0px;
     margin-left: 0px;
    background: #ffffff;
    width: 100%;
    height: auto;
    padding-top: 1rem;
    border-bottom: 1px solid #797979;
  }
  .recommdationBasciInfo{
    background: #ffffff;
    margin-top: 2rem;
    width: 96%;
    height: auto;
    margin-left: 2%;
    padding-bottom: 2rem;
  }
  .basicInfoTitle>h3{
    text-align: center;
    padding: 2rem 0;
  }

  /*
屏幕兼容(手机)
 */
  @media screen and (max-width:600px)
  {
    .recommend-thead-tr th{
      word-break: keep-all;
      width: 15%;
    }
    .table>thead>tr>th {
      padding:3px;
    }
    .recommendRow1{
      width: 96%;
      /*height: auto;*/
      background: #ffffff;
      /*margin-top: 1rem;*/
      /* margin:0 2%;*/
      font-size:0.1rem;
    }
    .recommendRownew{
      width: 96%;
      /*height: auto;*/
      background: #ffffff;
      margin-top: 1rem;
      margin:0 2%;
      font-size:0.1rem;
    }
    .recommendHistroyRow{
      width: 96%;
      height: auto;
      background: #ffffff;
      margin:0 2%;
      margin-top: 2rem;
      margin-bottom: 1rem;
      font-size:0.1rem;
    }
    .recommendHeader{
      width: 96%;
      border-bottom: 1px solid #EEF1F5;
      margin: 0 2%;
      /*display: flex;*/
      /*flex-direction: row;*/
      /*justify-content:left;*/
    }
  }
</style>
