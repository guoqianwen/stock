<!--<template>-->
  <!--<div id="recommend" class="recommendComponents">-->
    <!--<div class="recommendRow1 recommendRownew">-->
      <!--<div class="recommendHeader">-->
        <!--<h3 style="width: 100%;text-align: center"><span class="recommentTime">{{holding.length ? holding[0].newDate : ''}}</span> 推荐</h3>-->
        <!--&lt;!&ndash;<h3 style="width: 100%;text-align: center">最新推荐 <span class="recommentTime">{{recommends.length>0 ? recommends[0].newDate : ""}}</span></h3>&ndash;&gt;-->
      <!--</div>-->
      <!--<div class="row-fluid">-->
        <!--<div class="span12">-->
          <!--&lt;!&ndash;<div>&ndash;&gt;-->
            <!--&lt;!&ndash;<p>交易规则：系统买入卖出价均按收盘价，开盘当天若涨停或跌停，系统将认为此股当天不可操作</p>&ndash;&gt;-->
            <!--&lt;!&ndash;<p>资金使用：本金分8份，外加融资2份，总共10份资金，每只推荐的股票用一份资金买入</p>&ndash;&gt;-->
          <!--&lt;!&ndash;</div>&ndash;&gt;-->
          <!--<table class="table table-striped table-bordered table-advance" >-->
            <!--<thead>-->
            <!--<tr class="recommend-thead-tr">-->
              <!--<th>股票代码<br>公司名称</th>-->
              <!--<th>推荐操作</th>-->
              <!--<th>建议操作比<br>建议操作额(元)</th>-->
              <!--<th>股票类型</th>-->
              <!--<th>备注</th>-->
            <!--</tr>-->
            <!--</thead>-->
            <!--<tbody v-if="recommends.length>0">-->
              <!--<tr v-for="(item,index) in recommends">-->
                <!--<td >{{item.name}}<br>{{item.stockName}}</td>-->
                <!--<td  :class="{Green:item.action=='卖出',Red:item.action=='买入'}">{{item.action}}</td>-->
                <!--&lt;!&ndash; <td >{{item.newDate}}</td>&ndash;&gt;-->
                <!--<td>{{item.investmentRatio*100 |toFixed2 }}%<br>{{item.amount}}</td>-->
                <!--<td>{{item.type}}</td>-->
              <!--<td>{{item.note}}</td>-->
            <!--</tr>-->
            <!--</tbody>-->
            <!--<tbody v-else>-->
              <!--<tr >-->
                <!--<td colspan="7">当前股市波动较大，无推荐，请等待明天的推荐结果-->
                <!--</td>-->
              <!--</tr>-->

            <!--</tbody>-->
          <!--</table>-->
          <!--<div class="clear"></div>-->

        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
    <!--<div class="recommdationBasciInfo" >-->
      <!--<div class="basicInfoTitle"><h3 style="width: 100%">基本信息</h3></div>-->
      <!--<div class="row BasciInfoItem"  style="margin-left: 0;margin-right: 0" v-for="(item1,index) in recommendationArray" :item3="item1">-->
        <!--<div  :class="item1.info!=null? 'col-md-9':'col-md-12'">-->
<!--&lt;!&ndash;-->
          <!--<v-recomendation-img @filterCurImg="filterCurImg($event)" :index="index" :imgSrc="imgSrc? imgSrc:item1.daily" :select="select"></v-recomendation-img>-->
<!--&ndash;&gt;-->
          <!--<v-recomendation-img @filterCurImg="filterCurImg($event)" :index="index"  :imgSrc="item1.showImg" :select="item1.select"></v-recomendation-img>-->

        <!--</div>-->
        <!--<div v-if="item1.info!=null" class="col-md-3 recommdationInfo" >-->
          <!--<table class="table table-striped table-bordered table-advance curHoldingTable">-->
            <!--<tbody>-->
            <!--<tr v-for="itemDetail in item1.info" class="recommend-thead-tr row" >-->
              <!--<td class="col-md-6 base_head_td" >{{itemDetail.k}}</td>-->
              <!--<td class="col-md-6 base_right_td" v-bind:title="itemDetail.v"  >{{itemDetail.v}}</td>-->
            <!--</tr>-->
            <!--</tbody>-->
          <!--</table>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
  <!--</div>-->
