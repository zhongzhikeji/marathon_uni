<template>
	<view class="matchOrder">
		<u-navbar bgColor='transparent' title="赛事订单" :safeAreaInsetTop="true" :placeholder='true' :fixed="false"
			:autoBack="true">
				</u-navbar>
		<mescroll-body @init="mescrollInit" @down="downCallback" @up="upCallback">
		<view class="wrapper" v-for="(item,index) in data" :key='item.orderId'>
			<view class="content" @click.stop="$u.route(`page_home/user/matchDetails/index?id=${item.orderId}`)">
				<view class="flex " >
					<u--image :showLoading="true" :src="item.picUrl" width="190rpx" height="162rpx"></u--image>
					<view class="ml10" style="width: 50%;">
						<view class="text-over">{{item.spuName}}</view>
						<view class="flex alcenter ft12 mt5" style="color: #8F91A1;">
							<view class="tradius tradiusColor"></view>
							{{formatDate(item.meetStartTime)}}
						</view>
						<view class="flex alcenter ft12 mt2 mb4" style="color: #8F91A1;">
							<view class="tradius tradiusColorb"></view>
							{{item.areaName}}
						</view>
						<view style="color: #8F91A1;">人数：{{item.memberCount}}人</view>
					</view>
					<view class="btitle" :class="{btitle1:item.orderStatus ==1,btitle2:item.orderStatus ==8,
								btitle1:item.orderStatus ==5
								}">{{getStatus(item.orderStatus).label}}</view>

				</view>
				<view class="mt10 flex space alcenter mb10">
					<view class="flex">
						<view class="tag" v-show="item.useCoupon">优惠劵</view>
						<view class="tag ml10" v-show="item.usePoint">积分</view>
					</view>
					<view class="flex">
						<view style="color: #5D5F74;">实付款：</view>
						<view class="cl-eb"><text class="ft12">￥</text>{{fen2yuan(item.payPrice)}}</view>
					</view>
				</view>
			
				<view class="flex alcenter space mt10" v-if="item.orderStatus ==1">
					<view class="ft12 flex alcenter">
						<view>付款倒计时：</view>

						<u-count-down ref="countDown" :time="item.expireTime>isData?item.expireTime-isData:0"
							format="DD:HH:mm:ss" autoStart @change="onChange(index, $event)">
							<view class="flex alcenter end" style="color:#EB3D74 ;">
								<text class="ft14 ftw600">{{countDownItems[index].minutes }}&nbsp;分</text>
								<text class="ft14 ftw600">{{countDownItems[index].seconds }}&nbsp;秒</text>

							</view>
						</u-count-down>
					</view>

					<view>
						<u-button type="info" :plain="true" text="取消订单" :customStyle='customStyle'></u-button>
					</view>

					<view style="width: 156rpx;">
						<u-button @click="goPay(item)" color='#EB3D74' :plain="true" text="去付款"
							:customStyle='customStyle'></u-button>
					</view>
				</view>
				<view class="mt10" v-show="item.orderStatus==5">
					用户未中签，支付金额已原路退还
				</view>
				<view class="flex end mt10" v-show="item.orderStatus ==8">
					<view style="width: 156rpx;">
						<u-button type="info" :plain="true" text="助力" :customStyle='customStyle'></u-button>
					</view>

					<view class="ml10">
						<u-button color='#EB3D74' :plain="true" text="赛事助手" :customStyle='customStyle' @click="$u.route('/page_home/assistant/index')"></u-button>
					</view>
				</view>
			</view>


		</view>
		 </mescroll-body>
	</view>
</template>

