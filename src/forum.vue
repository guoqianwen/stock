<template>
  <div class="forum">
    <div class="forum-header">
      <img src="https://aisharev1.oss-cn-beijing.aliyuncs.com/share/banner.png">
    </div>
    <div class="forum-list">
        <div name="lastRecomment"  class="forum-list-right">
          <div class="forum-list-box">
              <div class="recommendRow">
                <div class="recommendHeader">
                  <h3></h3>
                  <h4 class="recommentTime">聊一聊</h4>
                </div>
              </div>
              <div class="forumBox" >
                <div class="forumList">
                    <div v-for="(item ,index) in items" class="wrap">
                            <div class="info_guest">
                              <p class="avatar">
                                <a>
                                  <span class="skin_portrait_round">&nbsp;</span>
                                  <img src="./assets/img/man.png"  style="" alt="head_1470675639">
                                </a>
                              </p>
                            </div>
                            <div class="main">
                                  <div class="main_bd">
                                        <span class="username">{{item.userCode}}</span>&nbsp;&nbsp;&nbsp;&nbsp; <span class="level">第{{item.id}}楼</span>
                                  </div>
                                  <div  class="main_body" v-html="item.content">

                                  </div>
                                  <div class="main_ft">
                                        <div class="main_ft-left">
                                          <div class="main_ft-left-time">{{item.createdTime | date}}</div>
                                           <div class="main_ft-left-comment"  v-on:click="showComment(index,item.id,item.userCode,'0')">评论</div>
                                          <div class="main_ft-left-comment"  v-on:click="getComment(item.id,index)">查看评论</div>
                                        </div>
                                        <div class="main_ft-right">
                                          <div class="caiIcon" v-on:click="goCai('-1')" v-bind:class="{ activeIcon:zanFlag+index==cai}">
                                             <i class="iconfont icon-yijin14-cai iconfont2"  ></i>踩&nbsp&nbsp&nbsp&nbsp&nbsp
                                          </div>
                                         <div class="zanIcon" v-on:click="goZan('-1')" v-bind:class="{ activeIcon:zanFlag+index==zan}">
                                              <i class="iconfont icon-zan iconfont2"></i>赞
                                         </div>
                                        </div>
                                  </div>
                                  <div class="replay-box"  v-if="index === showReplay && replayList.length>0" >
                                        <div class="replay-item" v-for="i in replayList">
                                              <div class="replay-item-img">
                                                    <img src="./assets/img/man.png">
                                              </div>
                                              <div class="replay-item-list">
                                                    <div class="replay-item-content">
                                                      <div class="replay-item-text" style="position: relative" >
                                                        <span>{{i.userCode}}</span>回复<span >{{i.replyUserCode}}</span>
                                                         <span class="commentTextArea" v-html="i.content" ></span>
                                                      </div>
                                                    </div>
                                                    <div class="replay-item-time">
                                                      <div class="main_ft-left-time">  {{i.createdTime | date}}</div>
                                                      <div class="main_ft-left-comment" v-on:click="showComment(index,i.id,i.userCode,'1')">评论</div>
                                                    </div>
                                              </div>
                                        </div>
                                  </div>
                                  <criticism v-if="index === motype" @commentReplayData="commentReplayData($event)" @cancelComment="cancelComment($event)"></criticism>
                            </div>
                       </div>
                    <pagination :page-index="currentPage" :total="count" :page-size="pageSize" @change="pageChange"></pagination>
                </div>

              </div>

              <div class="forumSubmit">
                <comment @getUserComment="getUserComment($event)"></comment>
              </div>

          </div>
        </div>
    </div>

  </div>
</template>

