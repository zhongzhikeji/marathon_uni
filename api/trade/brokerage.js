import request from "@/utils/request.js";

// 获得个人分销信息
export function getBrokerageUser() {
  return request.get('app-api/trade/brokerage-user/get');
}

// 获得个人分销信息
export function bindBrokerageUser(bindUserId) {
  return request.put('app-api/trade/brokerage-user/bind', {
    bindUserId
  });
}

// 获得个人分销统计
export function getBrokerageUserSummary() {
  return request.get('app-api/trade/brokerage-user/get-summary');
}

// 获得下级分销统计分页
export function getBrokerageUserChildSummaryPage(data) {
  return request.get('app-api/trade/brokerage-user/child-summary-page', data);
}

// 获得分销用户排行分页（基于用户量）
export function getBrokerageUserRankPageByUserCount(data) {
  return request.get('app-api/trade/brokerage-user/rank-page-by-user-count', data);
}

// 获得分销用户排行（基于佣金）
export function getBrokerageUserRankByPrice(data) {
  return request.get('app-api/trade/brokerage-user/get-rank-by-price', data);
}

// 获得分销用户排行分页（基于佣金）
export function getBrokerageUserRankPageByPrice(data) {
  return request.get('app-api/trade/brokerage-user/rank-page-by-price', data);
}

// 获得分销提现分页记录
export function getBrokerageWithdrawPage(data) {
  return request.get('app-api/trade/brokerage-withdraw/page', data);
}

// 创建分销提现
export function createBrokerageWithdraw(data) {
  return request.post('app-api/trade/brokerage-withdraw/create', data);
}

// 获得分销记录分页
export function getBrokerageRecordPage(data) {
  return request.get('app-api/trade/brokerage-record/page', data);
}

// 获得商品的分销金额
export function getProductBrokeragePrice(spuId) {
  return request.get('app-api/trade/brokerage-record/get-product-brokerage-price', {
    spuId
  },
	{
	  noAuth: true // TODO 芋艿：后续要做调整
	}
	);
}
