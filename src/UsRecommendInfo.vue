<!--<template>-->
  <!--<div class="content1" style="width: 100%;height: 100%;">-->
    <!--<v-recommend :recommends="recommends" ></v-recommend>-->
  <!--</div>-->
<!--</template>-->

<!--<script>-->
  <!--import Recommend from './components/Recommend';-->
  <!--import MarketTrend from './components/MarketTrend'-->
  <!--import CurrentHolding from './components/CurrentHolding'-->
  <!--import Loading from './components/Loading.vue'-->
  <!--import {httpUrl} from './apiConfig/api'-->

  <!--export default {-->
    <!--data () {-->
      <!--return {-->
        <!--recommends: [],-->
        <!--trend:{},-->
        <!--holding:[],-->
        <!--record:{},-->
        <!--curAmount:'',-->
        <!--totalAmount:'',-->
        <!--curTime:"MONTH",-->
        <!--pageSize:10,-->
        <!--pageNo1:0,-->
        <!--remmonent:'',-->
        <!--recomHistory:[],-->
        <!--show:true-->
      <!--}-->
    <!--},-->
    <!--components: {-->
      <!--'v-recommend':Recommend,-->
      <!--'market-trend': MarketTrend,-->
      <!--'current-holding':CurrentHolding,-->
      <!--'v-loading':Loading-->
    <!--},-->
    <!--mounted: function () {-->



      <!--/**-->
       <!--* 初次调用获取最新推荐数据-->
       <!--*/-->
      <!--this.fetchLastRecomData();-->

    <!--},-->

    <!--methods:{-->


      <!--/**-->
       <!--* 获取最新推荐的数据-->
       <!--*/-->
      <!--fetchLastRecomData (){-->
        <!--this.$http.get(httpUrl.lastRecommendationApi).then(function(res){-->
          <!--if(res.body.code==0){-->
            <!--this.recommends=res.body.data.entities;-->
          <!--}else{-->
            <!--alert(res.body.message)-->
          <!--}-->
        <!--},function(){-->
          <!--console.log("请求失败")-->
        <!--});-->
      <!--}-->

    <!--}-->

  <!--}-->
<!--</script>-->

<!--&lt;!&ndash; Add "scoped" attribute to limit CSS to this component only &ndash;&gt;-->
<!--<style scoped>-->
  <!--html,body{-->
    <!--height: auto!important;-->
  <!--}-->
  <!--.content1{-->
    <!--background: #E9ECF3;-->
  <!--}-->
  <!--h1, h2 {-->
    <!--font-weight: normal;-->
  <!--}-->
  <!--ul {-->
    <!--list-style-type: none;-->
    <!--padding: 0;-->
  <!--}-->
  <!--li {-->
    <!--display: inline-block;-->
    <!--margin: 0 10px;-->
  <!--}-->
  <!--.content{-->
    <!--background: #E9ECF3;-->
  <!--}-->
<!--</style>-->
