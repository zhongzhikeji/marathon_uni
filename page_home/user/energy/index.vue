<template>
	<view class="energy">
		<u-navbar bgColor='transparent' title="我的能量" :safeAreaInsetTop="true" :placeholder='true' :fixed="false"
			:autoBack="true">
				</u-navbar>
				<view class="bg-w mt10">
					<view class="pt10 pl10 pr10 pb10">
						<view class="bg">
							<view class="flex cloum  h-full alcenter cl-w">
								<view class="flex alcenter mt10">
									<u--image :showLoading="true"
									src="https://runplus-marathon.oss-cn-hangzhou.aliyuncs.com/shandian.png" width="30rpx"
										height="38rpx"></u--image>
										<view class="ft36 ftw600 ml5">8544</view>
								</view>
								<view>我的能量值</view>
								<view class="mt10">抵扣现金，换直通名额，抽奖福利</view>
							</view>
						</view>
						<view class="bg-f8 mt20 pt10 pb10">
							<view class="ml10 mr10 flex space alcenter">
								<view>本月</view>
								<view class="flex alcenter">
									<view class="mr10">
										获得：
										<text class="cl-eb">248</text>
									</view>
									<view>
										扣除：
										<text class="cl-eb">2300</text>
									</view>
								</view>
							</view>
						
						</view>
						<view class="mt20">
							<view v-for="i in 4">
								<view class="flex space alcenter mb10">
									<view>
									<view class="ftw600">每日签到</view>
									<view class="cl-partner">2023-06-28 12:17:49</view>
									</view>
									<view class="cl-eb">+2</view>
								</view>
							</view>
						
						</view>
					</view>
				</view>
	</view>
</template>

<script>
</script>

<style lang="scss" scoped>
.energy{
	.bg{
		background-image: url('https://runplus-marathon.oss-cn-hangzhou.aliyuncs.com/nengliangBg.png');
		background-size: 100% 100%;
		height: 256rpx;
	}
}
</style>