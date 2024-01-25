<template>
  <view class="container">
		<view class="wrapper">
			<view>
				<u-navbar  leftIcon=' '  :safeAreaInsetTop="true" :placeholder='true' :fixed="false"
					bgColor="transparent">
			   <view  slot="left">
			   	<view class="ft16 cl-w">商城</view>
			   </view>
				</u-navbar>
			</view>
			<view class="ml10 mr10 pb10">
				<u-search inputAlign='center'  bgColor='#fff' placeholderColor='#F9A4C3' searchIconColor='#F9A4C3' placeholder="厦门马拉松"
					disabled :show-action="false" @click="handleSearchClick"></u-search>
			</view>

			</view>


    <!--轮播图-->
	<view class="mt10">
		    <yd-banner :preMargin="'0'" :nextMargin="'0'" :banner-list="bannerList" ></yd-banner>
	</view>


    <u-gap height="20px"></u-gap>

    <!--宫格菜单按钮-->
      <view class="mail_grid">
		   <view class="ft18 cl-zi ftw600 mb10">超值热卖</view>
		   <view class="flex around">
			   <view class="flex cloum alcenter" v-for="i in 4" style="width: 23%;">
				   <image src="https://marathon.zznet.live/file/uploadPath/img/1.jpg" class="i_img"></image>
				   <view class="tag">积分抵扣</view>
				    <view class="ftw600">￥59.9</view>
			   </view>

		   </view>
	  </view>

    <u-gap height="15px"></u-gap>
     <view>
		<!-- 优惠券 -->
		<!-- 商品 -->
	<view>
		  <u-tabs
		        :list="list4"
		        lineWidth="0"
		        lineColor=""
		        :activeStyle="{
		            color: '#303133',
		            fontWeight: 'bold',
		            transform: 'scale(1.05)'
		        }"
					@click="tabItem"
		        :inactiveStyle="{
		            color: '#606266',
		            transform: 'scale(1)'
		        }"
		        itemStyle="padding-left: 20px; padding-right: 20px; height: 34px;"
		    >
		    </u-tabs>
			 <yd-product-box :product-list="productList"  show-type="mail"></yd-product-box>
	</view>
	 </view>
	 <view style="height: 200px;"></view>
     <view class="footerRight">
		 <view class="flex alcenter bg-w mb10 item" @click="$u.route('/pages/subCompetition/mail/orderAddcart')">
			<view class='iconfont icon-gouwuche1'></view>
			<view class="ml5">购物车</view>
		 </view>
		 <view class="flex alcenter bg-w item" @click="$u.route('/pages/user/order_list/index')">
			<u-icon name="bag"></u-icon>
			<view>订单</view>
		 </view>
	 </view>
    <u-gap height="5px"></u-gap>
  </view>
</template>

<script>

import { getBannerData, getNoticeData } from '../../api/index'
import * as CategoryApi from '@/api/product/category.js';
import * as SpuApi from '@/api/product/spu.js';
import * as AreaApi from '@/api/system/area.js';
export default {
  components: {},
  data() {
    return {
		lineBg:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAOCAYAAABdC15GAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFxSURBVHgBzZNRTsJAEIb/WTW+lpiY+FZPIDew3ABP4GJ8hxsI9zBpOYHeQDwBPQI+mRiRvpLojtPdYhCorQqF/6GdbGd2vvwzBXZcNAt4oj1ANeUoAT5iqkUjbEFLHNmhD1YPEvpZ3ghkGlVDCkc94/BmHMq998I5ONiY1ZBfpKAyuOtgAc5yOEDmYEWNh32BHF91sGHZHmwW4azciN9aQwnz3SJEgOmte+R2tdLprTYoa50mvuomlLpD4Y3oQZnov6D2RzCqI93bWOHaEmAGqQUyRBlZR1WfarcD/EJ2z8DtzDGvsMCwpm8XOCfDUsVOCYhiqRxI/CTQo4UOvjzO7Pow18vfywneuUHHUUxLn55lLw5JFpZ8bEUcY8oXdOLWiHLTxvoGpLqoUmy6dBT15o/ox3znpoycAmxUsiJTbs1cmxeVKp+0zmFIS7bGWiVghC7Vwse8jFKAX9eljh4ggKLLv7uaQvG9/F59Oo2SouxPu7OTCxN/s8wAAAAASUVORK5CYII=',

		 list4: [],
      bannerList: [
        // {
        //   id: 1,
        //   title: '山不在高，有仙则名',
        //   picUrl: 'https://cdn.uviewui.com/uview/swiper/swiper1.png'
        // },
        // {
        //   id: 2,
        //   title: '水不在深，有龙则灵',
        //   url: 'https://cdn.uviewui.com/uview/swiper/swiper2.png'
        // },
        // {
        //   id: 3,
        //   title: '斯是陋室，惟吾德馨',
        //   url: 'https://cdn.uviewui.com/uview/swiper/swiper3.png'
        // }
      ],
      menuList: [
        { icon: 'gift', title: '热门推荐' },
        { icon: 'star', title: '收藏转发' },
        { icon: 'thumb-up', title: '点赞投币' },
        { icon: 'heart', title: '感谢支持' }
      ],

      productList: [

      ],
	  params: { // 精品推荐分页
	  	page: 1,
	  	limit: 10,
	  },
	  spuObj:{
		  id:0,
		  name:'热卖'
	  },
      moreStatus: 'nomore'
    }
  },
  onLoad() {

	this.getBannerList()
	this.getAllCategory()
	this.getSpuList()
  },
  methods: {

   tabItem(item){
	   console.log(item)
	   this.spuObj = item
	   this.getSpuList()
   },
    handleSearchClick(e) {
      uni.$u.route('/page_home/search/search')
    },
	getAllCategory(){
		CategoryApi.getCategoryList().then(res => {
			this.list4 = res.data
		   this.list4.unshift(this.spuObj)

				})
	},
	getSpuList(){
		SpuApi.getSpuPage({
			pageNo: this.params.page,
			pageSize: this.params.limit,
			categoryId:this.spuObj.id,

		}).then(res=>{
			this.productList = res.data.list

		})
	},
	getBannerList(){

		AreaApi.getBanner({
			position:1
		}).then(res=>{

			this.bannerList = res.data


		})
	}

  },

}
</script>

<style lang="scss" scoped>
.search-wrap {
  background: $custom-bg-color;
  padding: 20rpx;
}
	.wrapper {
		background-image: url('https://marathon.zznet.live/file/uploadPath/img/bg.png');
		background-size: cover;
		 }
.grid-title {
  line-height: 50rpx;
  font-size: 26rpx;
}
.mail_grid{
	background-color: #fff;
	padding:20rpx 15rpx;
	margin: 0 20rpx;
	border-radius: 15rpx;
	.tag{
		background-color: #f84f91;
		font-size: 28rpx;
		border-radius: 30rpx;
		color: #fff;
		padding: 10rpx 20rpx;
		margin: 10rpx 0;
	}
	.i_img{
		border-radius: 10px;
		width: 100%;
		height: 180rpx;

	}
}
.footerRight{
	position: fixed;
	right: 0;
	bottom: 15%;
	.item{
		padding: 15rpx 15rpx;
	}
}

</style>
