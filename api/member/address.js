import request from "@/utils/request.js";
import exp from "constants";

// 获得用户收件地址
export function getAddress(id) {
  return request.get('app-api/member/address/get', {
    id
  });
}

// 获得默认的用户收件地址
export function getDefaultUserAddress() {
  return request.get('app-api/member/address/get-default', {});
}

// 获得用户收件地址列表
export function getAddressList() {
  return request.get('app-api/member/address/list', {});
}

// 创建用户收件地址
export function createAddress(data) {
  return request.post('app-api/member/address/create', data);
}

// 更新用户收件地址
export function updateAddress(data) {
  return request.put('app-api/member/address/update', data);
}

// 删除用户收件地址
export function deleteAddress(id) {
  return request.delete('app-api/member/address/delete?id=' + id);
}
//获取人员信息
export function getcomList(page,size,id) {
  return request.get(`app-api/meet/member_entrants/page?pageNo=${page}&pageSize=${size}&skuId=${id|| ''}`);
}
// 创建参赛人
export function createComAddress(data) {
  return request.post('app-api/meet/member_entrants/create', data);
}
//编辑参赛人员
export function getEditAddress(id,skuId) {
  return request.get('app-api/meet/member_entrants/detail', {
    id,skuId
  });
}

// 删除参赛人员
export function deleteInfo(id) {
  return request.delete('app-api/meet/member_entrants/delete?id=' + id, {});
}
//跟新人员信息
export function updateInfo(data) {
  return request.put('app-api/meet/member_entrants/update', data);
}

//获取参赛注意事项
export function getPrecautions(id) {
  return request.get(`app-api/meet/spu/precautions?spuId=${id}`);
}
//获取参赛规则
export function getMeetRule(id) {
  return request.get(`app-api/meet/spu/meetRule?spuId=${id}`);
}

//获取订单信息
export function createOrder(data) {
  return request.post('app-api/meet/order/create', data);
}
// //获取订单信息
// export function upload(data) {
//   return request.post('app-api/infra/file/upload', data);
// }




