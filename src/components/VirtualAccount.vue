<template>
  <div class="virtualAccount">
    <div class="row virtualAccountRow">
      <div class="virtualAccountHeader">
        <h3 class="virtureAllLook">虚拟账户总览</h3>
      </div>
      <div class="row-fluid virtualAccountBox">
        <div class="col-md-3 virtualAccountC4">
          <div :class="className" :id="id" :style="{height:height,width:width}" ref="myEchart"></div>
        </div>
        <div class="col-md-9 virtualAccountC8">
          <div class="row">
            <!-- <div class="col-md-4">
               <div :class="className" :id="id" :style="{height:height,width:width}" ref="myEchart"></div>
             </div>-->
            <div class="col-md-12">
              <table cellspacing="0" cellpadding="0" border="0" style="float: right; margin-top: 13%"
                     class="virtable table table-striped table-bordered table-advance">
                <tbody>
                <tr>
                  <td>开始日期</td>
                  <td>{{virtCount.startDate}}</td>
                  <td>截止日期:</td>
                  <td>
                    <div class="data_box">{{virtCount.date}}</div>
                  </td>
                </tr>
                <tr>
                  <td>初始金额:</td>
                  <td>
                    <div class="data_box">¥{{virtCount.initAmount|setNum}}</div>
                  </td>
                  <td>总资产:</td>
                  <td>
                    <div class="data_box">¥{{virtCount.totalAmount|setNum}}</div>
                  </td>
                </tr>
                <tr>
                  <td>持有股金:</td>
                  <td>
                    <div class="data_box">¥{{virtCount.stockAmount|setNum}}</div>
                  </td>
                  <td>账户余额:</td>
                  <td>
                    <div class="data_box">¥{{virtCount.balance|setNum}}</div>
                  </td>
                </tr>
                <tr>
                  <td>今日盈利率:</td>
                  <td>
                    <div class="data_box" :class="{Green:virtCount.totalGain<0,Red:virtCount.totalGain>=0}">
                      {{(virtCount.todayGain * 100).toFixed(2)}}%
                    </div>
                  </td>
                  <td>累计收益率:</td>
                  <td>
                    <div class="data_box" :class="{Green:virtCount.totalGain<0,Red:virtCount.totalGain>=0}">
                      {{virtCount.totalGain * 100 | toFixed2}}%
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>做空金额:</td>
                  <td>
                    <div class="data_box">¥{{virtCount.coverAmount|setNum}}</div>
                  </td>

                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    </div>
    <div  class="row virtualAccountRow">
      <div class="virtualAccountHeader">
        <h3 class="virtureAllLook">总盈利率  <span class="virtualEmpty">(资金平均闲置率：{{virtualEmpPresent | toFixed2}}%)</span></h3>
      </div>
      <div class="row-fluid virtualAccountBox">
        <div class="col-md-12 virtualAccountC4">
          <div :class="className" :id="id1" :style="{height:height1,width:width}" ref="myEchart1"></div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import echarts from 'echarts'
  import {httpUrl} from '../apiConfig/api'
  /*  import {httpUrl} from './apiConfig/api'*/
  export default {
    name: "virtual-account",
    props: {
      className: {
        type: String,
        default: 'yourClassName'
      },
      id: {
        type: String,
        default: 'yourID'
      },
      id1:{
        type: String,
      },
      width: {
        type: String,
        default: '100%'
      },
      height: {
        type: String,
        default: '200px'
      },
      height1: {
        type: String,
        default: '200px'
      },
      virtCount: {
        type: Object,
        required: true
      },
      virtualEmpPresent:{
        type: Number,
        required: true
      }

    },
    data() {
      return {
        chart: null,
        gain:[],
        time:[]
      }
    },
    mounted() {
      this.getProfitLine();
      console.log("dsamdsk");
      console.log(this.time);
      console.log(this.gain);
      this.initChart();


    },
    beforeDestroy() {
      if (!this.chart) {
        return
      }
      if (!this.chart1) {
        return
      }
      this.chart.dispose();
      this.chart = null;
      this.chart1.dispose();
      this.chart1 = null;
    },
    methods: {
      initChart() {
        console.log("dsamdsk");
        this.chart = echarts.init(this.$refs.myEchart);
        // 把配置和数据放这里
        this.chart.setOption({
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          color: ['#2EC7C9', '#5AB1EF'],
          legend: {
            x: 'center',
            y: 'bottom',
            data: ['投入资金', '当前资金']
          },
          series: [
            {
              name: '盈利状况',
              type: 'pie',
              radius: [10, 50],
              center: ['50%', '50%'],
              roseType: 'area',
              x: '50%',
              max: 40,
              sort: 'ascending',
              data: [
                {
                  value: this.virtCount.initAmount,
                  name: '投入资金'
                },
                {
                  value: this.virtCount.totalAmount,
                  name: '当前资金'
                }
              ]
            }
          ]
        })

      },
      initChart1(){
        this.chart1 = echarts.init(this.$refs.myEchart1);
        // 把配置和数据放这里
        this.chart1.setOption({
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['大盘指数', '引擎指数']
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data:  this.time,
            // x轴的字体样式
            axisLabel: {
              show: true,
              textStyle: {
                color: '#000',
              }
            },
            // x轴的颜色和宽度
            axisLine:{
              lineStyle:{
                color:'#fff',
                width:0.5,   //这里是坐标轴的宽度,可以去掉
              }
            }
          },
          yAxis: {
            type: 'value',
          },
          series: [
            {
              data:  this.gain,
              type: 'line',
              symbol:'circle',
              itemStyle : {
                normal : {
                  color:'#5AB1EF',
                  lineStyle:{
                    color:'#2EC7C9',
                  }
                }
              }
            }
          ]
        })
      },
      getProfitLine(){
        this.$http.get(httpUrl.getTotalProfitLineApi).then(function(res){
          console.log(res.body.data)
          if(res.body.code==0){
            this.time = res.body.data.entity.time;
            this.gain = res.body.data.entity.gain;
            this.initChart1();
          }else{
            alert(res.body.message)
          }
        },function(){
          console.log("请求失败")
        });
      }

    },
    watch: {
      virtCount: function () {
        this.initChart();
      }
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
  }

  .virtable {
    margin: 2% auto !important;
  }

  .virtualAccountHeader {
    margin-top: 1.5rem;
    background: #ffffff;
    width: 100%;
    border-bottom: 1px solid #EEF1F5;
    text-align: left;
    height: 4rem;
  }

  .virtualAccountHeader h3 {
    margin: 0 2%;
    height: 4rem;
    /*  margin-top:10px;*/
    line-height: 4rem;
    text-align: left;
  }

  .virtualAccountC4 {
    background: #ffffff;
    margin-top: 0.5rem;
  }

  .virtualAccountC8 {
    margin-top: 0.5rem;
    margin-left: 0.5rem;
    background: #ffffff;
  }

  .data_box {
    width: 63%;
    text-align: right;
  }
  .virtualEmpty{
    font-size: 1.8rem;
    color: red;
  }

  /*
屏幕兼容(手机)
*/
  @media screen and (max-width:600px)
  {
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
      width: 96%;
      margin: 0 2%;

    }
    .virtualAccountC8 {
      width: 100%;
      margin-left: 0rem;
    }
    .col-md-12{
      padding: 1px;
    }
    .virtureAllLook{
      font-size: 1.5rem;
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
  }
</style>
