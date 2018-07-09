<template>
  <div class="virtualAccount">
    <div class="row virtualAccountRow">
      <div class="virtualAccountHeader">
        <h3 class="virtureAllLook">虚拟账户总览</h3>
      </div>
      <div class="row-fluid virtualAccountBox">
        <div class="col-md-3 virtualAccountC4">
          <div  :class="className" :id="id" :style="{height:height,width:width}"  ref="myEchart"></div>
        </div>
        <div class="col-md-9 virtualAccountC8">
          <div class="row">
            <div class="col-md-6">
              <table cellspacing="0" cellpadding="0" border="0" style="float: right; margin-top: 13%"
                     class="virtable table table-striped table-bordered table-advance">
                <tbody>
                <tr>
                  <td>开始日期</td>
                  <td>{{virtCountStart.date}}</td>
                </tr>
                <tr>
                  <td>总资产(元):</td>
                  <td>
                    <div class="data_box">{{virtCountStart.totalAsset|setNum}}</div>
                  </td>
                </tr>
                <tr>
                  <td>持股价值(元):</td>
                  <td>
                    <div class="data_box">{{virtCountStart.stockAmount|setNum}}</div>
                  </td>
                </tr>
                <tr>
                  <td>账户余额(元):</td>
                  <td>
                    <div class="data_box">{{virtCountStart.balanceAmount|setNum}}</div>
                  </td>
                </tr>
                <tr>
                  <td>今日盈利率:</td>
                  <td>
                    <div class="data_box" :class="{Green:virtCountStart.todayProfit<0,Red:virtCountStart.todayProfit>=0}">
                      {{(virtCountStart.todayProfit * 100).toFixed(2)}}%
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>平均仓位:</td>
                  <td>
                    <div class="data_box">{{virtCountStart.avgPosition|setNum}}%</div>
                  </td>

                </tr>
                </tbody>
              </table>
            </div>
            <div class="col-md-6">
              <table cellspacing="0" cellpadding="0" border="0" style="float: right; margin-top: 13%"
                     class="virtable table table-striped table-bordered table-advance">
                <tbody>
                <tr>
                  <td>截止日期:</td>
                  <td>
                    <div class="data_box">{{virtCountEnd.date}}</div>
                  </td>
                </tr>
                <tr>
                  <td>总资产(元):</td>
                  <td>
                    <div class="data_box">{{virtCountEnd.totalAsset|setNum}}</div>
                  </td>
                </tr>
                <tr>
                  <td>持股价值(元):</td>
                  <td>
                    <div class="data_box" >
                      {{(virtCountEnd.stockAmount * 100) |setNum}}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>账户余额(元):</td>
                  <td>
                    <div class="data_box">{{virtCountEnd.balanceAmount|setNum}}</div>
                  </td>
                </tr>
                <tr>
                  <td>累计亏盈率:</td>
                  <td>
                    <div class="data_box" :class="{Green:virtCountEnd.totalProfit<0,Red:virtCountEnd.totalProfit>=0}">
                      {{virtCountEnd.totalProfit * 100 | toFixed2}}%
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>今日仓库:</td>
                  <td>
                    <div class="data_box">{{virtCountEnd.todayPosition|setNum}}%</div>
                  </td>

                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    </div>
     </div>
</template>

<script>
  import echarts from 'echarts'
  export default {
    name: "virtual-account",
    props:{
      virtCountStart:{
        type: Object,
        required:true
      },
      virtCountEnd:{
        type: Object,
        required:true
      },
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
        default: '250px'
        },
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
                  value: this.virtCountStart.totalAsset,
                  name: '投入资金'
                },
                {
                  value: this.virtCountEnd.totalAsset,
                  name: '当前资金'
                }
              ]
            }
          ]
        })

      }

    },
    watch: {
      virtCountStart: function () {
        this.initChart();
      },
      virtCountEnd: function () {
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
    text-align: center;
    height: 4rem;
  }

  .virtualAccountHeader h3 {
    margin: 0 2%;
    height: 4rem;
    /*  margin-top:10px;*/
    line-height: 4rem;
    text-align: center;
  }

  .virtualAccountC4 {
    background: #ffffff;
    /*margin-top: 0.5rem;*/
  }

  .virtualAccountC8 {
   /* margin-top: 0.5rem;
    margin-left: 0.5rem;*/
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
