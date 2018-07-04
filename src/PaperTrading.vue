<template>
  <div class="transactionRecord" >
    <div class="recommendRow">
      <div class="recommendHeader">
        <h3></h3>
        <h4 class="transactionRecordText">交易记录</h4>
      </div>
      <div class="row-fluid">
        <div class="span12">

          <div class="list">
            <template>
              <table class="transactionRecordTable table table-striped table-bordered table-advance">
                <thead>
                <tr class="recommend-thead-tr">
                  <th>股票代码</th>
                  <th>股票类型</th>
                  <th>操作</th>
                  <th>买入日期</th>
                  <th>买入价格(元)</th>
                  <th>卖出日期</th>
                  <th>卖出价格(元)</th>
                  <th>股票份数</th>
                </tr>
                </thead>
                <tbody v-if="items.length>0">
                <tr v-for="(item,index) in items">
                  <td>
                    {{item.name}}
                  </td>
                  <td>
                    {{item.type}}
                  </td>
                  <td>
                    {{item.action}}
                  </td>
                  <td>
                    {{item.oldDate}}
                  </td>
                  <td>
                    <div class="data_box">
                      {{item.oldPrice | toFixed2|setNum}}
                    </div>
                  </td>
                  <td>
                    {{item.newDate}}
                  </td>
                  <td>
                    <div class="data_box">
                      {{item.newPrice | toFixed2}}
                    </div>
                  </td>
                  <td>
                    <div class="data_box">
                      {{item.amount| toFixed2|setNum}}
                    </div>
                  </td>
                </tr>
                </tbody>
                <tbody v-else>
                <tr >
                  <td colspan="9">当前股市波动较大，无交易操作
                  </td>
                </tr>
                </tbody>
              </table>
              <pagination :page-index="currentPage" :total="count" :page-size="pageSize" @change="pageChange">
              </pagination>
            </template>
          </div>
          <div class="clear"></div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import VirtualAccount from "./components/VirtualAccount"
  import CurrentHolding from './components/CurrentHolding'
  import TransactionRecord from  "./components/TransactionRecord"
  import  ProfitRecord from "./components/profitRecord"
  import {httpUrl} from './apiConfig/api'
    export default {
      name: "paper-trading",
      data() {
        return {
          virtCount: {},
          holding: [],
          transactionRecord:[],
          profitRecord:[],
          pageSize:10,
          pageNo:1,
          date:"",
          time:[],
          gain:[],
          virtualEmpPresent:0
        }
      },
      components: {
        ProfitRecord,
        'virtual-account': VirtualAccount,
        'current-holding': CurrentHolding,
        "transaction-record":TransactionRecord,
        "profit-record":ProfitRecord
      },
      mounted: function () {
        this.getVirtualAccount();

        this.fetchTrendData();

        this.fetchCurTrendRecord();

        this.getProfitLine();
        /* this.fetchGetGainRecord();*/
        this.getVirtualEmpPresent();
      },
      methods:{
        /**
         * 获取虚拟账户总览
         */
        getVirtualAccount:function () {
          this.$http.get(httpUrl.tradeGetOverviewApi).then(function (res) {
            //console.log(res.body.data)
            if (res.body.code == 0) {
              this.virtCount = res.body.data.entity;
            } else {
              alert(res.body.message)
            }
          }, function () {
            console.log("请求失败")
          });
        },

        /**
         * 获取当前持股信息
         */
        fetchTrendData (){
          this.$http.get(httpUrl.tradeFindStockApi).then(function(res){
            if(res.body.code==0){
              this.holding=res.body.data.entities;
            }else{
              alert(res.body.message)
            }
          },function(){
            console.log("请求失败")
          });
        },

        /**
         * 获取当前交易记录
         */
        fetchCurTrendRecord(){
          this.$http.get(httpUrl.getLastTradeRecordApi).then(function(res){
            console.log(res.body.data)
            if(res.body.code==0){
              this.transactionRecord=res.body.data.entities;
            }else{
              alert(res.body.message)
            }
          },function(){
            console.log("请求失败")
          });
        },

        /**
         * 获取盈利历史记录
         */
        fetchGetGainRecord(){
          this.$http.get(httpUrl.searchLastGainApi,{
            params:{pageSize:this.pageSize,pageNo:this.pageNo}
          }).then(function(res){
            console.log("dfasfs")
            console.log(res.body.message)
            if(res.body.code==0){
              this.profitRecord=res.body.data.entities;
            }else{
              alert(res.body.message)
            }
          },function(){
            console.log("请求失败")
          });
        },
        changeSearchDate(e){
          this.date=e;
        },
        getProfitLine(){
          this.$http.get(httpUrl.getTotalProfitLineApi).then(function(res){
            console.log(res.body.data)
            if(res.body.code==0){
              this.time = res.body.data.entity.time;
              this.gain = res.body.data.entity.gain;
            }else{
              alert(res.body.message)
            }
          },function(){
            console.log("请求失败")
          });
        },
        /**
         * 获取闲置率
         */
        getVirtualEmpPresent () {
          this.$http.get(httpUrl.getEmptyPresentApi).then(function(res){
            if(res.body.code==0){
              this.virtualEmpPresent=res.body.data.idleRate;
            }else{
              alert(res.body.message)
            }
          },function(){
            console.log("请求失败")
          });
        }
      }

    }
</script>

<style scoped>
  html,body{
    height: auto!important;
  }
  .paperTrading{
    background: #E9ECF3;
    margin-bottom: 50px;
  }

</style>
