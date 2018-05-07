<template>
  <div id="assetRecord" class="assetRecordComponents">
    <div class="row assetRecordRow">
        <div class="assetRecordHeader">
          <h3>资产记录</h3>
        </div>
      <div class="row-fluid assetRecordBox">
        <div class="span6">
          <div :class="className" :id="id" :style="{height:height,width:width}" ref="myEchart"></div>
        </div>
        <div class="span6">
          <table cellspacing="0" cellpadding="0" border="0" style="float: right; margin-top: 13%" class="table table-striped table-bordered table-advance">
            <tbody>
            <tr class="success">
              <td>初始金额:</td>
              <td><div class="data_box">￥{{record.initAmount}}</div></td>
              <td>账户余额:</td>
              <td><div class="data_box">￥{{record.balance}}</div></td>
            </tr>
            <tr>
              <td>总资产:</td>
              <td><div class="data_box">￥{{record.totalAmount}}</div></td>
              <td>今日买入:</td>
              <td><div class="data_box">￥{{record.todayBuy}}</div></td>
            </tr>
            <tr class="success">
              <td>持有股金:</td>
              <td><div class="data_box">￥{{record.stockAmount}}</div></td>
              <td>今日卖出:</td>
              <td><div class="data_box">￥{{record.todaySell}}</div></td>
            </tr>
            <tr>
              <td>累计收益:</td>
              <td><div class="data_box">￥{{record.totalGain}}</div></td>
              <td>今日盈利:</td>
              <td><div class="data_box">￥{{record.todayGain}}</div></td>
            </tr>

            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import echarts from 'echarts'
  export default {
    name: "asset-record",
    props: {
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
        default: '500px'
      },
      record:{
        type: Object,
        required:true
      }
    },
    data() {
      return {
        chart: null
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
        this.chart = echarts.init(this.$refs.myEchart);
        // 把配置和数据放这里
        this.chart.setOption({
          tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          color:['#2EC7C9','#5AB1EF'],
          legend: {
            x : 'center',
            y : 'bottom',
            data:['投入资金','当前资金']
          },
          series : [
            {
              name:'盈利状况',
              type:'pie',
              radius : [30, 110],
              center : ['50%', 200],
              roseType : 'area',
              x: '50%',
              max: 40,
              sort : 'ascending',
              data:[
                {
                  value:this.record.initAmount,
                  name:'投入资金'
                },
                {value:this.record.totalAmount,
                  name:'当前资金'
                }
              ]
            }
          ]
        })
      }
    },
    watch:{
      record:function(){
        this.initChart();
      }
    }
  }


</script>

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
  .assetRecordBox{
    display: flex;
    flex-direction: row;
  }
  .span6{
    width: 50%;
  }
  .assetRecordComponents{
    margin-top:20px;
  }
  .assetRecordRow{
    width: 96%;
    height: auto;
    background: #ffffff;
    margin:0 2%;
    padding-bottom: 20px;
  }
  .assetRecordHeader{
    width: 96%;
    border-bottom: 1px solid #EEF1F5;
    margin: 0 2%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
</style>
