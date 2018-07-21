<template>
    <div class="DataInquiry">
        <div class="DataInquiryHead">
            <h3>质押率查询</h3>
        </div>
        <div class="DataInquiryBar">
              <label>输入公司名称关键字:</label><input name="companyName" v-model="name"/>
              <label>输入股票代码:</label><input name="code" v-model="code"/>
              <button v-on:click="searchInquriyInfo">查询</button>
        </div>
        <div class="DataInquiryInfo">
          <div class="row-fluid">
            <div class="span12">
              <div class="list">
                <template>
                  <table class=" table table-striped table-bordered table-advance">
                    <thead>
                    <tr class="DataInquiry-thead-tr">
                      <th>日期</th>
                      <th>证券代码</th>
                      <th>证券简称</th>
                      <th>质押笔数</th>
                      <th>无限售股份质押数量(万)</th>
                      <th>有限售股份质押数量(万)</th>
                      <th>A股总股本数(万)</th>
                      <th>质押比例(%)</th>
                    </tr>
                    </thead>
                    <tbody v-if="items.length>0">
                    <tr v-for="(item,index) in items">
                      <td>
                        {{item.date}}
                      </td>
                      <td>
                        {{item.code}}
                      </td>
                      <td>
                        {{item.name}}
                      </td>
                      <td>
                        {{item.pledgeNumber}}
                      </td>
                      <td>
                        {{item.unlimitedPledge}}
                      </td>
                      <td >
                        {{item.limitedPledge}}

                      </td>
                      <td>
                        {{item.total}}
                      </td>
                      <td >
                        {{item.rate}}
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
  .row-fluid {
    padding-top: 20px;
    width: 96%;
    margin: 0 2%;
    padding-bottom: 5px;
  }
</style>
