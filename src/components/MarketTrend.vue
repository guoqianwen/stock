<template>
  <div id="marketTrend" class="marketTrendComponents">
    <div class="marketTrendRow">
      <div class="marketTrendHeader">
        <h3>大盘与引擎的走势</h3>
      </div>
      <div class="row-fluid">
        <div class="span6" style="width: 90%; margin-left: 5%">
          <div class="" style="">
            <div :class="className" :id="id" :style="{height:height,width:width}" ref="myEchart"></div>
          </div>
        </div>
        <div class="clear"></div>
        <div class="btn-group" role="group" style="margin-bottom: 20px;display: flex;">
            <button  v-for="btn in btnArray" @click="changeTrendTime(btn.id)"  type="button" class="btn btn-default" :class="btn.id==select ? 'activeBtn':''">{{btn.time}}</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import echarts from 'echarts'
  export default {
    name: 'MarketTrend',
    props:{
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
        default: '100%'
      },
      height: {
        type: String,
        default: '200px'
      },
      trend:{
        type: Object,
        required:true
      },
      select:String
    },
    data() {
      return {
        chart: null,
        btnArray:[
          {
            id:'WEEK',
            time:"1/周"
          },{
            id:'MONTH',
            time:"1/月"
          },{
            id:'QUARTER',
            time:"1/季度"
          },{
            id:'YEAR',
            time:"1/年"
          }]
      }
    },
    mounted() {
      this.initChart();
    },
    beforeDestroy() {
      if (!this.chart) {
        return
      }
      this.chart.dispose();
      this.chart = null;
    },
    methods: {
      initChart() {
        this.chart = echarts.init(this.$refs.myEchart,'macarons');
        if ($(window).width() <= 600) {
          // 把配置和数据放这里
          this.chart.setOption({
            tooltip: {
              trigger: 'axis'
            },
            legend: {
              x: 'left',
              data: ['大盘指数','', '引擎指数']
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
              data: this.trend.time
            },
            yAxis: {
              type: 'value',
              min: 2000,
              axisLabel: {
                formatter: '{value}'
              }
            },
            series: [
              {
                name: '大盘指数',
                type: 'line',
                data:  this.trend.baseMarket,
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
                data: this.trend.aiMarket
              }
            ]
          })
        } else {
        // 把配置和数据放这里
        this.chart.setOption({
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
            data: this.trend.time
          },
          yAxis: {
            type: 'value',
            min: 2000,
            axisLabel: {
              formatter: '{value}'
            }
          },
          series: [
            {
              name: '大盘指数',
              type: 'line',
              data:  this.trend.baseMarket,
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
              data: this.trend.aiMarket
            }
          ]
        })
        }
      },
      changeTrendTime(e) {
        console.log(e)
        this.$emit('filterTrendTime', e)
      }
    },
    watch:{
      trend:function(){
        this.initChart();
      }
    }
  }
</script>
<style>
  *
  .marketTrendComponents{
   padding: 20px 0;
  }
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
  .marketTrendRow{
    width: 96%;
    height: auto;
    background: #ffffff;
    margin:0 2%;
  }
  .marketTrendHeader{
    width: 96%;
    border-bottom: 1px solid #EEF1F5;
    margin: 0 2%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .btn-group{
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
  }
  button{
    background-color: #ffffff;
  }
  .activeBtn{
    background-color: #D4D4D4;
  }

  /*
 屏幕兼容(手机)
  */
  @media screen and (max-width:600px){
    .marketTrendComponents{
      padding: 20px 0;
    }
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
    .marketTrendRow{
      width: 96%;
      height: auto;
      background: #ffffff;
      margin:0 2%;
    }
    .marketTrendHeader{
      width: 96%;
      border-bottom: 1px solid #EEF1F5;
      margin: 0 2%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
    .btn-group{
      display: flex;
      flex-direction: row;
      justify-content: center;
      width: 100%;
    }
    button{
      background-color: #ffffff;
    }
    .activeBtn{
      background-color: #D4D4D4;
    }

  }
</style>
