<template>
  <div class="content" style="width: 100%;height: 100%;">
    <div class="container-fluid">
      <div class="row-fluid">
        <div class="span12">
          <ul class="breadcrumb">
            <li>
              <a href="./aishare_2.html">主页2222</a> <span class="divider">/</span>
            </li>
            <!--<li>-->
            <!--<a href="./aishare_3.html">投资推荐</a> <span class="divider">/</span>-->
            <!--</li>-->
            <!--<li>-->
            <!--<a href="./aishare_4.html">用户资产</a> <span class="divider">/</span>-->
            <!--</li>-->
            <!--<li>-->
            <!--<a href="./aishare_5.html">投资记录</a> <span class="divider">/</span>-->
            <!--</li>-->
            <li class="active" style="float: right; margin-right: 5%">
              登录
            </li>
          </ul>
        </div>
      </div>

      <div class="row-fluid" style="margin-top: 5%;">
        <div class="span12">
          <div>
            <h4 class="text-left" contenteditable="fasle" style="float: left"><strong>今日推荐</strong></h4>
            <h4 class="text-left" contenteditable="fasle" style="float: left; margin-left: 2%"><strong>2017/03/30</strong></h4>
          </div>
          <table class="table table-striped table-hover">
            <thead>
            <tr>
              <th>symbol</th>
              <th>action</th>
              <th>price</th>
              <th>shares</th>
              <th>capital</th>
              <th>category</th>
              <th>note</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>ATVI</td>
              <td>SELL</td>
              <td align="right">50.19</td>
              <td align="right">8983</td>
              <td align="right">450857</td>
              <td>LONG1</td>
              <td>Activision Blizzard, | COMPUTER SOFTWARE & SERVICES - Mult</td>
            </tr>
            <tr class="success">
              <td>CWEI</td>
              <td>SELL</td>
              <td align="right">131.79</td>
              <td align="right">3312</td>
              <td align="right">436488</td>
              <td>LONG1</td>
              <td>Clayton Williams Ene | ENERGY - Independent Oil & Gas</td>
            </tr>
            <tr>
              <td>MHLD</td>
              <td>SELL</td>
              <td align="right">13.90</td>
              <td align="right">31918</td>
              <td align="right">443660</td>
              <td>LONG2</td>
              <td>Maiden Hldgs Ltd | INSURANCE - Property & Casualty Ins</td>
            </tr>
            <tr class="warning">
              <td>RAD</td>
              <td>COVER</td>
              <td align="right">4.42</td>
              <td align="right">73133</td>
              <td align="right">323248</td>
              <td>SHORT</td>
              <td>Rite Aid Corp | RETAIL - Drug Stores</td>
            </tr>
            </tbody>
          </table>
          <div style="float: right;">
            <!--<span><a>查看更多历史记录 >></a></span>-->
          </div>

          <div class="clear"></div>

        </div>
      </div>

      <div class="row-fluid" style="margin-top: 5%;">
        <div class="span6" style="width: 90%; margin-left: -5.5%">
          <div class="" style="">
            <div class="content" id="aiTrend" style="width: 100%;height:400px;"></div>
          </div>
        </div>
        <div class="clear"></div>
        <div style="margin-left: 120px">
          <input type="button" name="1/周" value="1/周">
          <input type="button" name="1/月" value="1/月">
          <input type="button" name="1/季度" value="1/季度">
          <input type="button" name="1/年" value="1/年">
        </div>
      </div>

      <div class="row-fluid" style="margin-top: 5%;">
        <div class="span6">
          <div class="content" id="aiProportion" style="width:35%;height:400px;"></div>
        </div>
        <div class="span6">
          <table cellspacing="0" cellpadding="0" border="0" width="50%" style="float: right; margin-top: 13%" class="">
            <thead>
            <tr>
              <th width="5%"></th>
              <th width="8%"></th>
              <th width="5%"></th>
              <th width="8%"></th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>总资产:</td>
              <td>￥10,000,000</td>
              <td>今日买入:</td>
              <td>￥20,000</td>
            </tr>
            <tr class="success">
              <td>持有股金:</td>
              <td>￥5,000,000</td>
              <td>今日卖出:</td>
              <td>￥22,100</td>
            </tr>
            <tr>
              <td>累计收益:</td>
              <td>￥50,000</td>
              <td>今日盈利:</td>
              <td>￥2,000</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="clear"></div>

      <div class="row-fluid" style="margin-top: 5%;">
        <h4 class="text-left" contenteditable="fasle"><strong>当前持仓</strong></h4>
        <div class="span6" style="float: left; width: 100%">
          <table class="table table-bordered table-hover table-condensed" contenteditable="false" style="width: 100%;">
            <thead>
            <tr>
              <th>持入日期</th>
              <th>类型</th>
              <th>股票</th>
              <th>旧价</th>
              <th>现价</th>
              <th>持有股数</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>2017-1-1</td><td>低风险</td><td>平安银行</td><td>213</td><td>214</td><td>100</td>
            </tr>
            <tr class="success">
              <td>2017-1-1</td><td>低风险</td><td>招商银行</td><td>200</td><td>220</td><td>100</td>
            </tr>
            <tr class="">
              <td>2017-1-1</td><td>高回报</td><td>建设银行</td><td>123</td><td>153</td><td>100</td>
            </tr>
            <tr class="">
              <td>2017-1-2</td><td>高回报</td><td>平安银行</td><td>213</td><td>220</td><td>100</td>
            </tr>
            <tr class="info">
              <td>2017-1-2</td><td>高回报</td><td>招商银行</td><td>200</td><td>180</td><td>100</td>
            </tr>
            <tr class="info">
              <td>2017-1-2</td><td>低风险</td><td>平安银行</td><td>200</td><td>180</td><td>100</td>
            </tr>
            <tr class="info">
              <td>2017-1-3</td><td>做空</td><td>腾讯</td><td>310</td><td>312</td><td>100</td>
            </tr>
            <tr>
              <td>2017-1-3</td><td>做空</td><td>阿里</td><td>311</td><td>310</td><td>100</td>
            </tr>
            <tr>
              <td>2017-1-3</td><td>做空</td><td>平安银行</td><td>130</td><td>133</td><td>100</td>
            </tr>
            </tbody>
          </table>
        </div>
        <!--<div class="" style="width: 55% ;float: right;margin-right: 5%;margin-top: -3%">-->
        <!--<div class="content" id="aiTrend" style="width: 100%;height:400px;"></div>-->
        <!--</div>-->
        <div class="clear"></div>
      </div>

      <div class="row-fluid">
        <div class="span12">
          <div style="border-top: outset 2px #a94442">
            <p align="center">Posted by: W3School</p>
            <p align="center">Contact information: <a href="mailto:someone@example.com">someone@example.com</a>.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
     option :{

        title: {
          text: '大盘与引擎指数走势',
          subtext: '纯属虚构'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['大盘指数', '引擎指数']
        },
        toolbox: {
          show: true,
          feature: {
            dataZoom: {
              yAxisIndex: 'none'
            },
            dataView: {readOnly: false},
            magicType: {type: ['line', 'bar']},
            restore: {},
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['2017-1-1', '2017-1-2', '2017-1-3', '2017-1-4', '2017-1-5', '2017-1-6', '2017-1-7']
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            formatter: '{value}万'
          }
        },
        series: [
          {
            name: '大盘指数',
            type: 'line',
            data: [10, 12, 15, 16, 14, 17, 13],
            markPoint: {
              data: [
                {type: 'max', name: '最大值'},
                {type: 'min', name: '最小值'}
              ]
            },
            markLine: {
              data: [
                {type: 'average', name: '平均值'}
              ]
            }
          },
          {
            name: '引擎指数',
            type: 'line',
            data: [5, 8, 6, 8, 9, 11.5, 8]
          }
        ]
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>
