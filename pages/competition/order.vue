<template>
	<view>
		<u-navbar :autoBack="true" :safeAreaInsetTop="true" :placeholder='true' :fixed="false" bgColor="transparent"
			title="信息确认">

		</u-navbar>
		<view class="ml10 mr10">
			<view class="flex space pt10 pb10 bg-w mt10 mb10 pl10 pr10" style="border-radius: 10rpx;">
				<view class="outTime">
					<view class="stepn">1</view>
					<view class="ft14" >
						<view>阅读</view>
						<view>规程</view>
					</view>

				</view>
				<view class="outTime">
					<view class="stepn">2</view>
					<view class="ft14">
						<view>参赛</view>
						<view>项目</view>
					</view>

				</view>
				<view class="outTime">
					<view class="stepn">3</view>
					<view class="ft14">
						<view>参赛</view>
						<view>信息</view>

					</view>
				</view>
				<view class="outTime">
					<view class="step">4</view>
					<view class="ft14 cl-eb">

						<view>信息</view>
						<view>确认</view>
					</view>

				</view>
				<view class="outTime">
					<view class="stepn">5</view>
					<view class="ft14">
						<view class="text-center">缴费</view>
						<view>等待抽签</view>

					</view>

				</view>
				<view class="outTime">
					<view class="stepn">6</view>
					<view class="ft14">
						<view>报名</view>
						<view>成功</view>
					</view>

				</view>
			</view>
			<view class="pt10 bg-w radis pl10 pr10 pb30">
				<view>
					<view class=" pt15 pb15 flex  ">
						<view>
							<u--image radius='5' :src="src" width="95px" height="81px"></u--image>
						</view>
						<view class="ml10 flex cloum space">
							<view class="ft14 ftw600">2023 西安日出女子跑-鼓浪岛
							</view>

							<view class="ft12 cl-ae">参赛人数：
								<text class="cl-default">
									{{246}}人
								</text>
							</view>
							<view class="ft16 flex mt2 ftw600" style="color: #EB3D74;">
								￥912.00/人
							</view>
						</view>

					</view>
					<u-line></u-line>
					<view class="mt10 flex  space mb10 ml10 mr10">
						<view>
							<view class="flex alcenter">
								<u--image src="https://marathon.zznet.live/file/uploadPath/image/competition/nl.png"
									width="16px" height="20px"></u--image>
								<view class="ml5 mr5 ftw600">能量抵扣</view>
								<view class="tab_hy">会员专享</view>
							</view>
							<view class="cl-placeholder mt10 ft14">可用2000点能量值抵扣2块钱</view>
						</view>
						<u-checkbox-group v-model="checkboxValue7" @change="checkboxChange" iconPlacement="right">
							<u-checkbox v-for="(item, index) in checkboxList7" :key="index" :name="item.disabled"
								shape='circle' activeColor='#EB3D74'>
							</u-checkbox>
						</u-checkbox-group>
					</view>
					<u-line></u-line>
					<view	>
						<view class='flex'>
							<view>邀请码报名</view>
							<view class="cl-placeholder ml20">使用邀请码报名不需要抽签</view>
						</view>
						<view  class="mt10">
							  <u--input
							    placeholder="请输入内容"
							    border="surround"
							    v-model="value"
							    @change="change"
							  ></u--input>
						</view>
					</view>
					<u-line></u-line>
					<view class="mt20">
						<view class="flex end">
							<view>小计：</view>
							<view class="cl-eb ftw600">￥912.00</view>
						</view>
					
					</view>
				</view>

			</view>


			<view class="bg-w mt20">
				<view class="ml20 mr20 pb20 pt20">
					<view class="flex alcenter">
						<view class="lhder"></view>
						<view class="ft16 ftw600">支付方式</view>
					</view>
					<view class="pb20 pt10">
						<view class="mt10 flex  space mb10">
							<view class="flex alcenter">
							<u--image src="https://marathon.zznet.live/file/uploadPath/image/competition/wx.png"
								width="19px" height="18px"></u--image>
							<view class="ml10">微信支付</view>
							</view>
							<u-checkbox-group v-model="checkboxValue7" @change="checkboxChange" iconPlacement="right">
								<u-checkbox v-for="(item, index) in checkboxList7" :key="index" :name="item.disabled"
									shape='circle' activeColor='#EB3D74'>
								</u-checkbox>
							</u-checkbox-group>
						</view>
					</view>
					<u-line></u-line>
					<view class="mt20">
					<view class="flex alcenter ft12">
						<u--image src="https://marathon.zznet.live/file/uploadPath/image/competition/th.png"
							width="12px" height="12px"></u--image>
							<view class="ml5">请在<text class="cl-eb ftw600">30分钟内</text>完成支付，否则订单自动取消</view>
					</view>	
					<view class="flex mt10 ft12">
						<u--image src="https://marathon.zznet.live/file/uploadPath/image/competition/th.png"
							width="12px" height="12px" style="margin-top: 5px;"></u--image>
							<view class="ml5 cl-eb ftw600">由于比赛报名属于竞赛性质，非普通商品，具有时效性特征，一旦完成支付，不支持退款</view>
					</view>	
					<view class="flex alcenter mt10 ft12">
						<u--image src="https://marathon.zznet.live/file/uploadPath/image/competition/th.png"
							width="12px" height="12px"></u--image>
							<view class="ml5">缴费之后不支持退款</view>
					</view>	
					<view class="flex alcenter mt10 ft12">
						<u--image src="https://marathon.zznet.live/file/uploadPath/image/competition/th.png"
							width="12px" height="12px"></u--image>
							<view class="ml5">我已关注公众</view>
					</view>	
					</view>
				
				</view>

			</view>

		</view>







		<view class="footer">

			<view class=" flex alcenter space">
				<view class="flex ml10">
					<view class="ft14">总计：</view>
					<view style="color:#F21A6F">￥200</view>
				</view>

				<view class="mr10">
					<u-button @click="$u.route('/pages/competition/orderConfi')" :customStyle='foterStyle'
						color='#EB3D74' style="font-size: 16px;color:#fff;font-weight: bold;"
						size='large'>去支付</u-button>
				</view>
			</view>
		</view>
		<u-gap height="50"></u-gap>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				src: 'https://cdn.uviewui.com/uview/album/1.jpg',
				foterStyle: {
					width: '400rpx',
					
				
				},
				value:'',
				checkboxList7: [{

						disabled: false
					}

				],
				checkboxValue7: [],
			}
		},
		onLoad() {

		},
		methods: {
			checkboxChange(n) {
				console.log('change', n);
			},
			   change(e) {
			          console.log('change', e);
			        }
		}
	}
