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
    export default {
      name: "index-contrast",
      props: {
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
        return {

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
          this.chart = echarts.init(this.$refs.myEchart1, 'macarons');
            // 把配置和数据放这里
            this.chart.setOption({
              title: {
                text: '折线图堆叠'
              },
              tooltip: {
                trigger: 'axis'
              },
              legend: {
                data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
              },
              grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
              },
              toolbox: {
                feature: {
                  saveAsImage: {}
                }
              },
              xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['周一','周二','周三','周四','周五','周六','周日']
              },
              yAxis: {
                type: 'value'
              },
              series: [
                {
                  name:'邮件营销',
                  type:'line',
                  stack: '总量',
                  data:[120, 132, 101, 134, 90, 230, 210]
                },
                {
                  name:'联盟广告',
                  type:'line',
                  stack: '总量',
                  data:[220, 182, 191, 234, 290, 330, 310]
                },
                {
                  name:'视频广告',
                  type:'line',
                  stack: '总量',
                  data:[150, 232, 201, 154, 190, 330, 410]
                },
                {
                  name:'直接访问',
                  type:'line',
                  stack: '总量',
                  data:[320, 332, 301, 334, 390, 330, 320]
                },
                {
                  name:'搜索引擎',
                  type:'line',
                  stack: '总量',
                  data:[820, 932, 901, 934, 1290, 1330, 1320]
                }
              ]
            })

        },
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

