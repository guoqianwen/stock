export default {
  url: [
    {
      title:'首页',
      url:'index'
    }
    ,
    {
      title:'讨论区',
      url:'Forum'
    } ,
    {
      title:'数据区',
      url:'DataInquiry'
    },
    {
      title:'登录',
      url:'SignUp'
    }
  ],
  seturl (arr) {
    this.url = arr;
  }
}
