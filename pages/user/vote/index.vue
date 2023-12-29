<template>
	<view>
		<view class="ml10 mr10 mt10">
			<view class="pl10 pr10 pt15 pb15 bg-w">
		<u-image src="https://cdn.uviewui.com/uview/album/1.jpg" width="100%" height="200rpx"></u-image>
		    <view class="flex alcenter space">
				<view class="mt10">
					<view>参赛编号：345</view>
					<view class="mt5">获得票是：3446票</view>
				</view>
				<view style="width: 110rpx;" class="mr10">
					 <u-button size="mini"  color='#DA1984' style="color:#fff;height: 30px;" @click="$u.route('/pages/user/vote/details')">详情</u-button>
				</view>
			</view>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style>
</style>