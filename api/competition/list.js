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

