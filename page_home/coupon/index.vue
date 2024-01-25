<template>
	<view>
		<view class="ft24 text-center mt20 mb30 ftw600">多张礼卷一起领</view>
		<view class="coupon">
			<view class="ft24">￥5</view>
			<view>
				<view>满6元使用</view>
				<view>有效期至 2023-03-32 12:23</view>
			</view>
			<view>
					<u-button type="error"  style="height: 60rpx;">领取</u-button>
			</view>
		</view>
		<view class="coupon">
			<view class="ft24">￥5</view>
			<view>
				<view>满6元使用</view>
				<view>有效期至 2023-03-32 12:23</view>
			</view>
			<view>
					<u-button type="error"  style="height: 60rpx;">领取</u-button>
			</view>
		</view>
		<view class="title">
			<u-divider text="会员专属"></u-divider>
		</view>
		<view class="coupon_mem">
			<view class="ft14">会员专属</view>
			<view class="flex space alcenter">
				<view>
					<view class="ft24">￥5</view>
				</view>
				
				<view>
					<view>满6元使用</view>
					<view>有效期至 2023-03-32 12:23</view>
				</view>
				<view>
						<u-button type="error"  style="height: 60rpx;">领取</u-button>
				</view>
			</view>
		
		</view>
		<view class="coupon_mem">
			<view class="ft14">会员专属</view>
			<view class="flex space alcenter">
				<view>
					<view class="ft24">￥5</view>
				</view>
				
				<view>
					<view>满6元使用</view>
					<view>有效期至 2023-03-32 12:23</view>
				</view>
				<view>
						<u-button type="error"  style="height: 60rpx;">领取</u-button>
				</view>
			</view>
		
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss" scoped>
	.coupon{
		margin: 40rpx;
		background-color: #fff;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 30rpx 20rpx;
	}
	.title{
		margin: 40rpx 15%;
	}
	.coupon_mem{
		margin: 20rpx 40rpx;
		background-color: #fff;
		padding: 20rpx 20rpx 40rpx 20rpx;
	}
</style>