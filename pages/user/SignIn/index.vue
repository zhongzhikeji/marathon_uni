<template>
	<view>
		<view class="wrapper">
			<view>
				<u-navbar :safeAreaInsetTop="true" :placeholder='true' :fixed="false" bgColor="transparent" title="签到">

				</u-navbar>
			</view>
			<view class="ml10 mr10 pb10 mt20">
				<view class="flex space alcenter">
					<view class="flex alcenter">
						<u--image src="https://marathon.zznet.live/file/uploadPath/image/competition/nl.png"
							width="22px" height="28"></u--image>
						<text class="cl-eb ft28 ftw600 ml5">8544</text>
					</view>
					<view class="flex">
						<view class="boxBtn mr20">兑换奖励</view>
						<view class="boxBtn">去抽奖</view>
					</view>

				</view>
				<view class="flex alcenter mt5">
					<view class="ft16 ftw600 mr5">我的能量值</view>
					<view class="flex ft12 col">
						<text>查看明细</text>
						<u-icon name="arrow-right" size="14" color="#B8A8A8"></u-icon>
					</view>
				</view>
				<view class="col mt5">抵扣现金，换直通名额，抽奖福利</view>
			</view>
			<view class="centter">
				<view class="item1">
					<view>
						<view class="flex alcenter space">
							<view>
								<view class="flex">
									<view class="cl-placeholder">已签到：</view>
									<view>4天</view>
								</view>
								<view class="mt5">连续签到30天能量翻倍奖励</view>
							</view>
							<view class="flex">
								<view class="cl-placeholder">提醒我：</view>
								<view>
									<u-switch v-model="value" @change="change" size="16"
										activeColor="#31D0C8"></u-switch>
								</view>
							</view>
							<view class="btn" @click="onsignln">签到</view>
						</view>
						<view class="flex mt20">
							<view class="flex cloum ">
								<view class="flex alcenter">
									<!-- <u--image :showLoading="true"
										src="https://marathon.zznet.live/file/uploadPath/image/home/qiandao1.png"
										width="36px" height="36px"></u--image> -->
									<u--image :showLoading="true"
										src="https://marathon.zznet.live/file/uploadPath/image/home/qiandao2.png"
										width="36px" height="36px"></u--image>
									<view class="nborder"></view>
								</view>
								<view class="ml5 mt10 cl-eb ">1天</view>
							</view>
							<view class="flex cloum ">
								<view class="flex alcenter">
									<u--image :showLoading="true"
										src="https://marathon.zznet.live/file/uploadPath/image/home/qiandao1.png"
										width="36px" height="36px"></u--image>
									<view class="nborder"></view>
								</view>
								<view class="ml5 mt10">2天</view>
							</view>
							<view class="flex cloum ">
								<view class="flex alcenter">
									<u--image :showLoading="true"
										src="https://marathon.zznet.live/file/uploadPath/image/home/qiandao1.png"
										width="36px" height="36px"></u--image>
									<view class="nborder"></view>
								</view>
								<view class="ml5 mt10">3天</view>
							</view>
							<view class="flex cloum ">
								<view class="flex alcenter">
									<u--image :showLoading="true"
										src="https://marathon.zznet.live/file/uploadPath/image/home/qiandao1.png"
										width="36px" height="36px"></u--image>
									<view class="nborder"></view>
								</view>
								<view class="ml5 mt10">4天</view>
							</view>
							<view class="flex cloum ">
								<view class="flex alcenter">
									<u--image :showLoading="true"
										src="https://marathon.zznet.live/file/uploadPath/image/home/qiandao1.png"
										width="36px" height="36px"></u--image>
									<view class="nborder"></view>
								</view>
								<view class="ml5 mt10">5天</view>
							</view>
							<view class="flex cloum ">
								<view class="flex alcenter">
									<u--image :showLoading="true"
										src="https://marathon.zznet.live/file/uploadPath/image/home/qiandao1.png"
										width="36px" height="36px"></u--image>

								</view>
								<view class="ml5 mt10">6天</view>
							</view>
						</view>

					</view>
					<view></view>
					<view></view>
				</view>

				<view class="item1 mt20 mb20">
					<view class="flex alcenter space">
						<view>
							<view class="ft16">微信运动每日打卡</view>
							<view class="mt10  ">
								<text>获取今日步数: </text>
								<text class="cl-eb ftw600 ml5">29393 | 293能量值</text>
							</view>
						</view>
						<view class="wxdh">
							兑换能量值
						</view>
					</view>

				</view>
				<view class="item1">
					<view class="flex alcenter">
						<view class="shu"></view>
						<view class="ftw600">每日任务</view>
					</view>
					<view>
						<view class="flex alcenter space mt20">
							<view class="flex alcenter">
								<u--image src="https://marathon.zznet.live/file/uploadPath/image/home/s1.png"
									width="42px" height="42"></u--image>
								<view style="width: 360rpx;" class="ml15">
									<view class="ftw600">分享+20</view>
									<view class="ft12 cl-placeholder mt5">将小程序分享至你的微信好友可得20积分每天可分享一次</view>
								</view>
							</view>
							<view class="ywc">已完成</view>
						</view>
						<u-line margin="30rpx 0"></u-line>
						<view class="flex alcenter space mt20">
							<view class="flex alcenter">
								<u--image src="https://marathon.zznet.live/file/uploadPath/image/home/s2.png"
									width="42px" height="42"></u--image>
								<view style="width: 360rpx;" class="ml15">
									<view class="ftw600">邀请新用户</view>
									<view class="ft12 cl-placeholder mt5">将小程序分享至新用户注册成功可得
										50积分，上不封顶</view>
								</view>
							</view>
							<view class="qyq">去邀请</view>
						</view>
						<u-line margin="30rpx 0"></u-line>
						<view class="flex alcenter space mt20">
							<view class="flex alcenter">
								<u--image src="https://marathon.zznet.live/file/uploadPath/image/home/s3.png"
									width="42px" height="42"></u--image>
								<view style="width: 360rpx;" class="ml15">
									<view class="ftw600">评论+10</view>
									<view class="ft12 cl-placeholder mt5">每条评论可得10能量值</view>
								</view>
							</view>
							<view class="qyq">去评论</view>
						</view>
						<u-line margin="30rpx 0"></u-line>
						<view class="flex alcenter space mt20">
							<view class="flex alcenter">
								<u--image src="https://marathon.zznet.live/file/uploadPath/image/home/s4.png"
									width="42px" height="42"></u--image>
								<view style="width: 360rpx;" class="ml15">
									<view class="ftw600">领券+20</view>
									<view class="ft12 cl-placeholder mt5">在领券中心领取优惠券可得
										20积分每天领取一次10能量值</view>
								</view>
							</view>
							<view class="qyq">去领卷</view>
						</view>
						<u-line margin="30rpx 0"></u-line>
						<view class="flex alcenter space mt20">
							<view class="flex alcenter">
								<u--image src="https://marathon.zznet.live/file/uploadPath/image/home/s5.png"
									width="42px" height="42"></u--image>
								<view style="width: 360rpx;" class="ml15">
									<view class="ftw600">消费+20</view>
									<view class="ft12 cl-placeholder mt5">每笔消费支付成功可获得
