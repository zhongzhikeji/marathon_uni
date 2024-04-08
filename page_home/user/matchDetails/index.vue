<template>
	<view class="matchDetail">
		<view class="bg-w radis">
			<view class=" pl10 pt10 pb10 pr10">
				<view class="flex mb20">
					<u--image width="190rpx" height="162rpx"
						:src="list.picUrl" radius='5'></u--image>
					<view style="width: 65%;" class="ft12 ml15">
						<view class="text-over mb5 ft16">{{list.spuName}}</view>
						<view>
							<view class="flex alcenter ml5 mb5" style="color: #8F91A1;">
								<view class="tradius tradiusColor"></view>

								{{formatDate(list.meetStartTime)}}
							</view>
						</view>
						<view class="flex alcenter ml5 mb5" style="color: #8F91A1;">
							<view class="tradius tradiusColorb"></view>
							<text>{{list.areaName}}</text>
						</view>
						<view class="flex ">
							<view v-for="(k,index) in list.keyword">
								<view class="tagList"
									:class="{blueBackground: index === 0,rBackground: index === 1,yBackground: index === 2}">
									{{k}}
								</view>

							</view>
						</view>
					</view>
				</view>
				<u-line></u-line>
				<view>
					<view class="flex alcenter mt10 mb10">
						<view class="shu"></view>
						<view class="ft16 ml5">参赛类目</view>
					</view>
					<view class="category">
						<view class="wrapper ft12">
							<view class="ft14 text-over" style="width: 60%;">{{list.skuName}}</view>
							<view class="mt5 mb5">
								<text class="cl-ae">报名时间：</text>
								<text>{{formatDate(list.joinTime)}}</text>
							</view>
							<view class="flex alcenter space">
								<view>
									<text class="cl-ae">报名方式：</text>
									<text>{{list.joinType==0?'待抽签':list.joinType==1?'抽签成功':list.joinType==2?'抽签失败':'免抽签'}}
									</text>
								</view>
								<view class="cl-eb ft16">
									<text class="ft12">￥</text>
									{{fen2yuan(list.joinPrice)}}/人
								</view>
							</view>
							<view class="btitle">报名中</view>
						</view>

					</view>
					<view class="flex ft12 mt10 cl-ae">
						<u-icon name='info-circle' color="#DCDCDC" :bold='true'></u-icon>
						<text class="ml10 ">缴费之后不支持退款</text>
					</view>
					<view class="flex ft12 mt8 cl-ae ">
						<u-icon name='info-circle' color="#DCDCDC" :bold='true'></u-icon>
						<text class="ml10 ">我已关注公众</text>
					</view>
					<view class="flex ft12 mt8 flexStart cl-ae">
						<u-icon name='info-circle' color="#DCDCDC" :bold='true'></u-icon>
						<text class="ml10 ">VIP高级用户可以积分兑换免费报名。在指定时间之前提前
							报名</text>
					</view>
				</view>
			</view>


		</view>
		<view class="bg-w radis mt10">
			<view class="pl10 pr10 pb10 pt10">
				<view>
					<view class="flex alcenter mt10 mb10">
						<view class="shu"></view>
						<view class="ft16 ml5">参赛选手</view>
					</view>
				</view>
				<view class="infoBox" v-for="i in list.participatorItems">
					<view class="box">
						<view class="flex space alcenter cl-ae">
							<view>
								<view class="cl-default">{{i.name}}</view>
								<view class="ml10 mt5 ft12">{{i.idCard}}</view>
							</view>
							<view>详情></view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="bg-w radis mt10">
			<view class="pl10 pr10 pb10 pt20 ">
				<view class="flex space alcenter mb10">
					<view class="cl-ae">订单编号</view>
					<view class="flex">
						<view>{{list.orderNo}}</view>
						<view class="copy" @click="onCopy(list.orderNo)">复制</view>
					</view>

				</view>
				<view class="flex space alcenter mb10">
					<view class="cl-ae">下单时间</view>
					<view>2023-12-30 17:17:17</view>
				</view>
				<view class="flex space alcenter mb10">
					<view class="cl-ae">支付方式</view>
					<view>{{list.payChannelCode =='wx_lite'?'微信支付':''}}</view>
				</view>
				<view class="flex space alcenter">
					<view class="cl-ae">获得能量</view>
					<view>可获得 +{{list.givePoint}}点能量值</view>
				</view>
			</view>
		</view>
		<view class="bg-w radis mt10 pb10">
			<view class="pl10 pr10 pb10 pt20 ">
				<view class="flex space alcenter mb10">
					<view class="cl-ae">付款金额</view>
					<view>￥{{fen2yuan(list.totalPrice)}}</view>
				</view>
				<view class="flex space alcenter mb10">
					<view class="cl-ae">优惠抵扣</view>
					<view>-￥{{fen2yuan(list.couponPrice)}}</view>
				</view>
				<view class="flex space alcenter mb10">
					<view class="cl-ae">能量抵扣</view>
					<view>-￥{{fen2yuan(list.pointPrice)}}</view>
				</view>
				<view class="flex end alcenter">
					<view class="cl-ae">应付金额:</view>
					<view class="cl-eb ft16 ftw600">
						<text class="ft12">￥</text>
						{{fen2yuan(list.payPrice)}}
					</view>
				</view>
			</view>
		</view>
		<view style="height: 110px;"></view>
		<view class="footer">
			<view class="wrapper">
				<view class="item">客服</view>
				<view class="item">常见问题</view>
				<view class="item" @click="onCancel" v-show="list.orderStatus == 2">取消订单</view>
				<view class="item" v-show="list.orderStatus == 2">申请退款</view>
			</view>
		</view>
	</view>
