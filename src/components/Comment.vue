<template>
    <div class="comment">
        <div class="comment_title">网友评论</div>
        <div class="comment_info">
          <div class="comment_user_header">
            <img src="../assets/img/man.png">
          </div>
          <div class="comment_textarea">
            <editor  @getUserComment1="getUserComment1($event)"></editor>
          </div>
        </div>
        <!--<button type="button" class="btn btn-primary submitBtn" @click="subimtComment()">发表</button>-->
    </div>
</template>

<script>
  import Editor from './Editor'
    export default {
        name: "comment",
      components : {
        Editor
      },
      data() {
        return {
          content:""
        }
      },
      methods:{
        getUserComment1(comment) {
          console.log(comment)
          this.content=comment;
          this.$emit('getUserComment', this.content)
        }
      }
    }
</script>

<style scoped>
  *
      .comment{
        width:calc(100%- 2rem);
        height: 25rem;
        margin:2rem 0rem;
        background: #ffffff;
      }
      .comment_title{
        height: 4rem;
        line-height: 4rem;
      }
      .comment_info{
        width: 100%;
        height: 16rem;
        display: flex;
        flex-direction: row;
      }
      .comment_user_header{
        margin: 0 auto;
        width: 5%;
        height: 10rem;
        line-height: 10rem;
      }
      .comment_user_header img{
        margin:auto 0;
        height: 5rem;
        width: 5rem;
        border-radius: 50%;
      }
      .comment_textarea{
        margin-right: 1%;
        width: 91.5%;
      }
      .comment_textarea textarea{
        width:100%;
        height: 10rem;
      }
      .submitBtn{
        float: right;
        margin-right: 3rem;
        margin-top: 1rem;
      }

      /*
   屏幕兼容(手机)
   */
      @media screen and (max-width:600px)
      {
        .comment{
          width: calc(100%- 2rem);
          height: 30rem;
          margin: 2rem 0rem;
          background: #ffffff;
        }
        .comment_user_header{
          display: none;
          width: 5%;
          height: 5rem;
          line-height: 5rem;
        }
        .comment_user_header img{
          float:left;
          margin-left: 50%;
          height: 5rem;
          width: 5rem;
          border-radius: 50%;
        }
        .comment_textarea{
          margin:0  2%;
          width: 96%;
          /*width: 100%;*/
          /*float: left;*/
        /*  margin-top: 20%;*/
        }
      }
</style>