</script>

<style lang="scss" scoped>
	page {
		background-color: #fff;
	}

	.category {
		background-color: #FFEFF5;

		margin-top: 30rpx;
		border-radius: 6px;
		box-shadow: 0px 4px 3px 2px #E5E5E5;

		.tag {
			color: #fff;
			padding: 10rpx 30rpx;
			background-color: #F98CB6;
			font-size: 24rpx;
			margin-left: 40rpx;

		}
	}

	.player {
		background-color: #EFF6FF;
		margin-top: 40rpx;
		box-shadow: 0px 4px 3px 2px #E5E5E5;
	}

	.order {
		width: 24%;
		background-color: #fff;
		box-shadow: 0px 4px 3px 0px #E5E5E5;
		border-radius: 5px;
	}

	.footer {
		position: fixed;
		bottom: 0rpx;
		background-color: #fff;
		padding: 30rpx 0 20rpx 0;
		width: 100%;
		border-top-left-radius: 34rpx;
		border-top-right-radius: 34rpx;
	}

	.outTime {
		margin: 0 3px;
		display: flex;
		flex-direction: column;
		align-items: center;
		font-size: 24rpx;

		.step {
			width: 60rpx;
			height: 60rpx;
			background-color: #EB3D74;
			border-radius: 50%;
			text-align: center;
			color: #fff;
			line-height: 60rpx;
			margin-bottom: 10rpx;
		}

		.stepn {
			width: 60rpx;
			height: 60rpx;
			background-color: #E9E9E9;
			border-radius: 50%;
			text-align: center;
			color: #000;
			line-height: 60rpx;
			margin-bottom: 10rpx;
		}
	}

	.tab_hy {
		background-color: #FFF2E5;
		color: #D17E2C;
		font-size: 24rpx;
		padding: 10rpx;
		border-radius: 10rpx 12rpx;
	}

	.lhder {
		width: 10rpx;
		height: 30rpx;
		background: #EB3D74;
		margin-right: 12rpx;
	}
</style>