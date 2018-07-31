<template>
  <div>
    <div class="img_box">
      <img :src="imgSrc">
    </div>
    <div class="btn-group" role="group" style="margin-bottom: 20px;display: flex;padding-bottom: 2rem;">
      <button   v-for="btn in imgArray" @click="changeCurImg(btn.id)"  type="button" class="btn btn-default" :class="btn.id==select ? 'activeBtn':''">{{btn.time}}</button>
    </div>
  </div>
</template>
<script>

  export default {
    props:{
      imgSrc:String,
      index:Number,
      select:String
    },
    data() {
      return {
        imgArray:[
          {
            id:'min',
            time:"分时K线"
          },{
            id:'daily',
            time:"日K线"
          },{
            id:'weekly',
            time:"周K线"
          },{
            id:'monthly',
            time:"月K线"
          }]
      }
    },
    methods: {
      changeCurImg(e) {
        var obj={};
        obj.id=e;
        obj.index=this.index;
        this.$emit('filterCurImg', obj)
      }
    }
  }
</script>
<style>
*

h1, h2 {
font-weight: normal;
}
ul {
list-style-type: none;
padding: 0;
}
li {
display: inline-block;
margin: 0 10px;
}


.btn-group{
display: flex;
flex-direction: row;
justify-content: center;
width: 100%;
}
button{
background-color: #ffffff;
}
.activeBtn{
  background-color: #0275d8;
  color: #fff;
  position: relative;
  z-index: 1;
  border-color: #0275d8;
}
.img_box img{
  width: 90%;
}

/*
屏幕兼容(手机)
*/
@media screen and (max-width:600px){

h1, h2 {
font-weight: normal;
}
ul {
list-style-type: none;
padding: 0;
}
li {
display: inline-block;
margin: 0 10px;
}
.btn-group{
display: flex;
flex-direction: row;
justify-content: center;
width: 100%;
}
button{
background-color: #ffffff;
}
.activeBtn{
  background-color: #0275d8;
  color: #fff;
  position: relative;
  z-index: 1;
  border-color: #0275d8;
}

.img_box{
  overflow: scroll;
}
.img_box img{
  width: auto;
  height: 250px;
}


}
</style>
