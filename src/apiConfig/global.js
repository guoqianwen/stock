export default {
  url: [
    {
      title:'A股',
      url:'index'
    }
    ,
    // {
    //   title:'美股',
    //   url:'usStock'
    // }
    // ,
    {
      title:'讨论区',
      url:'Forum'
    } ,
    // {
    //   title:'A股诊股',
    //   url:'DiagnosticStocks'
    // } ,
    // {
    //   title:'数据区',
    //   url:'DataInquiry'
    // },
    {
      title:'登录',
      url:'SignUp'
    }
  ],
  seturl (arr) {
    this.url = arr;
  }
}
