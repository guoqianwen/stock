<template>
    <div class="LatestRecommendation">
      <div class="header">
        <div class="heading">{{ heading }}  </div>
        <div class="virtualEmpty">(资金平均闲置率：{{virtualEmpPresent | toFixed2}}%)</div>
      </div>
      <div class="recommendation-items">
        <div v-for="(item,index) in recommendations" class="recommendation" >
          <div class="cover">
            <img :src="'https://aisharev1.oss-cn-beijing.aliyuncs.com/share/home_block_'+(index+1)+'.png'"/>
          </div>
          <div class="recommendation_time">{{item.date}}</div>
          <div class="recommendation_income">盈利 <span v-bind:class="{Green:item.profit<0,Red:item.profit>=0}">{{(item.profit*100).toFixed(2)}}%</span></div>
        </div>
       <!-- <div class="recommendation" >
            <div class="cover">
              <img src="../assets/img/price_1.png"/>
            </div>
            <div class="recommendation_time">2018-0-1</div>
            <div class="recommendation_income">赢利1000%</div>
        </div>
        <div class="recommendation" >
          <div class="cover">
            <img src="../assets/img/price_2.png"/>
          </div>
          <div class="recommendation_time">2018-0-1</div>
          <div class="recommendation_income">赢利1000%</div>
        </div>
        <div class="recommendation" >
          <div class="cover">
            <img src="../assets/img/price_3.png"/>
          </div>
          <div class="recommendation_time">2018-0-1</div>
          <div class="recommendation_income">赢利1000%</div>
        </div>
        <div class="recommendation" >
          <div class="cover">
            <img src="../assets/img/price_4.png"/>
          </div>
          <div class="recommendation_time">2018-0-1</div>
          <div class="recommendation_income">赢利1000%</div>
        </div>-->
      </div>
    </div>
</template>

<script>
  import {httpUrl} from '../apiConfig/api'
    export default {
        name: "latest-recommendation",
        props: ['heading', 'recommendations'],
        filters: {
          join(args){
            return args.join(',')
          }
        },
        data () {
          return {
            virtualEmpPresent : ""
          }
        },
      methods : {
        //获取数据
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
        },


      },
      mounted() {
       this.getVirtualEmpPresent();
      }
    }
</script>

<style scoped>
  *
  html,body{
    height: auto!important;
  }
  .LatestRecommendation{
    margin-top: 0.5%;
    width: 100%;
    height: auto;
    padding: 0% 1%;
    background: #ECECEC;
    font-size: 20px;
  }
  .recommendation:hover {
    transition: all 0.3s ease-out;
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
  .header{
    display: flex;
    margin:  2rem 0;
    justify-content:center;
    height:4rem ;
    width: 100%;
    line-height:4rem;
    border-bottom: 1px solid #ECECEC;
  }
  .heading{
    color: #585858;
    font-size: 30px;
  }
  .recommendation-items{
    margin-left: 20%;
    width: 60%;
    height: 22rem;
    display: flex;
    margin-top: 1rem;
  }
  .recommendation{
    width: 23%;
    height: 100%;
    background: #e0e0e0;
    margin: 0 1%;
    background: #ffffff;
    /*padding: 2% 10%;*/
  }
  .cover{
    width: 100%;
    height:12rem;
  }
  .cover img{
    width: 100%;
    height:100%;
  }
  .recommendation_time{
    width: 100%;
    height:3rem;
    color: #5F5F5F;
    line-height: 2rem;
    font-size: 1rem;
  }
  .recommendation_income{
    width: 100%;
    height:6rem;
    color: #5F5F5F;
    font-size: 2rem;
  }
  .Green{
    color: green;
  }
  .Red{
    color: red;
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
    .recommendation-items {
      width: 102%;
      height:4rem;
      margin: auto;
      color: #5F5F5F;
      line-height: 4rem;
      font-size: 1.6rem;
    }

    .recommendation{
      width: 25%;
      height: 100%;
      background: #e0e0e0;
      background: #ffffff;
      /*padding: 2% 10%;*/
    }
    .header{
      margin: 1rem 0;
    }
    .heading{
      font-size: 15px;
    }
    .virtualEmpty{
      font-size: 15px;
    }
    .recommendation_time{
      width: 100%;
      height:1rem;
      color: #5F5F5F;
      line-height: 2rem;
      font-size: 1rem;
    }
    .recommendation_income{
      width: 100%;
      height:1rem;
      color: #5F5F5F;
      font-size: 1rem;
    }

    .cover {
      display: none;
    }

  }
</style>


