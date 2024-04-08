<template>
	<view>
     <u-navbar bgColor='transparent' title="我的收藏" :safeAreaInsetTop="true" :placeholder='true' :fixed="false"
     	:autoBack="true">
     		</u-navbar>
			<view class="bg-w ml10 mr10 radis">
				<u-tabs :list="list4" lineWidth="20" lineHeight="7" :lineColor="`url(${lineBg}) 100% 100%`" :activeStyle="{
				          color: '#EB3D74',
				          fontWeight: 'bold',
						  fontSize:'16px',
				          transform: 'scale(1.05)',
				
				      }" :inactiveStyle="{
				          color: '#606266',
				          transform: 'scale(1)'
				      }" itemStyle="padding-left: 10px; padding-right: 10px; height: 50px;" @click="onTabClick" :scrollable='false'>
				</u-tabs>
			</view>
			<mescroll-body @init="mescrollInit" @down="downCallback" @up="upCallback">
				<view v-show="'imglist' == showType" class="ml10 mr10 mt20">
					<yd-product-more :showType="showType" :product-list="productList"
							 @handleProdItemClick='onchangeItem' :isIcon='false' @setCollect='setCollect'></yd-product-more>
				</view>
			   <view v-show="showType == 'mail'">
				 <view class="ml10 mr10 mt20" v-for="item in orderData" :key='item.id'>
				 	<view class=" orderBorder">
				 		<view class="flex pt10 pb10 pl10 pr10">
				 			<view class="mr10">
				 				<u--image :showLoading="true"
				 					:src="item.picUrl" width="202rpx"
				 					height="202rpx"></u--image>
				 			</view>
				 			<view  style="flex:1">
				 				<u--text :lines="1" size="16px" color="#333333" :text="item.spuName"></u--text>
				 				
				 				<view class="flex mt15 mb10">
				 					<view v-for="(tag,index) in item.tags">
				 							<view :class="index ==0?'tagsColor':'tagsColorY'" class="mr5">{{tag}}</view>
				 					</view>
				 				</view>
				 				<view class="flex space alcenter">
									<view class="cl-eb">￥{{fen2yuan(item.price)}}</view>
									   	<view class='iconfont icon-shoucang1' @click.stop="setCollect(item)"></view>
								</view>
				 				
				 			</view>
				 		</view>
				 	
				 	</view>
				 
				 </view>
			   </view>
					</mescroll-body>

	</view>
</template>

<script>
	import * as Api from '@/api/competition/list.js'
	  import * as Util from '@/utils/util.js';
	import MescrollMixin from "@/uni_modules/mescroll-uni/components/mescroll-uni/mescroll-mixins.js";
	import * as ProductFavoriteApi from '@/api/product/favorite.js';
	export default{
		mixins: [MescrollMixin],
		data(){
			return{
		lineBg: 'https://marathon.zznet.live/file/uploadPath/image/tabImg.png',
		list4: [{
				name: '赛事'
			},
			{
				name: '商品'
			},
			
		],
		productList:[],
		orderData:[],
			showType:'imglist',
			
			}
		},
		methods:{
		upCallback(page) {
		
			let pageNum = page.num;
			let pageSize = page.size;
			if(this.showType == 'imglist'){
				Api.getMeetFavoritePage({
					pageNo: pageNum,
					pageSize,
					favType:'FOLLOW'
				}).then(res => {
					console.log(res.data.list)
					let curPageData = res.data.list
					let curPageLen = curPageData.length;
					let totalPage = res.data.total
					if (page.num == 1) this.productList = [];
					this.productList = this.productList.concat(curPageData);
					this.mescroll.endByPage(curPageLen, totalPage);
				})
			}else{
				Api.getFavoritePage({
					pageNo: pageNum,
					pageSize,
				
				}).then(res => {
					console.log(res.data.list)
					let curPageData = res.data.list
					let curPageLen = curPageData.length;
					let totalPage = res.data.total
					if (page.num == 1) this.orderData = [];
					this.orderData = this.orderData.concat(curPageData);
					this.mescroll.endByPage(curPageLen, totalPage);
				})
			}
		
		},
		setCollect(item){
			if(this.showType == 'imglist'){
				Api.deleteFavorite(item.spuId).then(res=>{
				uni.$u.toast('取消收藏')
				this.mescroll.resetUpScroll()
				})
			}else{
			ProductFavoriteApi.deleteFavorite(item.spuId).then(res => {
			uni.$u.toast('取消收藏')
			this.mescroll.resetUpScroll()
			})
			}
		
		},
			onchangeItem(item) {
				console.log(item)
				uni.$u.route('/pages/subCompetition/competition/details', {
					id: item
				})
			},
			fen2yuan(price) {
			  return Util.fen2yuan(price)
			},
			onTabClick(item){
				if(item.index ==0){
					
					this.showType = 'imglist'
						this.mescroll.resetUpScroll()
				}else{
					
					this.showType = 'mail'
						this.mescroll.resetUpScroll()
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.orderBorder{
		border: 1px solid #eee;
		margin: 10rpx 0;
		background-color: #fff;
		border-radius: 20rpx;
	}
	.tagsColor{
		font-size: 24rpx;
		background: #FFF2F6;
		border-radius: 6rpx 6rpx 6rpx 6rpx;
		padding: 5rpx 8rpx;
		border: 1rpx solid #EB3D74;
		color: #EB3D74;
	}
	.tagsColorY{
		font-size: 24rpx;
	background: #FFF1E2;
		border-radius: 6rpx 6rpx 6rpx 6rpx;
		padding: 5rpx 8rpx;
		border: 1rpx solid #F5881A;
		color: #F5881A;
	}
	.icon-shoucang1{
			color: #EB4278;
	}
</style>