<template>
	<view class="container">
		<view class="wrapper">
			<u-navbar :safeAreaInsetTop="true" :placeholder='true' :fixed="false" bgColor="transparent">
				<view class="flex" slot="left">

					<view class="ft18 ftw600">我的</view>

				</view>
			</u-navbar>
			<view class="user-header">
				<view class="user-info" @click="pageRouter('/page_home/profile/profile')">
					<u-avatar size="60" shape="circle" :src="userInfo.avatar"></u-avatar>
					<view class="info-text">
						<view class="user-nickname">{{ hasLogin ? userInfo.nickname || '马拉松选手' : '匿名用户' }}</view>
						<view class="user-mobile">{{ hasLogin ? userInfo.mobile || ' ' : '登录/注册' }}</view>
					</view>
					<view>
					</view>
				</view>
				<view class="user-setting flex">
					<div class="mr20 flex cloum alcenter" v-if="hasLogin">
						<u-icon 
							name="https://runplus-marathon.oss-cn-hangzhou.aliyuncs.com/userSetting.png" size="25"
							@click="pageRouter('/page_home/setting/setting')"></u-icon>
						<view class="ft12 mt5">设置</view>
					</div>
					<div class="flex cloum alcenter"  v-if="hasLogin">
						<u-icon
							name="https://runplus-marathon.oss-cn-hangzhou.aliyuncs.com/user_Lottery.png" size="25"
							@click="$u.route('/page_home/lottery-draw/lottery-draw')"></u-icon>
						<view class="ft12 mt5">抽奖</view>
					</div>
				</view>
			</view>
			<view class="stat-box">
				<u-grid :border="true" col="4" @click="onchangeCollect">
					<u-grid-item v-for="(item, index) in statList" :key="index">
						<text class="grid-value">{{ item.value }}</text>
						<text class="grid-title">{{ item.title }}</text>

					</u-grid-item>
				</u-grid>
			</view>
			<view class="ml20 mr20 userVip" @click="$u.route('/pages/user/vip')">
				<view class="flex alcenter pt10 pb10 space ml10 mr10">
					<u--image width="86rpx" height="86rpx"
						src="https://runplus-marathon.oss-cn-hangzhou.aliyuncs.com/vipLogo.png"></u--image>
					<view class="mr10">
						<view class="ft16 ftw600" style="color:#FFF5B7">VIP会员</view>
						<view class="ft12 mt5" style="color:#E7D2B6">99元开通年度VIP，享受更多精彩赛事服务</view>
					</view>
					<view class="flex cloum alcenter mr10" style="color: #E7D2B6;">
						<text>立即</text>
						<text>开通</text>
					</view>
				</view>
			</view>
		</view>

		<view class="ml10 mr10 mt10">
			<u-notice-bar :text="text1" bgColor='#FFEEF3' color='#EB3D74' style="border-radius: 20px;"></u-notice-bar>
		</view>
		<view class="flex alcenter space ml10 mr10 pt15 pb15">
			<view class="user_Com" @click="$u.route('/page_home/user/matchOrder/index')">
				<view class="flex center alcenter h-full">
					<u--image width="75rpx" height="65rpx"
						src="https://runplus-marathon.oss-cn-hangzhou.aliyuncs.com/user_Com.png"></u--image>
					<view class="ft14 ml5 cl-w">赛事订单</view>

				</view>

			</view>
			<view class="user_sp" @click="$u.route('/page_home/user/order_list/index')">
				<view class="flex center alcenter h-full">
					<u--image width="75rpx" height="65rpx"
						src="https://runplus-marathon.oss-cn-hangzhou.aliyuncs.com/user_sp.png"></u--image>
					<view class="ft14 ml5 cl-w">商品订单</view>

				</view>
			</view>
		</view>
		<u-gap height="10" bgColor="#f3f3f3"></u-gap>
		<view class="bg-w ml10 mr10 radis">
			<view class="ml10 mr10 pt15 pb15">
				<view class="flex alcenter space">
					<view class="flex alcenter">
						<view class="lines"></view>
						<view class="ft16 ml5">我的钱包</view>
					</view>
					<text class="cl-placeholder">账户信息></text>

				</view>
				<view class="flex alcenter space mt10">
				     <view class="cl-eb">
					
						 <view>￥<text class="ft24 ftw600">{{fen2yuan(wallet.balance)}}</text></view>
						 <view class="mt10" v-show="wallet.price != null"><text class="cl-placeholder">新增佣金:</text>￥{{wallet.price}}</view>
					 </view>
					<view style="width: 140rpx;">
						<u-button shape='circle' color='#FFEEF3' style="color:#EB3D74"
							@click="$u.route('/page_home/user/purse/index')" >详情</u-button>
					</view>

				</view>
				<view class="flex around userInfo">
					<view class="flex" @click="$u.route('/page_home/user/tram/index')">
						<u-icon name="https://runplus-marathon.oss-cn-hangzhou.aliyuncs.com/user_wdtd.png"></u-icon>
						<text class="ml10" style="color: #2F2F46;">我的团队</text>
					</view>
					<u-line direction="col" dashed length="40rpx"></u-line>
					<view class="flex" @click="$u.route('/pages/order/spread')">
						<u-icon name="https://runplus-marathon.oss-cn-hangzhou.aliyuncs.com/user_tgds.png"></u-icon>
						<text class="ml10" style="color: #2F2F46;">推广大使</text>
					</view>
				</view>
			</view>
		</view>

		<u-gap height="10" bgColor="#f3f3f3"></u-gap>
		<view>
			<view class="ml10 mr10">
				<view class="order-status-box">
					<u-grid :border="false" col="4">
						<u-grid-item v-for="(item, index) in orderStatusList" :key="index"
							@click="pageRouter(item.path, item.status)">
							<u-icon :name="item.icon" :size="25"></u-icon>
							<text class="grid-title" style="line-height: 100rpx;">{{ item.name }}</text>
						</u-grid-item>
					</u-grid>
				</view>
			</view>

		</view>

		<u-gap height="10" bgColor="#f3f3f3"></u-gap>



		<!--    <u-gap height="10" bgColor="#f3f3f3"></u-gap> -->

		<!--    <u-cell-group class="fun-list">
      <u-cell class="fun-item" :border="false" icon="gift" title="分销中心" isLink></u-cell>
      <u-cell class="fun-item" :border="false" icon="tags" title="领券中心" isLink></u-cell>
      <u-cell class="fun-item" :border="false" icon="coupon" title="我的优惠券" isLink></u-cell>
      <u-cell class="fun-item" :border="false" icon="map" title="收货地址" @click="pageRouter('/pages/address/list')" isLink></u-cell>
    </u-cell-group> -->
	</view>