<script>
 import Pagination from './components/Pagination.vue'
 import Comment    from './components/Comment'
 import {httpUrl} from './apiConfig/api'
 import Editor from './components/Editor'
 import Criticism  from './components/Criticism.vue'
 export default {
   //显示的声明组件
   components : {
     Pagination,
     Comment,
     Editor,
     Criticism
   },
   data () {
     return {
       pageSize : 10 , //每页显示20条数据
       currentPage : 1, //当前页码
       count : 0, //总记录数
       items : [],
       detailLastRecomment:[],
       detailConment:[],
       tempDate:'',
       flag:true,
       currIndex:'',
       motype:-1,
       showReplay:-1,
       replayList:[],
       replayType:'',
       replayId:'',
       replayUserCode:'',
       zan:"",
       cai:"",
       zanFlag:-1
     }
   },
   methods : {
     //获取数据
     getList () {
       this.getTopicRecord();
     },

     /**
      * 获取分页的论坛话题信息
      * @param pageSize currentPage
      */
     getTopicRecord:function () {
       this.$http.get(httpUrl.getTopicListApi,{
         params:{
           pageSize:this.pageSize,
           pageNo:this.currentPage
         }
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
         /**
      * 从page组件传递过来的当前page
      */
       pageChange (page) {
         this.currentPage = page
         this.getList()
       },


      getUserComment:function (e) {
         console.log(e)
       this.$http.post(
         httpUrl.createTopicApi,{
           content:e,
           title:"测试文章",
           userCode:"root"
         }
       ).then(function(res){
         console.log(res.body)
         if(res.body.code==0){
           this.getTopicRecord();
         }else{
           alert(res.body.message)
         }
       },function(){
         console.log("请求失败")
       });
     },

     showComment:function (index,id,userCode,type) {
        this.motype=index;
        this.replayType=type;
       this.replayId=id;
       this.replayUserCode=userCode;

     },
     cancelComment:function (e) {
         console.log(e)
       this.motype=e;
     },
     pageChange(page) {
       this.currentPage = page
       this.getList()
     },
     /**
      * 获取当前话题的评论回复
      */
     getComment:function (id,index) {
       this.$http.get(
         httpUrl.getCurCommentListApi,{
           params:{
             pageSize:this.pageSize,
             pageNo:this.currentPage,
             topicId :id
           }
         }
       ).then(function(res){
         console.log(res.body)
         if(res.body.code==0){
          this.showReplay=index;
           this.replayList=res.body.data.entities;
         }else{
           alert(res.body.message)
         }
       },function(){
         console.log("请求失败")
       });
     },
     commentReplayData:function (e) {
       console.log(this.replayId)
       if(this.replayType=="0"){
         //对话题进行回复
         this.$http.post(httpUrl.createFirstApi,{
             topicId:this.replayId,    //话题主键
             userCode:this.replayUserCode,  //用户码
             content:e    //评论内容
         }).then(function(res){
           console.log(res.body.data)
           if(res.body.code==0){
            //this.replayList.push(res.body.data.entity);
             this.getComment(this.replayId,this.motype);
           }else{
             alert(res.body.message)
           }
         },function(){
           console.log("请求失败")
         });
       }else if(this.replayType=="1"){
         //对评论进行回复
         this.$http.post(httpUrl.createReplyApi,{
             replyId:this.replayId,      //话题主键
             userCode:this.replayUserCode, //用户码
             content:e    //评论内容
         }).then(function(res){
           console.log(res.body.data)
           if(res.body.code==0){
             this.replayList.push(res.body.data.entity);
           }else{
             alert(res.body.message)
           }
         },function(){
           console.log("请求失败")
         });
       }
     },
     goCai:function(index){
       this.cai=index;
       this.zan="";
     },
     goZan:function(index){
       this.zan=index;
       this.cai=""
     }

   },
   mounted() {
     //请求第一页数据
     this.getList(this.flag);
   },
   filters: {
     date:function (value) {
       var date = new Date(value);
       var  Y = date.getFullYear(),
         m = date.getMonth() + 1,
         d = date.getDate(),
         H = date.getHours(),
         i = date.getMinutes(),
         s = date.getSeconds();
       if (m < 10) {
         m = '0' + m;
       }
       if (d < 10) {
         d = '0' + d;
       }
       if (H < 10) {
         H = '0' + H;
       }
       if (i < 10) {
         i = '0' + i;
       }
       if (s < 10) {
         s = '0' + s;
       }
       var t = Y + '-' + m + '-' + d +"  "+H + ':' +  i + ':' + s ;
       return t;
     }
   }
 }
</script>


<style>

  ::-webkit-scrollbar{
    width: 0px;
    height: 0px;
  }
/*  html,body{
    height: 100%;
  }*/
  #app{
    height:100%;
  }
  .content{
    height: 85.5%;
  }
  .chooseStyle{
    background: #5BC0DE!important;
    color: #ffffff;
  }
  .forum{
    background: #E9ECF3;
    height: 100%;
  }
  tr:hover{
    background: #DFF0D8!important;
    color: #333333;
    cursor: pointer;
  }
  .forum-header{
    padding: 1.5rem;
    height:10rem;
  }
  .forum-header img{
    width: 100%;
    height: 100%;
  }
  .forum-list{
    margin:0rem  2rem 2rem 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 80%;
    background: #E9ECF3;
  }
  .forum-list-left{
    width: 100%;
  }
  .forum-list-right{
    width: 100%;
    background: #E9ECF3;
    height: 100%;
    overflow: hidden;
  }
  .forum-list-box{
    height: 100%;
    overflow-y: scroll;
    width: 100%;
  }
  .forum-list-box::-webkit-scrollbar{
    width: 0px;
    height: 0px;
  }
  table{
    margin-bottom: 0px;
  }
  .forumItem{
    display: flex;
    flex-direction: row;
    border: 1px solid #DDDDDD;
    margin: 0rem 0rem 1rem 0rem;
  }
  .forumImg{
    width:12rem;
    height: 15rem;
   /* border: 1px solid #DDDDDD;*/
  }
  .forumUserImg{
    width: 80%;
    height: 60%;
    margin: 10%;
  }
  .forumUserImg img{
    width:100%;
    height:100%;

  }
  .forumInfo{
   /* border: 1px solid #DDDDDD;*/
    width: calc(100% - 12rem);
    height: 15rem;
  }
  .showUserContent{
    width: 100%;
    height: 12rem;
    background: #ffffff;
    padding: 2rem;
    text-align: left;
  }
  .showUserContentDetail{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    height: 3rem;
    line-height: 3rem;
    background: #ffffff;
  }
  .submit_time{
    height: 3rem;
    line-height: 3rem;
  }
  .box {
    padding: 100px;
  }
  .border-left{
    border-left: 1px solid #dddddd;
  }
  .border-right{
    border-right: 1px solid #dddddd;
    background: #fff;
  }
  .border-bottom{
    border-bottom: 1px solid #dddddd;
  }
  .border-top{
    border-top: 1px solid #dddddd;
  }
  .forumSubmit{
    margin-bottom:2rem;
  }
  .showDeatil{
    cursor: pointer;
  }
  .recommend-thead-tr >th{
    text-align: center;
  }

  .recommentTime{
    /*margin-left: 1rem;*/
    margin-top: 2rem;
    font-size: 24px;
  }
  .recommendRow{
    width:100%;
    /* width: 96%;*/
    height: auto;
    background: #ffffff;
    margin-top: 1rem;
    /* margin:0 2%;*/
  }
  .recommendRowList{
    width:100%;
    /* width: 96%;*/
    height: auto;
    background: #ffffff;
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

  .forumList{
    padding: 2% 2% 0% 2%;
    background: #FFF;
    width: 100%;
    height: auto;
    border-top: 1px solid #DCC6F1;
  }
  .wrap{
    width: 100%;
    min-height: 20rem;
    display: flex;
    flex-direction: row;

    border-bottom: 1px solid #DCC6F1;
  }
   .info_guest {
    float: left;
    width: 70px;
    padding: 20px 0 0 10px;
    position: relative;
  }
   .info_guest .avatar {
    height: 50px;
    width: 50px;
    margin-bottom: 3px;
    font-size: 0;
    line-height: 0;
    margin-top: 0;
    position: relative;
    _zoom: 1;
  }
  .avatar img {
    border-radius: 4px;
    width:50px;
    height:50px
  }
  .main{
    width: calc(100% - 70px);
    margin: 0 10px 20px 10px;
  }
  .main_bd{
    margin: 10px 0;
    height: 1.3rem;
    display: flex;
  }
  .main_bd>span {
   display: block;

  }
  .username {
    display: inline;
    float: left;
    font-size: 1.3rem;
    color: #A376B8;
  }
  .level {
    font-size: 1.3rem;
    color: #9B9B9B;
  }
  .main_body{
    min-height: 12rem;
    width: 100%;
    text-align: left;
  }
  .main_ft{
    min-height: 3rem;
    display: flex;
    flex-direction: row;
  /* border-bottom: 1px solid #DCC6F1;*/
    justify-content: space-between;
  }
  .main_ft-left{
    display: flex;
    font-size: 1rem;

    line-height:  2.5rem;
  }
  .main_ft-right{
     display: flex;
  }
  .main_ft-left-time{
    color: #9B9B9B;
  }
  .main_ft-left-comment{
    color: #A376B8;
    margin-left: 12px;
    cursor: pointer;
  }
  .iconfont2{
    font-size: 2.5rem;
  }
  .replay-box{
    border-top: 1px solid #DCC6F1;
    height: auto;
    width: 100%;
  }
  .replay-item{
    width: 100%;
    min-height: 3rem;
    display: flex;
    padding: 0.5rem 0;
  }
  .replay-item-img{
    width: 45px;
    height: 45px;

  }
   .replay-item-img>img{
    border-radius: 4px;
     width: 45px;
     height: 45px;
  }
   .replay-item-list{
     margin-left: 1rem;
   }
  .replay-item-time{
    display: flex;
  }
  .replay-item-text{
    text-align: left;
  }
  .replay-item-text>span{
    color: #A376B8;
  }
  .replay-item-content>p{
    margin: 0 0 5px;
  }
  .comment-textarea{
      text-align: left;
  }
  textarea {
    font-size: 12px;
    overflow: auto;
    height: 5rem;
    margin: 1px;
    border-width: 1px;
    border-style: solid;
    width: 100%;
  }
  textinput:hover, textarea:hover {
    border-color: #F5B93C;
    background-color: #FFFFFF;
  }
  textarea {
    border-color: #DDC7F0;
    box-shadow: 0 1px 2px rgba(0,0,0,.1) inset;
  }
  .bt_tx2{
    color: #FFFFFF;
    border: 1px solid #C671F1;
    background-color: #D399F0;
    background-position: 0 0;
  }
  .commentTextArea{
    word-wrap: break-word;
    word-break: break-all;
  }
  .icon-yijin14-cai:before {
    margin-left: -2rem;
    margin-top: 0.6rem;
    position: absolute;
    content: "\E60E";
  }
  .caiIcon{
    color: #9195A0;
  }
  .zanIcon{
    color: #9195A0;
  }
  .activeIcon{
    color: #806EB2;
  }
</style>
