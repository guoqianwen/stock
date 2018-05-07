<template>
  <div  id="publish" class="comment-textarea">
    <div class="bg2 mod_comment_post">
      <p @click=make_face() >
          <img  src="https://aisharev1.oss-cn-beijing.aliyuncs.com/share/1.gif" title="表情" class="bg_img mod_comment_emoticons"/>
      </p>
      <div class="mod_comment_textarea">
          <span>
                <p contenteditable="true" id="input_conta" cols="60" rows="5" class="textarea textinput" @input="descArea" ></p>
          </span>
      </div>
      <p  class="hint" style="display:none;">
        <span class="icon_hint">提示：</span>
        <span ></span>
      </p>
      <p class="mod_comment_option">
          <span class="mod_comment_sub">
               <button type="button"  @click=send() id="commentModule_0_postButton" class="bt_tx2">确定</button>
               <a  href="javascript:;" class="c_tx3"  @click=cancel()>取消</a>
               <span  class="mod_comment_extension"></span>
          </span>
        <span class="c_tx3 mod_comment_other"><span >{{textLength}}</span>
         /<span >2000</span>
         </span>
      </p>
      <div class="face" id="face" @click=choice_face($event)>


      </div>
    </div>
  </div>
 <!-- <div id="publish">
    &lt;!&ndash; 发布内容输入框，利用Html5的新属性contenteditable，实现可编辑文本 ，会自动将插入的IMG标签解析&ndash;&gt;
    <span @click=make_face() class="make_face"><i class="icon-emoji" ></i></span>
    <div class="publish_container">
      <p contenteditable="true" id="input_conta" class="textarea"></p>
    </div>
    &lt;!&ndash; 表情和发送&ndash;&gt;
    <div class="face_container">
      &lt;!&ndash; 表情Icon，点击触发事件，动态生成表情并显示 &ndash;&gt;

      <span class="make_img" @click="add_img()"><i class="icon-Pictuer"></i></span>
      <span class="send" @click=send()>发送</span>
      <span class="send"><input type="checkbox" name="top" id="top" value="top">本条置顶</span>
      &lt;!&ndash; 表情容器 ，包裹生成的表情，绑定点击表情事件&ndash;&gt;
      <div id="face" @click=choice_face($event)></div>
    </div>
  </div>-->

</template>
<script>
 // import aa from '../assets/img'
  export default {
    data () {
      return {
        id:this.$route.query.id,
        top:"",
        textLength:0
      }
    },
    methods:{
      make_face:function(){
        $("#face").show();         //显示表情容器
        if($("#face>img").length==0){     //动态生成表情，如果现在没有表情则生成
          for(var i=1;i<=84;i++){      //根据表情文件数量决定循环次数，这里为75个表情
            $("#face").append('<img class="expression" src="https://aisharev1.oss-cn-beijing.aliyuncs.com/share/'+i+'.gif">'); //为表情容器里添加IMG标签，并赋予src值，路径为表情文件所在路径
          }
        }
      },// 选择表情并插入到输入框
      choice_face:function(e){
        if(e.target.nodeName=="IMG"){
          var choice=e.target;
          var cEle = choice.cloneNode(true); //深度复制，复制节点下面所有的子节点 ，直接将整个表情的IMG标签复制，并添加到发布框的<p></p>里面
          $("#input_conta").append(cEle);
          $("#face").hide();
        }
      },
      // 发送信息给后台
      send:function(){
        // 发送留言
        var text=$("#input_conta").html();  //获得发布框的文本内容，表情会以整个img标签文本显示
        console.log(text);
        $("#input_conta").html("");  //清除发布框的文本内容
        $("div#face").hide();      //隐藏表情选择// 上传图片并发送给后台
        var out_this=this;
        this.$emit('commentReplayData', text)
      },
      descArea(){
        var textVal =$("#input_conta").html();
        var  i,len,code;
        if(textVal==null || textVal == "")   return   0;
        len   =textVal.length;
        for(i = 0;i <textVal.length;i++) {
            code = textVal.charCodeAt(i);
            if (code > 255) {len ++;}
          }
        this.textLength = len;
      },
      cancel:function () {
        this.$emit('cancelComment', "-1")
      }
    },
    mounted() {
      //请求第一页数据
      $("#face").hide();
    }
  }
</script>
<style>
  #publish_container{
    width: 400px;
    height: 200px;
  }
  #publish_container>p{
    width: 400px;
    height: 200px;
  }
  .face_container{
    width: 400px;
    height: 200px;
    background: red;
  }
  .make_face{
    display: block;
    width: 40px;
    height: 20px;
    background: green;
  }
  .mod_comment_post{
    position: relative;
  }
  #face{
    width: 400px;
    height: 200px;
  }
  .textarea{
    font-size: 12px;
    overflow: auto;
    height: 5rem;
    margin: 1px;
    border-width: 1px;
    border-style: solid;
   /* margin: 0 5%;*/
    width:100%;
    border-color: #DDC7F0;
    box-shadow: 0 1px 2px rgba(0,0,0,.1) inset;
  }
  .face{
    margin: 0 1%;
    position: absolute;
    border: 1px solid rgb(153, 153, 153);
    padding: 3px;
    background: rgb(255, 255, 255);
    font-size: 12px;
    z-index: 10001;
    top:1.8rem;
  }
  .expression{
    margin-left: 5px;
  }
  .mod_comment_other{
    float: right;
  }
 .mod_comment_option{
    margin-top: 10px;
  }
</style>
