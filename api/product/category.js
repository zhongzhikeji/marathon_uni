import request from "@/utils/request.js";

// 查询分类列表
export function getCategoryList() {
  return request.get('app-api/product/category/list', {});
}
//查询商品大类
export function getParentList() {
  return request.get('app-api/product/category/parentList', {});
}
//根据商品大类获取小类商品

export function getChildListAndProducts(parentId) {
  return request.get('app-api/product/category/childListAndProducts', {parentId});
}

