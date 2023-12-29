<template>
	<view>
		<view class="header">
			<view class="flex alcenter center pt30 pb30 ft32">
				VIP
			</view>
		
		</view>
			<view class="text-center ft16 ftw600">会员权益</view>
			<view class="equity">
				<view class="flex alcenter center cloum pt30 pb30">
					<view><u-icon name="photo"></u-icon></view>
					<view class="mt20">积分兑换特权</view>
				</view>
			</view>
			<view class="equity">
				<view class="flex alcenter center cloum pt30 pb30">
					<view><u-icon name="photo"></u-icon></view>
					<view class="mt20">报名权益特权</view>
				</view>
			</view>
			<view class="equity">
				<view class="flex alcenter center cloum pt30 pb30">
					<view><u-icon name="photo"></u-icon></view>
					<view class="mt20">积分优惠劵特权</view>
				</view>
			</view>
			<view class="footer">
				<view style="width: 100%;">
					<u-button type="primary" >￥99/年 购买年费会员</u-button>
				</view>
			
			</view>
	</view>
</template>

<script>
</script>

<style lang="scss" scoped>
	.header{
		margin: 30rpx;
		background-color: #fff;
		border-radius: 15rpx;
	}
	.equity{
		margin: 30rpx;
		background-color: #fff;
	}
	.footer{
		position: fixed;
		bottom: 0;
		padding: 20rpx 30rpx;
	   width: 100%;
	}
</style>