<!--</template>-->
<!--<script>-->
  <!--import RcomendationImg from './recomendationImg.vue';-->
  <!--import {httpUrl} from '../apiConfig/api'-->
  <!--export default {-->
    <!--name: 'Recommend',-->
    <!--props: ["recommends"],-->
    <!--components: {-->
      <!--'v-recomendation-img':RcomendationImg-->
    <!--},-->
    <!--data(){-->
      <!--return {-->
        <!--recommendationArray:[],-->
        <!--holding:[],-->
        <!--item3:{},-->
        <!--imgSrc:'',-->
        <!--select:'',-->
        <!--temp:'',-->

      <!--}-->
    <!--},-->
    <!--mounted:function (){-->
      <!--this.getRecommendationArray();-->
      <!--/**-->
       <!--*获取当前持股-->
       <!--*/-->
      <!--this.fetchCurStockeData();-->

    <!--},-->
    <!--methods: {-->
      <!--filterCurImg:function (obj) {-->
        <!--var keyName=obj['id'];-->
        <!--this.temp =this.recommendationArray[obj.index];-->
        <!--this.recommendationArray[obj.index]["showImg"]=this.temp[keyName];-->
        <!--this.recommendationArray[obj.index]["select"]=keyName;-->
        <!--console.log(this.recommendationArray)-->
       <!--/* this.select=obj.id;*/-->

      <!--},-->
      <!--/**-->
       <!--* 获取当前持股信息-->
       <!--*/-->
      <!--fetchCurStockeData (){-->
        <!--this.$http.get(httpUrl.tradeFindStockApi).then(function(res){-->

          <!--if(res.body.code==0){-->
            <!--this.holding=res.body.data.entities;-->
          <!--}else{-->
            <!--alert(res.body.message)-->
          <!--}-->
        <!--},function(){-->
          <!--console.log("请求失败")-->
        <!--});-->
      <!--},-->

      <!--getRecommendationArray:function () {-->
        <!--this.$http.get(httpUrl.getRecomendationApi).then(function (res) {-->
          <!--if (res.body.code == 0) {-->
            <!--this.recommendationArray = res.body.data.entities;-->
            <!--console.log(this.recommendationArray)-->
          <!--} else {-->
            <!--alert(res.body.message)-->
          <!--}-->
        <!--}, function () {-->
          <!--console.log("请求失败")-->
        <!--});-->
      <!--}-->
    <!--},-->
    <!--watch: {-->
      <!--item3:function () {-->
        <!--this.imgSrc=this.item3["daily"];-->
      <!--},-->
      <!--item3:function () {-->

      <!--}-->

    <!--}-->
  <!--}-->
