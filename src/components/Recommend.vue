<template>
  <div id="recommend" class="recommendComponents">
    <div class="recommendRow1 recommendRownew">
      <div class="recommendHeader">
        <h3>最新推荐 <span class="recommentTime">{{recommends.length>0 ? recommends[0].newDate : ""}}</span></h3>
      </div>
      <div class="row-fluid">
        <div class="span12">
          <table class="table table-striped table-bordered table-advance" >
            <thead>
            <tr class="recommend-thead-tr">
              <th>股票代码</th>
              <th>股票类型</th>
              <th>推荐操作</th>
              <th>备注</th>
            </tr>
            </thead>
            <tbody v-if="recommends.length>0">
              <tr v-for="(item,index) in recommends">
                <td >{{item.name}}</td>
                <td >{{item.action}}</td>
                <!-- <td >{{item.newDate}}</td>-->
                <td>{{item.type}}</td>
              <td>{{item.note}}</td>
            </tr>
            </tbody>
            <tbody v-else>
              <tr >
                <td colspan="7">当前股市波动较大，不推荐进一步操作，请等待明天的推荐结果
                </td>
              </tr>

            </tbody>
          </table>
          <div class="clear"></div>

        </div>
      </div>
    </div>
    <div class="recommdationBasciInfo" >
      <div class="basicInfoTitle"><h3>基本信息</h3></div>
      <div class="row BasciInfoItem"  v-for="(item1,index) in recommendationArray" :item3="item1">
        <div class="col-md-8" >
          <v-recomendation-img @filterCurImg="filterCurImg($event)" :index="index" :imgSrc="imgSrc? imgSrc:item1.daily" :select="select"></v-recomendation-img>
        </div>
        <div class="col-md-4">
          <table class="table table-striped table-bordered table-advance curHoldingTable">
            <tbody>
            <tr v-for="itemDetail in item1.info" class="recommend-thead-tr row" >
              <td class="col-md-6">{{itemDetail.k}}</td>
              <td class="col-md-6" v-bind:title="itemDetail.v" >{{itemDetail.v}}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import RcomendationImg from './recomendationImg.vue';
  import {httpUrl} from '../apiConfig/api'
  export default {
    name: 'Recommend',
    props: ["recommends"],
    components: {
      'v-recomendation-img':RcomendationImg
    },
    data(){
      return {
        recommendationArray:[],
        item3:{},
        imgSrc:'',
        select:"daily",
        temp:'',

      }
    },
    mounted:function (){
      this.getRecommendationArray()

    },
    methods: {
      filterCurImg:function (obj) {
        var keyName=obj['id'];
        this.temp =this.recommendationArray[obj.index];
        this.imgSrc=this.temp[keyName];
        this.select=obj.id;
      },

      getRecommendationArray:function () {
        this.$http.get(httpUrl.getRecomendationApi).then(function (res) {
          if (res.body.code == 0) {
            this.recommendationArray = res.body.data.entities;
          } else {
            alert(res.body.message)
          }
        }, function () {
          console.log("请求失败")
        });
      }
    },
    watch: {
      item3:function () {
        this.imgSrc=this.item3["daily"];
      }
    }
  }
</script>
<style>
  *
  h1, h2,h3 ,h5{
    font-weight: normal;
    text-align: left;

  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  .recommentTime{
    margin-top: 2rem;
  }
  .recommendRow1{
    width: 96%;
    height: auto;
    background: #ffffff;
    margin-top: 1rem;
  }
  .recommendRownew{
     width: 96%;
    height: auto;
    background: #ffffff;
    margin-top: 1rem;
     margin:0 2%;
  }

  .recommendHeader{
    width: 96%;
    border-bottom: 1px solid #EEF1F5;
    margin: 0 2%;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .row-fluid{
    padding-top:20px;
    width: 96%;
    margin:0 2%;
    padding-bottom: 5px;
  }
  .recommend-thead-tr th{
    text-align: center;
  }


  .table-striped>tbody>tr:nth-of-type(odd) {
    background-color: #fbfcfd;
  }
  .recommendComponents{
    margin-top: 2rem;
    margin-bottom: 2rem;
  }


  .virtualAccountHeader1 h3 {
    margin: 0 2%;
    height: 4rem;
    line-height: 4rem;
    text-align: left;
  }

  .recommendPicRow img{
    width: 100%;
    height: auto;
  }
  .BasciInfoItem{
    margin-right: 0px;
     margin-left: 0px;
    background: #ffffff;
    width: 100%;
    height: auto;
    padding-top: 1rem;
   /* border-bottom: 1px solid #797979;*/
  }
  .recommdationBasciInfo{
    background: #ffffff;
    margin-top: 2rem;
    width: 96%;
    height: auto;
    margin-left: 2%;
    padding-bottom: 2rem;
  }
  .basicInfoTitle>h3{
    text-align: center;
    padding: 2rem 0;
  }

  /*
屏幕兼容(手机)
 */
  @media screen and (max-width:600px)
  {
    .recommend-thead-tr th{
      word-break: keep-all;
      width: 15%;
    }
    .table>thead>tr>th {
      padding:3px;
    }
    .recommendRow1{
      width: 96%;
      /*height: auto;*/
      background: #ffffff;
      /*margin-top: 1rem;*/
      /* margin:0 2%;*/
      font-size:0.1rem;
    }
    .recommendRownew{
      width: 96%;
      /*height: auto;*/
      background: #ffffff;
      margin-top: 1rem;
      margin:0 2%;
      font-size:0.1rem;
    }
    .recommendHistroyRow{
      width: 96%;
      height: auto;
      background: #ffffff;
      margin:0 2%;
      margin-top: 2rem;
      margin-bottom: 1rem;
      font-size:0.1rem;
    }
    .recommendHeader{
      width: 96%;
      border-bottom: 1px solid #EEF1F5;
      margin: 0 2%;
      /*display: flex;*/
      /*flex-direction: row;*/
      /*justify-content:left;*/
    }
  }
</style>
