<template>
    <div class="LatestRecommendation">
      <div class="header">
        <div class="heading">{{ heading }}  </div>
        <div class="virtualEmpty">&nbsp;&nbsp;</div>
      </div>
      <div class="recommendation-items">
        <div v-for="(item,index) in recommendations" class="recommendation" >
          <div class="cover">
            <img :src="'https://aisharev1.oss-cn-beijing.aliyuncs.com/share/home_block_'+(index+1)+'.png'"/>
          </div>
          <div class="recommendation_time"></div>
          <div class="recommendation_income">{{item.title}}</div>
          <div class="recommendation_rowItem">
            <div class="recommendation_row">
              <div class="sysZS">{{item.gain[0].indexName}}: <br>
                <span  v-if="item.gain[0].profit>0" :class="{Green:item.gain[0].profit<0,Red:item.gain[0].profit>=0 }">+{{item.gain[0].profit}}%</span>
                <span  v-else="item.gain[0].profit<=0" :class="{Green:item.gain[0].profit<0,Red:item.gain[0].profit>=0 }">{{item.gain[0].profit}}%</span>
              </div>
              <div class="shZS">{{item.gain[1].indexName}}: <br>
                <span v-if="item.gain[1].profit>0"  :class="{Green:item.gain[1].profit<0,Red:item.gain[1].profit>=0 }">+{{item.gain[1].profit}}%</span>
                <span v-else="item.gain[1].profit<=0"  :class="{Green:item.gain[1].profit<0,Red:item.gain[1].profit>=0 }">{{item.gain[1].profit}}%</span>
              </div>
            </div>
            <div class="recommendation_row">
              <div class="h3ZS"> {{item.gain[2].indexName}}: <br>
                <span v-if="item.gain[2].profit>0" :class="{Green:item.gain[2].profit<0,Red:item.gain[2].profit>=0 }">+{{item.gain[2].profit}}%</span>
                <span v-else="item.gain[2].profit<=0" :class="{Green:item.gain[2].profit<0,Red:item.gain[2].profit>=0 }">{{item.gain[2].profit}}%</span>
              </div>
              <div class="cyZS"> {{item.gain[3].indexName}}: <br>
                <span v-if="item.gain[3].profit>0" :class="{Green:item.gain[3].profit<0,Red:item.gain[3].profit>=0 }">+{{item.gain[3].profit}}%</span>
                <span v-else="item.gain[3].profit<=0" :class="{Green:item.gain[3].profit<0,Red:item.gain[3].profit>=0 }">{{item.gain[3].profit}}%</span>
              </div>
            </div>
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
    margin-left: 10%;
    width: 80%;
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
    color: #0B9F91;
  }
  .Red{
    color: #E9531E;
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
      height:20rem;
      margin: auto;
      color: #5F5F5F;
      /*line-height: 4rem;*/
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

    .recommendation_rowItem{
      margin-top: 10px;
    }
    .recommendation_row{
      display: flex;
      flex-direction: column;
      font-size: 0.5rem;
    }
    .sysZS{
      /*background: rgba(153, 48, 36, 0.3);*/
    }
    .shZS{
      /*background: rgba(119, 119, 119, 0.31);*/
    }
    .h3ZS{
      /*background: rgba(28, 242, 216, 0.31);*/
    }
    .cyZS{
      /*background: rgba(242, 120, 171, 0.31);*/
    }
    .recommendation_row>div{
      /*margin:0.5rem  1rem;*/
      float: left;
      border-radius: 10%;
    }
  }
</style>