<script>
	import * as Api from '@/api/competition/list.js';
	import MescrollMixin from "@/uni_modules/mescroll-uni/components/mescroll-uni/mescroll-mixins.js";
	import dayjs from '@/plugin/dayjs/dayjs.min.js';
	import * as Util from '@/utils/util.js';
	import * as PayOrderApi from '@/api/pay/order.js';
	export default {
		mixins: [MescrollMixin], // 使用mixin
		data() {
			return {
				data: [],
				countDownItems: [],
				orderId:''

			}
		},
		computed: {
			isData() {
				return Date.now(); // 返回当前时间戳
			}
		},
		onLoad() {
		},
		methods: {
			upCallback(page){
				let pageNum = page.num; // 页码, 默认从1开始
			    let pageSize = page.size; // 页长, 默认每页10条
					Api.getOrderPage(pageNum, pageSize).then(res => {
						let curPageData = res.data.list
						let curPageLen = curPageData.length; 
						let totalPage = res.data.total; 
						if(page.num == 1) this.data = [];
						this.data = this.data.concat(curPageData);
						this.mescroll.endByPage(curPageLen, totalPage); 
					})
			},
			formatDate(date) {

				return dayjs(date).format("YYYY-MM-DD");
			},
			fen2yuan(price) {
				return Util.fen2yuan(price)
			},
			onChange(index, e) {


				this.$set(this.countDownItems, index, e);

			},
			goPay(item) {
				uni.showLoading({
					title: '支付中'
				});
				console.log(item)
				this.orderId = item.orderId
				PayOrderApi.submitOrder({
					id: item.payOrderId,
					channelCode: 'wx_lite',
					returnUrl: 'http://localhost:8080/pages/subCompetition/competition/paySuccess?order_id=' +
						item.payOrderId,
					channelExtras: {
						// openid: "ockUAwIZ-0OeMZl9ogcZ4ILrGba0" // wx_pub 微信公众号支付的 openid
						// openid: "oLefc4g5GjKWHJjLjMSXB3wX0fD0" // wx_lite 微信小程序支付的 openid
						openid: this.$Cache.get('OPENID')
					}
				}).then(res => {
					this.handleSubmitOrderResult(res.data);
				}).catch(err => {
					uni.hideLoading();
					this.$util.Tips({
						title: err
					})
				})
			},
			handleSubmitOrderResult(data) {
				// 1. 如果已支付、或者已关闭，则直接跳转
				if (data.status === 10) {
					this.goReturnUrl('success');
					return;
				} else if (data.status === 20) {
					this.goReturnUrl('close');
					return;
				}

				// 2. 根据 displayMode 模式，进行对应的处理
				const displayMode = data.displayMode;
				const displayContent = data.displayContent
				// 2.1 如果返回的是 URL，则直接跳转
				if (displayMode === 'url') {
					window.location = displayContent;
					return;
				}
				this.handleSubmitOrderResultForWxLite(displayContent)
			},
			goReturnUrl(payResult) {
            	let returnUrl  =`/pages/subCompetition/competition/payResult?order_id=${this.orderId}`
				uni.reLaunch({
					url: returnUrl.indexOf('?') >= 0 ?
						returnUrl + '&payResult=' + payResult :
						returnUrl + '?payResult=' + payResult
				})
			},
			handleSubmitOrderResultForWxLite(displayContent) {
			  const payConfig = JSON.parse(displayContent);
			  uni.requestPayment({
			    timeStamp: payConfig.timeStamp,
			    nonceStr: payConfig.nonceStr,
			    package: payConfig.packageValue,
			    signType: payConfig.signType,
			    paySign: payConfig.paySign,
			    success: res => {
			      uni.hideLoading();
			      return this.$util.Tips({
			        title: '支付成功',
			        icon: 'success'
			      }, () => {
			        this.goReturnUrl('success');
			      });
			    },
			    fail: e => {
			      uni.hideLoading();
			      // 关闭支付的情况
			      if (e.errMsg === 'requestPayment:cancel'
			        || e.errMsg === 'requestPayment:fail cancel') {
			        return this.$util.Tips({
			          title: '取消支付'
			        });
			      }
			      return this.$util.Tips({
			        title: e.errMsg,
			        icon: 'error'
			      });
			    }
			  })
			},
			getStatus(status) {
				let arr = JSON.parse(this.$Cache.get('meet_order_status'))
				let result = arr.find(item => {
					return item.value == status
				})
				return result
			},
			getPayReturnUrl() {

				return 'http://localhost:8080/pages/subCompetition/competition/paySuccess?order_id=' + this.orderId;

			},
		}
	}
</script>

<style lang="scss" scoped>
	.u-button {
		border-radius: 20rpx;
	}

	.matchOrder {
	
		margin-left: 20rpx;
		margin-right: 20rpx;

		.wrapper {
			background-color: #fff;
			border-radius: 20rpx;
			position: relative;
			margin-bottom: 20rpx;

			.content {
				padding: 20rpx;

				.btitle {
					position: absolute;
					right: 0;
					top: 0;
					height: 64rpx;
					width: 150rpx;
					line-height: 64rpx;
					text-align: center;
					border-radius: 4rpx 8rpx 0rpx 30rpx;
					font-weight: bold;
					background-color: #F6F6F6;
					color: #9E9E9E;
				}

				.btitle1 {
					background-color: #F6F6F6;
					color: #9E9E9E;
				}

				.btitle2 {
					background-color: #E5FFFB;
					color: #4ED7C2;
				}

				.btitle3 {
					background-color: #f1f1f1;
					color: #363636;
				}

				.tradius {
					width: 8rpx;
					height: 8rpx;
					border-radius: 50%;
					margin-right: 16rpx;

				}

				.tradiusColor {
					background: #EB3D74;
				}

				.tradiusColorb {
					background: #2D71FF;
				}

				.tag {
					background-color: #FFF2F6;
					border-radius: 6rpx;
					padding: 15rpx;
					font-size: 24rpx;
					color: #EB3D74;
				}
			}
		}
	}
</style>