<template>
    <div class="DataInquiry">
        <div class="DataInquiryHead">
            <h3>质押率查询</h3>
        </div>
        <div class="DataInquiryBar">
              <label class="DataInquiry_lab">输入公司名称关键字:</label><input class="DataInquiry_inp" name="companyName" v-model="name"/>
              <label class="DataInquiry_lab">输入股票代码:</label><input class="DataInquiry_inp" name="code" v-model="code"/>
              <button  type="button" class="btn btn-default DataInquiry_btn"  v-on:click="searchInquriyInfo">查询</button>
        </div>
        <div class="DataInquiryInfo">
          <div class="row-fluid">
            <div class="span12">
              <div class="list">
                <template>
                  <div class="list_tab">
                    <table class=" table table-striped table-bordered table-advance">
                      <thead>
                      <tr class="DataInquiry-thead-tr">
                        <th>日期</th>
                        <th>证券代码<br/>证券简称</th>
                        <th>质押笔数</th>
                        <th>无限售股份质押数量(万)</th>
                        <th>有限售股份质押数量(万)</th>
                        <th>A股总股本数(万)</th>
                        <th>质押比例(%)</th>
                      </tr>
                      <tr class="DataInquiry-thead-tr-app">
                        <th>日期</th>
                        <th>证券代码/<br>证券简称</th>
                        <!--<th>证券简称</th>-->
                        <th>质押笔数</th>
                        <th>无限售<br>质押数量(万)</th>
                        <th>有限售<br>质押数量(万)</th>
                        <th>A股<br>总股本数(万)</th>
                        <th>质押比例(%)</th>
                      </tr>
                      </thead>
                      <tbody v-if="items.length>0">
                      <tr v-for="(item,index) in items">
                        <td>
                          {{item.date}}
                        </td>
                        <td class="app_td">
                          {{item.code}}<br>{{item.name}}
                        </td>
                        <td class="pc_td">
                          {{item.code}}<br>{{item.name}}
                        </td>
                        <td>
                          <div class="data_box3">
                          {{item.pledgeNumber}}
                          </div>
                        </td>
                        <td>
                          <div class="data_box3">
                            {{item.unlimitedPledge}}
                          </div>
                        </td>
                        <td >
                          <div class="data_box3">
                            {{item.limitedPledge}}
                          </div>
                        </td>
                        <td>
                          <div class="data_box3">
                          {{item.total}}
                          </div>
                        </td>
                        <td >
                          <div class="data_box3">
                          {{item.rate}}%
                          </div>
                        </td>
                      </tr>
                      </tbody>
                      <tbody v-else>
                      <tr >
                        <td colspan="9">暂无披露数据
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                  <pagination  :perPages="perPages" :page-index="currentPage" :total="count" :page-size="pageSize" @change="pageChange">
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
  import Pagination from "./components/Pagination"
  import {httpUrl} from './apiConfig/api'
    export default {
        name: "data-inquiry",
        components : {
          Pagination
        },
      data(){
          return {
            name:'',
            code:'',
            perPages:1,
            pageSize : 16 , //每页显示20条数据
            currentPage : 1, //当前页码
            count : 0, //总记录数
            items:[],

          }
      },
      methods:{
        /**
         * 从page组件传递过来的当前page
         */
        pageChange (page) {
          this.currentPage = page;
          this.getDataInquiryList();
        },

        getDataInquiryList:function () {
          this.$http.get(httpUrl.getDataInquriyInfoApi, {
            params: {pageSize:this.pageSize,pageNo:this.currentPage,name:this.name,code:this.code}
          }).then(function (res) {
            console.log(res.body)
            if (res.body.code == 0) {
              this.count = res.body.data.total;
              this.items= res.body.data.entities;
            } else {
              alert(res.body.message)
            }
          }, function () {
            console.log("请求失败")
          });
        },
        searchInquriyInfo:function () {
          this.getDataInquiryList();
        }
      },
      mounted() {
        //请求第一页数据
        this.getDataInquiryList();
      },
    }

</script>

<style scoped>
  *
  html{
    height: 100%!important;
    background: #E9ECF3;
  }
  .content{
    padding-top: 0.1rem;
  }
  .DataInquiry{
    width: 96%;
    height: auto;
    background: #ffffff;
    margin: 2rem 2% 3rem 2%;
  }
  .DataInquiryHead{
    padding-top: 1rem;

  }
  .DataInquiryInfo{
    padding-bottom: 2rem;
    width: 96%;
    margin: 0 2%
  }
  .DataInquiryHead >h3{
    height: 3rem;
    text-align: center;
  }
  .DataInquiry-thead-tr th{
    text-align: center;
  }
  .DataInquiry-thead-tr-app{
    display: none;
  }
  .app_td{
    display: none;
  }
  .row-fluid {
    padding-top: 20px;
    width: 96%;
    margin: 0 2%;
    padding-bottom: 5px;
  }
  .DataInquiry_btn{
    border-radius: 0px;
  }
  .data_box3{
    width:68%;
    text-align: right;
  }

  /*
屏幕兼容(手机)
*/
  @media screen and (max-width:600px)
  {
    .DataInquiryBar{
      font-size: 1rem;
      float: left;
      margin-bottom: 15px;
    }
    .DataInquiry_lab{
      float: left;
      width: 35%;
      text-align: left;
      margin-left: 4%;
    }
    .DataInquiry_inp{
      float: left;
      width: 70%;
      margin-left: 4%;
    }
    .DataInquiry_btn{
      float: left;
      margin-left: 10%;
      border-radius: 0px;
    }
    .DataInquiry-thead-tr{
      display: none;
    }
    .DataInquiry-thead-tr-app{
      display: contents;
    }
    .app_td{
      display: table-cell;
    }
    .pc_td{
      display: none;
    }
    .list{
      font-size: 0.5rem;
      word-break: keep-all;
    }
    .list_tab{
      float: left;
      width: 100%;
      overflow-x: scroll;
    }
    .list th{
      padding: 0px;
      padding-left: 2px;
      padding-right: 2px;
      vertical-align: middle;
      text-align: center;
    }
    .data_box3{
      width:68%;
      text-align: right;
    }
  }

</style>
