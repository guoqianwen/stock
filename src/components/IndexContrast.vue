<template>
  <div id="indexContrastContent" class="indexContrastComponents">
        <div class="indexContrastRow">
            <div class="indexContrastHeader">

              <h3>{{heading}}<span v-if="curData">{{"("+curData+")"}}</span></h3>
            </div>
            <div class="row-fluid">
              <div class="span6" style="width: 90%; margin-left: 5%">
                <div class="" style="">
                  <div  :style="{height:height,width:width}" ref="myEchart1"></div>
                </div>
              </div>
              <div class="clear"></div>

            </div>
        </div>
  </div>
</template>

<script>
  import echarts from 'echarts'
  import {httpUrl} from '../apiConfig/api'
    export default {
      name: "index-contrast",
      props: {
        GainInfo:{
          type:Object,
          required:true
        },
        heading:{
          type: String,
          default: ""
        },
        curData:{
          type: String,
          default: ""
        },
        width: {
          type: String,
          default: (window.height*80)+"%"
        },
        height: {
          type: String,
          default: 500+"px"
        }
      },
      data(){
        return{}
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
          this.chart = echarts.init(this.$refs.myEchart1, 'macarons');
            // 把配置和数据放这里
            this.chart.setOption({
              tooltip: {
                trigger: 'axis'
              },
            /*  color: ['blue', 'red','#5AB1EF','black'],*/
              legend: {
                x: 'center',
                data: ['千古指数','上证指数', '沪深300指','创业板指']
              },
              toolbox: {
                feature: {
                  saveAsImage: {}
                }
              },
              xAxis: {
                type: 'category',
                boundaryGap: false,
                data:this.GainInfo.time
              },
              yAxis: {
                type: 'value'
              },
              series: [
                {
                  name:'千古指数',
                  type:'line',
                  data:this.GainInfo.stockGain,
                },
                {
                  name:'上证指数',
                  type:'line',
                  data:this.GainInfo.szGain,
                },
                {
                  name:'沪深300指',
                  type:'line',
                  data:this.GainInfo.hsGain,
                },
                {
                  name:'创业板指',
                  type:'line',
                  data:this.GainInfo.cybGain,
                }
              ]
            })

        },

      },
      watch:{
        GainInfo:function(){
          this.initChart();
        }
      }
    }
</script>


<style>

  *
  #indexContrastContent{
    background: #ffffff;
  }
  .indexContrastComponents{
    margin-top: 2rem;
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
  .indexContrastRow{
    width: 96%;
    height: auto;
    background: #ffffff;
    margin:0 2%;
  }
  .indexContrastHeader{
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
    .indexContrastComponents{
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
    .indexContrastRow{
      width: 96%;
      height: auto;
      background: #ffffff;
      margin:0 2%;
    }
    .indexContrastHeader{
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

  }
</style>

