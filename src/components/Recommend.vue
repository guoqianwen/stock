<template>
  <div id="recommend" class="recommendComponents">
    <div class="recommendRow1 recommendRownew">
      <div class="recommendHeader">
        <h3>最新推荐</h3>
        <h4 class="recommentTime">{{recommends.length ? recommends[0].newData : ''}}</h4>
      </div>
      <div class="row-fluid">
        <div class="span12">
          <table class="table table-striped table-bordered table-advance" >
            <thead>
            <tr class="recommend-thead-tr">
              <th>序号</th>
              <th>推荐指数</th>
              <th>股票动作</th>
              <th>股票名称</th>
              <th>股票类型</th>
              <th>备注</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item,index) in recommends">
              <td>
                <div :class="item.action"></div>
                {{index+1}}
              </td>
              <td>
                <div class="data_box">
                  {{item.rank}}
                </div>
              </td>
              <td >{{item.action}}</td>
              <td >{{item.name}}</td>
              <td>{{item.type}}</td>
              <td>{{item.note}}</td>
            </tr>
            </tbody>
          </table>
          <div class="clear"></div>

        </div>
      </div>
    </div>
    <div class="recommendHistroyRow" v-for="item in recomHistory" v-if="item[0].recommend.length>0">
      <div class="recommendHeader">
        <h3><span class="recommdationTitel">{{ item[0].date}}</span> 盈利 <span v-bind:class="{Green:item[0].gainRate<0,Red:item[0].gainRate>=0}">{{(item[0].gainRate*100).toFixed(2)}}%</span></h3>
      </div>
      <div class="row-fluid">
        <div class="span12">
          <table class="table table-striped table-bordered table-advance" >
            <thead>
            <tr class="recommend-thead-tr">
              <th>序号</th>
              <th>推荐指数</th>
              <th>股票动作</th>
              <th>股票名称</th>
              <th>股票类型</th>
              <th>备注</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(recommendItem,index)  in item[0].recommend">
              <td>
                <div :class="recommendItem.action"></div>
                {{index+1}}
              </td>
              <td>
                <div class="data_box">
                  {{recommendItem.rank}}
                </div>
              </td>
              <td >{{recommendItem.action}}</td>
              <td >{{recommendItem.name}}</td>
              <td>{{recommendItem.type}}</td>
              <td>{{recommendItem.note}}</td>
            </tr>
            </tbody>
          </table>
          <div class="clear"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Recommend',
    props: ["recomHistory","recommends"],
    mounted:function () {
      console.log(this.recomHistory)
    },
    methods: {
      changeTrendTime(e) {
        console.log(e)
        this.$emit('showMoreRecomm', e)
      }
    }
  }
</script>
<style>
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
  /* margin-left: 1rem;*/
    margin-top: 2rem;
  }
  .recommendRow1{
    width: 96%;
    height: auto;
    background: #ffffff;
    margin-top: 1rem;
   /* margin:0 2%;*/
  }
  .recommendRownew{
     width: 96%;
    height: auto;
    background: #ffffff;
    margin-top: 1rem;
     margin:0 2%;
  }
  .recommendHistroyRow{
    width: 96%;
    height: auto;
    background: #ffffff;
    margin:0 2%;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
  .recommendHeader{
    width: 96%;
    border-bottom: 1px solid #EEF1F5;
    margin: 0 2%;
    display: flex;
    flex-direction: row;
    justify-content:left;
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
  .SELL {
    width:2px ;
    height:2rem;
    border-left: 2px solid #36c6d3;
    position: absolute;
  }
  .SHORT{
    width:2px ;
    height:2rem;
    border-left: 2px solid #659BE0;
    position: absolute;
  }
  .COVER{
    width:2px ;
    height:2rem;
    border-left: 2px solid #F1C40F;
    position: absolute;
  }
  .table-striped>tbody>tr:nth-of-type(odd) {
    background-color: #fbfcfd;
  }
.showMoreHistory{
  text-align: right;
}
  .recommdationTitel{
    font-size: 2rem;
  }
  .recommendComponents{
    margin-bottom: 2rem;
  }
  .Green{
    color: green;
  }
  .Red{
    color: red;
  }
</style>
