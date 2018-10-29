<template>
  <div class="virtualAccount">
    <div class="row virtualAccountRow">
      <div class="virtualAccountHeader">
        <h3 class="virtureAllLook">账户总览</h3>
      </div>
      <div class="row-fluid virtualAccountBox">
        <!--<div class="col-md-4 virtualAccountC4">-->
          <!--<div class="virtualAccountCount_pc">-->
            <!--<table cellspacing="0" cellpadding="0" border="0"-->
                   <!--class="virtable table table-striped table-bordered table-advance start_tb">-->
              <!--<tbody>-->
              <!--<tr>-->
                <!--<th class="head_td">总金额(元)</th>-->
                <!--<td><div class="virtualTotalMoneyValue" style="height: 2.5rem;line-height: 2.5rem;color: #E9531E;font-size: 2.5rem">{{parseInt(virtCountSummary.total)|setNum}}</div></td>-->
              <!--</tr>-->
              <!--<tr>-->
                <!--<th class="head_td">最新盈亏(元)</th>-->
                <!--<td>-->
                  <!--<div v-if="virtCountSummary.todayGain>0" class="virtualTotalMoneyTitleValue"  :class="{Green:virtCountSummary.todayGain<0,Red:virtCountSummary.todayGain>=0}">+{{parseInt(virtCountSummary.todayGain)|setNum}}</div>-->
                  <!--<div v-else="virtCountSummary.todayGain<=0" class="virtualTotalMoneyTitleValue"  :class="{Green:virtCountSummary.todayGain<0,Red:virtCountSummary.todayGain>=0}">{{parseInt(virtCountSummary.todayGain)|setNum}}</div>-->
                <!--</td>-->
              <!--</tr>-->
              <!--<tr>-->
                <!--<th class="head_td">持有盈亏(元)</th>-->
                <!--<td>-->
                  <!--<div  v-if="virtCountSummary.totalGain>0" class="virtualTotalMoneyTitleValue" :class="{Green:virtCountSummary.totalGain<0,Red:virtCountSummary.totalGain>=0}">+{{parseInt(virtCountSummary.totalGain)|setNum}}</div>-->
                  <!--<div  v-else="virtCountSummary.totalGain<=0" class="virtualTotalMoneyTitleValue" :class="{Green:virtCountSummary.totalGain<0,Red:virtCountSummary.totalGain>=0}">{{parseInt(virtCountSummary.totalGain)|setNum}}</div>-->
                <!--</td>-->
              <!--</tr>-->
              <!--<tr>-->
                <!--<th class="head_td">持有盈亏率</th>-->
                <!--<td>-->
                  <!--<div v-if="virtCountSummary.totalGainRate>0" class="virtualTotalMoneyTitleValue" :class="{Green:virtCountSummary.totalGainRate<0,Red:virtCountSummary.totalGainRate>=0}">+{{virtCountSummary.totalGainRate*100 |toFixed2 }}%</div>-->
                  <!--<div v-else="virtCountSummary.totalGainRate<=0" class="virtualTotalMoneyTitleValue" :class="{Green:virtCountSummary.totalGainRate<0,Red:virtCountSummary.totalGainRate>=0}">{{virtCountSummary.totalGainRate*100 |toFixed2 }}%</div>-->
                <!--</td>-->
              <!--</tr>-->
              <!--</tbody>-->
            <!--</table>-->
          <!--</div>-->
          <!--<div class="virtualAccountCount_app">-->
            <!--<div class="virtualTotalMoney" style="height:7rem;padding-top: 2rem;">-->
                  <!--<div class="virtualTotalMoneyTitle" style="height: 2rem;line-height: 2rem;color: #7E7E7E;font-size: 1.8rem">总金额(元)</div>-->
                  <!--<div class="virtualTotalMoneyValue" style="height: 3rem;line-height: 3rem;color: #E9531E;font-size: 3rem">{{parseInt(virtCountSummary.total)|setNum}}</div>-->
            <!--</div>-->
            <!--<div class="row-fluid virtual_item">-->
                <!--<div class="col-sm-4 virtual_sm virtual_sm_1" >-->
                    <!--<div class="virtualTotalMoneyTitleName" >最新盈亏(元)</div>-->
                    <!--<div v-if="virtCountSummary.todayGain>0" class="virtualTotalMoneyTitleValue"  :class="{Green:virtCountSummary.todayGain<0,Red:virtCountSummary.todayGain>=0}">+{{parseInt(virtCountSummary.todayGain)|setNum}}</div>-->
                    <!--<div v-else="virtCountSummary.todayGain<=0" class="virtualTotalMoneyTitleValue"  :class="{Green:virtCountSummary.todayGain<0,Red:virtCountSummary.todayGain>=0}">{{parseInt(virtCountSummary.todayGain)|setNum}}</div>-->
                <!--</div>-->
                  <!--<div class="col-sm-4 virtual_sm virtual_sm_2" >-->
                  <!--<div class="virtualTotalMoneyTitleName">持有盈亏(元)</div>-->
                  <!--<div  v-if="virtCountSummary.totalGain>0" class="virtualTotalMoneyTitleValue" :class="{Green:virtCountSummary.totalGain<0,Red:virtCountSummary.totalGain>=0}">+{{parseInt(virtCountSummary.totalGain)|setNum}}</div>-->
                  <!--<div  v-else="virtCountSummary.totalGain<=0" class="virtualTotalMoneyTitleValue" :class="{Green:virtCountSummary.totalGain<0,Red:virtCountSummary.totalGain>=0}">{{parseInt(virtCountSummary.totalGain)|setNum}}</div>-->
                <!--</div>-->
                <!--<div class="col-sm-4 virtualTotalMoneyItem virtual_sm virtual_sm_3">-->
                  <!--<div class="virtualTotalMoneyTitleName">持有盈亏率</div>-->
                  <!--<div v-if="virtCountSummary.totalGainRate>0" class="virtualTotalMoneyTitleValue" :class="{Green:virtCountSummary.totalGainRate<0,Red:virtCountSummary.totalGainRate>=0}">+{{virtCountSummary.totalGainRate*100 |toFixed2 }}%</div>-->
                  <!--<div v-else="virtCountSummary.totalGainRate<=0" class="virtualTotalMoneyTitleValue" :class="{Green:virtCountSummary.totalGainRate<0,Red:virtCountSummary.totalGainRate>=0}">{{virtCountSummary.totalGainRate*100 |toFixed2 }}%</div>-->
                <!--</div>-->
            <!--</div>-->
          <!--</div>-->
        <!--</div>-->
        <div class="col-md-12 virtualAccountC8">
          <div class="row">
            <div class="col-md-6 clearPadRig accountOverview">
              <table cellspacing="0" cellpadding="0" border="0"
                     class="virtable table table-striped table-bordered table-advance start_tb">
                <!--<tbody>-->
                <!--<tr>-->
                  <!--<th class="head_td">开始日期</th>-->
                  <!--<td><div class="data_box">{{virtCountStart.date}}</div></td>-->
                <!--</tr>-->
                <!--<tr>-->
                  <!--<th class="head_td">初始投资(元)</th>-->
                  <!--<td>-->
                    <!--<div class="data_box">{{virtCountStart.totalAsset|setNum}}</div>-->
                  <!--</td>-->
                <!--</tr>-->
                <!--<tr>-->
                  <!--<th class="head_td">单股投入(元)</th>-->
                  <!--<td>-->
                    <!--<div class="data_box">{{virtCountStart.amountNumber|setNum}}</div>-->
                  <!--</td>-->
                <!--</tr>-->
                <!--<tr>-->
                  <!--<th class="head_td">累计盈亏(元)</th>-->
                  <!--<td>-->
                    <!--<div class="data_box">{{virtCountStart.totalProfit|setNum}}</div>-->
                  <!--</td>-->
                <!--</tr>-->
                <!--<tr>-->
                  <!--<th class="head_td">最新盈亏率</th>-->
                  <!--<td>-->
                    <!--<div v-if="virtCountStart.todayProfit>0" class="data_box" :class="{Green:virtCountStart.todayProfit<0,Red:virtCountStart.todayProfit>=0}">-->
                      <!--+{{(virtCountStart.todayProfit * 100).toFixed(2)}}%-->
                    <!--</div>-->
                    <!--<div v-else="virtCountStart.todayProfit<=0" class="data_box" :class="{Green:virtCountStart.todayProfit<0,Red:virtCountStart.todayProfit>=0}">-->
                      <!--{{(virtCountStart.todayProfit * 100).toFixed(2)}}%-->
                    <!--</div>-->
                  <!--</td>-->
                <!--</tr>-->
                <!--<tr>-->
                  <!--<th class="head_td">平均仓位</th>-->
                  <!--<td>-->
                    <!--<div class="data_box">{{virtCountStart.avgPosition|setNum}}%</div>-->
                  <!--</td>-->

                <!--</tr>-->
                <!--</tbody>-->
                <tbody>
                  <tr>
                    <th class="head_td">当天日期</th>
                    <td><div class="data_box">{{todayAccountBo.date}}</div></td>
                  </tr>

                  <tr>
                    <th class="head_td">当天总资产</th>
                    <td>
                      <div class="data_box">{{todayAccountBo.totalAsset|setNum}}</div>
                    </td>
                  </tr>

                  <tr>
                    <th class="head_td">当天浮动盈亏</th>
                    <td>
                      <div v-if="todayAccountBo.relativeProfit>0" class="data_box" :class="{Green:todayAccountBo.relativeProfit<0,Red:todayAccountBo.relativeProfit>=0}">
                        +{{todayAccountBo.relativeProfit|setNum}}
                      </div>
                      <div v-else="todayAccountBo.relativeProfit<=0" class="data_box" :class="{Green:todayAccountBo.relativeProfit<0,Red:todayAccountBo.relativeProfit>=0}">
                        {{todayAccountBo.relativeProfit|setNum}}
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <th class="head_td">当天浮动盈亏率</th>
                    <td>
                      <div v-if="todayAccountBo.relativeProfitRate>0" class="data_box" :class="{Green:todayAccountBo.relativeProfitRate<0,Red:todayAccountBo.relativeProfitRate>=0}">
                        +{{(todayAccountBo.relativeProfitRate * 100).toFixed(2)}}%
                      </div>
                      <div v-else="todayAccountBo.relativeProfitRate<=0" class="data_box" :class="{Green:todayAccountBo.relativeProfitRate<0,Red:todayAccountBo.relativeProfitRate>=0}">
                        {{(todayAccountBo.relativeProfitRate * 100).toFixed(2)}}%
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <th class="head_td">当天跑赢上证</th>
                    <td>
                      <div v-if="todayAccountBo.beatStandardRate>0" class="data_box" :class="{Green:todayAccountBo.beatStandardRate<0,Red:todayAccountBo.beatStandardRate>=0}">
                        +{{(todayAccountBo.beatStandardRate).toFixed(2)}}%
                      </div>
                      <div v-else="todayAccountBo.beatStandardRate<=0" class="data_box" :class="{Green:todayAccountBo.beatStandardRate<0,Red:todayAccountBo.beatStandardRate>=0}">
                        {{(todayAccountBo.beatStandardRate).toFixed(2)}}%
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <th class="head_td">当前仓位</th>
                    <td>
                      <div class="data_box">{{todayAccountBo.position|setNum}}%</div>
                    </td>
                  </tr>

                  <tr>
                    <th class="head_td head_td_pc">持股市值</th>
                    <th class="head_td head_td_app">持股市值&#12288;&#12288;</th>
                    <td>
                      <div class="data_box">{{todayAccountBo.stockMarket|setNum}}</div>
                    </td>
                  </tr>

                  <!--<tr>-->
                    <!--<th class="head_td">做空金额</th>-->
                    <!--<td>-->
                      <!--<div class="data_box">{{0.00|setNum}}</div>-->
                    <!--</td>-->
                  <!--</tr>-->

                  <tr>
                    <th class="head_td head_td_pc">账户余额</th>
                    <th class="head_td head_td_app">账户余额&#12288;&#12288;&#12288;</th>
                    <td>
                      <div class="data_box">{{todayAccountBo.balance|setNum}}</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div></div>
            <div class="col-md-6 clearPadRig accountOverview">
              <table cellspacing="0" cellpadding="0" border="0"
                     class="virtable table table-striped table-bordered table-advance end_tb">
                <!--<tbody>-->
                <!--<tr>-->
                  <!--<th class="head_td">截止日期</th>-->
                  <!--<td>-->
                    <!--<div class="data_box">{{virtCountEnd.date}}</div>-->
                  <!--</td>-->
                <!--</tr>-->
                <!--<tr>-->
                  <!--<th class="head_td">总资产(元)</th>-->
                  <!--<td>-->
                    <!--<div class="data_box">{{virtCountEnd.totalAsset|setNum}}</div>-->
                  <!--</td>-->
                <!--</tr>-->
                <!--<tr>-->
                  <!--<th class="head_td">持股价值(元)</th>-->
                  <!--<td>-->
                    <!--<div class="data_box" >-->
                      <!--{{virtCountEnd.stockAmount|setNum}}-->
                    <!--</div>-->
                  <!--</td>-->
                <!--</tr>-->
                <!--<tr>-->
                  <!--<th class="head_td">账户余额(元)</th>-->
                  <!--<td>-->
                    <!--<div class="data_box">{{virtCountEnd.balanceAmount|setNum}}</div>-->
                  <!--</td>-->
                <!--</tr>-->
                <!--<tr>-->
                  <!--<th class="head_td">累计盈亏率</th>-->
                  <!--<td>-->
                    <!--<div v-if="virtCountEnd.totalProfit>0" class="data_box" :class="{Green:virtCountEnd.totalProfit<0,Red:virtCountEnd.totalProfit>=0}">-->
                      <!--+{{virtCountEnd.totalProfit * 100 | toFixed2}}%-->
                    <!--</div>-->
                    <!--<div v-else="virtCountEnd.totalProfit<=0" class="data_box" :class="{Green:virtCountEnd.totalProfit<0,Red:virtCountEnd.totalProfit>=0}">-->
                      <!--{{virtCountEnd.totalProfit * 100 | toFixed2}}%-->
                    <!--</div>-->
                  <!--</td>-->
                <!--</tr>-->
                <!--<tr>-->
                  <!--<th class="head_td">今日仓位</th>-->
                  <!--<td>-->
                    <!--<div class="data_box">{{virtCountEnd.todayPosition|setNum}}%</div>-->
                  <!--</td>-->
                <!--</tr>-->
                <!--</tbody>-->
                <tbody>
                  <tr>
                    <th class="head_td">开始日期</th>
                    <td><div class="data_box">{{totalAccountBo.date}}</div></td>
                  </tr>

                  <tr>
                    <th class="head_td head_td_pc">初始投资</th>
                    <th class="head_td head_td_app">初始投资&#12288;</th>
                    <td>
                      <div class="data_box">{{totalAccountBo.initAmount|setNum}}</div>
                    </td>
                  </tr>

                  <tr>
                    <th class="head_td">累计浮动盈亏</th>
                    <td>
                      <div v-if="totalAccountBo.relativeProfit>0" class="data_box" :class="{Green:totalAccountBo.relativeProfit<0,Red:totalAccountBo.relativeProfit>=0}">
                        +{{totalAccountBo.relativeProfit|setNum}}
                      </div>
                      <div v-else="totalAccountBo.relativeProfit<=0" class="data_box" :class="{Green:totalAccountBo.relativeProfit<0,Red:totalAccountBo.relativeProfit>=0}">
                        {{totalAccountBo.relativeProfit|setNum}}
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <th class="head_td">累计浮动盈亏率</th>
                    <td>
                      <div v-if="totalAccountBo.relativeProfitRate>0" class="data_box" :class="{Green:totalAccountBo.relativeProfitRate<0,Red:totalAccountBo.relativeProfitRate>=0}">
                        +{{(totalAccountBo.relativeProfitRate * 100).toFixed(2)}}%
                      </div>
                      <div v-else="totalAccountBo.relativeProfitRate<=0" class="data_box" :class="{Green:totalAccountBo.relativeProfitRate<0,Red:totalAccountBo.relativeProfitRate>=0}">
                        {{(totalAccountBo.relativeProfitRate * 100).toFixed(2)}}%
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <th class="head_td">累计跑赢上证</th>
                    <td>
                      <div v-if="totalAccountBo.beatStandardRate>0" class="data_box" :class="{Green:totalAccountBo.beatStandardRate<0,Red:totalAccountBo.beatStandardRate>=0}">
                        +{{(totalAccountBo.beatStandardRate).toFixed(2)}}%
                      </div>
                      <div v-else="totalAccountBo.beatStandardRate<=0" class="data_box" :class="{Green:totalAccountBo.beatStandardRate<0,Red:totalAccountBo.beatStandardRate>=0}">
                        {{(totalAccountBo.beatStandardRate).toFixed(2)}}%
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <th class="head_td">平均仓位</th>
                    <td>
                      <div class="data_box">{{totalAccountBo.avgPosition|setNum}}%</div>
                    </td>
                  </tr>

                  <!--<tr>-->
                    <!--<th class="head_td">单股投资比例</th>-->
                    <!--<td>-->
                      <!--<div class="data_box">{{0.00|setNum}}%</div>-->
                    <!--</td>-->
                  <!--</tr>-->

                  <tr>
                    <th class="head_td">逆回购总收益</th>
                    <td>
                      <div class="data_box">{{totalAccountBo.repoProfit|setNum}}</div>
                    </td>
                  </tr>

                  <tr>
                    <th class="head_td">逆回购总收益率</th>
                    <td>
                      <div class="data_box">{{totalAccountBo.repoProfitRate|setNum}}%</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
      <!--后续优化-->
      <!--<div class="row-fluid virtualAccountBox">-->
        <!--<div class="col-md-12 virtualAccountC8">-->
          <!--<div class="row">-->
            <!--<div class="col-md-6 clearPadRig accountOverview">-->
              <!--<table cellspacing="0" cellpadding="0" border="0"-->
                     <!--class="virtable table table-striped table-bordered table-advance start_tb">-->
                <!--<tbody>-->
                <!--<tr>-->
                  <!--<th class="head_td">当天日期</th>-->
                  <!--<td><div class="data_box">{{todayAccountBo.date}}</div></td>-->
                  <!--<th class="head_td">开始日期</th>-->
                  <!--<td><div class="data_box">{{totalAccountBo.date}}</div></td>-->
                <!--</tr>-->

                <!--<tr>-->
                  <!--<th class="head_td">当天总资产</th>-->
                  <!--<td>-->
                    <!--<div class="data_box">{{todayAccountBo.totalAsset|setNum}}</div>-->
                  <!--</td>-->
                  <!--<th class="head_td">初始投资</th>-->
                  <!--<td>-->
                    <!--<div class="data_box">{{totalAccountBo.initAmount|setNum}}</div>-->
                  <!--</td>-->
                <!--</tr>-->

                <!--<tr>-->
                  <!--<th class="head_td">当天浮动盈亏</th>-->
                  <!--<td>-->
                    <!--<div v-if="todayAccountBo.relativeProfit>0" class="data_box" :class="{Green:todayAccountBo.relativeProfit<0,Red:todayAccountBo.relativeProfit>=0}">-->
                      <!--+{{todayAccountBo.relativeProfit|setNum}}-->
                    <!--</div>-->
                    <!--<div v-else="todayAccountBo.relativeProfit<=0" class="data_box" :class="{Green:todayAccountBo.relativeProfit<0,Red:todayAccountBo.relativeProfit>=0}">-->
                      <!--{{todayAccountBo.relativeProfit|setNum}}-->
                    <!--</div>-->
                  <!--</td>-->
                  <!--<th class="head_td">总浮动盈亏</th>-->
                  <!--<td>-->
                    <!--<div v-if="totalAccountBo.relativeProfit>0" class="data_box" :class="{Green:totalAccountBo.relativeProfit<0,Red:totalAccountBo.relativeProfit>=0}">-->
                      <!--+{{totalAccountBo.relativeProfit|setNum}}-->
                    <!--</div>-->
                    <!--<div v-else="totalAccountBo.relativeProfit<=0" class="data_box" :class="{Green:totalAccountBo.relativeProfit<0,Red:totalAccountBo.relativeProfit>=0}">-->
                      <!--{{totalAccountBo.relativeProfit|setNum}}-->
                    <!--</div>-->
                  <!--</td>-->
                <!--</tr>-->

                <!--<tr>-->
                  <!--<th class="head_td">当天浮动盈亏率</th>-->
                  <!--<td>-->
                    <!--<div v-if="todayAccountBo.relativeProfitRate>0" class="data_box" :class="{Green:todayAccountBo.relativeProfitRate<0,Red:todayAccountBo.relativeProfitRate>=0}">-->
                      <!--+{{(todayAccountBo.relativeProfitRate * 100).toFixed(2)}}%-->
                    <!--</div>-->
                    <!--<div v-else="todayAccountBo.relativeProfitRate<=0" class="data_box" :class="{Green:todayAccountBo.relativeProfitRate<0,Red:todayAccountBo.relativeProfitRate>=0}">-->
                      <!--{{(todayAccountBo.relativeProfitRate * 100).toFixed(2)}}%-->
                    <!--</div>-->
                  <!--</td>-->
                  <!--<th class="head_td">总浮动盈亏率</th>-->
                  <!--<td>-->
                    <!--<div v-if="totalAccountBo.relativeProfitRate>0" class="data_box" :class="{Green:totalAccountBo.relativeProfitRate<0,Red:totalAccountBo.relativeProfitRate>=0}">-->
                      <!--+{{(totalAccountBo.relativeProfitRate * 100).toFixed(2)}}%-->
                    <!--</div>-->
                    <!--<div v-else="totalAccountBo.relativeProfitRate<=0" class="data_box" :class="{Green:totalAccountBo.relativeProfitRate<0,Red:totalAccountBo.relativeProfitRate>=0}">-->
                      <!--{{(totalAccountBo.relativeProfitRate * 100).toFixed(2)}}%-->
                    <!--</div>-->
                  <!--</td>-->
                <!--</tr>-->

                <!--<tr>-->
                  <!--<th class="head_td">当天跑赢上证</th>-->
                  <!--<td>-->
                    <!--<div v-if="todayAccountBo.beatStandardRate>0" class="data_box" :class="{Green:todayAccountBo.beatStandardRate<0,Red:todayAccountBo.beatStandardRate>=0}">-->
                      <!--+{{(todayAccountBo.beatStandardRate * 100).toFixed(2)}}%-->
                    <!--</div>-->
                    <!--<div v-else="todayAccountBo.beatStandardRate<=0" class="data_box" :class="{Green:todayAccountBo.beatStandardRate<0,Red:todayAccountBo.beatStandardRate>=0}">-->
                      <!--{{(todayAccountBo.beatStandardRate * 100).toFixed(2)}}%-->
                    <!--</div>-->
                  <!--</td>-->
                  <!--<th class="head_td">累计跑赢上证</th>-->
                  <!--<td>-->
                    <!--<div v-if="totalAccountBo.beatStandardRate>0" class="data_box" :class="{Green:totalAccountBo.beatStandardRate<0,Red:totalAccountBo.beatStandardRate>=0}">-->
                      <!--+{{(totalAccountBo.beatStandardRate * 100).toFixed(2)}}%-->
                    <!--</div>-->
                    <!--<div v-else="totalAccountBo.beatStandardRate<=0" class="data_box" :class="{Green:totalAccountBo.beatStandardRate<0,Red:totalAccountBo.beatStandardRate>=0}">-->
                      <!--{{(totalAccountBo.beatStandardRate * 100).toFixed(2)}}%-->
                    <!--</div>-->
                  <!--</td>-->
                <!--</tr>-->

                <!--<tr>-->
                  <!--<th class="head_td">当前仓位</th>-->
                  <!--<td>-->
                    <!--<div class="data_box">{{todayAccountBo.position|setNum}}%</div>-->
                  <!--</td>-->
                  <!--<th class="head_td">平均仓位</th>-->
                  <!--<td>-->
                    <!--<div class="data_box">{{totalAccountBo.avgPosition|setNum}}%</div>-->
                  <!--</td>-->
                <!--</tr>-->

                <!--<tr>-->
                  <!--<th class="head_td">持股市值</th>-->
                  <!--<td>-->
                    <!--<div class="data_box">{{todayAccountBo.stockMarket|setNum}}</div>-->
                  <!--</td>-->
                  <!--<th class="head_td">逆回购总收益</th>-->
                  <!--<td>-->
                    <!--<div class="data_box">{{totalAccountBo.repoProfit|setNum}}</div>-->
                  <!--</td>-->
                <!--</tr>-->

                <!--<tr>-->
                  <!--<th class="head_td">账户余额</th>-->
                  <!--<td>-->
                    <!--<div class="data_box">{{todayAccountBo.balance|setNum}}</div>-->
                  <!--</td>-->
                  <!--<th class="head_td">逆回购总收益率</th>-->
                  <!--<td>-->
                    <!--<div class="data_box">{{totalAccountBo.repoProfitRate|setNum}}%</div>-->
                  <!--</td>-->
                <!--</tr>-->
                <!--</tbody>-->
              <!--</table>-->
            <!--</div>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
    </div>
     </div>
