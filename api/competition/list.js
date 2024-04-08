import request from "@/utils/request.js";

// 获得赛事列表
export function getList(data) {
  return request.get('app-api/meet/spu/page', data,{

	    noAuth: true // TODO 芋艿：后续要做调整

  });
}
// 获得赛事筛选
export function getTabList() {
  return request.get('app-api/meet/category/list',{},{

	    noAuth: true // TODO 芋艿：后续要做调整

  });
}
//获得赛事详情
export function getDetails(id) {
  return request.get('app-api/meet/spu/getDetail', {id},{

	    noAuth: true // TODO 芋艿：后续要做调整

  });
}

// 获取赛事订单信息
export function createSettlement(data) {
  return request.post('app-api/meet/order/settlement', data);
}

// 创建订单
export function createOrder(data) {
  return request.post('app-api/meet/order/create', data);
}
//获取支付订单
export function getOrderDetail(id) {
  return request.get("app-api/meet/order/payOrderInfo", {
    id
  });
}
export function checkMember(data) {
  return request.post('app-api/meet/order/checkMember', data);
}
//获取赛事订单分页
export function getOrderPage(pageNo,pageSize) {
  return request.get("app-api/meet/order/page", {
    pageNo,pageSize
  });
}
//获得交易订单详情
export function get_Detail(id) {
  return request.get("app-api/meet/order/get-detail", {
    id
  });
}
//取消交易订单
export function deleteCancel(orderId) {
  return request.delete(`app-api/meet/order/cancel?orderId=${orderId}`);
}

export function helper(type,pageNo,pageSize,asc){
	return request.get(`app-api/meet/favorite/helper?type=${type}&pageNo=${pageNo}&pageSize=${pageSize}&asc=${asc}`)
}

//赛道图
export function runWayImg(spuId){
	return request.get(`app-api/meet/helper/runwayPicUrl?spuId=${spuId}`)
}

//获取首页资讯
export function recommend(){
	return request.get(`app-api/promotion/article/recommend`)
}
//获取推荐赛事
export function getListSai(){
	return request.get(`app-api/meet/spu/list`)
}
//获取商品
export function getListOrder(){
	return request.get(`app-api/product/spu/list?recommendType=recommend_hot&count=4`)
}

export function getOrderDetails(id){
	return request.get(`app-api/meet/order/get-detail?id=${id}`)
}

//创建赛事收藏
export function createFavorite(spuId) {
  return request.post('app-api/meet/favorite/create', {spuId});
}

// 取消赛事收藏
export function deleteFavorite(spuId) {
  return request.delete('app-api/meet/favorite/delete', {
    spuId
  });
}
//获取收藏商品分页
export function getFavoritePage(data){
	return request.get('app-api/product/favorite/page', data,{
		    noAuth: true // TODO 芋艿：后续要做调整
	});
}
export function getMeetFavoritePage(data){
	return request.get('app-api/meet/favorite/page', data,{
		    noAuth: true // TODO 芋艿：后续要做调整
	});
}