<template>
	<view>
		<u-navbar bgColor='transparent' title="我的钱包" :safeAreaInsetTop="true" :placeholder='true' :fixed="false"
			:autoBack="true">
		</u-navbar>
		<view class="bg-w">
			<view class="ml10 mr10 pt10 pb10">
				<view class="purse_bg">
					<view class="flex around alcenter cl-w pt20">
						<view class="flex cloum alcenter">
							<view>佣金收益</view>
							<view class="ftw600 mt10">￥
								<text class="ft20">9612.00</text>
							</view>
						</view>
						<view class="flex">
							<view class="flex cloum ">
								<view class="flex alcenter">
									<view>团队人数</view>

								</view>
								<view class="ft20 mt10">612</view>
							</view>
							<view class="ml10">
								<u--image :showLoading="true"
									src="https://runplus-marathon.oss-cn-hangzhou.aliyuncs.com/weFx.png" width="56rpx"
									height="56rpx"></u--image>
							</view>
						</view>

					</view>

					<view class=" radis ml15 mr15 mt20 cl-w" style="background-color: #85C9FD;">
						<view class="flex alcenter around pt10 pb10">
							<view class="flex alcenter">
								<u--image :showLoading="true"
									src="https://runplus-marathon.oss-cn-hangzhou.aliyuncs.com/icon001.png"
									width="28rpx" height="25rpx"></u--image>
								<view class="ml5">团队介绍></view>
							</view>
							<view>|</view>
							<view class="flex alcenter">
								<u--image :showLoading="true"
									src="https://runplus-marathon.oss-cn-hangzhou.aliyuncs.com/icon002.png"
									width="25rpx" height="25rpx"></u--image>
								<view class="ml5">邀请成员></view>
							</view>
						</view>


					</view>
					<view>

                      
					</view>
				</view>
			
			<view class="mt20" v-for="(i,index) in 3">
				<view class="flex alcenter space">
					<view class="flex">
						<view><u-avatar src="https://cdn.uviewui.com/uview/album/3.jpg"></u-avatar></view>
						<view class="ml10">
							<view>刘志伟</view>
							<view class="mt5 cl-placeholder">2023-06-28</view>
						</view>
					</view>
					<view>
						<view class="ftw600">分销佣金</view>
						<view class="mt5">
							<text class="cl-placeholder">总:</text>
							<text class="cl-eb">￥230.00</text>
						</view>
					</view>
				</view>
				<view class="flex center alcenter mt10 cl-placeholder" v-show="!show" @click="show = !show">
					<view class="mr5">展开</view>
					<u-icon name="arrow-down" size="12" color="#ccc"></u-icon>
				</view>
				<view class="bg-f6 radis mt10" v-show="show">
					<view class="pt10 ml10 mr10 pb10">
						<view  class="flex alcenter space cl-placeholder pb10" v-for="i in 3">
							<view>2023-06-24</view>
							<view class="cl-eb">￥20.00</view>
						</view>
					</view>
					<view class="flex center alcenter cl-placeholder" @click="show = !show">
						<view class="mr5">收起</view>
						<u-icon name="arrow-up" size="12" color="#ccc"></u-icon>
					</view>
				</view>
				<view class="mt10">
						<u-line></u-line>
				</view>
				
			</view>
			</view>
		</view>

	</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				   show:false,
				btnStyle: {
              
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.purse_bg {
		background-image: url('https://runplus-marathon.oss-cn-hangzhou.aliyuncs.com/walletBg.png');
		background-size: 100% 100%;
		height: 318rpx;
	}

	.u-button {
		height: 62rpx;
	}
</style>