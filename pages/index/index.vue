<template>
  <view class="container">
		<view class="wrapper">
			<view>
				<u-navbar  leftIcon=' '  :safeAreaInsetTop="true" :placeholder='true' :fixed="false"
					bgColor="transparent" title="优选商城">
			
				</u-navbar>
			</view>
			<view class="ml10 mr10 pb10">
				<u-search inputAlign='left'  bgColor='#fff'  searchIconColor='#F9A4C3' placeholder="搜索商品名称"
					disabled :show-action="false" @click="handleSearchClick"></u-search>
			</view>

			</view>


    <!--轮播图-->
	<view class="mt10 ml10 mr10">
		    <yd-banner :preMargin="'0'" :nextMargin="'0'" :banner-list="bannerList" ></yd-banner>
	</view>


    <u-gap height="20px"></u-gap>

    <!--宫格菜单按钮-->
      <view class="mail_grid">
		  <view class="flex  alcenter">
			  <u--image :showLoading="true" src="https://runplus-marathon.oss-cn-hangzhou.aliyuncs.com/hot.png" width="15px" height="17px" ></u--image>
			  <text class="ft18   ml4">超值热卖</text>
		  </view>
		
		   <view class="flex around mt10">
			   <view class="flex cloum " v-for="i in 4" style="width: 23%;">
				   <image src="https://marathon.zznet.live/file/uploadPath/img/1.jpg" class="i_img"></image>
				 <view class="ftw600">￥59.9</view>
				<view class="tag">能量抵扣</view>
		
			   </view>

		   </view>
	  </view>

    <u-gap height="15px"></u-gap>
     <view class="ml10 mr10 ">
		<!-- 优惠券 -->
		<!-- 商品 -->
	<view class="bg-w radis">
	<u-tabs :list="list4" lineWidth="20" lineHeight="7" :lineColor="`url(${lineBg}) 100% 100%`" :activeStyle="{
			          color: '#EB3D74',
			          fontWeight: 'bold',
					  fontSize:'16px',
			          transform: 'scale(1.05)',

			      }" :inactiveStyle="{
			          color: '#606266',
			          transform: 'scale(1)'
			      }" itemStyle="padding-left: 20px; padding-right: 10px; height: 50px;">
			</u-tabs>
			 <yd-product-box :product-list="productList"  show-type="mail"></yd-product-box>
	</view>
	 </view>
	 <view style="height: 200px;"></view>
     <view class="footerRight">
		 <view class="flex alcenter bg-w item" @click="$u.route('/pages/subCompetition/mail/allClass')">
		 			  <u--image :showLoading="true" src="https://runplus-marathon.oss-cn-hangzhou.aliyuncs.com/AllClass.png" width="15px" height="15px" ></u--image>
		 			<view class="ml5">全部分类</view>
		 </view>
		 <view class="flex alcenter bg-w item" @click="$u.route('/page_home/user/order_list/index')">
		 			  <u--image :showLoading="true" src="https://runplus-marathon.oss-cn-hangzhou.aliyuncs.com/mailOrder.png" width="15px" height="15px" ></u--image>
		 			<view class="ml5">我的订单</view>
		 </view>
		 <view class="flex alcenter bg-w  item" @click="$u.route('/pages/subCompetition/mail/orderAddcart')">
		  <u--image :showLoading="true" src="https://runplus-marathon.oss-cn-hangzhou.aliyuncs.com/mailCart.png" width="15px" height="15px" ></u--image>
			<view class="ml5">购物车</view>
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
	     lineBg: 'https://marathon.zznet.live/file/uploadPath/image/tabImg.png',
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
	// .wrapper {
	// 	background-image: url('https://marathon.zznet.live/file/uploadPath/img/bg.png');
	// 	background-size: cover;
	// 	 }
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
		background-color: #E4ECFF;
		color: #2D71FF;
		margin: 10rpx 0;
		font-size: 24rpx;
		width: 80%;
		line-height: 50rpx;
		text-align: center;
	
	}
	.i_img{
		border-radius: 10px;
		width: 100%;
		height: 150rpx;

	}
}
.footerRight{
	position: fixed;
	right: 0;
	bottom: 10%;
	.item{
		padding: 15rpx 10rpx;
		margin-bottom: 20rpx;
		border-radius: 10rpx;
	}
}

</style>
