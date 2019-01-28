<template>
  <div>
    <div class="diagnosticStock1">
      <div class="diagnosticStockInfo1">
        <div class="diagnosticStockHead1">
          <h3>毕达诊股(A股)</h3>
        </div>
        <div class="diagnosticStockBar">
          <input placeholder="输入股票代码或公司名称"/>
          <button v-on:click="">诊股</button>
        </div>
        <div class="theComment1">
        <p>该股票每天的综合评分会根据行情的变化而做出相应的调整，在一个完整的交易段内，请需要持续关注。</p>
      </div>
      </div>

      <div class="diagnosticStockInfo1_1">
        <div class="row-fluid">
          <div class="span12">
            <div class="list">
              <template>
                <div class="theScore">
                  <div class="left_content">
                    <table class="table table-striped table-bordered table-advance diagnosticStockInfoTb1" contenteditable="false" >
                      <tbody>
                        <tr class="">
                          <th class="companyCodeAndName" style="padding-left: 25%;">2019-01-26&nbsp;平安银行(000001)</th>
                        </tr>
                        <tr class="">
                          <td class="score" >55分</td>
                        </tr>
                        <tr class="">
                          <td class="">
                            <span class="" style="padding: 5px">卖出&nbsp;</span>
                            <span class="" style="padding: 5px;background-color: #e9235b;font-weight: 600">观望&nbsp;</span>
                            <span class="" style="padding: 5px">买入</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="right_content">
                    <table class="table table-striped table-bordered table-advance diagnosticStockInfoTb1" contenteditable="false" >
                      <tbody>
                        <tr class="">
                          <td class="right_col"><span style="font-weight: 700">综合诊断：</span>该股票预期打败<span :class="{Red:1==1}">50%</span>的股票</td>
                        </tr>
                        <tr class="">
                          <td class="right_col"><span style="font-weight: 700">预期胜率：</span><span :class="{Red:1==1}">60%</span></td>
                        </tr>
                        <tr class="">
                          <td class="right_col"><span style="font-weight: 700">该股票持有15天预期收益率范围为：</span><span :class="{Green:1==1}">-10%</span> ~ <span :class="{Red:1==1}">20%</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>

      <div class="diagnosticStockInfo1_1 diagnosticStockInfo1_1_1">
        <div class="row-fluid">
          <div class="span12">
            <div class="list">
              <template>
                <div>
                <table class="table table-striped table-bordered table-advance diagnosticStockInfoTb1" contenteditable="false" >
                  <tbody>
                    <tr class="">
                      <th class="">技术指标</th>
                    </tr>
                    <tr class="">
                      <td class="right_col"><span style="font-weight: 700">选股动向：</span>3连阳&nbsp;\&nbsp;本月发生大宗交易&nbsp;\&nbsp;信托持股(近六个月)</td>
                    </tr>
                    <tr class="">
                      <td class="right_col"><span style="font-weight: 700">技术形态：</span>趋势拐点&nbsp;\&nbsp;缩量&nbsp;\&nbsp;价升量涨</td>
                    </tr>
                    <tr class="">
                      <td class="right_col"><span style="font-weight: 700">买入信号：</span>MACD黄金交叉&nbsp;\&nbsp;突破BOLL上轨</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              </template>
            </div>
          </div>
        </div>
      </div>

      <div class="diagnosticStockInfo1_2">
          <div class="row-fluid">
            <div class="span12">
              <div class="list">
                <template>
                  <div class="operate_finance">
                    <div class="left_content_operate">
                      <table class="table table-striped table-bordered table-advance diagnosticStockInfoTb1" contenteditable="false" >
                        <tbody>
                          <tr class="">
                            <th class="">经营状况(参考 2012-2017 年财报)</th>
                          </tr>
                          <tr class="">
                            <td class="left_col"><span style="font-weight: 700">近5年来平均毛利率：</span><span :class="{Green:1==1}">30%</span>，稳中有降</td>
                          </tr>
                          <tr class="">
                            <td class="left_col"><span style="font-weight: 700">近5年来平均ROE：</span><span :class="{Green:1==1}">12%</span>，呈现下降趋势</td>
                          </tr>
                          <tr class="">
                            <td class="left_col"><span style="font-weight: 700">近5年来平均营收增长：</span><span :class="{Green:1==1}">20%</span>，下滑明显</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div class="right_content_finance">
                      <table class="table table-striped table-bordered table-advance diagnosticStockInfoTb1" contenteditable="false" >
                        <tbody>
                          <tr class="">
                            <th class="">财务风险(2019-01-26)</th>
                          </tr>
                          <tr class="">
                            <td class="right_col"><span style="font-weight: 700">该股票质押率为：</span><span :class="{Green:1==1}">15%</span></td>
                          </tr>
                          <tr class="">
                            <td class="right_col"><span style="font-weight: 700">商誉占市值比：</span><span :class="{Green:1==1}">6%</span></td>
                          </tr>
                          <tr class="">
                            <td class="right_col"><span style="font-weight: 700">公司负债率为：</span><span :class="{Green:1==1}">90%</span></td>
                          </tr>
                          <tr class="">
                            <td class="right_col"><span style="font-weight: 700">经营现金流占总资产：</span><span :class="{Green:1==1}">10%</span></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </template>
              </div>
            </div>
          </div>
      </div>
      <div class="" style="clear:both"></div>
      <div class="theComment2">
        <p>风险提示：诊断结果通过AI模型加工客观数据而成，仅供参考，不构成投资建议</p>
      </div>
  </div>

  <div class="diagnosticStock2">
    <div class="diagnosticStockInfo2">
      <div class="diagnosticStockHead2">
        <h3>近5财务数据详情</h3>
      </div>
      <div class="row-fluid">
        <div class="span12">
          <div class="list">
            <template>
              <div class="">
                <table class="table table-striped table-bordered table-advance curHoldingTable pc_table" contenteditable="false" >
                  <thead>
                  <tr class="diagnosticStockTbTh2" >
                    <th class="theFirstColumn">
                      <span class="tb_years">年度</span>
                      <span class="tb_project">科目</span>
                    </th>
                    <th>2017</th>
                    <th>2016</th>
                    <th>2015</th>
                    <th>2014</th>
                    <th>2013</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr class="tb_tb_tr">
                    <th>毛利率</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr class="tb_tb_tr">
                    <th>净利率</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr class="tb_tb_tr">
                    <th>营收增长率</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr class="tb_tb_tr">
                    <th>期末经验现金流</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr class="tb_tb_tr">
                    <th>资产负债比</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr class="tb_tb_tr">
                    <th>ROE</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr class="tb_tb_tr">
                    <th>净利润</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr class="tb_tb_tr">
                    <th>营业总收入</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr class="tb_tb_tr">
                    <th>商誉</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr class="tb_tb_tr">
                    <th>市值(年底)</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="diagnosticStock3">
    <div class="diagnosticStockInfo3">
      <div class="diagnosticStockHead3">
        <h3>AI得分排名</h3>
      </div>
      <div class="row-fluid">
        <div class="span12">
          <div class="list">
            <template>
              <div>
                <table class="table table-striped table-bordered table-advance diagnosticStockInfoTb3" contenteditable="false">
                  <thead>
                  <tr class="diagnosticStockTbTh3">
                    <th>股票代码</th>
                    <th>公司名称</th>
                    <th>AI评分</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
  import {httpUrl} from './apiConfig/api';
  export default {
    data () {
      return {
        isLogin:true
      }
    },
    components: {
    },
    mounted: function () {
      // /**
      //  * 获取推荐信息
      //  */
      // this.fetchLastRecomData();

    },

    methods:{
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

    },
    watch:{
      initAmount:function(val, oldVal){
        this.fetchLastRecomData();
      }
    }
  }