</template>

<script>
	import orderStatus from '@/common/orderStatus'
	import * as authApi from '@/api/member/auth.js'
	import {
		toLogin
	} from '@/libs/login.js';
	import Cache from '@/utils/cache';
	  import * as Util from '@/utils/util.js';
	import {
		BACK_URL
	} from '@/config/cache';
	export default {
		data() {
			return {
				orderPage: '/pages/order/list',
				eyes: false,
				text1: '江西上饶半马赛事推荐田协认证 2023铅山..',
				statList: [
				],
				wallet:{}
			}
		},
		onLoad() {
			// if (this.hasLogin) {
			// 	this.$store.dispatch('ObtainUserInfo')
			// }
			this.getUserInfos()
		},
		computed: {
			userInfo() {
				return this.$store.getters.userInfo
			},
			hasLogin() {

				return this.$store.getters.isLogin
			},
		
			orderStatusList() {
				let orderStatusList = []
				for (let status in orderStatus) {
					// if (status !== '40') {

					// }
					orderStatusList.push({
						name: orderStatus[status].name,
						status: status,
						icon: orderStatus[status].icon,
						path: orderStatus[status].path
					})
				}
				return orderStatusList
			}
		},
		methods: {
			pageRouter(pageUrl, param) {
				console.log(Cache)
				if (!this.hasLogin) {
					Cache.set(BACK_URL, '')
					toLogin();
				} else if (pageUrl) {
					uni.$u.route(pageUrl, {
						status: param
					})
				} else {
					uni.$u.route(pageUrl)
				}
			},
			getUserInfos(){
				authApi.getUserInfo().then(res=>{
					this.statList = [
						{
						 value:res.data.favoriteNum,
						 title:'收藏'
						},
						{
						 value:res.data.couponNum,
						 title:'优惠劵'
						},
						{
						 value:res.data.commentNum,
						 title:'评价'
						},
						{
						 value:res.data.point,
						 title:'能量'
						},
					]
					this.wallet = res.data.wallet
					console.log(res.data.wallet)
				})
			},
			onchangeCollect(name) {
				console.log(name)
				if (name == 0) {

					this.$u.route('/page_home/user/collect/index')
				} else if (name == 1) {
				this.$u.route('/page_home/coupon/myCouon')
				} else if(name == 3) {
					console.log(name)
					this.$u.route('/page_home/user/energy/index')
				}
			},
			fen2yuan(price) {
			  return Util.fen2yuan(price)
			},
			logout() {
				uni.showModal({
					title: '提示',
					content: '您确定要退出登录吗',
					success: res => {
						if (res.confirm) {
							this.$store.dispatch('Logout')
						} else if (res.cancel) {
							//console.log('用户点击取消')
						}
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.u-border-right {
		height: 25px;
	}

	.wrapper {
		background-image: url('https://runplus-marathon.oss-cn-hangzhou.aliyuncs.com/user_bg.png');
		background-size: 100% 100%;
	}

	.userVip {
		background-image: url('https://runplus-marathon.oss-cn-hangzhou.aliyuncs.com/userVip.png');
		background-size: 100% 100%;
	}

	.user-header {
		// background-color: #fff;
		@include flex-space-between;
		padding: 30rpx;
		height: 200rpx;

		.user-info {
			@include flex-left;
			align-items: center;

			.info-text {
				margin-left: 20rpx;

				.user-nickname {
					font-size: 30rpx;
					font-weight: 700;
					line-height: 50rpx;
				}

				.user-mobile {
					font-size: 24rpx;
					font-weight: 700;
					color: #939393;
					line-height: 50rpx;
				}
			}
		}

		.user-setting {
			margin-right: 5rpx;
		}
	}

	.order-header {
		@include flex-space-between;
		padding: 20rpx 30rpx;
		border-bottom: $custom-border-style;

		.order-title {
			color: #333333;
			font-size: 34rpx;
		}

		.see-all {
			height: 40rpx;
			@include flex-right;
			color: #666666;
			font-size: 26rpx;
		}
	}

	.order-status-box {
		padding: 50rpx 0;
		background-color: #fff;

	}

	.stat-box {
		padding: 20rpx 0;
	}

	.grid-title {
		line-height: 50rpx;
		font-size: 26rpx;
         color: #9CA1B2;
	}

	.grid-value {

		font-size: 36rpx;
		font-weight: 700;
		
	}

	.fun-list {
		.fun-item {
			padding-top: 10rpx;
			padding-bottom: 10rpx;
			border-bottom: $custom-border-style;
		}
	}

	.userInfo {
		margin-top: 20rpx;
		background-color: #f5f5f5;
		padding: 25rpx 0;
		border-radius: 20rpx;
	}

	.user_Com {
		width: 340rpx;
		height: 134rpx;
		background: linear-gradient(271deg, #EB3D74 0%, #F23BBB 100%);
		border-radius: 12rpx 12rpx 12rpx 12rpx;
	}

	.user_sp {
		width: 340rpx;
		height: 134rpx;
		background: linear-gradient(272deg, #2D71FF 0%, #69AEFE 100%);
		border-radius: 12rpx 12rpx 12rpx 12rpx;
	}

	.lines {
		width: 10rpx;
		height: 30rpx;
		background: #EB3D74;
	}
</style>