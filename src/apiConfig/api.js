let localhostDev = true;
//如果是本地开发，就把localhostDev 设置成true，连接就是拼成‘http://localhost:8080/api/test’
//生产环境，就把localhostDev 设置成false，连接就是拼成‘http://xxx.com/api/test’
//let _host= localhostDev ? 'http://1000stock.com:8082' : 'http://fqm0925.vicp.io';
let _host= localhostDev ? 'http://www.1000stock.com' : 'http://fqm0925.vicp.io:11336';
let httpUrl = {
  'newSearchLastGainApi':_host + '/trade/find_gain',//首页0331修改后获取最新赢利数据接口
  'searchLastGainApi':_host + '/trade/search_gain',//首页获取最新赢利数据接口
  'lastRecommendationApi':_host + '/recommend/find',//获取推荐信息中的最新推荐
  'GetContrastApi':_host + '/trade/get_index_contrast',//获取推荐信息中的大盘与引擎的走势
  'recommendFindApi':_host + '/recommend/find',//获取推荐信息中的最新推荐
  'recommendHistoryFindApi':_host + '/recommend/search',//获取推荐信息中的历史推荐
  'tradeGetLatelyApi':_host + '/trade/get_lately',//获取最近的交易记录
  'tradeSearchApi':_host + '/trade/find_trade',//分页获取交易记录 此处的分页是按照的 天 分页
  'tradeFindStockApi':_host + '/trade/find_stock',//获取当前持股，url似乎不太合理，有交易才有持有股票，暂时放在此处
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
  'getRecomendationApi':_host + '/recommend/get_info',//
  'getDataInquriyInfoApi':_host + '/data/search',//
  'search_reverse_repoApi':_host + '/trade/search_reverse_repo',//获取逆回购记录信息

  ///////////////////////////////////////////美股接口////////////////////////////////////
  'newSearchLastGainApiUs':_host + '/trade_us/find_gain',//首页0331修改后获取最新赢利数据接口
  'searchLastGainApiUs':_host + '/trade_us/search_gain',//首页获取最新赢利数据接口
  'lastRecommendationApiUs':_host + '/trade_us/find_plan',//获取推荐信息中的最新推荐
  'GetContrastApiUs':_host + '/trade_us/get_index_contrast',//获取推荐信息中的大盘与引擎的走势
  'recommendFindApiUs':_host + '/recommend_us/find',//获取推荐信息中的最新推荐
  'recommendHistoryFindApiUs':_host + '/recommend_us/search',//获取推荐信息中的历史推荐
  'tradeGetLatelyApiUs':_host + '/trade_us/get_lately',//获取最近的交易记录
  'tradeSearchApiUs':_host + '/trade_us/find_trade',//分页获取交易记录 此处的分页是按照的 天 分页
  'tradeFindStockApiUs':_host + '/trade_us/find_stock',//获取当前持股，url似乎不太合理，有交易才有持有股票，暂时放在此处
  'createTopicApiUs':_host + '/topic_us/create',//创建新话题
  'getTopicListApiUs':_host + '/topic_us/search',//获取分页话题记录
  'getCurCommentListApiUs':_host + '/reply_us/search',//获取当前话题的回复详情
  'createFirstApiUs':_host + '/reply_us/createFirst',//对话题的评论调用的是
  'createReplyApiUs':_host + '/reply_us/createReply',// 对评论进行评论或是回复调用的是

  'getTotalProfitLineApiUs':_host + '/trade_us/get_contrast',//总的收益率曲线
  'userLoginApiUs':_host + '/userInfo_us/login', //用户登录接口
  'userRegisterApiUs':_host + '/userInfo_us/register', //用户注册接口
  'getEmptyPresentApiUs':_host + '/trade_us/get_idle_rate', //获取闲置率
  /*年化收益率*/
  'getYearRateApiUs':_host + '/trade_us/get_year_rate', //获取闲置率
  'getGainInfoApiUs':_host + '/trade_us/get_gain_contrast',//各指数收益对比曲线
  "getUserAccoutInfoApiUs":_host + '/trade_us/get_asset_summary', // 用户账户信息总览
  "getOperatorSummaryApiUs":_host + '/trade_us/get_operator_summary', // 操作统计
  'getTradeRecordApiUs':_host + '/trade_us/search_trade',//查找交易记录
  'getRecomendationApiUs':_host + '/recommend_us/get_info',//
  'getDataInquriyInfoApiUs':_host + '/data_us/search',//
  'search_reverse_repoApiUs':_host + '/trade_us/search_reverse_repo'//获取逆回购记录信息

};
export {httpUrl}
