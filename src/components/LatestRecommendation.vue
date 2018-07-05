<template>
    <div class="LatestRecommendation">
      <div class="header">
        <div class="heading">{{ heading }}  </div>
        <div class="virtualEmpty">&nbsp;&nbsp;(预期年化：{{yearRate | toFixed2}}%)</div>
      </div>
      <div class="recommendation-items">
        <div v-for="(item,index) in recommendations" class="recommendation" >
          <div class="cover">
            <img :src="'https://aisharev1.oss-cn-beijing.aliyuncs.com/share/home_block_'+(index+1)+'.png'"/>
          </div>
          <div class="recommendation_time"></div>
          <div class="recommendation_income">{{item.title}}</div>
          <div class="recommendation_row">
            <div>{{item.gain[0].indexName}}:<span>{{item.gain[0].profit}}</span></div>
            <div>{{item.gain[1].indexName}}:<span>{{item.gain[1].profit}}</span></div>
          </div>
          <div class="recommendation_row">
            <div> {{item.gain[2].indexName}}:<span>{{item.gain[2].profit}}</span></div>
            <div> {{item.gain[3].indexName}}:<span>{{item.gain[3].profit}}</span></div>
          </div>
        </div>
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
            yearRate : ""
          }
        },
      methods : {
        //获取数据
        getVirtualEmpPresent () {
          this.$http.get(httpUrl.getYearRateApi).then(function(res){
            if(res.body.code==0){
              this.yearRate=res.body.data.yearRate;
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
    height: 25rem;
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
    height:2rem;
    color: #5F5F5F;
    line-height: 2rem;
    font-size: 1rem;
  }
  .recommendation_income{
    width: 100%;
    height:3rem;
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
  .recommendation_row{
    display: flex;
    flex-direction: row;
    justify-content:center;
    font-size: 0.5rem;
  }
  .recommendation_row>div{
    margin:0.5rem  1rem;
  }

  /*
屏幕兼容(手机)
 */
  @media screen and (max-width:600px)
  {
    .recommendation-items {
      width: 100%;
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
    .recommendation_row{
      display: flex;
      flex-direction: column;
      font-size: 0.5rem;
    }
    .recommendation_row>div{
      margin:0.5rem  1rem;
    }
  }
</style>


