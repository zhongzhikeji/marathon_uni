<template>
	<view>
		<view class='payment-status'>
      <!-- 支付状态 -->
			<view class='iconfont icons icon-duihao2 bg-color' v-if="order_pay_info.payStatus" />
			<view class='iconfont icons icon-iconfontguanbi' v-else />
			<view class='status'>{{order_pay_info.payStatus ? '订单支付成功':'订单支付失败'}}</view>

      <!-- 基本信息 -->
      <view class='wrapper'>
				<view class='item acea-row row-between-wrapper'>
					<view>订单编号</view>
					<view class='itemCom'>{{order_pay_info.no}}</view>
				</view>
				<view class='item acea-row row-between-wrapper'>
					<view>下单时间</view>
					<view class='itemCom'>{{ order_pay_info.createTime ? formatDate(order_pay_info.createTime) : '-' }}</view>
				</view>
				<view class='item acea-row row-between-wrapper' v-if="order_pay_info.payStatus">
					<view>支付方式</view>
					<view class='itemCom'>{{ order_pay_info.payChannelName }}</view>
				</view>
				<view class='item acea-row row-between-wrapper'>
					<view>支付金额</view>
					<view class='itemCom'>{{ fen2yuan(order_pay_info.payPrice) }}</view>
				</view>
				<!-- 失败时加上这个 -->
				<view class='item acea-row row-between-wrapper' v-if="!order_pay_info.payStatus">
					<view>失败原因</view>
					<view class='itemCom' v-if="payResult === 'success'">获取支付结果失败，请稍后刷新</view> <!-- 一般情况下，是支付中心回调更新订单为已支付，存在延迟 -->
					<view class='itemCom' v-else-if="payResult === 'close'">支付已关闭</view>
					<view class='itemCom' v-else-if="payResult === 'cancel'">取消支付</view>
					<view class='itemCom' v-else>未知原因</view>
				</view>
			</view>

      <!-- 操作区 -->
			<view @tap="goOrderDetails">
				<button formType="submit" class='returnBnt bg-color' hover-class='none'>
          查看订单
        </button>
			</view>
      <!-- TODO 芋艿：拼团 -->
			<button @click="goPink(order_pay_info.pinkId)" class='returnBnt cart-color' formType="submit" hover-class='none'
              v-if="order_pay_info.pinkId && order_pay_info.payStatus">
        邀请好友参团
      </button>
			<button @click="goIndex" class='returnBnt cart-color' formType="submit" hover-class='none' v-else>
        返回首页
      </button>
    </view>
	</view>
</template>
<script>
  import * as OrderApi from '@/api/trade/order.js';
	import { openOrderSubscribe } from '@/utils/SubscribeMessage.js';
	import { toLogin } from '@/libs/login.js';
	import { mapGetters } from "vuex";
  import dayjs from '@/plugin/dayjs/dayjs.min.js';
  import * as Util from '@/utils/util.js';
	export default {
		data() {
			return {
				orderId: '',
				order_pay_info: {
					payStatus: true,
				},
				status: 0,
				payResult: ''
			};
		},
		computed: mapGetters(['isLogin']),
		watch:{
			isLogin:{
				handler:function(newV, oldV) {
					if (newV) {
						this.getOrderPayInfo();
					}
				},
				deep:true
			}
		},
		onLoad: function(options) {
      if (!this.isLogin) {
        toLogin();
        return
      }

      if (!options.order_id) {
        return this.$util.Tips({
          title: '缺少参数无法查看订单支付状态'
        }, {
          tab: 3,
          url: 1
        });
      }
      this.orderId = options.order_id;
      this.payResult = options.payResult;
      this.getOrderPayInfo();
		},
		methods: {
			/**
			 * 支付完成查询支付状态
			 */
			getOrderPayInfo: function() {
				uni.showLoading({
					title: '正在加载中'
				});
				OrderApi.getOrderDetail(this.orderId).then(res => {
					uni.hideLoading();
          this.$set(this, 'order_pay_info', res.data);
					uni.setNavigationBarTitle({
						title: res.data.payStatus ? '支付成功' : '支付失败'
					});
				}).catch(err => {
					uni.hideLoading();
				});
			},
      /**
       * 去订单详情页面
       */
      goOrderDetails: function() {
		  	
        uni.showLoading({
          title: '正在加载',
        })
	uni.navigateTo({		  
	  url: '/page_home/user/order_details/index?order_id=' + this.orderId
	});
   //      openOrderSubscribe().then(res => {
   //        uni.hideLoading();
      
   //      }).catch(() => {
			// console.log('error')
   //        uni.hideLoading();
   //      });
   
    
      },
			/**
			 * 去首页关闭当前所有页面
			 */
			goIndex: function(e) {
				uni.switchTab({
					url: '/pages/index/index'
				});
			},
      /**
       * 去参团页面
       */
      goPink: function(id) {
				uni.navigateTo({
					url: '/pages/activity/goods_combination_status/index?id=' + id
				});
			},

      fen2yuan(price) {
        return Util.fen2yuan(price)
      },
      formatDate: function(date) {
        return dayjs(date).format("YYYY-MM-DD HH:mm:ss");
      }
		}
	}
</script>
<style>
	.icon-iconfontguanbi{
		background-color: #999 !important;
		text-shadow: none !important;
	}
	.payment-status {
		background-color: #fff;
		margin: 195rpx 30rpx 0 30rpx;
		border-radius: 10rpx;
		padding: 1rpx 0 28rpx 0;
	}
	.payment-status .icons {
		font-size: 70rpx;
		width: 140rpx;
		height: 140rpx;
		border-radius: 50%;
		color: #fff;
		text-align: center;
		line-height: 140rpx;
		text-shadow: 0px 4px 0px #df1e14;
		border: 6rpx solid #f5f5f5;
		margin: -76rpx auto 0 auto;
		background-color: #999;
	}

	.payment-status .iconfont {
		font-size: 70rpx;
		width: 140rpx;
		height: 140rpx;
		border-radius: 50%;
		color: #fff;
		text-align: center;
		line-height: 140rpx;
		text-shadow: 0px 4px 0px #df1e14;
		border: 6rpx solid #f5f5f5;
		margin: -76rpx auto 0 auto;
		background-color: #999;
	}

	.payment-status .iconfont.fail {
		text-shadow: 0px 4px 0px #7a7a7a;
	}

	.payment-status .status {
		font-size: 32rpx;
		font-weight: bold;
		text-align: center;
		margin: 25rpx 0 37rpx 0;
	}

	.payment-status .wrapper {
		border: 1rpx solid #eee;
		margin: 0 30rpx 47rpx 30rpx;
		padding: 35rpx 0;
		border-left: 0;
		border-right: 0;
	}

	.payment-status .wrapper .item {
		font-size: 28rpx;
		color: #282828;
	}

	.payment-status .wrapper .item~.item {
		margin-top: 20rpx;
	}

	.payment-status .wrapper .item .itemCom {
		color: #666;
	}

	.payment-status .returnBnt {
		width: 630rpx;
		height: 86rpx;
		border-radius: 50rpx;
		color: #fff;
		font-size: 30rpx;
		text-align: center;
		line-height: 86rpx;
		margin: 0 auto 20rpx auto;
	}
</style>