</script>

<style scoped>
  *
  .diagnosticStock1 {
    width: 96%;
    height: auto;
    background: #ffffff;
    margin: 2rem 2% 3rem 2%;
  }
  .diagnosticStock2{
    width: 96%;
    height: auto;
    background: #ffffff;
    margin: 2rem 2% 3rem 2%;
  }
  .diagnosticStock3{
    width: 96%;
    height: auto;
    background: #ffffff;
    margin: 2rem 2% 3rem 2%;
  }
  .diagnosticStockHead1{
    padding-top: 1rem;
    margin-top: 20px;
    border-bottom: 1px solid #eef1f5;
  }
  .diagnosticStockHead2{
    padding-top: 1rem;
    margin-top: 20px;
    border-bottom: 1px solid #eef1f5;
    margin-bottom: 10px;
  }
  .diagnosticStockHead3{
    padding-top: 1rem;
    margin-top: 20px;
    border-bottom: 1px solid #eef1f5;
    margin-bottom: 10px;
  }
  .diagnosticStockHead1 >h3{
    height: 3rem;
    text-align: center;
  }
  .diagnosticStockHead2 >h3{
    height: 3rem;
    text-align: center;
  }
  .diagnosticStockHead3 >h3{
    height: 3rem;
    text-align: center;
  }
  .diagnosticStockInfo1{
    padding-bottom: 2rem;
    width: 96%;
    margin: 0 2%;
    margin-top: 20px;
  }
  .diagnosticStockInfo1_1{
    padding-bottom: 2rem;
    width: 96%;
    margin: 0 2%;
    margin-top: 20px;
  }
  .diagnosticStockInfo1_1_1{
    float: left;
    margin-top: 50px;
  }
  .diagnosticStockInfo1_2{
    padding-bottom: 2rem;
    width: 96%;
    margin: 0 2%;
    margin-top: 20px;
  }
  .diagnosticStockInfo2{
    padding-bottom: 2rem;
    width: 96%;
    margin: 0 2%;
    margin-top: 20px;
  }
  .diagnosticStockInfo3{
    padding-bottom: 2rem;
    width: 96%;
    margin: 0 2%;
    margin-top: 20px;
  }
  .diagnosticStockBar{
    margin-top: 10px;
  }
  .diagnosticStockBar input{
    width: 45%;
    height: 30px;
  }
  .theComment1{
     margin-top: 5px;
   }
  .theComment2{
    padding-bottom: 5px;
  }
  .diagnosticStockInfoTb1{
    border: none;
  }
  .diagnosticStockInfoTb1 th{
    width: 50%;
  }
  .diagnosticStockTbTh2 th{
    text-align: center;
  }
  .diagnosticStockTbTh3 th{
    text-align: center;
  }
  .theFirstColumn{
    width: 15%;
    background: #fff url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxsaW5lIHgxPSIwIiB5MT0iMCIgeDI9IjEwMCUiIHkyPSIxMDAlIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEiLz48L3N2Zz4=) no-repeat 100% center;
  }
  .tb_project{
    margin-left: 40%;
  }
  .tb_years{
  }
  .right_col{
    text-align: left;
    padding-left: 5%;
  }
  .left_col{
    text-align: left;
    padding-left: 10%;
  }
  .companyCodeAndName{
    font-size: large;
  }
  .score{
    font-size: xx-large;
    font-weight: 700;
  }

  .left_content{
    float: left;
    width: 30%;
    margin-left: 15%;
  }
  .left_content td{
    border: none;
  }
  .left_content th{
    border: none;
  }
  .right_content{
    float: left;
    width: 45%;
    margin-left: 5%;
    margin-top: 20px;
  }
  .right_content td{
    border: none;
  }
  .right_content th{
    border: none;
  }
  .left_content_operate{
    width: 47%;
    float: left;
  }
  .right_content_finance{
    width: 49%;
    float: right;
  }
  .operate_finance{
    float: left;
    width: 100%;
  }
  .theScore{
    float: left;
    margin-left: 15%;
    background: #e0e0e0;
  }
  /*
 屏幕兼容(平板)
  */
  @media screen and (min-width:600px) and (max-width:900px)
  {

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
    .diagnosticStock1{
      width: 100%;
      margin-left: 0px;
    }
    .diagnosticStock2{
      width: 100%;
      margin-left: 0px;
    }
    .diagnosticStock3{
      width: 100%;
      margin-left: 0px;
    }
    .diagnosticStockBar{
      font-size: 1rem;
      float: left;
      margin-bottom: 15px;
      width: 100%;
      text-align: left;
    }
    .diagnosticStockBar input{
      width: 85%;
    }
    .theComment1 p{
      text-align: left;
    }
    .theComment2{
      margin-left: 2%;
    }
    .theComment2 p{
      text-align: left;
    }
    .diagnosticStockInfoTb1{
      border: none;
    }
    .diagnosticStockInfoTb1 th{
      border: none;
    }
    .diagnosticStockInfoTb1 td{
      border: none;
      text-align: left;
    }
    .left_col{
      border-right: 2px solid #ddd !important;
    }
    .right_col{

    }
    .tb_project{
      margin-left: -10%;
    }
    .tb_years{
      margin-left: 30%;
    }
    .tb_tb_tr th{
      font-size: 2px;
      padding: 1px;
    }
    .theFirstColumn{
      width: 20%;
    }
  }
</style>