</template>

<script>
  import echarts from 'echarts'
  export default {
    name: "virtual-account",
    props:{
      // virtCountStart:{
      //   type: Object,
      //   required:true
      // },
      // virtCountEnd:{
      //   type: Object,
      //   required:true
      // },
      // virtCountSummary:{
      //   type: Object,
      //     required:true
      // },
      todayAccountBo:{
        type: Object,
        required:true
      },
      totalAccountBo:{
        type: Object,
        required:true
      },
      className: {
      type: String,
    default: 'yourClassName'
    },
      id: {
        type: String,
      default: 'yourID'
      },
      width: {
        type: String,
      default: (window.height*80)+"%"
      },
        height: {
          type: String,
        default: '250px'
        },
    },
    methods: {
    },
    filters: {
      toFixed2: function (value) {
        return value.toFixed(2);
      }
    }
  }
</script>

<style scoped>
  *
  .virtualAccountBox {
    display: flex;
    flex-direction: row;
    width: 100%;
   /* overflow-x: scroll;*/
    margin: 0%;
    padding-top: 0px;
    /*margin-bottom:2rem;*/
  }

  .virtualTotalMoney{
    height:7rem;
    padding-top: 2rem;
  }
  .virtualTotalMoneyTitle{
    height: 2rem;
    line-height: 2rem;
    color: #7E7E7E;
    font-size: 1.8rem;
  }
  .virtualTotalMoneyValue{
    height: 3rem;
    line-height: 3rem;
    color: #E9531E;
    font-size: 3rem;
  }
  .virtual_item{
    margin-top: 2rem;
    width: 100%;
    height: 8rem;
  }
  .span6 {
    width: 50%;
  }

  .virtualAccountComponents {
    margin-top: 20px;
  }

  .virtualAccountRow {
    width: 96%;
    height: auto;
    margin: 0 2%;
    margin-top: 2rem;
    background: #fff;
    padding: 0 2%
  }

  .virtable {
    margin: 2% auto !important;
  }

  .virtualAccountHeader {
    /*margin: 0 2%;*/
    background: #ffffff;
    width: 100%;
    border-bottom: 1px solid #EEF1F5;
    text-align: center;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }

  .virtualAccountHeader h3 {
    /*height: 4rem;*/
    /*  margin-top:10px;*/
    /*line-height: 4rem;*/
    text-align: center;
  }

  .virtualAccountC4 {
    background: #ffffff;
    /*margin-top: 0.5rem;*/
  }

  .virtualAccountC8 {
   /* margin-top: 0.5rem;
    margin-left: 0.5rem;*/
    background: #ffffff;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  .data_box {
    width: 63%;
    text-align: right;
  }
  .virtualEmpty{
    font-size: 1.8rem;
    color: red;
  }
  .virtualTotalMoneyTitleValue{
    font-size: 2.5rem
  }
  .virtualTotalMoneyTitleName{
    height: 2rem;
    line-height: 2rem;
    color: #7E7E7E;
    font-size: 1.5rem;
    padding-left: 0;
    padding-right: 0;
  }
  .virtualTotalMoneyItem{
    padding-left: 0;
    padding-right: 0;
  }
  .accountOverview th{
    text-align: center;
  }
  .fontColor{
    color: rgb(51, 51, 51);
  }
  /*
  pc端显示
  */
  @media screen and (min-width: 601px)
  {
    .virtualAccountCount_app{
      display: none;
    }
    .virtualAccountCount_pc{
      margin-top: 30px;
    }
    .virtualAccountCount_pc table{
      border: none;
    }
    .virtualAccountCount_pc th{
      border: none;
    }
    .virtualAccountCount_pc td{
      border: none;
    }
    .head_td_app{
      display: none;
    }
  }

  /*
屏幕兼容(手机)
*/
  @media screen and (max-width:600px)
  {
    .head_td_pc{
      display: none;
    }
    .virtualAccountCount_pc{
      display: none;
    }

    .virtualAccountHeader {
      margin-top: 10px;
    }
    .virtualAccount{
      /*width: 96%;*/
      width: 100%;
      margin: auto;
    }
    .virtualAccountBox{
      display: flex;
      flex-wrap: wrap;
    }
    .virtualAccountC4 {
      width: 100%;
      background: #ffffff;
      height: 30%;
      padding-left: 2px;
      padding-right: 5px;
    }
    .yourClassName {
      margin-left: 1%;
    }
    .row{
      width: 100%;
      margin: 0px;
      margin-top: 20px;
    }
    .virtualAccountC8 {
      width: 100%;
      margin-left: 0rem;
      padding-left: 1%;
      padding-right: 1%;
    }
    .col-md-12{
      padding: 1px;
    }
    .virtureAllLook{
      /*font-size: 1.5rem;*/
    }
    .virtual_item{
      float: left;
      /*margin-left: 2rem;*/
    }
    .virtualTotalMoneyTitleValue{
      font-size: 2rem
    }
    .virtual_sm{
      float: left;
      /*margin-left: 2px;*/
    }
    .virtual_sm_1{
      border-right: 1px solid #c1c7ba;
    }
    .virtual_sm_2{
      border-right: 1px solid #c1c7ba;
    }
    .virtual_sm_3{
      /*margin-left: 10px;*/
    }
    .virtualEmpty{
      font-size: 1.5rem;
    }
    .col-md-12 table {
      font-size: 0.5rem;
     /* word-break: keep-all;*/

    }
    .col-md-12 table td {
      width: 20%;
    }
    .data_box {
      width: 100%;
      text-align: right;
    }
    .head_td {
      width: 60%;
      text-align: left;
    }
    tr {
      font-size: 1.2rem;
    }
    .table{
      width: 50%;
      float: left;
    }
    .table td{
      /*padding: 5px;*/
      border: none;
    }
    .table th{
      text-align: left;
      border: none;
    }
    .col-md-6{
      min-height: 0px;
      padding: 0px;
    }
    .end_tb{
      border: none;
    }
    .start_tb{
      border: none;
      border-right: 2px solid #ddd;
    }

    .col-sm-4{
      width: auto;
      padding-left: 10px;
      padding-right: 10px;
    }
  }
</style>
