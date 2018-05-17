<template>
  <div class="profitRecord">
    <div class="recommendRow">
      <div class="recommendHeader">
        <h3></h3>
        <h4 class="profitRecordText">盈利记录</h4>
      </div>
      <div class="row-fluid">
        <div class="span12">

          <div class="list profitRecordTable">
            <template >
              <table class="table table-striped table-bordered table-advance" >
                <thead>
                <tr class="recommend-thead-tr">
                  <th>序号</th>
                  <th>交易日期</th>
                  <th>股票金额</th>
                  <th>账户余额</th>
                  <th>做空余额</th>
                  <th>收益率</th>
                  <th>操作</th>
                </tr>
                </thead>
                <tbody>
                <tr  v-for="(item,index) in items" >
                  <td>
                    {{index+1}}
                  </td>
                  <td>
                    {{item.date}}
                  </td>
                  <td>
                    <div class="data_box">
                      {{item.stock|toFixed2}}
                    </div>
                  </td>
                  <td>
                    <div class="data_box">
                      {{item.balance|toFixed2}}
                    </div>

                  </td>
                  <td >
                    <div class="data_box">
                      {{item.cover|toFixed2}}
                    </div>
                  </td>
                  <td>
                    <span :class="{Green:item.gain<0,Red:item.gain>=0}">{{item.gain*100|toFixed2}}%</span>
                  </td>
                  <td>
                    <a @click="gettradeRecord(item.date)">查看详情</a>
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
  import Pagination from "./Pagination"
   import {httpUrl} from '../apiConfig/api'
  export default {
    name: "profit-record",
    props:{
      profitRecord:{
        type: Array,
        required:true
      }
    },
    data () {
      return {
        pageSize : 20, //每页显示20条数据
        currentPage : 1, //当前页码
        count :0, //总记录数
        items:this.profitRecord
      }
    },
    components:{
      "pagination":Pagination
    },
    methods : {
      //获取数据
      getList () {
         this.getProfitRecord();
      },

      /**
       * 获取分页交易记录分页信息
       * @param pageSize currentPage
       */
      getProfitRecord:function () {
        this.$http.get(httpUrl.searchLastGainApi,{
          params:{pageSize:this.pageSize,pageNo:this.currentPage}
        }).then(function(res){
          console.log(res.body.data)
          if(res.body.code==0){
            this.count = res.body.data.total
            this.items = res.body.data.entities;
          }else{
            alert(res.body.message)
          }
        },function(){
          console.log("请求失败")
        });
      },
      //从page组件传递过来的当前page
      pageChange (page) {
        this.currentPage = page
        this.getList()
      },
      gettradeRecord(date){
        this.$emit('changeSearchDate', date)
      }
    },
    mounted() {
      console.log(this.profitRecord)
      //请求第一页数据
      this.getList()
    },
    filters:{
      toFixed2:function(value){
        return value.toFixed(2);
      }
    }
  }
</script>

<style scoped>
  .profitRecord{
    width: 96%;
    height: auto;
    margin: 0 2% 0% 2%;
    background: #ffffff;
    width: 96%;
    border-bottom: 1px solid #EEF1F5;
  }
  .profitRecordText{
    text-align: left;
    margin:0 0%;
    height: 4rem;
    font-size: 24px;
    line-height: 4rem;
  }
  .data_box{
    width:60%;
    text-align: right;
  }

  table{
    margin-bottom: 0px;
  }

  .forumUserImg img{
    width:100%;
    height:100%;

  }

  .recommendHeader{
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
  tr>th{
    text-align: center;
  }
  td>a{
    cursor: pointer;
  }
</style>
