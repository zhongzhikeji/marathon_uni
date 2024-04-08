<template>
	<view>
		<view class='my-order'>
			<!-- 顶部统计 -->
			<u-navbar bgColor='transparent' title="商品订单" :safeAreaInsetTop="true" :placeholder='true' :fixed="false"
				:autoBack="true">
			</u-navbar>
			<view class='nav '>
				<u-tabs :scrollable='false' :list="list" lineWidth="20" lineHeight="7"
					:lineColor="`url(${lineBg}) 100% 100%`" :activeStyle="{
				          color: '#EB3D74',
				          fontWeight: 'bold',
						  fontSize:'16px',
				          transform: 'scale(1.05)',
						 
				      }" :inactiveStyle="{
				          color: '#606266',
				          transform: 'scale(1)'
				      }" itemStyle="height:40px;" @click="onTabClick">
				</u-tabs>
				<!--   <view class='item' :class='orderStatus === undefined ? "on": ""' @click="statusClick()">
          <view>全部</view>
          <view class='num'>{{ orderData.allCount || 0}}</view>
        </view>
				<view class='item' :class='orderStatus === 0 ? "on": ""' @click="statusClick(0)">
					<view>待付款</view>
					<view class='num'>{{orderData.unpaidCount || 0}}</view>
				</view>
				<view class='item' :class='orderStatus === 10 ? "on": ""' @click="statusClick(10)">
					<view>待发货</view>
					<view class='num'>{{orderData.undeliveredCount || 0}}</view>
				</view>
				<view class='item' :class='orderStatus === 20 ? "on": ""' @click="statusClick(20)">
					<view>待收货</view>
					<view class='num '>{{orderData.deliveredCount || 0}}</view>
				</view>
				<view class='item' :class='orderStatus === 30 ? "on": ""' @click="statusClick(30, false)">
					<view>待评价</view>
					<view class='num'>{{orderData.uncommentedCount || 0}}</view>
				</view> -->
			</view>
			<view class='list'>
				<view class='item' v-for="(order, index) in orderList" :key="index">
					<view @click='goOrderDetails(order.id)'>
						<view class='title acea-row row-between-wrapper'>
							<!-- <view class="acea-row row-middle">
								<text class="sign cart-color acea-row row-center-wrapper" v-if="order.typeName">{{ order.typeName }}</text>
								<view>{{ formatDate(order.createTime) }}</view>
							</view> -->
							<!-- 订单状态 -->
							<view class='bgrightTitle'>{{order.orderStatus}}</view>
							<view v-if="order.status === 0" class="bgrightTitle bgyellow">待付款</view>
							<view v-else-if="order.status === 10 && order.deliveryType === 1" class="bgrightTitle">待发货
							</view>

							<view v-else-if="order.status === 10 && order.deliveryType === 2" class="bgrightTitle">待核销
							</view>
							<view v-else-if="order.status === 20" class="bgrightTitle bgBlue">待收货</view>
							<view v-else-if="order.status === 30 && !order.commentStatus" class="bgrightTitle">待评价
							</view>
							<view v-else-if="order.status === 30 && order.commentStatus" class="bgrightTitle">已完成</view>
							<view v-else-if="order.status === 40" class="bgrightTitle">已关闭</view>
						</view>
						<!-- 订单项信息 -->
						<view class='item-info  flex' v-for="(item, index) in order.items" :key="index">
							<view class='pictrue'>
								<image :src='item.picUrl'></image>
							</view>
							<view class='ml10' style="flex:1">
								<view class=''>{{ item.spuName }}</view>
								<view class="ft12 cl-ae mt5 mb5 flex">

									{{item.properties.length>=2?item.properties[0].valueName+'/'+item.properties[1].valueName:item.properties[0].valueName}}
								</view>
								<view class="flex space alcenter">
									<view class="cl-eb ftw600 ft12">￥
										<text class="ft14">{{fen2yuan(item.price)}}</text>
									</view>
									<view>x{{item.count}}</view>
								</view>
								<!-- <view class='money'>
									<view>￥{{ fen2yuan(item.price) }}</view>
									<view>x{{ item.count }}</view>
								</view> -->
							</view>

						</view>
						<view class="pl10 pr10 flex mt15">
							<view class="btn_show" v-show="order.couponPrice !=0">优惠劵</view>
							<view class="btn_show ml10" v-show="order.couponPrice !=0">能量</view>
						</view>
						<!-- 订单金额 -->
						<view class='totalPrice'>共{{ order.productCount }}件商品，实付款
							<text class='money cl-eb'>￥{{ fen2yuan(order.payPrice) }}</text>
						</view>
					</view>
					<!-- 订单操作区 -->
					<view class='bottom flex alcenter end'>
						<view class="flex " v-if='order.payExpireTime!=null'>
							<u-count-down :time="order.payExpireTime > isData?order.payExpireTime-isData:0"
								format="DD:HH:mm:ss" autoStart @change="onChange(index, $event)">
								<view class="flex alcenter end ft12" v-if='countDownItems[index]'>
									<view class="ft12">付款倒计时:</view>
									<text style="color: #EB3D74;">{{ countDownItems[index].hours>10?countDownItems[index].hours:'0'+countDownItems[index].hours }}时</text>
								
									<text style="color: #EB3D74;">{{ countDownItems[index].minutes }}分</text>
                                    <text style="color: #EB3D74;">{{ countDownItems[index].seconds }}秒</text>
									
								</view>
							</u-count-down>
						</view>
						<view class='bnt cancelBnt' v-if="order.status === 0" @click='cancelOrder(index, order.id)'>
							取消订单
						</view>
						<view class='bnt bgColors' v-if="order.status === 0" @click='goPay(order.id, order.payOrderId)'>
							去付款
						</view>
						<view class='bnt cancelBnt' v-if="order.status === 10" @click='afterSaleTap(order)'>
							我要退款
						</view>
						<view class='bnt bgColors' v-if="order.status === 10">
							催发货
						</view>
						<view class='bnt bgColors' v-if="order.status === 30 && !order.commentStatus"
							@click='goOrderDetails(order.id)'>
							去评价
						</view>
						<view class='bnt cancelBnt' v-if="order.status === 40" @click='delOrder(order.id, index)'>
							删除订单
						</view>
						<!--   <view class='bnt bgColors' @click='goOrderDetails(order.id)'>
              查看详情
            </view> -->
					</view>
				</view>
			</view>
			<view class='loadingicon acea-row row-center-wrapper' v-if="orderList.length>0">
				<text class='loading iconfont icon-jiazai' :hidden='!loading' /> {{loadTitle}}
			</view>
			<view v-if="orderList.length === 0">
				<emptyPage title="暂无订单~"></emptyPage>
			</view>
		</view>
		<view class='noCart' v-if="orderList.length === 0 && page > 1">
			<view class='pictrue'>
				<image src='/images/noOrder.png'></image>
			</view>
		</view>

	</view>