<!--</script>-->
<!--<style>-->
  <!--*-->
  <!--h1, h2,h3 ,h5{-->
    <!--font-weight: normal;-->
    <!--text-align: left;-->

  <!--}-->
  <!--row{-->
    <!--margin-left: 0;-->
    <!--margin-right: 0;-->
  <!--}-->
  <!--ul {-->
    <!--list-style-type: none;-->
    <!--padding: 0;-->
  <!--}-->
  <!--li {-->
    <!--display: inline-block;-->
    <!--margin: 0 10px;-->
  <!--}-->
  <!--.recommentTime{-->
    <!--margin-top: 2rem;-->
  <!--}-->
  <!--.recommendRow1{-->
    <!--width: 96%;-->
    <!--height: auto;-->
    <!--background: #ffffff;-->
    <!--margin-top: 1rem;-->
  <!--}-->
  <!--.recommendRownew{-->
     <!--width: 96%;-->
    <!--height: auto;-->
    <!--background: #ffffff;-->
    <!--margin-top: 1rem;-->
     <!--margin:0 2%;-->
  <!--}-->

  <!--.recommendHeader{-->
    <!--width: 96%;-->
    <!--border-bottom: 1px solid #EEF1F5;-->
    <!--margin: 0 2%;-->
    <!--display: flex;-->
    <!--flex-direction: row;-->
    <!--justify-content: center;-->
  <!--}-->
  <!--.row-fluid{-->
    <!--padding-top:20px;-->
    <!--width: 96%;-->
    <!--margin:0 2%;-->
    <!--padding-bottom: 5px;-->
  <!--}-->
  <!--.recommend-thead-tr th{-->
    <!--text-align: center;-->
  <!--}-->


  <!--.table-striped>tbody>tr:nth-of-type(odd) {-->
    <!--background-color: #fbfcfd;-->
  <!--}-->
  <!--.recommendComponents{-->
    <!--margin-top: 2rem;-->
    <!--margin-bottom: 2rem;-->
  <!--}-->


  <!--.virtualAccountHeader1 h3 {-->
    <!--margin: 0 2%;-->
    <!--height: 4rem;-->
    <!--line-height: 4rem;-->
    <!--text-align: left;-->
  <!--}-->

  <!--.recommendPicRow img{-->
    <!--width: 100%;-->
    <!--height: auto;-->
  <!--}-->
  <!--.BasciInfoItem{-->
    <!--margin-right: 0px;-->
     <!--margin-left: 0px;-->
    <!--background: #ffffff;-->
    <!--width: 100%;-->
    <!--height: auto;-->
    <!--padding-top: 1rem;-->
   <!--/* border-bottom: 1px solid #797979;*/-->
  <!--}-->
  <!--.recommdationBasciInfo{-->
    <!--background: #ffffff;-->
    <!--margin-top: 2rem;-->
    <!--width: 96%;-->
    <!--height: auto;-->
    <!--margin-left: 2%;-->
    <!--padding-bottom: 2rem;-->
  <!--}-->
  <!--.basicInfoTitle>h3{-->
    <!--width: 96%;-->
    <!--margin-left: 2%;-->
    <!--text-align: center;-->
    <!--padding-top: 2rem;-->
    <!--padding-bottom: 1rem;-->
    <!--border-bottom: 1px solid rgba(193, 199, 186, 0.47);-->
  <!--}-->
  <!--.recommdationInfo{-->
    <!--margin-top: 1.5rem;-->
  <!--}-->


  <!--/*-->
<!--屏幕兼容(手机)-->
 <!--*/-->
  <!--@media screen and (max-width:600px)-->
  <!--{-->
    <!--.recommend-thead-tr th{-->
      <!--word-break: keep-all;-->
      <!--width: 15%;-->
    <!--}-->
    <!--.table>thead>tr>th {-->
      <!--padding:3px;-->
    <!--}-->
    <!--.recommendRow1{-->
      <!--width: 96%;-->
      <!--/*height: auto;*/-->
      <!--background: #ffffff;-->
      <!--/*margin-top: 1rem;*/-->
      <!--/* margin:0 2%;*/-->
      <!--font-size:0.1rem;-->
    <!--}-->
    <!--.recommendRownew{-->
      <!--/*width: 96%;*/-->
      <!--width: 100%;-->
      <!--/*height: auto;*/-->
      <!--background: #ffffff;-->
      <!--margin-top: 1rem;-->
      <!--margin:0 2%;-->
      <!--margin-left: 0px;-->
      <!--/*font-size:0.1rem;*/-->
      <!--font-size: 1.2rem;-->
    <!--}-->
    <!--.recommdationBasciInfo{-->
      <!--width: 100%;-->
      <!--margin-left: 0px;-->
    <!--}-->
    <!--.recommendHistroyRow{-->
      <!--width: 96%;-->
      <!--height: auto;-->
      <!--background: #ffffff;-->
      <!--margin:0 2%;-->
      <!--margin-top: 2rem;-->
      <!--margin-bottom: 1rem;-->
      <!--font-size:0.1rem;-->
    <!--}-->
    <!--.recommendHeader{-->
      <!--width: 96%;-->
      <!--border-bottom: 1px solid #EEF1F5;-->
      <!--margin: 0 2%;-->
      <!--/*display: flex;*/-->
      <!--/*flex-direction: row;*/-->
      <!--/*justify-content:left;*/-->
    <!--}-->
    <!--.BasciInfoItem{-->
      <!--border-bottom: 1px solid #b0c3e3;-->
    <!--}-->
    <!--.curHoldingTable{-->
      <!--width: 97%;-->
      <!--margin-top: 10px;-->
      <!--margin-left: 4%;-->
    <!--}-->
    <!--.base_head_td{-->
      <!--width: 41%;-->
      <!--text-align: left;-->
    <!--}-->
    <!--.base_right_td{-->
      <!--/*text-align: right;*/-->
    <!--}-->
  <!--}-->
<!--</style>-->