</template>

<script>
	import * as Api from '@/api/competition/list.js';
	import dayjs from '@/plugin/dayjs/dayjs.min.js';
	import * as Util from '@/utils/util.js';
	export default {
		data() {
			return {
				keyword: ['标签1', '标签2', '标签3'],
				id: '',
				list: {}
			}
		},
		onLoad(e) {
			if (e.id) {
				this.id = e.id
				this.getDedailList()
			}

		},
		methods: {
			getDedailList() {
				Api.get_Detail(this.id).then(res => {
					console.log(res)
					this.list = res.data
				})
			},
			onCancel() {
				Api.deleteCancel(this.id).then(res => {
					console.log(res)

				}).catch(err => {
					this.$util.Tips({
						title: err
					})
				})
			},
			onCopy(data) {
				uni.setClipboardData({
					data,
					success: () => {
						uni.getClipboardData({
							success: (res) => {
								uni.showToast({
									title: "复制成功",
								});
							}
						})
					}
				})
			},
			formatDate(date) {

				return dayjs(date).format("YYYY-MM-DD");
			},
			fen2yuan(price) {
				return Util.fen2yuan(price)
			},
		}

	}
</script>

<style lang="scss" scoped>
	.matchDetail {
		margin: 20rpx;

		.tradius {
			width: 8rpx;
			height: 8rpx;
			border-radius: 50%;
			margin-right: 16rpx;

		}

		.shu {
			width: 10rpx;
			height: 30rpx;
			background: #EB3D74;
		}

		.tradiusColor {
			background: #EB3D74;
		}

		.tradiusColorb {
			background: #2D71FF;
		}

		.tagList {
			font-size: 24rpx;

			padding: 10rpx 12rpx;
			margin-right: 10rpx;
			border-radius: 8rpx;
		}

		.blueBackground {
			background-color: #E1F9FF;
			color: #19C9F6;
		}

		.rBackground {
			background-color: #FFDCE7;
			color: #EB3D74;
		}

		.yBackground {
			background-color: #FFF6D9;
			color: #F4A70E;
		}

		.category {
			position: relative;
			border: 1px solid #EBEBEB;
			border-radius: 20rpx;

			.wrapper {

				margin: 20rpx;
			}

			.btitle {
				position: absolute;
				right: -1px;
				top: -1px;
				height: 64rpx;
				width: 150rpx;
				line-height: 64rpx;
				text-align: center;
				border-radius: 4rpx 8rpx 0rpx 30rpx;
				font-weight: bold;
				background-color: #F6F6F6;
				color: #9E9E9E;
				background-color: #E5FFFB;
				color: #4ED7C2;
			}
		}

		.infoBox {
			border: 1px solid #EBEBEB;
			border-radius: 20rpx;
			margin-bottom: 20rpx;

			.box {
				margin: 20rpx;
			}
		}

		.copy {
			width: 62rpx;
			height: 40rpx;
			line-height: 34rpx;
			font-size: 24rpx;
			text-align: center;
			background: #FFFFFF;
			border-radius: 8rpx 8rpx 8rpx 8rpx;
			border: 1rpx solid #2D71FF;
			color: #2D71FF;
			margin-left: 20rpx;
		}

		.footer {
			position: fixed;
			bottom: 0;
			left: 0;
			background: #FFFFFF;
			box-shadow: 0rpx -6rpx 40rpx 2rpx rgba(0, 0, 0, 0.1);
			border-radius: 34rpx 34rpx 0rpx 0rpx;
			width: 100%;
			height: 188rpx;

			.wrapper {
				margin: 42rpx 20rpx 60rpx 20rpx;
				display: flex;
				justify-content: flex-end;

				.item {
					width: 160rpx;
					height: 82rpx;
					margin: 0 20rpx;
					text-align: center;
					line-height: 82rpx;
					background: rgba(245, 194, 26, 0);
					border-radius: 12rpx 12rpx 12rpx 12rpx;
					color: #5D5F74;
					border: 1rpx solid #EBEBEB;
				}

			}
		}
	}
</style>