</template>
<script>
	import {
		openOrderSubscribe
	} from '@/utils/SubscribeMessage.js';

	import payment from '@/components/payment';
	import {
		toLogin
	} from '@/libs/login.js';
	import {
		mapGetters
	} from "vuex";
	import emptyPage from '@/components/emptyPage.vue'
	import * as OrderApi from '@/api/trade/order.js';
	import dayjs from '@/plugin/dayjs/dayjs.min.js';
	import * as Util from '@/utils/util.js';
	export default {
		components: {
			payment,

			emptyPage
		},
		data() {
			return {
				loading: false, //是否加载中
				loadend: false, //是否加载完毕
				loadTitle: '加载更多', //提示语
				orderList: [], // 订单数组
				orderData: {}, // 订单详细统计
				orderStatus: undefined, // Tab 的订单状态
				commentStatus: undefined, // Tab 的评论状态
					countDownItems: [],
				page: 1,
				limit: 20,
				lineBg: 'https://marathon.zznet.live/file/uploadPath/image/tabImg.png',
				list: [{
						name: '全部'
					},
					{
						name: '待付款'
					},
					{
						name: '待发货'
					},
					{
						name: '待收货'
					},
					{
						name: '待评价'
					}
				],
			};
		},
		
		computed: {
			...mapGetters(['isLogin', 'userInfo']),
			isData() {
				return Date.now(); // 返回当前时间戳
			},
		},

		onShow() {
			if (!this.isLogin) {
				toLogin();
				return;
			}

			this.loadend = false;
			this.page = 1;
			this.$set(this, 'orderList', []);
			this.getOrderData();
			this.getOrderList();
		},
		methods: {
			
			/**
			 * 生命周期函数--监听页面加载
			 */
			onLoad: function(options) {
				if (options.status) {
					this.orderStatus = options.status;
				}
			},
			/**
			 * 获取订单统计数据
			 */
			getOrderData: function() {
				OrderApi.getOrderCount().then(res => {
					this.$set(this, 'orderData', res.data);
				})
			},
			/**
			 * 切换类型
			 */
			onTabClick(item) {
				console.log(item)
				if (item.index == 1) {
					this.orderStatus = 0;
				} else if (item.index == 2) {
					this.orderStatus = 10;
				} else if (item.index == 2) {
					this.orderStatus = 20;
				} else if (item.index == 3) {
					this.orderStatus = 30;
					this.commentStatus = false;
				} else if (item.index == 0) {
					this.orderStatus = ''
				}
				this.loadend = false;
				this.page = 1;
				this.$set(this, 'orderList', []);
				this.getOrderList();
			},
			statusClick: function(status, commentStatus) {

				if (status === this.orderStatus) {
					return;
				}
				this.orderStatus = status;
				this.commentStatus = commentStatus;
				this.loadend = false;
				this.page = 1;
				this.$set(this, 'orderList', []);
				this.getOrderList();
			},
			/**
			 * 获取订单列表
			 */
			getOrderList: function() {
				if (this.loadend || this.loading) {
					return;
				}
				this.loading = true;
				this.loadTitle = "加载更多";
				OrderApi.getOrderPage({
					status: this.orderStatus,
					commentStatus: this.commentStatus,
					pageNo: this.page,
					pageSize: this.limit
				}).then(res => {
					const list = res.data.list || [];
					list.forEach(item => {
						item.typeName = item.type === 1 ? '秒杀' :
							item.type === 2 ? '砍价' :
							item.type === 3 ? '拼团' : undefined;
					});

					// 设置结束
					const loadend = list.length < this.limit;
					this.orderList = this.$util.SplitArray(list, this.orderList);
					this.$set(this, 'orderList', this.orderList);
					this.loadend = loadend;
					this.loading = false;
					this.loadTitle = loadend ? "我也是有底线的" : '加载更多';
					this.page = this.page + 1;
				}).catch(err => {
					this.loading = false;
					this.loadTitle = "加载更多";
				})
			},
			/**
			 * 打开支付组件
			 */
			goPay(id, payOrderId) {
				console.log(id)
				const returnUrl = encodeURIComponent('/pages/subCompetition/mail/orderPayStatus?order_id=' + id);
				uni.navigateTo({
					url: `/pages/subCompetition/mail/cashier?order_id=${payOrderId}&returnUrl=${returnUrl}`
				})
			},
			/**
			 * 去订单详情
			 */
			goOrderDetails: function(order_id) {
				if (!order_id) {
					return this.$util.Tips({
						title: '缺少订单号无法查看订单详情'
					});
				}
				// #ifdef MP
				uni.showLoading({
					title: '正在加载',
				})
				openOrderSubscribe().then(() => {
					uni.hideLoading();
					uni.navigateTo({
						url: '/page_home/user/order_details/index?order_id=' + order_id
					})
				}).catch(() => {
					uni.hideLoading();
				})
				// #endif
				// #ifndef MP
				uni.navigateTo({
					url: '/page_home/user/order_details/index?order_id=' + order_id
				})
				// #endif
			},
			/**
			 * 取消订单
			 */
			cancelOrder: function(index, order_id) {
				uni.showModal({
					title: '提示',
					content: '确认取消该订单?',
					success: res => {
						if (res.confirm) {
							OrderApi.cancelOrder(order_id).then(() => {
								this.$util.Tips({
									title: '取消成功'
								}, () => {
									this.orderList.splice(index, 1);
									this.$set(this, 'orderList', this.orderList);
									this.getOrderData();
								})
							}).catch((err) => {
								this.$util.Tips({
									title: err
								})
							});
						}
					}
				});
			},
			/**
			 * 删除订单
			 */
			delOrder: function(order_id, index) {
				uni.showModal({
					title: '提示',
					content: '确认删除该订单?',
					success: res => {
						if (res.confirm) {
							OrderApi.deleteOrder(order_id).then(() => {
								this.$util.Tips({
									title: '删除成功'
								}, () => {
									this.orderList.splice(index, 1);
									this.$set(this, 'orderList', this.orderList);
									this.getOrderData();
								})
							}).catch((err) => {
								this.$util.Tips({
									title: err
								})
							});
						}
					}
				});
			},
			//退款
			afterSaleTap(order) {
				console.log(order)
				if (order.items[0].afterSaleStatus === 0) {
					uni.navigateTo({
						url: "/page_home/user/goods_return/index?orderId=" + order.items[0].orderId +
							'&orderItemId=' + order.items[0].id
					})
					return;
				}
			},
			onChange(index,e) {
				this.$set(this.countDownItems, index, e);
				
			},
			fen2yuan(price) {
				return Util.fen2yuan(price)
			},
			formatDate: function(date) {
				return dayjs(date).format("YYYY-MM-DD HH:mm:ss");
			}
		},
		onReachBottom: function() {
			this.getOrderList();
		}
	}
