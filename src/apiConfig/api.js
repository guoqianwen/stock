let localhostDev = false;
//如果是本地开发，就把localhostDev 设置成true，连接就是拼成‘http://localhost:8080/api/test’
//生产环境，就把localhostDev 设置成false，连接就是拼成‘http://xxx.com/api/test’
let _host= localhostDev ? 'http://www.1000stock.com:8082' : 'http://www.1000stock.com';
let httpUrl = {
  'newSearchLastGainApi':_host + '/trade/find_gain',//首页0331修改后获取最新赢利数据接口
  'searchLastGainApi':_host + '/trade/search_gain',//首页获取最新赢利数据接口
  'lastRecommendationApi':_host + '/recommend/find',//获取推荐信息中的最新推荐
  'GetContrastApi':_host + '/trade/get_index_contrast',//获取推荐信息中的大盘与引擎的走势
  'recommendFindApi':_host + '/recommend/find',//获取推荐信息中的最新推荐
  'recommendHistoryFindApi':_host + '/recommend/search',//获取推荐信息中的历史推荐
  /*'bbsTopicApi':_host + '/BBS/search',//获取论坛的话题列表
  'bbsTopicDetailApi':_host + '/BBS/find_by_date',//获取点击话题进入论坛详情页数据
  'bbsTopicCommentDetailApi':_host + '/BBS/search_comment',//获取点击话题进入论坛评论详情页数据
  'bbsTopicPraiseApi':_host + '/BBS/praise',//获取对评论点赞数据
  'bbsTopicReportApi':_host + '/BBS/report',//获取对评论举报数据
  'submitCommentApi':_host + '/BBS/create',//发表评论 注意header中需要包含userCode信息*/
  'tradeGetLatelyApi':_host + '/trade/get_lately',//获取最近的交易记录
  'tradeSearchApi':_host + '/trade/find_trade',//分页获取交易记录 此处的分页是按照的 天 分页
  'tradeFindStockApi':_host + '/trade/find_stock',//获取当前持股，url似乎不太合理，有交易才有持有股票，暂时放在此处
 /* 'tradeGetOverviewApi':_host + '/trade/get_overview',//获取账户的总览信息*/
  'createTopicApi':_host + '/topic/create',//创建新话题
  'getTopicListApi':_host + '/topic/search',//获取分页话题记录
  'getCurCommentListApi':_host + '/reply/search',//获取当前话题的回复详情
  'createFirstApi':_host + '/reply/createFirst',//对话题的评论调用的是
  'createReplyApi':_host + '/reply/createReply',// 对评论进行评论或是回复调用的是

  'getTotalProfitLineApi':_host + '/trade/get_contrast',//总的收益率曲线
  'userLoginApi':_host + '/userInfo/login', //用户登录接口
  'userRegisterApi':_host + '/userInfo/register', //用户注册接口
  'getEmptyPresentApi':_host + '/trade/get_idle_rate', //获取闲置率
  /*年化收益率*/
  'getYearRateApi':_host + '/trade/get_year_rate', //获取闲置率
 'getGainInfoApi':_host + '/trade/get_gain_contrast',//各指数收益对比曲线
 "getUserAccoutInfoApi":_host + '/trade/get_asset_summary', // 用户账户信息总览
  "getOperatorSummaryApi":_host + '/trade/get_operator_summary', // 操作统计
  'getTradeRecordApi':_host + '/trade/search_trade',//查找交易记录
  'getRecomendationApi':_host + '/recommend/get_info'//
};
export {httpUrl}
