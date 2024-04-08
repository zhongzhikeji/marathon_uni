<template>
	<view class="container">
		<view class="wrapper">
			<view>
				<u-navbar :safeAreaInsetTop="true" :placeholder='true' :fixed="false" bgColor="transparent">
					<view class="flex" slot="left" @click="getlocation">
						<u-icon name="map-fill" size="18"></u-icon>
						<view class="ml10  ft14">{{cityName == ''?'授权我的定位':cityName}}</view>

					</view>
					<view slot='center'>
						<u--image :showLoading="true"
							src="https://marathon.zznet.live/file/uploadPath/image/home/logo.png" width="83px"
							height="36px"></u--image>
					</view>
				</u-navbar>
			</view>

			<!--搜索栏-->

			<view class="search-wrap">
				<view class="nsearch">
					<u-search bgColor='#fff' placeholderColor='#CCCCCC' searchIconColor='#F58EB9' placeholder="搜索"
						disabled height="32" :show-action="false" @click="handleSearchClick"></u-search>
				</view>

				<view class="right">
					<view class="item" @click="$u.route('/page_home/user/SignIn/index')">
						<u--image :showLoading="true"
							src="https://marathon.zznet.live/file/uploadPath/image/home/nl.png" width="30px"
							height="18px"></u--image>
						<view>赚能量</view>
					</view>
					<view class="item" @click="$u.route('/page_home/lottery-draw/lottery-draw')">
						<u--image :showLoading="true"
							src="https://marathon.zznet.live/file/uploadPath/image/home/cj.png" width="30px"
							height="18px"></u--image>
						<view>抽奖</view>
					</view>
					<view class="item" @click="$u.route('/page_home/coupon/index')">
						<u--image :showLoading="true"
							src="https://marathon.zznet.live/file/uploadPath/image/home/yhj.png" width="30px"
							height="18px"></u--image>
						<view>优惠劵</view>
					</view>
					<view class="item" @click="$u.route('/page_home/notification/index')">
						<u--image :showLoading="true"
							src="https://marathon.zznet.live/file/uploadPath/image/home/tz.png" width="30px"
							height="18px"></u--image>
						<view>通知</view>
					</view>
				</view>
			</view>

			<!--轮播图-->
			<view class="ml10 mr10 mt10 mb10">
				<yd-banner :preMargin="'0'" :nextMargin="'0'" :banner-list="bannerList"
					style="background-color: transparent;"></yd-banner>
			</view>

		</view>
		<view class="ml10 mr10">
			<u-notice-bar :text="text1" bgColor='#FFEEF3' color='#EB3D74' style="border-radius: 20px;"></u-notice-bar>
		</view>

		<u-gap height="10px"></u-gap>

		<!--宫格菜单按钮-->
		<view class="home_grid ml10 mr10">
			<view class="banners bg1" @click="$u.route('/page_home/assistant/index')">
				<view class="bgItem">
					<view class="ft18 ftw600">参赛助手</view>
					<view class="mt5" style="color: #F6F7FA;">参赛辅助</view>
				</view>
			</view>
			<view class="banners bg2" @click="$u.route('/page_home/calendar/index')">
					<view class="bgItem">
					<view  class="ft18 ftw600">赛事日历</view>
					<view class="mt5" style="color: #F6F7FA;">全网赛事</view>
				</view>
			</view>
			<view class="banners bg3" @click="$u.route('/page_home/vote/index')">
				<view class="bgItem">
					<view  class="ft18 ftw600">人气投票</view>
					<view class="mt5" style="color: #F6F7FA;">人气王</view>
				</view>
			</view>
			<view class="banners bg4">
				<view class="bgItem">
					<view  class="ft18 ftw600">装备商城</view>
					<view class="mt5" style="color: #F6F7FA;">装备优选</view>
				</view>
			</view>

		</view>
		<view class="footer">
			<u-tabs :list="list4" lineWidth="20" lineHeight="7" :lineColor="`url(${lineBg}) 100% 100%`" :activeStyle="{
			          color: '#EB3D74',
			          fontWeight: 'bold',
					  fontSize:'16px',
			          transform: 'scale(1.05)',

			      }" :inactiveStyle="{
			          color: '#606266',
			          transform: 'scale(1)'
			      }" itemStyle="padding-left: 20px; padding-right: 20px; height: 50px;" @click="onTabClick">
			</u-tabs>
			<view class="ml10 mr10" v-show="index == 0">
				<view class="mt20 ">
					<view class="flex mb10" v-for="i in reList" :key="i.id">
						<view>
							<u--image :showLoading="true" radius='5' :src="i.picUrl"
								width="94px" height="94px"></u--image>
						</view>
						<view class="ml10">
							<view class="ft16  mb10">{{i.title}}</view>
							<u--text size='14' color='#ccc' :lines="2"
								:text="i.introduction"></u--text>
						</view>
					</view>
				</view>
			</view>
			<view v-show="index ==1" style="margin: 10px; ">
				<yd-product-more showType="listHome" :product-list="productList" 
					 @handleProdItemClick='onchangeItem'></yd-product-more>
				
			</view>
			<view class="ml10 mr10" v-show="index==2" v-for="item in orderData" :key='item.id'>
				<view class=" orderBorder">
					<view class="flex pt5 pb5 pl5 pr5">
						<view class="mr10">
							<u--image :showLoading="true"
								:src="item.picUrl" width="94px"
								height="94px"></u--image>
						</view>
						<view class="">
							<u--text :lines="1" size="16px" color="#333333" :text="item.name"></u--text>
							
							<view class="flex mt15 mb10">
								<view v-for="(tag,index) in item.tags">
										<view :class="index ==0?'tagsColor':'tagsColorY'" class="mr5">{{tag}}</view>
								</view>
							</view>
							
							<view class="cl-eb">￥{{fen2yuan(item.price)}}</view>
						</view>
					</view>
				
				</view>
			
			</view>
			<u-loadmore marginTop='25' status="loadmore" @loadmore="loadmore" loadmoreText='查看全部' />
		</view>





	</view>
