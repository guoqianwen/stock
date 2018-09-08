<template>
    <div class="LatestRecommendation">
      <div class="header">
        <div class="heading"><h3>{{ heading }}</h3></div>
        <div class="virtualEmpty">&nbsp;&nbsp;</div>
      </div>
      <div class="pysz_data">
        <div class="today_data">
          <div class="title_name_d">当天对比上证</div>
          <span v-if="recommendations[0].gain[4].profit>0" :class="{Green:recommendations[0].gain[4].profit<0,Red:recommendations[0].gain[4].profit>=0 }">+{{recommendations[0].gain[4].profit}}%</span>
          <span v-else="recommendations[0].gain[4].profit<=0" :class="{Green:recommendations[0].gain[4].profit<0,Red:recommendations[0].gain[4].profit>=0 }">{{recommendations[0].gain[4].profit}}%</span>
        </div>
        <div class="other_data">
          <div class="one_month other_one">
            <div class="title_name_1m">近一月对比</div>
            <span v-if="recommendations[1].gain[4].profit>0" :class="{Green:recommendations[1].gain[4].profit<0,Red:recommendations[1].gain[4].profit>=0 }">+{{recommendations[1].gain[4].profit}}%</span>
            <span v-else="recommendations[1].gain[4].profit<=0" :class="{Green:recommendations[1].gain[4].profit<0,Red:recommendations[1].gain[4].profit>=0 }">{{recommendations[1].gain[4].profit}}%</span>
          </div>
          <div class="three_month other_one">
            <div class="title_name_3m">近三月对比</div>
            <span v-if="recommendations[2].gain[4].profit>0" :class="{Green:recommendations[2].gain[4].profit<0,Red:recommendations[2].gain[4].profit>=0 }">+{{recommendations[2].gain[4].profit}}%</span>
            <span v-else="recommendations[2].gain[4].profit<=0" :class="{Green:recommendations[2].gain[4].profit<0,Red:recommendations[2].gain[4].profit>=0 }">{{recommendations[2].gain[4].profit}}%</span>
          </div>
          <div class="the_year other_one">
            <div class="title_name_y">近一年对比</div>
            <span v-if="recommendations[3].gain[4].profit>0" :class="{Green:recommendations[3].gain[4].profit<0,Red:recommendations[3].gain[4].profit>=0 }">+{{recommendations[3].gain[4].profit}}%</span>
            <span v-else="recommendations[3].gain[4].profit<=0" :class="{Green:recommendations[3].gain[4].profit<0,Red:recommendations[3].gain[4].profit>=0 }">{{recommendations[3].gain[4].profit}}%</span>
          </div>
        </div>
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
                <span  v-if="item.gain[0].profit>0" :class="{Green:item.gain[0].profit<0,Red:item.gain[0].profit>=0 }">+{{item.gain[0].profit | setNum}}%</span>
                <span  v-else="item.gain[0].profit<=0" :class="{Green:item.gain[0].profit<0,Red:item.gain[0].profit>=0 }">{{item.gain[0].profit | setNum}}%</span>
              </div>
              <div class="shZS">{{item.gain[1].indexName}}: <br>
                <span v-if="item.gain[1].profit>0"  :class="{Green:item.gain[1].profit<0,Red:item.gain[1].profit>=0 }">+{{item.gain[1].profit | setNum}}%</span>
                <span v-else="item.gain[1].profit<=0"  :class="{Green:item.gain[1].profit<0,Red:item.gain[1].profit>=0 }">{{item.gain[1].profit | setNum}}%</span>
              </div>
            </div>
            <div class="recommendation_row">
              <div class="h3ZS"> {{item.gain[2].indexName}}: <br>
                <span v-if="item.gain[2].profit>0" :class="{Green:item.gain[2].profit<0,Red:item.gain[2].profit>=0 }">+{{item.gain[2].profit | setNum}}%</span>
                <span v-else="item.gain[2].profit<=0" :class="{Green:item.gain[2].profit<0,Red:item.gain[2].profit>=0 }">{{item.gain[2].profit | setNum}}%</span>
              </div>
              <div class="cyZS"> {{item.gain[3].indexName}}: <br>
                <span v-if="item.gain[3].profit>0" :class="{Green:item.gain[3].profit<0,Red:item.gain[3].profit>=0 }">+{{item.gain[3].profit | setNum}}%</span>
                <span v-else="item.gain[3].profit<=0" :class="{Green:item.gain[3].profit<0,Red:item.gain[3].profit>=0 }">{{item.gain[3].profit | setNum}}%</span>
              </div>
            </div>
            <div class="recommendation_row pysz-box">
              <div class="pysz"> {{item.gain[4].indexName}}: <br>
                <span v-if="item.gain[4].profit>0" :class="{Green:item.gain[4].profit<0,Red:item.gain[4].profit>=0 }">+{{item.gain[4].profit}}%</span>
                <span v-else="item.gain[4].profit<=0" :class="{Green:item.gain[4].profit<0,Red:item.gain[4].profit>=0 }">{{item.gain[4].profit}}%</span>
              </div>
              <div class="pysz" style="visibility: hidden"> {{item.gain[4].indexName}}: <br>
                <span v-if="item.gain[4].profit>0" :class="{Green:item.gain[4].profit<0,Red:item.gain[4].profit>=0 }">+{{item.gain[4].profit}}%</span>
                <span v-else="item.gain[4].profit<=0" :class="{Green:item.gain[4].profit<0,Red:item.gain[4].profit>=0 }">{{item.gain[4].profit}}%</span>
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
    width: 96%;
    margin: auto;
    height: auto;
    padding: 0% 2%;
    /*background: #ECECEC;*/
    background: #ffffff;
    font-size: 20px;
    padding-bottom: 2rem;
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
    /*height:4rem ;*/
    width: 100%;
    line-height:4rem;
    border-bottom: 1px solid #ECECEC;
  }
  .heading{
    color: rgb(51, 51, 51);
    font-size: 30px;
  }
  .recommendation-items{
    margin-left: 10%;
    width: 80%;
    height: 30rem;
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
  /*.pysz-box{*/
    /*justify-content: space-around;*/
  /*}*/
  .pysz_data{
    display: none;
  }

  /*
屏幕兼容(手机)
 */
  @media screen and (max-width:600px)
  {
    .LatestRecommendation{
      padding: 0px;
      width: 100%;
    }
    .recommendation-items {
      width: 100%;
      height:22rem;
      margin: auto;
      color: #5F5F5F;
      /*line-height: 4rem;*/
      font-size: 1.6rem;
      font-weight: 700;
    }

    .recommendation{
      margin: 0px;
      width: 25%;
      height: 96%;
      background: #e0e0e0;
      background: #ffffff;
      /*padding: 2% 10%;*/
      border-right: 0.2px solid #e0e0e0;
      border-top: none;
      border-bottom: none;
    }
    .header{
      margin: 2rem 0;
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
      height:1.2rem;
      color: #5F5F5F;
      font-size: 1.2rem;
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
      font-size: 1.2rem;
      font-weight: 500;
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
    .pysz_data{
      display: inline-block;
    }
    .pysz-box{
      display: none;
    }
    .today_data{
      height: 3rem;
      line-height: 3rem;
      color: #E9531E;
      font-size: 3rem
    }
    .other_data{
      margin-top: 50px;
      margin-bottom: 150px;
    }
    .other_one{
      float: left;
      padding-right: 13px;
      padding-left: 10px;
    }
    .one_month{
      font-size: 2.5rem;
      border-right: 1px solid #c1c7ba;
      margin-left: 15px;
    }
    .three_month{
      font-size: 2.5rem;
      border-right: 1px solid #c1c7ba;
    }
    .the_year{
      font-size: 2.5rem;
    }
    .title_name_d{
      height: 2rem;
      line-height: 2rem;
      color: #7E7E7E;
      font-size: 1.8rem
    }
    .title_name_1m{
      height: 2rem;
      line-height: 2rem;
      color: #7E7E7E;
      font-size: 1.5rem;
      padding-left: 0;
      padding-right: 0;
    }
    .title_name_3m{
      height: 2rem;
      line-height: 2rem;
      color: #7E7E7E;
      font-size: 1.5rem;
      padding-left: 0;
      padding-right: 0;
    }
    .title_name_y{
      height: 2rem;
      line-height: 2rem;
      color: #7E7E7E;
      font-size: 1.5rem;
      padding-left: 0;
      padding-right: 0;
    }
  }
</style>