对应不同能量值</view>
								</view>
							</view>
							<view class="qyq">去领卷</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<u-popup :show="show" mode="center" @close="close" @open="open" round='5'>
			<view class="u-popup-slot">
				<view class="mt15 mb15">
					<view class="flex cloum alcenter">
						<view class="ft18 ftw600">签到成功</view>
						<u--image :showLoading="true"
							src="https://marathon.zznet.live/file/uploadPath/image/home/liwu.png" width="180px"
							height="160px"></u--image>
						<view>恭喜您签到成功，获得兑换奖励和抽奖机会</view>
						<view class="flex around mt20" style="width: 100%;">
							<view class="choujiang">去抽奖</view>
							<view class="duihuan">兑换奖励</view>
						</view>
					</view>

				</view>

			</view>
		</u-popup>
	</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				value: '',
				show: false,
				list: [{
					url: ''
				}]
			}
		},
		methods: {
			change(e) {
				console.log('change', e);
			},
			onsignln() {
				this.show = true
			},
			open() {
				console.log('open');
			},
			close() {
				this.show = false
				// console.log('close');
			}
		}
	}
</script>

<style lang="scss" scoped>
	.wrapper {
		position: relative;
		background-image: url('https://marathon.zznet.live/file/uploadPath/image/home/signln.png');
		background-size: 100% 100%;
		height: 400rpx;

		.col {
			color: #B8A8A8;
		}

		.boxBtn {
			padding: 15rpx 25rpx;
			font-weight: bold;
			color: #fff;
			background: linear-gradient(180deg, #FF7E37 0%, #FB2D45 100%);
			box-shadow: 0rpx 0rpx 6rpx 2rpx rgba(252, 67, 53, 0.84);
			border-radius: 36rpx;
		}
	}

	.centter {
		position: absolute;
		width: 95%;
		margin-left: 2%;


		.item1 {
			border-radius: 12rpx;
			background-color: #fff;
			padding: 20rpx;

			.shu {
				width: 10rpx;
				height: 30rpx;
				background: #EB3D74;
				margin-right: 10rpx;
			}

			.ywc {
				border: 2rpx solid #F1F1F1;
				border-radius: 36rpx;
				padding: 10rpx 30rpx;
				color: #8F91A1;
			}

			.qyq {
				border: 2rpx solid #EB3D74;
				border-radius: 36rpx;
				padding: 10rpx 30rpx;
				color: #EB3D74;
			}

			.btn {
				color: #fff;
				padding: 12rpx 30rpx;
				background: linear-gradient(180deg, #EB3D74 0%, #F23BBB 100%);
				box-shadow: 0rpx 0rpx 12rpx 2rpx rgba(238, 60, 144, 0.31);
				border-radius: 36rpx 36rpx 36rpx 36rpx;
			}
		}
	}

	.nborder {
		border-bottom: 4px solid #F6F6F6;
		width: 50rpx;
		

	}

	.u-popup-slot {
		width: 684rpx;
		height: 602rpx;
	}

	.choujiang {
		width: 290rpx;
		height: 94rpx;
		background: #FF7E37;
		border-radius: 12rpx;
		border: 1rpx solid #D6D6D6;
		text-align: center;
		line-height: 94rpx;
		color: #fff;
		font-size: 30rpx;
		font-weight: bold;
	}

	.duihuan {
		width: 290rpx;
		height: 94rpx;
		background: #EB3D74;
		border-radius: 12rpx;
		box-shadow: 0rpx 0rpx 22rpx 2rpx rgba(180, 5, 60, 0.42);
		text-align: center;
		line-height: 94rpx;
		color: #fff;
		font-size: 30rpx;
		font-weight: bold;
	}

	.wxdh {
		border: 1rpx solid #EB3D74;
		border-radius: 36rpx;
		padding: 10rpx 20rpx;
		color: #EB3D74;
	}
</style>