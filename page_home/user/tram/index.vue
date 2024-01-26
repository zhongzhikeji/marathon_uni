<template>
	<view>
	  <view class="ml10 mr10 mt15">
		  <view class="info">
			  <view class="flex alcenter around pt20 pb15">
				  <view class="flex cloum alcenter">
					  <view class="ft16 ftw600 mb10">34</view>
					  <view>团队人数</view>
				  </view>
				 <view class="flex cloum alcenter">
					  <view  class="ft16 ftw600 mb10">3434.98</view>
					  <view>佣金收益</view>
				  </view>
			  </view>
			  <view class="item">
				 <view class="flex alcenter around pt15 pb15">
					 <u-icon label="团队介绍" size="25" name="list-dot"></u-icon>
					 <u-line direction="col" length="40rpx"></u-line>
					 <u-icon label="邀请成员" size="25" name="list-dot"></u-icon>
				 </view> 
			  </view>
		  </view>
		  <view class="mt20">
			   <view class="flex alcenter space ml10 mr10 mb10" v-for="i in 4">
				   <view>
					   <view>2023-07-23</view>
					   <view>分销用户名称</view>
				   </view>
				   <view>
					   <view>分销佣金</view>
					   <view>总 13.23</view>
				   </view>
			   </view>
		  </view>
	  </view>
	</view>
</template>

<script>
</script>

<style lang="scss" scoped>

	.info{
		background-color: #eee;
		border-radius: 20rpx;
			padding-bottom: 30rpx;
		.item{
			background-color: #fff;
			border-radius:15rpx;
			margin: 0 20rpx;
		
		}
	}
</style>