</template>

<script>
	import {
		mapGetters
	} from "vuex";
	import location from '@/uni_modules/hic-location/js_sdk/index.js';
	import * as AreaApi from '@/api/system/area.js';
	import * as Api from '@/api/competition/list.js'
	  import * as Util from '@/utils/util.js';
	import {
		toLogin
	} from '@/libs/login.js';
	export default {
		components: {},
	
		data() {
			return {
				bannerList: [],
					
				text1: '江西上饶半马赛事推荐田协认证 2023铅山..',
				moreStatus: 'nomore',
				status: 'loadmore',
				list: 5,
				page: 0,
				cityName:'',
				index:0,
				productList:[],
				lineBg: 'https://marathon.zznet.live/file/uploadPath/image/tabImg.png',
				list4: [{
						name: '头条资讯'
					},
					{
						name: '推荐赛事'
					},
					{
						name: '热销商品'
					}
				],
               reList:[],
			   orderData:[]
			}
		},
		onLoad() {
			this.loadBannerData()
            this.getRecommend()
			this.getlocation()
		},

		methods: {
			loadmore() {
				console.log('loadmore');
				uni.$u.toast('加载更多')
			},
			loadBannerData() {
				AreaApi.getBanner({
					position: 1
				}).then(res => {
				
					this.bannerList = res.data
				})
			},
			getListSaiShi(){
				Api.getListSai().then(res=>{
					this.productList = res.data
				})
			},
			getRecommend(){
				Api.recommend().then(res=>{
					this.reList = res.data
					console.log(res)
				})
				
				
			},
			getOrderList(){
				Api.getListOrder().then(res=>{
					this.orderData = res.data
					
					})
			},
			onTabClick(item){
				if(item.index ==0){
					this.index =0
				  this.getRecommend()
				}else if(item.index == 1){
					this.index = 1
				   this.getListSaiShi()
				}else{
					this.index = 2
					this.getOrderList()
				}
			},
			onchangeItem(item) {
				console.log(item)
				uni.$u.route('/pages/subCompetition/competition/details', {
					id: item
				})
			},
			async getlocation() {
				const res = await location.reverseGeocoder();
				const city = JSON.parse(this.$Cache.get('CurrentCity'))
				if(city.cityName == res.cityName){
					this.cityName = res.cityName
					return
				}
				
				this.$Cache.set('CurrentCity',JSON.stringify(res))
				this.cityName = res.cityName

			},
			handleSearchClick(e) {
		
					uni.$u.route('/page_home/search/search')
				

			},
			fen2yuan(price) {
			  return Util.fen2yuan(price)
			}
		},
		computed: {

		}
	}
</script>

<style lang="scss" scoped>
	.wrapper {
		// background-image: url('https://marathon.zznet.live/file/uploadPath/img/bg.png') ;
		// background-size: cover;
	}

	.search-wrap {

		padding: 20rpx;
		display: flex;

		.nsearch {
			width: 204rpx;
			height: 76rpx;
		}

		.right {
			display: flex;
			margin-left: 40rpx;
			flex: 1;
			justify-content: space-between;
			font-size: 24rpx;

			.item {
				display: flex;
				flex-direction: column;
				align-items: center;
			}
		}
	}

	.home_grid {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;

		.banners {
			width: 50%;
			height: 160rpx;
		}

		.bg1 {
			background-image: url('https://marathon.zznet.live/file/uploadPath/image/home/b1.png');
			background-size: cover;
		}

		.bg2 {
			background-image: url('https://marathon.zznet.live/file/uploadPath/image/home/b2.png');
			background-size: cover;
		}

		.bg3 {
			background-image: url('https://marathon.zznet.live/file/uploadPath/image/home/b3.png');
			background-size: cover;
		}

		.bg4 {
			background-image: url('https://marathon.zznet.live/file/uploadPath/image/home/b4.png');
			background-size: cover;
		}
	}
   .bgItem{
	   margin-left: 60rpx;
	   margin-top: 50rpx;
	   color: #fff;
   }
	.footer {
		margin: 20rpx;
		background-color: #fff;
		border-radius: 20rpx;
		padding-bottom: 20rpx;
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
	.orderBorder{
		border: 1px solid #eee;
		margin: 10rpx 0;
		box-shadow: 0rpx -6rpx 40rpx 2rpx rgba(0,0,0,0.1);
	}
</style>
