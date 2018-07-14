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
                  <th>交易日期</th>
                  <th>股票代码</th>
                  <th>公司名称</th>
                  <th>股票份数</th>
                  <th>操作</th>
                  <th>买入日期</th>
                  <th>买入价格(元)</th>
                  <th>卖出日期</th>
                  <th>卖出价格(元)</th>
                  <th>盈亏率</th>
                </tr>
                </thead>
                <tbody v-if="items.length>0">
                <tr v-for="(item,index) in items">
                  <td>
                    {{item.tradeDate}}
                  </td>
                  <td>
                    {{item.name}}
                  </td>
                  <td>
                    {{item.companyName}}
                  </td>
                  <td>
                    {{item.amount}}
                  </td>
                  <td>
                    {{item.action}}
                  </td>
                  <td>
                    {{item.oldDate}}
                  </td>
                  <td>
                    {{item.oldPrice}}
                  </td>
                  <td>
                    {{item.newDate}}
                  </td>
                  <td>
                    {{item.newPrice}}
                  </td>
                  <td>
                    {{item.gainRate}}
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
              <pagination :perPages="perPages" :page-index="currentPage" :total="count" :page-size="pageSize" @change="pageChange">
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
  import Pagination from "./Pagination"
  import {httpUrl} from '../apiConfig/api'

  export default {
    name: "transaction-record",
    data() {
      return {
        perPages:3,
        pageSize: 20, //每页显示20条数据
        currentPage: 1, //当前页码
        count: 0, //总记录数
        items:[],
        temp:[]
      }
    },
    components: {
      "pagination": Pagination
    },
    methods: {
      //获取数据
      getList() {
        this.getTransformRecord();
      },

      /**
       * 获取分页交易记录分页信息
       * @param pageSize currentPage
       */
      getTransformRecord: function () {
        this.$http.get(httpUrl.getTradeRecordApi, {
          params: {pageSize:this.pageSize,pageNo:this.currentPage}
        }).then(function (res) {
          if (res.body.code == 0) {
            this.count = res.body.data.total;
            this.items= res.body.data.entities;
            console.log(this.items)
          } else {
            alert(res.body.message)
          }
        }, function () {
          console.log("请求失败")
        });
      },
      //从page组件传递过来的当前page
      pageChange(page) {
        this.currentPage = page
        this.getList()
      },

    },
    mounted() {
      //请求第一页数据
      this.getList()
    },
    watch: {
      transactionRecord(val) {
        this.items = val;
      },
      date(val){
        this.getList(val);
      }
    }
  }
</script>

<style scoped>
  *
  .transactionRecord {
    width: 96%;
    height: auto;
    margin: 0 2% 2% 2%;
    background: #ffffff;
  }

  .transactionRecordText {
    height: 4rem;
    font-size: 24px;
    line-height: 4rem;
    text-align: left;
    margin: 0 0%;
  }

  .forum-list-right {
    width: 66%;
    background: #F2F2F2;
    height: 100%;
    overflow: hidden;
  }

  .forum-list-box {
    height: 100%;
    overflow-y: scroll;
    width: 100%;
  }

  .forum-list-box::-webkit-scrollbar {
    width: 0px;
    height: 0px;
  }

  table {
    margin-bottom: 0px;
  }

  .forumItem {
    display: flex;
    flex-direction: row;
    border: 1px solid #DDDDDD;
    margin: 1rem;
  }

  .forumImg {
    width: 12rem;
    height: 15rem;
    /* border: 1px solid #DDDDDD;*/
  }

  .forumUserImg {
    width: 80%;
    height: 60%;
    margin: 10%;
  }

  .forumUserImg img {
    width: 100%;
    height: 100%;

  }

  .forumInfo {
    /* border: 1px solid #DDDDDD;*/
    width: calc(100% - 12rem);
    height: 15rem;
  }

  .showUserContent {
    width: 100%;
    height: 12rem;
    background: #ffffff;
    /* border: 1px solid #DDDDDD;*/
  }

  .showUserContentDetail {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 3rem;
    line-height: 3rem;
    background: #ffffff;
  }

  .submit_time {
    height: 3rem;
    line-height: 3rem;
  }

  .box {
    padding: 100px;
  }

  .border-left {
    border-left: 1px solid #dddddd;
  }

  .border-right {
    border-right: 1px solid #dddddd;
  }

  .border-bottom {
    border-bottom: 1px solid #dddddd;
  }

  .border-top {
    border-top: 1px solid #dddddd;
  }

  .forumSubmit {
    margin-bottom: 2rem;
  }

  .icon-star {
    color: #FFAC38;
  }

  .recommendHeader {
    text-align: center;
    width: 96%;
    border-bottom: 1px solid #EEF1F5;
    margin: 0 2%;
  }

  .row-fluid {
    padding-top: 20px;
    width: 96%;
    margin: 0 2%;
    padding-bottom: 5px;
  }

  tr > th {
    text-align: center;
  }

  .data_box{
    width:60%;
    text-align: right;
  }

  /*
屏幕兼容(手机)
*/
  @media screen and (max-width:600px)
  {
    /*.transactionRecordTable {*/
    .list {
      font-size: 0.5rem;
      word-break: keep-all;
      padding: 0px;
      overflow: scroll;
    }
  }
</style>
