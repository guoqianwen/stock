<template>
  <div id="marketTrend" class="marketTrendComponents">
    <div class="marketTrendRow">
      <div class="marketTrendHeader">
        <h3>指数对比</h3>
      </div>
      <div class="row-fluid">
        <div class="span6" style="width: 90%; margin-left: 5%">
          <div class="" style="">
            <div :class="className" :id="id" :style="{height:height,width:width}" ref="myEchart"></div>
          </div>
        </div>
        <div class="clear"></div>
        <!--<div class="btn-group" role="group" style="margin-bottom: 20px;display: flex;padding-bottom: 2rem;">-->
          <!--  <button  v-for="btn in btnArray" @click="changeTrendTime(btn.id)"  type="button" class="btn btn-default" :class="btn.id==select ? 'activeBtn':''">{{btn.time}}</button>-->
        <!--</div>-->
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
        default: (window.height*80)+"%"
      },
      height: {
        type: String,
        default: '400px'
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
          }],
        min:2000,
        max:5000
      }
    },
    mounted() {
      this.initChart();
      this.cpmputerMaxValue();
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
              data: ['千古指数','上证指数']
            },
            toolbox: {
              show: false,
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
              min: this.min,
              max:this.max,
              axisLabel: {
                formatter: '{value}',
              }
            },
            grid: {
              x:39
            },
            series: [
              {
                name: '千古指数',
                type: 'line',
                data: this.trend.aiMarket
              },
              {
                name: '上证指数',
                type: 'line',
                data:  this.trend.baseMarket
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
            data: ['千古指数','上证指数']
          },
          toolbox: {
            show: false,
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
            min: this.min,
            axisLabel: {
              formatter: '{value}'
            }
          },
          series: [
            {
              symbol: "none",
              name: '千古指数',
              type: 'line',
              data: this.trend.aiMarket
            },
            {
              symbol: "none",
              name: '上证指数',
              type: 'line',
              data:  this.trend.baseMarket
            }

          ]
        })
        }
      },
      changeTrendTime(e) {
        console.log(e)
        this.$emit('filterTrendTime', e)
      },
      cpmputerMaxValue:function(){
        var arr1 =  this.trend.baseMarket;
        var arr2 =  this.trend.aiMarket;

       this.max = Math.max.apply(null, arr1)>Math.max.apply(null, arr2)? Math.max.apply(null, arr1) : Math.max.apply(null, arr2);
        this.min = Math.min.apply(null, arr1)<Math.min.apply(null, arr2)? Math.min.apply(null, arr1) : Math.min.apply(null, arr2);

      }
    },
    watch:{
      trend:function(){
        this.initChart();
        this.cpmputerMaxValue();
      },
      max:function () {
        this.initChart();
      },
      min:function () {
        this.initChart();
      }
    }
  }
</script>
<style>
  *
  .marketTrendComponents{
    margin-left: 21%;
    width: 58%;
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
    width: 100%;
    height: auto;
    background: #ffffff;
  }
  .marketTrendHeader{
    width: 96%;
    border-bottom: 1px solid #EEF1F5;
    margin: 0 2%;
    display: flex;
    flex-direction: row;
    justify-content: center;
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
      margin-left: 0.5%;
      width: 100%;
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
      width: 80%;
      border-bottom: 1px solid #EEF1F5;
      margin-left: 12%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
    .marketTrendHeader h3{
      width: 100%;
      text-align: center;
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