</script>
<style scoped lang="scss">
	.my-order .header {
		height: 250rpx;
		padding: 0 30rpx;
	}

	.my-order .header .picTxt {
		height: 190rpx;
	}

	.my-order .header .picTxt .text {
		color: rgba(255, 255, 255, 0.8);
		font-size: 26rpx;
		font-family: 'Guildford Pro';
	}

	.my-order .header .picTxt .text .name {
		font-size: 34rpx;
		font-weight: bold;
		color: #fff;
		margin-bottom: 20rpx;
	}

	.my-order .header .picTxt .pictrue {
		width: 122rpx;
		height: 109rpx;
	}

	.my-order .header .picTxt .pictrue image {
		width: 100%;
		height: 100%;
	}

	.my-order .nav {
		background-color: #fff;
		margin: 20rpx;
		height: 100rpx;
		border-radius: 14rpx;

	}

	.my-order .nav .item {
		text-align: center;
		font-size: 26rpx;
		color: #282828;
		padding: 26rpx 0;
	}

	.my-order .nav .item.on {
		// font-weight: bold;
		// border-bottom: 5rpx solid #e93323;
		/* #ifdef H5 || MP */
		font-weight: bold;
		/* #endif */
		border-bottom: 5rpx solid $theme-color;
	}

	.my-order .nav .item .num {
		margin-top: 18rpx;
	}

	.my-order .list {
		width: 690rpx;
		margin: 14rpx auto 0 auto;
	}

	.my-order .list .item {
		background-color: #fff;
		border-radius: 14rpx;
		margin-bottom: 14rpx;
		position: relative;
	}

	.my-order .list .bgrightTitle {
		position: absolute;
		right: 0;
		top: 0;
		background-color: #FFD4E1;
		border-radius: 4rpx 8rpx 0rpx 30rpx;
		padding: 10rpx 20rpx;
		color: #EB3D74;
	}

	.my-order .list .bgyellow {
		background-color: #FFF6D8 !important;
		color: #F5961A !important;
	}

	.my-order .list .bgBlue {
		background-color: #DCE7FF !important;
		color: #2D71FF !important;
	}

	.my-order .list .item .title {
		height: 40rpx;
		padding: 0 24rpx;

		font-size: 28rpx;
		color: #282828;
	}

	.my-order .list .item .title .sign {
		font-size: 24rpx;
		padding: 0 13rpx;
		height: 36rpx;
		margin-right: 15rpx;
		border-radius: 18rpx;
	}

	.my-order .list .item .item-info {
		padding: 0 24rpx;
		margin-top: 22rpx;
	}

	.my-order .list .item .item-info .pictrue {
		width: 120rpx;
		height: 120rpx;
	}

	.my-order .list .item .item-info .pictrue image {
		width: 100%;
		height: 100%;
		border-radius: 14rpx;
	}

	.my-order .list .item .item-info .text {
		width: 500rpx;
		font-size: 28rpx;
		color: #999;
	}

	.my-order .list .item .item-info .text .name {
		width: 350rpx;
		color: #282828;
	}

	.my-order .list .item .item-info .text .money {
		text-align: right;
	}

	.my-order .list .item .totalPrice {
		font-size: 26rpx;
		color: #282828;
		text-align: right;
		margin: 0rpx 0 0 30rpx;
		padding: 0 30rpx 30rpx 0;
		border-bottom: 1rpx solid #eee;
	}

	.my-order .list .item .totalPrice .money {
		font-size: 28rpx;
		font-weight: bold;
	}

	.my-order .list .item .bottom {
		height: 107rpx;
		padding: 0 30rpx;
	}

	.my-order .list .item .bottom .bnt {
		width: 176rpx;
		height: 60rpx;
		text-align: center;
		line-height: 60rpx;
		color: #fff;
		border-radius: 15rpx;
		font-size: 27rpx;
	}

	.my-order .list .item .bottom .bgColors {
		border: 1rpx solid #EB3D74;
		color: #EB3D74;
	}

	.my-order .list .item .bottom .bnt.cancelBnt {
		border: 1rpx solid #ddd;
		color: #aaa;
	}

	.my-order .list .item .bottom .bnt~.bnt {
		margin-left: 17rpx;
	}

	.noCart {
		margin-top: 171rpx;
		padding-top: 0.1rpx;
	}

	.noCart .pictrue {
		width: 414rpx;
		height: 336rpx;
		margin: 78rpx auto 56rpx auto;
	}

	.noCart .pictrue image {
		width: 100%;
		height: 100%;
	}

	.btn_show {
		background-color: #FFF2F6;
		color: #EB3D74;
		padding: 10rpx 15rpx;
		text-align: center;
		border-radius: 10rpx;
	}
</style>