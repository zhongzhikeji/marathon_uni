<template>
	<view>
		<view class="header">
			<view class="pt20 ml20 mr20 pb20">
				<view>可提金额（元）</view>
				<view class="ft28 pt15 ftw600">534.23</view>
				<view class="flex alcenter space">
					<view>待结算佣金124.23元</view>
					<view style="width: 170rpx;">
						<u-button type="primary" :customStyle='btnStyle'>提现</u-button>
					</view>
				</view>
			</view>
		</view>
		<view class="mt20 bg-w">
			<view  v-for="i in 4" style="border-bottom: 1px solid #eee;">
				<view class=" ml10 mr10 pt10 pb10 ">
					<view class="flex alcenter space">
							<view>分销佣金</view>
							<view>2023-07-23</view>
						
						</view>
					<view class="flex alcenter space mt5">
							<view>余额 13.23</view>
							<view>用户昵称 +13.23待结</view>
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
				btnStyle: {

				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.header {
		margin: 30rpx 20rpx;
		background-color: #fff;
		border-radius: 15rpx;
	}

	.u-button {
		height: 62rpx;
	}
</style>